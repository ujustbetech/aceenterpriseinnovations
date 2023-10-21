/********************************************************
*	      Project name: WBS_Creator					    *
*	      Project by: Nesabyte						    *
*	      Project for: McLean Innovations               * 
*	      DATE: Feb 2023						        *
********************************************************/ 

var project_info_array = [];

// -------- Category -------- 
export function projectInfo_setArray(proj_array){
    project_info_array = proj_array
    //project_info_array = project_info_array.concat(proj_array)
    //console.log("[ project_info_array ] "+project_info_array)
    return project_info_array;
}

export function projectInfo_getArray(){
    return project_info_array;
}

/*export function projectInfo_resetArray(){
    project_info_array = [];
}*/