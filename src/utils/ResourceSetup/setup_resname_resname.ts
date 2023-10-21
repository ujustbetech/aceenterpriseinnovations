/********************************************************
*	      Project name: WBS_Creator					    *
*	      Project by: Nesabyte						    *
*	      Project for: McLean Innovations               * 
*	      DATE: Dec 2022						        *
********************************************************/
var setup_resname = "";

export function SetupResname(resname_resname_n){
    setup_resname = resname_resname_n;
    //console.log("setup_resname1 "+setup_resname);
}

export function SetupResnameArr(){
    //console.log("setup_resname2 "+setup_resname);
    return setup_resname;
}