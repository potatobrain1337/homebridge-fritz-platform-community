<p align="center">
    <img src="images/fb_logo.png" height="200">
</p>

# homebridge-fritz-platform-community (fork of homebridge-fritz-platform)

[![npm (upstream)](https://img.shields.io/npm/v/homebridge-fritz-platform.svg?label=npm%20(upstream)&style=flat-square)](https://www.npmjs.com/package/homebridge-fritz-platform) <!-- Upstream badge kept until forked npm package is published -->
[![npm downloads (upstream)](https://img.shields.io/npm/dt/homebridge-fritz-platform.svg?label=downloads%20(upstream)&style=flat-square)](https://www.npmjs.com/package/homebridge-fritz-platform)
[![GitHub last commit](https://img.shields.io/github/last-commit/potatobrain1337/homebridge-fritz-platform-community.svg?style=flat-square)](https://github.com/potatobrain1337/homebridge-fritz-platform-community)
[![Discord](https://img.shields.io/discord/432663330281226270?color=728ED5&logo=discord&label=discord)](https://discord.gg/kqNCe2D)

> Community fork maintained by **potatobrain1337**. Original project by **SeydX**. Published as `homebridge-fritz-platform-community` to keep the original package intact while adding Homebridge v2 compatibility. Until the forked npm package is published, install from source or use the tarball directly from this repository.

Contributions and bug reports are welcome — please use the GitHub issues and pull requests in this repository.


## Info

This plugin allows almost full control of **AVM** hardware like:

- **Fritz!Box**
  - Router status and switch functionality,
  - WLAN 2.4Ghz,
  - WLAN 5Ghz, 
  - WLAN Guest,
  - WPS,
  - DECT,
  - Answering Machine,
  - Deflection,
  - Device LED,
  - Device Lock,
  - Ring Lock,
  - Phonebook,
  - Alarm,
  - Wakeup,
  - DNS Server
  - Broadband
  - Reconnect
  - Child Lock
  - Fallback Internet
- **Fritz!Repeater**
  - Repeater status and switch functionality,
  - WLAN 2.4Ghz,
  - WLAN 5Ghz,
  - WLAN Guest,
  - WPS,
  - Device LED,
  - Device Lock
- **Fritz!Fon**
  - Callmonitor (with adjustable filter for incoming/outgoing numbers),
  - FakeGato support
- **Fritz!DECT Buttons, Telekom Wandtaster**
  - Support for buttons with 1/4 channels
  - Temperature sensor with FakeGato,
  - Humidity sensor with FakeGato,
  - FakeGato support
- **Fritz!DECT Outlets, Fritz!Powerline Outlets**
  - Switch/Outlet status and switch functionality,
  - Power meter,
  - Temperature sensor with FakeGato,
  - Telegram notification when device is in use/not in use
  - FakeGato support
- **Fritz!DECT Lights**
  - Light status and switch functionality,
  - Brightness adjustment,
  - Color adjustment,
  - Apple adaptive lighting
- **Fritz!DECT Thermostats, Comet!DECT Thermostats**
  - Thermostat current state, target state, current temperature and target temperature state and switch functionality,
  - Temperature sensor,
  - Humidity sensor with FakeGato,
  - Window sensor (for window open functionality)
  - Open Window detection (to trigger manually open window)
  - FakeGato support
- **Rollotron DECT 1213/Blind/Shutter**
  - Position adjustment/status
- **HAN-FUN sensors (e.g. Deutsche Telekom)**
  - Contact state,
  - FakeGato support
- **Presence**
  - Detect occupancy through wifi,
  - Detect occupancy through guest wifi,
  - Fakegato support
- **Watch Network**
  - Control devices if connected or disconnected from network
- **Telegram**
  - Receive custom messages for occupancy detection (presence), device detection (watch network), incoming/outgoing calls (callmonitor), alarm, router state and outlet usage

Any system capable of running [Homebridge](https://github.com/nfarina/homebridge/) can be used to run **homebridge-fritz-platform-community**. The only need is network access to the device or program in question.


## Changelog

See the [changelog](CHANGELOG.md) for changes between versions of this package.

## Security / Known Vulnerabilities

- `npm audit` reports issues in transitive dependencies of `@seydx/fritzbox` (e.g., `class-transformer`, `class-validator`, `crypto-js`, `xml2js`, `validator`). At the time of writing, no patched upstream versions are available and `@seydx/fritzbox` has no newer release.
- The plugin itself is not a web server; impact is limited to the Homebridge host. If you need a clean audit, pin a forked `@seydx/fritzbox` with upgraded dependencies or vendor a patched build.
- Until upstream is fixed, running `npm audit fix` in this project will not resolve these findings.

**<u>NOTE:</u>** Updating from **< v5.x** to **>= v5.x** will crash your homebridge, please **REMOVE** the old version first and check also the new [example-config.json](https://github.com/SeydX/homebridge-fritz-platform/blob/master/example/example-config.json) !



## Documentation

- [Supported HomeKit Apps](docs/Apps.md)
- [Tested Devices](docs/Supported.md)
- [Installation instruction](docs/Installation.md)
- [First Start](docs/FirtStart.md)
- [Configuring Callmonitor](docs/Callmonitor.md)
- <u>Examples</u>
   * [Example config.json](example/example-config.json)
   * [Multiple instances (for extended reboot)](example/MultipleInstances.md)
   * [Telegram Notification instructions](docs/Telegram.md)
- [Debugging](DEBUG.md)



## Contributing

You can contribute to this homebridge plugin in following ways:

- [Report issues](https://github.com/SeydX/homebridge-fritz-platform/issues) and help verify fixes as they are checked in.
- Review the [source code changes](https://github.com/SeydX/homebridge-fritz-platform/pulls).
- Contribute bug fixes.
- Contribute changes to extend the capabilities
- Pull requests are accepted.

This Plugin uses modules from others, see [CONTRIBUTING](https://github.com/SeydX/homebridge-fritz-platform/blob/master/CONTRIBUTING.md) for credits.


## Disclaimer

All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
