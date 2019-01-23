export const scene = document.getElementById("scene")!;
export const contextfactors = ["contextfactor-pre-pre", "contextfactor-pre", "contextfactor"].map(id => document.getElementById(id)!);
export const minorcontext = document.getElementById("minorcontext")!;

export const sceneSelect = <HTMLSelectElement>document.getElementById("scene-select")!;
export const contextfactorButtons =
    ["contextfactor-button-a", "contextfactor-button-b", "contextfactor-button-c"].map(id => <HTMLButtonElement>document.getElementById(id)!);
export const minorcontextButton = document.getElementById("minorcontext-button")!;

export const controllerState = document.getElementById("controller-state")!;
export const textInput = <HTMLInputElement>document.getElementById("text-input")!;
export const saveButton = document.getElementById("save")!;
export const loadButton = document.getElementById("load")!;
