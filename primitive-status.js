module.exports = function(RED) {
    function PrimitiveStatusNode(config) {
        RED.nodes.createNode(this,config);
        
        var node = this;
        
        node.on('input', function(msg) {
            let msg2 = {};
            let status = "";
            
            if (typeof msg.payload === "string") {
                status = "String";
            };

            if (typeof msg.payload === "number") {
                status = "Number";
            };

            if (typeof msg.payload === "bigint") {
                status = "BigInt";
            };

            if (typeof msg.payload === "boolean") {
                status = "Boolean";
            };

            if (typeof msg.payload === "object") {
                if (msg.payload !== null) {
                    if (!Array.isArray(msg.payload)) status = "Object";
                if (Array.isArray(msg.payload)) status = "Array";
                } else {
                    status = "Null";
                };
            };

            if (typeof msg.payload === "symbol") {
                status = "Symbol";
            };

            if ("payload" in msg) {
                node.status({ fill: "green", shape: "dot", text: status });
                msg2 = { "payload": status };
            } else {
                node.status({ fill: "red", shape: "dot", text: "Undefined" });
                msg2 = { "payload": "Undefined" };
            };
           
            // send msg's
            node.send([msg, msg2]);
        });
    };
    RED.nodes.registerType("primitive-status",PrimitiveStatusNode);
};