System.register(['angular2/src/facade/collection', 'angular2/src/facade/lang', 'angular2/src/facade/exceptions'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var collection_1, lang_1, exceptions_1;
    var Url, RootUrl, SEGMENT_RE, UrlParser, parser;
    function convertUrlParamsToArray(urlParams) {
        var paramsArray = [];
        if (lang_1.isBlank(urlParams)) {
            return [];
        }
        collection_1.StringMapWrapper.forEach(urlParams, function (value, key) { paramsArray.push((value === true) ? key : key + '=' + value); });
        return paramsArray;
    }
    exports_1("convertUrlParamsToArray", convertUrlParamsToArray);
    // Convert an object of url parameters into a string that can be used in an URL
    function serializeParams(urlParams, joiner) {
        if (joiner === void 0) { joiner = '&'; }
        return convertUrlParamsToArray(urlParams).join(joiner);
    }
    exports_1("serializeParams", serializeParams);
    function pathSegmentsToUrl(pathSegments) {
        var url = new Url(pathSegments[pathSegments.length - 1]);
        for (var i = pathSegments.length - 2; i >= 0; i -= 1) {
            url = new Url(pathSegments[i], url);
        }
        return url;
    }
    exports_1("pathSegmentsToUrl", pathSegmentsToUrl);
    function matchUrlSegment(str) {
        var match = lang_1.RegExpWrapper.firstMatch(SEGMENT_RE, str);
        return lang_1.isPresent(match) ? match[0] : '';
    }
    return {
        setters:[
            function (collection_1_1) {
                collection_1 = collection_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            },
            function (exceptions_1_1) {
                exceptions_1 = exceptions_1_1;
            }],
        execute: function() {
            /**
             * This class represents a parsed URL
             */
            Url = (function () {
                function Url(path, child, auxiliary, params) {
                    if (child === void 0) { child = null; }
                    if (auxiliary === void 0) { auxiliary = lang_1.CONST_EXPR([]); }
                    if (params === void 0) { params = lang_1.CONST_EXPR({}); }
                    this.path = path;
                    this.child = child;
                    this.auxiliary = auxiliary;
                    this.params = params;
                }
                Url.prototype.toString = function () {
                    return this.path + this._matrixParamsToString() + this._auxToString() + this._childString();
                };
                Url.prototype.segmentToString = function () { return this.path + this._matrixParamsToString(); };
                /** @internal */
                Url.prototype._auxToString = function () {
                    return this.auxiliary.length > 0 ?
                        ('(' + this.auxiliary.map(function (sibling) { return sibling.toString(); }).join('//') + ')') :
                        '';
                };
                Url.prototype._matrixParamsToString = function () {
                    var paramString = serializeParams(this.params, ';');
                    if (paramString.length > 0) {
                        return ';' + paramString;
                    }
                    return '';
                };
                /** @internal */
                Url.prototype._childString = function () { return lang_1.isPresent(this.child) ? ('/' + this.child.toString()) : ''; };
                return Url;
            }());
            exports_1("Url", Url);
            RootUrl = (function (_super) {
                __extends(RootUrl, _super);
                function RootUrl(path, child, auxiliary, params) {
                    if (child === void 0) { child = null; }
                    if (auxiliary === void 0) { auxiliary = lang_1.CONST_EXPR([]); }
                    if (params === void 0) { params = null; }
                    _super.call(this, path, child, auxiliary, params);
                }
                RootUrl.prototype.toString = function () {
                    return this.path + this._auxToString() + this._childString() + this._queryParamsToString();
                };
                RootUrl.prototype.segmentToString = function () { return this.path + this._queryParamsToString(); };
                RootUrl.prototype._queryParamsToString = function () {
                    if (lang_1.isBlank(this.params)) {
                        return '';
                    }
                    return '?' + serializeParams(this.params);
                };
                return RootUrl;
            }(Url));
            exports_1("RootUrl", RootUrl);
            SEGMENT_RE = lang_1.RegExpWrapper.create('^[^\\/\\(\\)\\?;=&#]+');
            UrlParser = (function () {
                function UrlParser() {
                }
                UrlParser.prototype.peekStartsWith = function (str) { return this._remaining.startsWith(str); };
                UrlParser.prototype.capture = function (str) {
                    if (!this._remaining.startsWith(str)) {
                        throw new exceptions_1.BaseException("Expected \"" + str + "\".");
                    }
                    this._remaining = this._remaining.substring(str.length);
                };
                UrlParser.prototype.parse = function (url) {
                    this._remaining = url;
                    if (url == '' || url == '/') {
                        return new Url('');
                    }
                    return this.parseRoot();
                };
                // segment + (aux segments) + (query params)
                UrlParser.prototype.parseRoot = function () {
                    if (this.peekStartsWith('/')) {
                        this.capture('/');
                    }
                    var path = matchUrlSegment(this._remaining);
                    this.capture(path);
                    var aux = [];
                    if (this.peekStartsWith('(')) {
                        aux = this.parseAuxiliaryRoutes();
                    }
                    if (this.peekStartsWith(';')) {
                        // TODO: should these params just be dropped?
                        this.parseMatrixParams();
                    }
                    var child = null;
                    if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
                        this.capture('/');
                        child = this.parseSegment();
                    }
                    var queryParams = null;
                    if (this.peekStartsWith('?')) {
                        queryParams = this.parseQueryParams();
                    }
                    return new RootUrl(path, child, aux, queryParams);
                };
                // segment + (matrix params) + (aux segments)
                UrlParser.prototype.parseSegment = function () {
                    if (this._remaining.length == 0) {
                        return null;
                    }
                    if (this.peekStartsWith('/')) {
                        this.capture('/');
                    }
                    var path = matchUrlSegment(this._remaining);
                    this.capture(path);
                    var matrixParams = null;
                    if (this.peekStartsWith(';')) {
                        matrixParams = this.parseMatrixParams();
                    }
                    var aux = [];
                    if (this.peekStartsWith('(')) {
                        aux = this.parseAuxiliaryRoutes();
                    }
                    var child = null;
                    if (this.peekStartsWith('/') && !this.peekStartsWith('//')) {
                        this.capture('/');
                        child = this.parseSegment();
                    }
                    return new Url(path, child, aux, matrixParams);
                };
                UrlParser.prototype.parseQueryParams = function () {
                    var params = {};
                    this.capture('?');
                    this.parseParam(params);
                    while (this._remaining.length > 0 && this.peekStartsWith('&')) {
                        this.capture('&');
                        this.parseParam(params);
                    }
                    return params;
                };
                UrlParser.prototype.parseMatrixParams = function () {
                    var params = {};
                    while (this._remaining.length > 0 && this.peekStartsWith(';')) {
                        this.capture(';');
                        this.parseParam(params);
                    }
                    return params;
                };
                UrlParser.prototype.parseParam = function (params) {
                    var key = matchUrlSegment(this._remaining);
                    if (lang_1.isBlank(key)) {
                        return;
                    }
                    this.capture(key);
                    var value = true;
                    if (this.peekStartsWith('=')) {
                        this.capture('=');
                        var valueMatch = matchUrlSegment(this._remaining);
                        if (lang_1.isPresent(valueMatch)) {
                            value = valueMatch;
                            this.capture(value);
                        }
                    }
                    params[key] = value;
                };
                UrlParser.prototype.parseAuxiliaryRoutes = function () {
                    var routes = [];
                    this.capture('(');
                    while (!this.peekStartsWith(')') && this._remaining.length > 0) {
                        routes.push(this.parseSegment());
                        if (this.peekStartsWith('//')) {
                            this.capture('//');
                        }
                    }
                    this.capture(')');
                    return routes;
                };
                return UrlParser;
            }());
            exports_1("UrlParser", UrlParser);
            exports_1("parser", parser = new UrlParser());
        }
    }
});
//# sourceMappingURL=url_parser.js.map