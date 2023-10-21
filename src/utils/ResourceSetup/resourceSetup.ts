/********************************************************
*	      Project name: WBS_Creator					    *
*	      Project by: Nesabyte						    *
*	      Project for: McLean Innovations               * 
*	      DATE: Dec 2022						        *
********************************************************/ 
var complete_cat = [];
var complete_dept = [];
var complete_resname = [];
var complete_employee = [];
var complete_grade = [];
var complete_billrate = [];
var complete_P6RoleID = [];
var complete_P6ResID = [];

// -------- Category -------- 
export function complete_setCatArray(complete_catArr){
    complete_cat = complete_cat.concat(complete_catArr)
    return complete_cat;
}

export function complete_getCatArray(){
    return complete_cat;
}

export function complete_resetCatArray(){
    complete_cat = [];
}

// -------- Department -------- 
export function complete_setDeptArray(complete_deptArr){
    complete_dept = complete_dept.concat(complete_deptArr)
    return complete_dept;
}

export function complete_getDeptArray(){
    return complete_dept;
}

export function complete_resetDeptAArray(){
    complete_dept = [];
}

// -------- Name Resource -------- 
export function complete_setResNameArray(complete_resnameArr){
    complete_resname = complete_resname.concat(complete_resnameArr)
    return complete_resname;
}

export function complete_getResNameArray(){
    return complete_resname;
}

export function complete_resetResNamerray(){
    complete_resname = [];
}

// -------- Employee -------- 
export function complete_setEmployeeArray(complete_resempArr){
    complete_employee = complete_employee.concat(complete_resempArr)
    return complete_employee;
}

export function complete_getEmployeeArray(){
    return complete_employee;
}

export function complete_resetEmployeeArray(){
    complete_employee = [];
}

// -------- Grade -------- 
export function complete_setGradeArray(complete_resGradeArr){
    complete_grade = complete_grade.concat(complete_resGradeArr)
    return complete_grade;
}

export function complete_getGradeArray(){
    return complete_grade;
}

export function complete_resetGradeArray(){
    complete_grade = [];
}

// -------- BillRate -------- 
export function complete_setBillrateArray(complete_billrateArr){
    complete_billrate = complete_billrate.concat(complete_billrateArr)
    return complete_billrate;
}

export function complete_getBillrateArray(){
    return complete_billrate;
}

export function complete_resetBillrateArray(){
    complete_billrate = [];
}

// -------- P6 Role ID -------- 
export function complete_setP6RoleIDArray(complete_P6RoleArr){
    complete_P6RoleID = complete_P6RoleID.concat(complete_P6RoleArr)

    return complete_P6RoleID;
}

export function complete_getP6RoleIDArray(){
    return complete_P6RoleID;
}

export function complete_resetP6RoleIDArray(){
    complete_P6RoleID = [];
}

// -------- P6 Res ID -------- 
export function complete_setP6ResIDArray(complete_P6ResIDArr){
    complete_P6ResID = complete_P6ResID.concat(complete_P6ResIDArr)
    return complete_P6ResID;
}

export function complete_getP6ResIDArray(){
    return complete_P6ResID;
}

export function complete_resetP6ResIDArray(){
    complete_P6ResID = [];
}