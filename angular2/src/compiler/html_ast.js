System.register(['angular2/src/facade/lang'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var lang_1;
    var HtmlTextAst, HtmlAttrAst, HtmlElementAst, HtmlCommentAst;
    function htmlVisitAll(visitor, asts, context) {
        if (context === void 0) { context = null; }
        var result = [];
        asts.forEach(function (ast) {
            var astResult = ast.visit(visitor, context);
            if (lang_1.isPresent(astResult)) {
                result.push(astResult);
            }
        });
        return result;
    }
    exports_1("htmlVisitAll", htmlVisitAll);
    return {
        setters:[
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            HtmlTextAst = (function () {
                function HtmlTextAst(value, sourceSpan) {
                    this.value = value;
                    this.sourceSpan = sourceSpan;
                }
                HtmlTextAst.prototype.visit = function (visitor, context) { return visitor.visitText(this, context); };
                return HtmlTextAst;
            }());
            exports_1("HtmlTextAst", HtmlTextAst);
            HtmlAttrAst = (function () {
                function HtmlAttrAst(name, value, sourceSpan) {
                    this.name = name;
                    this.value = value;
                    this.sourceSpan = sourceSpan;
                }
                HtmlAttrAst.prototype.visit = function (visitor, context) { return visitor.visitAttr(this, context); };
                return HtmlAttrAst;
            }());
            exports_1("HtmlAttrAst", HtmlAttrAst);
            HtmlElementAst = (function () {
                function HtmlElementAst(name, attrs, children, sourceSpan) {
                    this.name = name;
                    this.attrs = attrs;
                    this.children = children;
                    this.sourceSpan = sourceSpan;
                }
                HtmlElementAst.prototype.visit = function (visitor, context) { return visitor.visitElement(this, context); };
                return HtmlElementAst;
            }());
            exports_1("HtmlElementAst", HtmlElementAst);
            HtmlCommentAst = (function () {
                function HtmlCommentAst(value, sourceSpan) {
                    this.value = value;
                    this.sourceSpan = sourceSpan;
                }
                HtmlCommentAst.prototype.visit = function (visitor, context) { return visitor.visitComment(this, context); };
                return HtmlCommentAst;
            }());
            exports_1("HtmlCommentAst", HtmlCommentAst);
        }
    }
});
//# sourceMappingURL=html_ast.js.map