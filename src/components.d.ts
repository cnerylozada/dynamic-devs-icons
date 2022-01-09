/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IconSize, IconStroke } from "./enums";
export namespace Components {
    interface DdDataTable {
    }
    interface DdIcon {
        "name"?: string;
        "size"?: IconSize;
        "src"?: string;
        "stroke"?: IconStroke;
    }
    interface DdSvg {
        "name"?: string;
        "src"?: string;
        "type": string;
    }
}
declare global {
    interface HTMLDdDataTableElement extends Components.DdDataTable, HTMLStencilElement {
    }
    var HTMLDdDataTableElement: {
        prototype: HTMLDdDataTableElement;
        new (): HTMLDdDataTableElement;
    };
    interface HTMLDdIconElement extends Components.DdIcon, HTMLStencilElement {
    }
    var HTMLDdIconElement: {
        prototype: HTMLDdIconElement;
        new (): HTMLDdIconElement;
    };
    interface HTMLDdSvgElement extends Components.DdSvg, HTMLStencilElement {
    }
    var HTMLDdSvgElement: {
        prototype: HTMLDdSvgElement;
        new (): HTMLDdSvgElement;
    };
    interface HTMLElementTagNameMap {
        "dd-data-table": HTMLDdDataTableElement;
        "dd-icon": HTMLDdIconElement;
        "dd-svg": HTMLDdSvgElement;
    }
}
declare namespace LocalJSX {
    interface DdDataTable {
    }
    interface DdIcon {
        "name"?: string;
        "size"?: IconSize;
        "src"?: string;
        "stroke"?: IconStroke;
    }
    interface DdSvg {
        "name"?: string;
        "src"?: string;
        "type"?: string;
    }
    interface IntrinsicElements {
        "dd-data-table": DdDataTable;
        "dd-icon": DdIcon;
        "dd-svg": DdSvg;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dd-data-table": LocalJSX.DdDataTable & JSXBase.HTMLAttributes<HTMLDdDataTableElement>;
            "dd-icon": LocalJSX.DdIcon & JSXBase.HTMLAttributes<HTMLDdIconElement>;
            "dd-svg": LocalJSX.DdSvg & JSXBase.HTMLAttributes<HTMLDdSvgElement>;
        }
    }
}
