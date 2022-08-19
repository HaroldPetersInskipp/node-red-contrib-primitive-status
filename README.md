[![platform](https://img.shields.io/badge/platform-Node--RED-red)](https://nodered.org)
[![npm](https://img.shields.io/npm/v/node-red-contrib-primitive-status.svg)](https://www.npmjs.com/package/node-red-contrib-primitive-status)
[![downloads](https://img.shields.io/npm/dt/node-red-contrib-primitive-status.svg)](https://www.npmjs.com/package/node-red-contrib-primitive-status)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/HaroldPetersInskipp/node-red-contrib-/blob/main/LICENSE)

## node-red-contrib-primitive-status

A Node-RED node that displays the primitive type of <code>msg.payload</code> in the nodes status. Messages will pass through the first output, and the primitive type is returned as a string from the second output.


### Quick Start

Install with the built in <b>Node-RED Palette manager</b> or using npm:
```
npm install node-red-contrib-primitive-status
```

### Example

[<img src="/examples/example.png">](https://github.com/HaroldPetersInskipp/node-red-contrib-primitive-status/blob/main/examples/primitive-status.json)

### Help

This node requires no configuration, just place it between nodes to examine <code>msg.payload</code>'s type. The primitive type is also sent as a string to the second output.

### Bugs reports and feature requests

Please report any issues or feature requests at <a href="https://github.com/HaroldPetersInskipp/node-red-contrib-primitive-status/issues">GitHub</a>.
