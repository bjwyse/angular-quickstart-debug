export declare const NAMED_ENTITIES: any;
export declare enum HtmlTagContentType {
    RAW_TEXT = 0,
    ESCAPABLE_RAW_TEXT = 1,
    PARSABLE_DATA = 2,
}
export declare class HtmlTagDefinition {
    private closedByChildren;
    closedByParent: boolean;
    requiredParents: {
        [key: string]: boolean;
    };
    parentToAdd: string;
    implicitNamespacePrefix: string;
    contentType: HtmlTagContentType;
    isVoid: boolean;
    ignoreFirstLf: boolean;
    constructor({closedByChildren, requiredParents, implicitNamespacePrefix, contentType, closedByParent, isVoid, ignoreFirstLf}?: {
        closedByChildren?: string[];
        closedByParent?: boolean;
        requiredParents?: string[];
        implicitNamespacePrefix?: string;
        contentType?: HtmlTagContentType;
        isVoid?: boolean;
        ignoreFirstLf?: boolean;
    });
    requireExtraParent(currentParent: string): boolean;
    isClosedByChild(name: string): boolean;
}
export declare function getHtmlTagDefinition(tagName: string): HtmlTagDefinition;
export declare function splitNsName(elementName: string): string[];
export declare function getNsPrefix(elementName: string): string;
export declare function mergeNsAndName(prefix: string, localName: string): string;
