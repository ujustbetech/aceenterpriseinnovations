/********************************************************
*	      Project name: WBS_Creator					    *
*	      Project by: Nesabyte						    *
*	      Project for: McLean Innovations               * 
*	      DATE: Dec 2022						        *
********************************************************/
var setup_dept = "";

export function SetupDept(cat_restype_n){
    setup_dept = cat_restype_n;
    //console.log("setup_dept "+setup_dept);
}

export function SetupDeptArr(){
    //console.log("setup_dept "+setup_dept);
    return setup_dept;
}