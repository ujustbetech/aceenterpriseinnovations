/********************************************************
*	      Project name: WBS_Creator					    *
*	      Project by: Nesabyte						    *
*	      Project for: McLean Innovations               * 
*	      DATE: Dec 2022						        *
********************************************************/
var setup_cat = "";

export function SetupCat(cat_restype_n){
    setup_cat = cat_restype_n;
    //console.log("setup_cat "+setup_cat);
}

export function SetupCatArr(){ 
    //console.log("setup_cat "+setup_cat);
    return setup_cat;
}