const domParser = new DOMParser();

export function parse(string = "") {
    return domParser.parseFromString(string, "text/html").querySelector("body").children[0];
}