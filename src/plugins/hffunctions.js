/********************************************************
*	      Project name: WBS_Creator					              *
*	      Project by: Nesabyte						                *
*	      Project for: McLean Innovations                 * 
*	      DATE: Dec 2022						                      *
********************************************************/

import { FunctionPlugin } from "hyperformula";

// let's call the function plugin `CountHF`
export class SimpleModeFormula extends FunctionPlugin {
  hyper(ast, state) {
    return this.runFunction(ast.args, state, this.metadata("HYPER"), () => {
      return "HyperFormula".length;
    });
  }
}

SimpleModeFormula.implementedFunctions = {
  HYPER: {
    method: "hyper"
  }
};

export const SimpleModeFormulaTranslations = {
  enGB: {
    // in English, let's set the function's name to `HYPER`
    HYPER: "HYPER"
  }
};
