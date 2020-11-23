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
    interface HTMLElementTagNameMap {
        "dd-data-table": HTMLDdDataTableElement;
        "dd-icon": HTMLDdIconElement;
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
    interface IntrinsicElements {
        "dd-data-table": DdDataTable;
        "dd-icon": DdIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dd-data-table": LocalJSX.DdDataTable & JSXBase.HTMLAttributes<HTMLDdDataTableElement>;
            "dd-icon": LocalJSX.DdIcon & JSXBase.HTMLAttributes<HTMLDdIconElement>;
        }
    }
}
