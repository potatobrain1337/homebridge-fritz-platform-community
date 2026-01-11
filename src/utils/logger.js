'use strict';

class Logger {
  constructor() {
    this.log = console;

    this.debugMode = false;
    this.warnMode = true;
    this.errorMode = true;
    this.extendedErrorMode = true;

    this.offlineWarnThrottleMs = 5 * 60 * 1000;
    this.throttleCache = new Map();
  }

  configure(logger, config) {
    this.log = logger;

    this.debugMode = config.debug;
    this.warnMode = config.warn === undefined ? true : config.warn;
    this.errorMode = config.error === undefined ? true : config.error;
    this.extendedErrorMode = config.extendedError === undefined ? true : config.extendedError;

    let throttleMinutes =
      config &&
      config.options &&
      config.options.logging &&
      config.options.logging.offlineWarnThrottleMinutes !== undefined
        ? Number(config.options.logging.offlineWarnThrottleMinutes)
        : 5;

    if (!Number.isFinite(throttleMinutes) || throttleMinutes < 0) {
      throttleMinutes = 5;
    }

    this.offlineWarnThrottleMs = throttleMinutes > 0 ? throttleMinutes * 60 * 1000 : 0;
  }

  buildThrottleKey(message, accessoryName) {
    let messageKey = message;

    if (message instanceof Error) {
      messageKey = message.message;
    } else if (typeof message !== 'string') {
      try {
        messageKey = JSON.stringify(message);
      } catch (e) {
        messageKey = String(message);
      }
    }

    return `${accessoryName || ''}|${messageKey || ''}`;
  }

  formatMessage(message, accessoryName, mode) {
    let formatted = mode === 'debug' ? '[DEBUG] ' : '';

    if (accessoryName) {
      formatted += accessoryName + ': ';
    }

    if (message instanceof Error) {
      if (this.extendedErrorMode) {
        formatted = message;
      } else {
        formatted += message.message;
      }
    } else if (typeof message === 'object') {
      formatted += JSON.stringify(message);
    } else {
      formatted += message;
    }

    return formatted;
  }

  info(message, accessoryName) {
    this.log.info(this.formatMessage(message, accessoryName, 'info'));
  }

  warn(message, accessoryName) {
    if (this.warnMode) {
      this.log.warn(this.formatMessage(message, accessoryName, 'warn'));
    }
  }

  warnThrottled(message, accessoryName, throttleMs) {
    if (!this.warnMode) {
      return;
    }

    if (!throttleMs || throttleMs <= 0) {
      this.warn(message, accessoryName);
      return;
    }

    const key = this.buildThrottleKey(message, accessoryName);
    const now = Date.now();
    const last = this.throttleCache.get(key) || 0;

    if (now - last < throttleMs) {
      return;
    }

    this.throttleCache.set(key, now);
    this.warn(message, accessoryName);
  }

  warnDeviceOffline(accessoryName) {
    this.warnThrottled('Device offline!', accessoryName, this.offlineWarnThrottleMs);
  }

  error(message, accessoryName) {
    if (this.errorMode) {
      this.log.error(this.formatMessage(message, accessoryName, 'error'));
    }
  }

  debug(message, accessoryName) {
    if (this.debugMode) {
      this.log.info(this.formatMessage(message, accessoryName, 'debug'));
    }
  }
}

const logger = new Logger();
module.exports = logger;
