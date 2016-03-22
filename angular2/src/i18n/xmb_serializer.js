System.register(['angular2/src/facade/lang', './message'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lang_1, message_1;
    function serialize(messages) {
        var ms = messages.map(function (m) { return _serializeMessage(m); }).join("");
        return "<message-bundle>" + ms + "</message-bundle>";
    }
    exports_1("serialize", serialize);
    function _serializeMessage(m) {
        var desc = lang_1.isPresent(m.description) ? " desc='" + m.description + "'" : "";
        return "<msg id='" + message_1.id(m) + "'" + desc + ">" + m.content + "</msg>";
    }
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (message_1_1) {
                message_1 = message_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=xmb_serializer.js.map