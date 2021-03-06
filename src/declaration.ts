export const name = "inversify-commander-utils";

export const TYPE = {
    Group: Symbol.for(`${name}-Group`),
};

// @todo It is unused...
export interface IGroup {}

export interface IHandler {
    (): void;
}

export interface IGroupMetadata {
    name: string;
    target: any;
}

export type TGroupsMetadata = IGroupMetadata[];

export interface IOption {
    pattern: string;
    description?: string;
    validator?: Function;
}

export interface IActionMetadata {
    name: string;
    key: string;
    target: any;
    options?: IOption[];
    description?: string;
}

export type TActionsMetadata = IActionMetadata[];
