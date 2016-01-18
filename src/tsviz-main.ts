#! /usr/bin/env node

import * as tsviz from "./tsviz"; 

function main(args: string[]) {
    let switches = args.filter(a => a.indexOf("-") === 0);
    let nonSwitches = args.filter(a => a.indexOf("-") !== 0);
    
    if (nonSwitches.length < 1) {
        console.error(
            "Invalid number of arguments. Usage:\n" + 
            "  <switches> <sources filename/directory> <output.png>\n" +
            "Available switches:\n" +
            "  -dependencies: produces the modules' dependencies diagram");
        return;
    }
    
    let targetPath = nonSwitches.length > 0 ? nonSwitches[0] : "";
    let outputFilename = nonSwitches.length > 1 ? nonSwitches[1] : "diagram.png";

    let dependenciesOnly = switches.indexOf("-dependencies") >= 0; // dependencies or uml?
    tsviz.createGraph(targetPath, outputFilename, dependenciesOnly);
    console.log("done");
}

main(process.argv.slice(2));