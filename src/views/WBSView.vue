/********************************************************
*	      Project name: WBS_Creator					              *
*	      Project by: Nesabyte						                *
*	      Project for: ACE Innovations                    * 
*	      DATE: Dec 2022										              *
********************************************************/
<template>
  <div id="wbs_table" class="front wbs_table">
    <div class="hot-center">
      <div class="wbs_nav">
        <nav>
          <router-link to="/wbscreationtool/projectinfo">Project Info</router-link> |
          <router-link to="/wbscreationtool/setupproject">Resource Setup</router-link> |
          <router-link to="/wbscreationtool/wbstable">WBS Table</router-link>
        </nav>
        <router-view />
      </div>
      <div class="icon2 aei-text">
        <img src="../assets/logo-aie-green-beta.svg" alt class="icon-wbs-logo" />
      </div>
      <div class="btn_WBS " data-app>
        <v-snackbar v-model="snackbar_finalize" multi-line>
          <h3>FINALIZE RUNNING</h3> <br>
          <template v-slot:actions>
            <v-btn color="red" variant="text" @click="snackbar_finalize = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
      <!-- ROW 1-->
      <div class="button-row">
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn justify="center" color="primary" dark v-bind="attrs" v-on="on">
                Add WBS Element
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Add WBS Element</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-select v-model="WBSElementType" :items="['Mobilization Support', 'Internal Work Plan', 'Eng Design Plan', 'OPEX Report', 'Walkdown Plan & Report'
                        , 'Design Requirements', 'Conceptual Eng. Report', 'FMEA Report', 'DCP', 'Technical Specification'
                        , 'IDS / ICS', 'Replacement Instruction', 'Model Work Order', 'Mech/Civ DCN', 'Electrical DCN'
                        , 'Software DCN', 'Software Patch DCN', 'Config. Intent Change', 'CSNC Code Classification', 'SCL Update'
                        , 'Report with Model', 'Hand Calculation', 'Report / Memo', 'IUC', 'Design Registration'
                        , 'Design Reconciliation', 'IEE or PE Evaluation', 'Design Manual Update', 'Third Party Review', 'O&M Doc. Updates'
                        , 'Commissioning Specification', 'Installation Support with FCNs', 'Commissioning Report', 'Closeout', 'Blank Template'
                        , 'Blank Template wt 5 Sums']" label="WBS Element Type" required></v-select>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="WBSName" label="WBS Name" required></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12" sm="6">
                      <v-select v-model="WBSEstimate" :items="['Keep Hours Blank', 'Use Template Hours']"
                        label="WBS Estimate Approach" required></v-select>
                    </v-col>

                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="WBSDepartment" label="Initialize Department"></v-text-field>
                    </v-col>
                  </v-row>

                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="addWBS_element()">
                  Add
                </v-btn>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Done
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog_clear" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn justify="center" variant="text" v-bind="attrs" v-on="on">
                Clear
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Are you sure you want to Clear?</span>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="WBS_clear()">
                  YES
                </v-btn>
                <v-btn variant="outlined" @click="dialog_clear = false">
                  NO
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn color="blue darken-1" @click="finalizeWBS()">
            Finalize
          </v-btn>
        </v-row>
      </div>
      <!-- ROW 2-->
      <div class="button-row">
        <v-row justify="center">
          <v-btn color="primary" dark @click="WBS_submission()"> Download CSV </v-btn>
          <v-btn color="primary" dark @click="WBS_download_XLSX()"> Download P6</v-btn>
          <v-dialog v-model="dialog_downloadSAP" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn justify="center" color="primary" dark v-bind="attrs" v-on="on">
                Download SAP CJ20N
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Please select prefered SAP download version</span>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="WBS_download_SAP_all()">
                  Complete WBS
                </v-btn>
                <v-btn color="blue darken-1" text @click="WBS_download_SAP_summary()">
                  Summary WBS
                </v-btn>
                <v-btn variant="outlined" @click="dialog_downloadSAP = false">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog_TOQ" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn justify="center" variant="text" v-bind="attrs" v-on="on">
                Bruce TOQ
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Functionality to be added in 2024</span>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn variant="outlined" @click="dialog_TOQ = false">
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

      </div>
      <hot-table ref="hotTableComponent" :data="data" :settings="hotSettings"></hot-table>
      <div id="wbs_table2" class="wbs_table2"></div>
    </div>
  </div>
</template>
 

<script>
import { HotTable, HotColumn } from "@handsontable/vue";
import { registerAllModules } from "handsontable/registry";
import { HyperFormula } from 'hyperformula';

import { SetupCatArr } from "../utils/ResourceSetup/setup_cat_restype.ts";
import { SetupDeptArr } from "../utils/ResourceSetup/setup_dept_resdep.ts";
import { SetupResnameArr } from "../utils/ResourceSetup/setup_resname_resname.ts";
import { complete_getCatArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_getDeptArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_getResNameArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_getBillrateArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_getP6ResIDArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_getP6RoleIDArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_getGradeArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_getEmployeeArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { projectInfo_getArray } from "../utils/ProjectInfo/info_project.ts";

import * as XLSX from 'xlsx';
//import XLSX from 'xlsx';
import { read, writeFileXLSX } from "xlsx";
import { SheetVisibility } from 'xlsx';
import emailjs from 'emailjs-com';

import { get1_MobilizationSupport } from "../utils/WBS/1_MobilizationSupport.ts";
import { get2_InternalWorkPlan } from "../utils/WBS/2_InternalWorkPlan.ts";
import { get3_EngDesignPlan } from "../utils/WBS/3_EngDesignPlan.ts";
import { get4_OPEXReport } from "../utils/WBS/4_OPEXReport.ts";
import { get5_WalkdownPlanReport } from "../utils/WBS/5_WalkdownPlanReport.ts";
import { get6_DesignRequirements } from "../utils/WBS/6_DesignRequirements.ts";
import { get7_ConceptualEngReport } from "../utils/WBS/7_ConceptualEngReport.ts";
import { get8_FMEAReport } from "../utils/WBS/8_FMEAReport.ts";
import { get9_DCP } from "../utils/WBS/9_DCP.ts";
import { get10_TechnicalSpecification } from "../utils/WBS/10_TechnicalSpecification.ts";
import { get11_IDSorICS } from "../utils/WBS/11_IDSorICS.ts";
import { get12_ReplacementInstruction } from "../utils/WBS/12_ReplacementInstruction.ts";
import { get13_ModelWorkOrder } from "../utils/WBS/13_ModelWorkOrder.ts";
import { get14_MechCivDCN } from "../utils/WBS/14_MechCivDCN.ts";
import { get15_ElecDCN } from "../utils/WBS/15_ElecDCN.ts";
import { get16_SoftwareDCN } from "../utils/WBS/16_SoftwareDCN.ts";
import { get17_SoftwarePatchDCN } from "../utils/WBS/17_SoftwarePatchDCN.ts";
import { get18_ConfigIntentChange } from "../utils/WBS/18_ConfigIntentChange.ts";
import { get19_CSNCCodeClassification } from "../utils/WBS/19_CSNCCodeClassification.ts";
import { get20_SCLUpdate } from "../utils/WBS/20_SCLUpdate.ts";
import { get21_ReportwtModel } from "../utils/WBS/21_ReportwtModel.ts";
import { get22_HandCalculation } from "../utils/WBS/22_HandCalculation.ts";
import { get23_ReportorMemo } from "../utils/WBS/23_ReportorMemo.ts";
import { get24_IUC } from "../utils/WBS/24_IUC.ts";
import { get25_DesignRegistration } from "../utils/WBS/25_DesignRegistration.ts";
import { get26_DesignReconciliation } from "../utils/WBS/26_DesignReconciliation.ts";
import { get27_IEEorPEEvaluation } from "../utils/WBS/27_IEEorPEEvaluation.ts";
import { get28_DesignManualUpdate } from "../utils/WBS/28_DesignManualUpdate.ts";
import { get29_ThirdPartyReview } from "../utils/WBS/29_ThirdPartyReview.ts";
import { get30_OMDocUpdates } from "../utils/WBS/30_OMDocUpdates.ts";
import { get31_CommissioningSpecification } from "../utils/WBS/31_CommissioningSpecification.ts";
import { get32_InstallationSupportwtFCNs } from "../utils/WBS/32_InstallationSupportwtFCNs.ts";
import { get33_CommissioningReport } from "../utils/WBS/33_CommissioningReport.ts";
import { get34_Closeout } from "../utils/WBS/34_Closeout.ts";
import { get35_BlankTemplate } from "../utils/WBS/35_BlankTemplate.ts";
import { get36_BlankTemplate_5 } from "../utils/WBS/36_BlankTemplate_5.ts";


// register Handsontable's modules
registerAllModules();
var tempdata = [[]];
var tempdata2 = [
  [],
  ["", "WBS", "", "DDDDDDDDDDDDDDD", "", "", "", "", "", "", "", "8", "=SUM(M3, M10)", ""],
  ["", "S", "WBS99", "Design Plan: 90% Preparation", "", "", "", "", "", "", "", "=SUBTOTAL(9,L4:L9)", "=SUBTOTAL(9,M4:M9)", ""],
  ["1.1,", "Y", "WBS99", "Data Collection & Review", "", "", "", "", "MPI", "Bob", "464", "0", "", "9005"],
  ["1.2,", "Y", "WBS99", " - Prepare 90% Doc", "", "", "1.1,", "", "MPI", "", "461", "1", "", "9010"],
  ["1.2,", "Y", "WBS99", " - Prepare 90% Doc", "", "", "1.1,", "", "MPI", "", "461", "1", "", "9010"],
  ["1.3,", "Y", "WBS99", " - Internal Review", "", "", "1.2,1.3,", , "XMI", "Sally", "461", "1", "", "9015"],
  ["1.4,", "Y", "WBS99", "Design Plan - Incorporate Internal Comments", "", "", "1.3,", "", "MPS", "Juan Ortiz", "461", "1", "", "9020"],
  ["", "Y", "WBS99", "Design Plan Approval", "", "", "1.4,", "", "MPS", "Benjamin Rodriguez", "464", "1", "", ""],
  ["", "Y", "WBS99", "Design Plan Approval", "", "", "1.4,", "", "MPS", "Benjamin Rodriguez", "464", "1", "", ""],
  ["", "Y", "WBS99", "Design Plan 90% Submission", "", "", "", "", "", "", , , "", ""],
  ["", "S", "WBS9", "Design Plan: Comment & Disposition", "", "", "", "", "", "", , "=SUBTOTAL(9,L11:L14)", "=SUBTOTAL(9,M11:M14)", ""],
  ["", "Y", "WBS9", "Client Review", "", "", "", "", "", "Emily Johnson", , "1", "", ""],
  ["1.2,", "Y", "WBS99", " - Prepare 90% Doc", "", "", "1.1,", "", "MP3", "", "EIC", "1", "", "9010"],
  ["", "Y", "WBS9", "Comments and Disposition Resolution", "", "", "", "", "", "", , "1", "", ""],
  ["", "Y", "WBS9", "Submit CDS to OPG", "", "", "", "", "", "", , , "", ""],
  ["", "Y", "WBS9", "OPG CDS Acceptance", "", "", "", "", "", "", , "", "", ""],
];

var WBSclick_count = 0;
var column_no = 13;
var column_no_start = 995;
var estimate = "standard"
var department = "";

//return TaskNum with decimal
function TaskNumDecimalAddOne(cellData) {
  if (cellData == null || cellData == "") {
    //console.log("cellData is NULL")
    return "";
  } else {
    var decimalStr = cellData.toString().split('.')[1]; //grab decimal and comma
    decimalStr = decimalStr.slice(0, -1) //remove last char of string
    var n = Number(decimalStr) + 1; // add 1 o the decimal
    n = cellData.toString().split('.')[0] + "." + n + ","; //wholeNumber.DecimalNumber,
    return n;
  }
}
function TaskNumDecimalSubtractOne(cellData) {
  if (cellData == null || cellData == "") {
    //console.log("cellData is NULL")
    return "";
  } else {
    var decimalStr = cellData.toString().split('.')[1]; //grab decimal and comma
    decimalStr = decimalStr.slice(0, -1) //remove last char of string
    var n = Number(decimalStr) - 1; // subtract 1 o the decimal
    n = cellData.toString().split('.')[0] + "." + n + ","; //wholeNumber.DecimalNumber,
    return n;
  }
}
//return TaskNum only
function TaskNumhelper(cellData) {
  if (cellData == null || cellData == "") {
    //console.log("cellData is NULL")
    return "";
  } else {
    return cellData.toString().split('.')[0];
  }
}
//
function TaskNumArray() {
  var tempArray = [];
  for (var i = 0; i < tempdata.length; i++) {
    tempArray.push(tempdata[i][0]);
  }
  tempArray = tempArray.filter(n => n);
  //console.log("TaskNumArray " + tempArray)
  return tempArray;
}
//
function ValidatePredecessor(cellData) {
  //console.log("ValidatePredecessor " + cellData)
  //if Pred field is empty, return false
  if (cellData === "" || cellData === null) { return false }

  //if Pred field does not end with a comma, return false
  var cellD = cellData.charAt(cellData.length - 1);
  if (cellD !== ",") {
    return false
  }
  return true;
}
//
function newSubValue(Y, S, oldv) {
  //console.log("--> newSubValue (" + typeof Y + ") + (" +typeof S + ") - (" +typeof oldv + ") = TEST" )

  if (!Number.isInteger(Y)) { Y = 0 }
  if (!Number.isInteger(S)) { S = 0 }
  if (!Number.isInteger(oldv)) { oldv = 0 }
  var newsub = Number(Y) + Number(S)
  newsub = Number(newsub) - Number(oldv)
  //console.log("--> newSubValue (" + Y + ") + (" + S + ") - (" + oldv + ") = " + newsub)

  return newsub;
}
//
function saveacopy_helper_taskcode_p1(succ_pred, col_num) {
  var num = succ_pred.split(".")
  num = Number(num[0]) * 10
  var final = num + "-" + col_num
  //console.log("saveacopy_helper_taskcode_p1 [" + succ_pred + "][" + col_num +"][" + num +"]")

  return final
}
//
function saveacopy_helper_wbsid_p1(WBS_num) {
  return WBS_num.slice(3)
}

//  create an external HyperFormula instance
const hyperformulaInstance = HyperFormula.buildEmpty({
  // to use an external HyperFormula instance,
  // initialize it with the `'internal-use-in-handsontable'` license key
  licenseKey: 'internal-use-in-handsontable',
});

export default {
  name: "",
  components: { HotTable, HotColumn },
  data: function () {
    return {
      hotSettings: {
        //layoutDirection: "ltr",
        rowHeaders: true,
        //formulas: {engine: hyperformulaInstance,},

        formulas: {
          engine: hyperformulaInstance,
          ProjDur: {
            variables: {
              ProjectDuration: 'F1'
            },
            formula: '=ProjectDuration'
          }
        },

        dropdownMenu: true,
        persistentState: true,
        //persistentStateLoad: function (key, value) { console.log('LOAD', key, value); },
        //persistentStateSave: function (key, value) { console.log('SAVE', key, value); }, 
        width: '100%',
        height: '70vh',
        licenseKey: "non-commercial-and-evaluation",
        colHeaders: [
          "#",                   //0
          "Task?",               //1
          "WBS Structure",       //2
          "Task Name",           //3
          "Assumptions",         //4
          "Duration (Days)",     //5
          "Predecessor",         //6
          "Lead/Lag",            //7
          "Resource Type",       //8
          "Resource Name",       //9
          "Dept",                //10
          "Hours",               //11
          "Labour Cost",         //12
          "column_#",            //13
          "P6 Role ID",          //14
          "P6 Res ID",
          "SAP Grade",
          "Employee#"

        ],
        columns: [
          { data: 0, type: "text", readOnly: true },
          { data: 1, type: "text", readOnly: true }, // task #
          { data: 2, type: "text", readOnly: true },
          { data: 3, type: "text", className: 'htLeft' },  // task name
          { data: 4, type: "text", className: 'htLeft' },  // assumptions
          { data: 5, type: "text" },  // Duration (Days)
          { data: 6 },  // predecessor
          { data: 7, type: "text" },
          { data: 8, type: "dropdown", source: SetupCatArr(), values: SetupCatArr() },
          { data: 9, type: "dropdown", source: SetupResnameArr(), values: SetupResnameArr(), className: 'htLeft' },
          { data: 10, type: "dropdown", source: SetupDeptArr(), values: SetupDeptArr() },
          { data: 11, type: "numeric", format: '0.0' },
          { data: 12, type: "numeric", readOnly: true, numericFormat: { pattern: "$0,0.00", } },  //Cost
          { data: 13, type: "numeric", readOnly: true },
          { data: 14, type: "text", readOnly: true },
          { data: 15, type: "text", readOnly: true },
          { data: 16, type: "text", readOnly: true },
          { data: 17, type: "text", readOnly: true },
        ],
        //           #,tk ?, P6#, Name,Assumption,  Days,pred, lag, 
        colWidths: [50, 40, 50, 325, 250, 100, 100, 75, 100, 150, 75, 50, 75],
        contextMenu: true,
        contextMenu: {
          items: {
            ////////////////////////////////////////////////////////////
            //                   adding a Row                         //
            ////////////////////////////////////////////////////////////           
            addTask: { // Own custom option
              name() { // `name` can be a string or a function
                return '<b>Add Task Below</b>'; // Name can contain HTML
              },
              //hidden() { // `hidden` can be a boolean or a function
              // Hide the option when the first column was clicked
              //return this.getSelectedLast()[0] == 0; // `this` === hot
              //},
              callback(key, selection, clickEvent) { // Callback for specific option

                var i = this.getSelectedLast()[0] + 1; //start row number to update
                var newRowNum = this.getSelectedLast()[0] + 2;
                var irowcount = this.countRows() + 2; //number to total rows

                //this.setDataAtCell(4, 4, "COUNT " + irowcount); //inserting new value

                // adding row at the end of the excel
                if (i === irowcount) {
                  this.alter('insert_row', this.getSelectedLast()[0] + 1, 1); //inserting row
                  //this.alter('insert_row_above', this.getSelectedLast()[0] + 1, 1); //inserting row

                  this.setDataAtCell(this.getSelectedLast()[0] + 1, 4, "END"); //inserting new value

                  // Update Col 0: Task #
                  this.setDataAtCell(this.getSelectedLast()[0] + 1, 0, TaskNumDecimalAddOne(this.getDataAtCell(this.getSelectedLast()[0], 0))); //inserting new value

                  // Update Col 1: Task?
                  this.setDataAtCell(this.getSelectedLast()[0] + 1, 1, "Y");

                  // Update Col 2: WBS Structure
                  var taskNumInt = TaskNumhelper(this.getDataAtCell(this.getSelectedLast()[0], 0));//capture task# whole Number
                  this.setDataAtCell(this.getSelectedLast()[0] + 1, 2, "WBS" + taskNumInt); //inserting new value 

                  //console.log("++ MY getSelectedLast[" + i + "][" + irowcount + "]")

                  /////////////////////////// adding row where Task? is Y //////////////////////
                } else if (this.getDataAtCell(this.getSelectedLast()[0], 1) === "Y") {
                  this.alter('insert_row', this.getSelectedLast()[0] + 1, 1); //inserting row
                  //this.alter('insert_row_above', this.getSelectedLast()[0] + 1, 1); //inserting row

                  // Update Col 0: Task #
                  this.setDataAtCell(this.getSelectedLast()[0] + 1, 0, TaskNumDecimalAddOne(this.getDataAtCell(this.getSelectedLast()[0], 0))); //inserting new value

                  // Update Col 1: Task?
                  this.setDataAtCell(this.getSelectedLast()[0] + 1, 1, "Y");

                  // Update Col 2: WBS Structure
                  var taskNumInt = TaskNumhelper(this.getDataAtCell(this.getSelectedLast()[0], 0));//capture task# whole Number
                  this.setDataAtCell(this.getSelectedLast()[0] + 1, 2, "WBS" + taskNumInt); //inserting new value 

                  // Update Col 9: Task?  Brandon
                  this.setDataAtCell(this.getSelectedLast()[0] + 1, 9, "");

                  ///////// Updates the Sums for both hours and $ //////////
                  var scount_int = 0;
                  if (this.getDataAtCell(i + 1, 1) === "S") {  // if the following task is a Sum update just the sum

                    for (var j = i; this.getDataAtCell(j, 1) === "Y"; j--) { scount_int = scount_int + 1; }

                    var BotRow = i + 1;
                    var TopRow = i - scount_int + 2;
                    this.setDataAtCell(i - scount_int, 11, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",L' + TopRow + ':L' + BotRow + ')');
                    this.setDataAtCell(i - scount_int, 12, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",M' + TopRow + ':M' + BotRow + ')');
                  }
                  else if (this.getDataAtCell(i + 1, 1) === "WBS" || (this.getDataAtCell(i + 1, 1) === null)) {   //if the following task is a WBS or the end of the file update both SUM & WBS tasks
                    var wbscount_int = 0;
                    for (var j = i; this.getDataAtCell(j, 1) === "Y"; j--) { scount_int = scount_int + 1; }
                    for (var j = i; this.getDataAtCell(j, 1) === "Y" || this.getDataAtCell(j, 1) === "S"; j--) { wbscount_int = wbscount_int + 1; }

                    var BotRow = i + 1;
                    var TopRow = i - scount_int + 2;
                    this.setDataAtCell(i - scount_int, 11, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",L' + TopRow + ':L' + BotRow + ')');
                    this.setDataAtCell(i - scount_int, 12, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",M' + TopRow + ':M' + BotRow + ')');
                    //
                    var TopRow = i - wbscount_int + 2;
                    this.setDataAtCell(i - wbscount_int, 11, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",L' + TopRow + ':L' + BotRow + ')');
                    this.setDataAtCell(i - wbscount_int, 12, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",M' + TopRow + ':M' + BotRow + ')');
                  }
                  ///////// End of Sum updates ///////////

                  // Updating rest of the WBS 
                  var check = true
                  i = i + 1
                  for (i; check; i++) {
                    if (this.getDataAtCell(i, 1) === "Y") {
                      // Update Col 0: Task #
                      this.setDataAtCell(i, 0, TaskNumDecimalAddOne(this.getDataAtCell(i, 0)));
                    }

                    if (this.getDataAtCell(i, 1) === "WBS") {
                      check = false
                      //this.setDataAtCell(i, 4, "YYY " + i); //inserting new value 
                    }
                    if (i >= this.countRows() - 1) {
                      //this.setDataAtCell(i, 4, "YYYY " + i); //inserting new value 
                      check = false
                    }
                  }

                  /////////////////// adding row where Task? is S ///////////////////
                } else if (this.getDataAtCell(this.getSelectedLast()[0], 1) === "S") {
                  var new_tasknum = this.getDataAtCell(this.getSelectedLast()[0] + 1, 0)
                  var new_wbsstructure = this.getDataAtCell(this.getSelectedLast()[0] + 1, 2)
                  //console.log("new_tasknum " + new_tasknum)
                  this.alter('insert_row', this.getSelectedLast()[0] + 1, 1); //inserting row
                  //this.alter('insert_row_above', this.getSelectedLast()[0] + 1, 1); //inserting row

                  // Update Col 0: Task #
                  this.setDataAtCell(this.getSelectedLast()[0] + 1, 0, new_tasknum); //inserting new value

                  // Update Col 1: Task?
                  this.setDataAtCell(this.getSelectedLast()[0] + 1, 1, "Y");

                  // Update Col 2: WBS Structure
                  var taskNumInt = TaskNumhelper(this.getDataAtCell(this.getSelectedLast()[0], 0));//capture task# whole Number
                  this.setDataAtCell(this.getSelectedLast()[0] + 1, 2, new_wbsstructure); //inserting new value 

                  //////Updates the Sums for both hours and $ //////////
                  var scount_int = 0;
                  for (var j = i; this.getDataAtCell(j, 1) === "Y"; j++) { scount_int = scount_int + 1; }
                  var TopRow = i + 1;
                  var BotRow = i + scount_int;
                  this.setDataAtCell(TopRow - 2, 11, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",L' + TopRow + ':L' + BotRow + ')');
                  this.setDataAtCell(TopRow - 2, 12, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",M' + TopRow + ':M' + BotRow + ')');

                  // Updating rest of the WBS 
                  var check = true
                  i = i + 1
                  for (i; check; i++) {
                    if (this.getDataAtCell(i, 1) === "Y") {

                      // Update Col 0: Task #
                      this.setDataAtCell(i, 0, TaskNumDecimalAddOne(this.getDataAtCell(i, 0)));

                      // Update Col 13: Column#
                      //x var max_of_array = Math.max.apply(Math, this.getDataAtCol(13));
                      //x this.setDataAtCell(this.getSelectedLast()[0] + 1, 13, max_of_array + 5);//inserting new value to column_#
                    }

                    if (this.getDataAtCell(i, 1) === "WBS") {
                      check = false
                      //this.setDataAtCell(i, 4, "YYY " + i); //inserting new value 

                    }
                    if (i >= this.countRows() - 1) {
                      //this.setDataAtCell(i, 4, "YYYY " + i); //inserting new value 
                      check = false
                    }
                  }
                }

                ///// cycles through the cells under to update cell referenes
                //////////////// NEED TO DO THIS BETTER!!!! //////////////
                ////    want to keep the relative cell references  ///////
                for (let k = newRowNum; k < this.countRows(); k++) {
                  //console.log(k + "of a total of ?" + this.countRows());

                  if (this.getDataAtCell(k, 1) === "Y") {
                    this.setDataAtCell(k, 11, this.getDataAtCell(k, 11));
                  }
                }
                this.selectCell(newRowNum - 1, 3);
              }
            },

            ////////////////////////////////////////////////////////////
            //                   Delete a Row                         //
            ////////////////////////////////////////////////////////////
            remove_row: {
              name() { // `name` can be a string or a function
                return '<b>Remove Row</b>'; // Name can contain HTML
              },
              hidden: function () {
                // if first row, disable this option
                return this.getSelectedLast()[0] == 0;
              },
              callback(key, selection, clickEvent) { // Callback for specific option
                ///////////////////////////// Delete a WBS /////////////////////////////////////////
                if (this.getDataAtCell(this.getSelectedLast()[0], 1) === "WBS") {
                  var check = true;
                  var check_rowend = true;
                  var count_row_moreWBS = 0;
                  var i = this.getSelectedLast()[0] + 2
                  var k = this.getSelectedLast()[0]
                  var lastTask = this.getSelectedLast()[0] - 1

                  //split 1.2, into 2 parts
                  if (this.getDataAtCell(lastTask, 1) == "WBS") {
                    first_part = this.getDataAtCell(lastTask, 2);
                    second_part = 0;
                  } else if (this.getDataAtCell(lastTask, 1) == "S" || this.getDataAtCell(lastTask, 1) == null) {
                    return
                  } else {
                    var task_split = this.getDataAtCell(lastTask, 0).split(".")
                    var first_part = task_split[0]
                    var second_part = task_split[1].slice(0, -1)
                    second_part = Number(second_part)
                  }

                  //update the global variable
                  WBSclick_count = WBSclick_count - 1;

                  /*Brandon TODO Start*/// Updates the Sums for Hours and Labour Cost
                  var wbscount_int = 0;
                  for (var j = k - 1; this.getDataAtCell(j, 1) === "Y" || this.getDataAtCell(j, 1) === "S"; j--) { wbscount_int = wbscount_int + 1; }
                  var TopRow = k - wbscount_int + 1;

                  wbscount_int = 0;
                  for (var j = k + 1; this.getDataAtCell(j, 1) === "Y" || this.getDataAtCell(j, 1) === "S"; j++) { wbscount_int = wbscount_int + 1; }
                  var BotRow = k + wbscount_int;

                  this.setDataAtCell(TopRow - 2, 11, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",L' + TopRow + ':L' + BotRow + ')');
                  this.setDataAtCell(TopRow - 2, 12, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",M' + TopRow + ':M' + BotRow + ')');
                  // Brandon TODO End ///

                  for (i; check; i++) {
                    if (this.getDataAtCell(i, 1) === "Y") {

                      //setup Row 0: Task#
                      second_part++
                      this.setDataAtCell(i, 0, first_part + "." + second_part.toString() + ",");

                      //Setup Row 2: WBS Structure 
                      var WBS_stream_value = this.getDataAtCell(i, 2);
                      var WBS_stream_value_new = Number(WBS_stream_value.charAt(3)) - 1;
                      this.setDataAtCell(i, 2, this.getDataAtCell(i, 2).slice(0, 3) + WBS_stream_value_new); //set new values for WBS_stream

                    } else if (this.getDataAtCell(i, 1) === "WBS") {
                      check = false
                      check_rowend = false
                      count_row_moreWBS = i
                    }
                    if (i == this.countRows() - 1) {
                      check = false
                    }
                  }

                  // Update the WBS Numbering
                  if (!check_rowend) {
                    for (count_row_moreWBS; count_row_moreWBS < this.countRows(); count_row_moreWBS++) {
                      if (this.getDataAtCell(count_row_moreWBS, 1) === "WBS") {
                        //update the WBS Structure Number
                        var WBS_num = Number(this.getDataAtCell(count_row_moreWBS, 2)) - 1
                        this.setDataAtCell(count_row_moreWBS, 2, WBS_num);
                      }
                      else if (this.getDataAtCell(count_row_moreWBS, 1) === "Y") {
                        //update the WBS Structure Number
                        var WBS_num = Number(this.getDataAtCell(count_row_moreWBS, 2).slice(3)) - 1
                        this.setDataAtCell(count_row_moreWBS, 2, "WBS" + WBS_num);

                        //grab WBS Number 
                        var WBS_number = this.getDataAtCell(count_row_moreWBS, 2).slice(3)

                        //replace first part of Task# into the WBS Number
                        //split 1.2, into 2 parts
                        var task_split = this.getDataAtCell(count_row_moreWBS, 0).split(".")
                        var second_part = task_split[1]
                        this.setDataAtCell(count_row_moreWBS, 0, WBS_number + "." + second_part);
                      }
                    }
                  }

                  /////////////////////// if deleting S /////////////////////////////
                } else if (this.getDataAtCell(this.getSelectedLast()[0], 1) === "S") {
                  //update the global variable
                  var check = true;

                  var i = this.getSelectedLast()[0]

                  /*Brandon TODO Start*/// Updates the Sums for Hours and Labour Cost
                  var scount_int = 0;
                  for (var j = i - 1; this.getDataAtCell(j, 1) === "Y"; j--) { scount_int = scount_int + 1; }
                  var TopRow = i - scount_int + 1;

                  scount_int = 0;
                  for (var j = i + 1; this.getDataAtCell(j, 1) === "Y"; j++) { scount_int = scount_int + 1; }
                  var BotRow = i + scount_int + 1;

                  this.setDataAtCell(TopRow - 2, 11, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",L' + TopRow + ':L' + BotRow + ')');
                  this.setDataAtCell(TopRow - 2, 12, '=SUMIF(B' + TopRow + ':B' + BotRow + ',"Y",M' + TopRow + ':M' + BotRow + ')');
                  // Brandon TODO End ///

                } else if (this.getDataAtCell(this.getSelectedLast()[0], 1) === "Y") {
                  /// update WBS numbers 
                  // Updating rest of the WBS 
                  var check = true
                  var i = this.getSelectedLast()[0] + 1
                  for (i; check; i++) {
                    if (this.getDataAtCell(i, 1) === "Y") {
                      // Update Col 0: Task #
                      this.setDataAtCell(i, 0, TaskNumDecimalSubtractOne(this.getDataAtCell(i, 0)));
                    }

                    if (this.getDataAtCell(i, 1) === "WBS") {
                      check = false

                    }
                    if (i >= this.countRows() - 1) {
                      check = false
                    }
                  }
                }
                this.alter('remove_row', this.getSelectedLast()[0], 1); //removing row


                ///// cycles through the cells under to update cell referenes
                //////////////// NEED TO DO THIS BETTER!!!! //////////////
                ////    want to keep the relative cell references  ///////
                var newRowNum = this.getSelectedLast()[0];
                for (let k = newRowNum; k < this.countRows(); k++) {
                  //console.log(newRowNum + " of a total of ?" + this.countRows());
                  this.selectCell(k, 11);

                  if (this.getDataAtCell(k, 1) === "Y") {
                    this.setDataAtCell(k, 11, this.getDataAtCell(k, 11));
                  }
                }
                this.selectCell(newRowNum - 1, 3);

              },
            }
          },
        },

        cells: function (row, column) {
          var cp = {}
          if (row == 0) {
            cp.className = 'firstrow'
          }
          if (tempdata[row][1] === "S") {
            cp.className = 'WBS_sub_css'
            if (column === 8 || column === 9 || column === 10 || column === 11) {
              cp.editor = false;
              cp.readOnly = true;
              cp.disableVisualSelection = true;
              cp.copyable = false;
            }
          };
          if (tempdata[row][1] === "WBS") {
            cp.className = 'WBS_title_css'
            if (column === 8 || column === 9 || column === 10 || column === 11) {
              cp.editor = false;
              cp.readOnly = true;
              cp.disableVisualSelection = true;
              cp.copyable = false;
            }
          };
          if (column === 1 || column === 2) {
            cp.editor = false;
            cp.readOnly = true; // Prevents editing
            cp.disableVisualSelection = true; // Prevents cell selection
            cp.copyable = false; // Prevents copying
          };
          return cp
        },
        hiddenColumns: {
          columns: [1, 2, 13, 14, 15, 16, 17],
          indicators: true
        },
        hiddenRows: {
          rows: [0],
          indicators: true
        },

        afterChange(changes, source) {
          if (source === 'loadData' || source === 'internal' || changes.length > 1) {
            return;
          }
          var row = changes[0][0];
          var prop = changes[0][1];
          var oldv = changes[0][2];
          var value = changes[0][3];

          var num_rtyp = 8;
          var num_rnam = 9;
          var num_rdep = 10;
          var num_hour = 11;
          var num_cost = 12;
          var num_rp6rol = 14;
          var num_rp6res = 15;

          //console.log("--> P [" + prop + "]");
          if (prop === 8) {
            if (this.getDataAtCell(row, 1) === "Y") {

              var restype_pos_dropdown = SetupCatArr().indexOf(value)
              var resname_pos_dropdown = SetupResnameArr().indexOf(this.getDataAtCell(row, num_rnam))
              var resdept_pos_dropdown = SetupDeptArr().indexOf(this.getDataAtCell(row, num_rdep))
              var resname_pos = complete_getResNameArray().indexOf(this.getDataAtCell(row, num_rnam))

              var col10 = 0;

              if (resname_pos_dropdown > 0) { // o o o || x o x || x o o || o o x
                //console.log("77 --> [" + this.getDataAtCell(row, num_rtyp) + "] [" + this.getDataAtCell(row, num_rnam)  + "] : [" + this.getDataAtCell(row, num_rdep)  + "] [ ]");

                // ------------------ setting up col num_hour  ------------------------- 
                if ((this.getDataAtCell(row, num_hour) === "") || (this.getDataAtCell(row, num_hour) === null)) {
                  col10 = 0
                } else { col10 = this.getDataAtCell(row, num_hour) }
                var resname_val = complete_getBillrateArray()[resname_pos];
                this.setDataAtCell(row, num_cost, col10 * resname_val);
              }
              else if ((restype_pos_dropdown > 0 && resdept_pos_dropdown > 0) || ((restype_pos_dropdown === 0) && (resname_pos_dropdown === 0))) {
                if (restype_pos_dropdown > 0 && resdept_pos_dropdown > 0) { // o x o
                  // ------------------ setting up col num_hour -------------------------
                  //console.log("before- prop is 7 o x o [" + row + "][" + prop + "][" + oldv + "]");

                  // if (row, num_hour) is empty, set to 0; if not empty, setup the value
                  if ((this.getDataAtCell(row, num_hour) === "") || (this.getDataAtCell(row, num_hour) === null)) {
                    col10 = 0
                  } else { col10 = this.getDataAtCell(row, num_hour) }


                  // grab the correct billrate of specific resname and resdept
                  var rt7 = this.getDataAtCell(row, num_rtyp);
                  var rd9 = this.getDataAtCell(row, num_rdep);
                  var same1 = 0;
                  var same1_pos = 0;
                  for (var k = 0; k < complete_getCatArray().length; k++) {
                    if ((complete_getDeptArray()[k] === rd9) && (complete_getCatArray()[k] === rt7) && (complete_getResNameArray()[k] === null || complete_getResNameArray()[k] === "")) {
                      same1 = same1 + 1;
                      same1_pos = k;
                    }
                  }
                  if (same1 > 0) {//if there is a match
                    var billrate_val = complete_getBillrateArray()[same1_pos];// grab billrate value according to the restype value.
                    this.setDataAtCell(row, num_cost, col10 * billrate_val);// set (row,11) with the new value of hoursXbillrate
                  } else {
                    this.setDataAtCell(row, num_cost, 0);// set (row,11) to 0
                  }
                  same1 = 0;

                } else if (restype_pos_dropdown === 0 && resname_pos_dropdown === 0) { // x x
                  this.setDataAtCell(row, num_cost, 0);// set (row, num_cost ) to 0 because there is no value.
                }
                else { }
              }
              else if (restype_pos_dropdown === 0 && resname_pos_dropdown > 0) { // x x
                var resname_pos = complete_getResNameArray().indexOf(this.getDataAtCell(row, num_rnam))
                if ((this.getDataAtCell(row, num_hour) === "") || (this.getDataAtCell(row, num_hour) === null)) {
                  col10 = 0
                } else { col10 = this.getDataAtCell(row, num_hour) }
                var resname_val = complete_getBillrateArray()[resname_pos];
                this.setDataAtCell(row, num_cost, col10 * resname_val);
              }
              else {
                //do nothing
              }

            }
          }
          if (prop === 9) {
            if (this.getDataAtCell(row, 1) === "Y") {

              var restype_pos_dropdown = SetupCatArr().indexOf(this.getDataAtCell(row, num_rtyp))
              var resname_pos_dropdown = SetupResnameArr().indexOf(value)

              var restype_pos = complete_getCatArray().indexOf(this.getDataAtCell(row, num_rtyp))
              var resname_pos = complete_getResNameArray().indexOf(value)
              var col10 = 0;

              // x o
              if ((resname_pos_dropdown > 0) || (resname_pos_dropdown === 0)) {
                if (resname_pos_dropdown > 0) {
                  var resname_pos = complete_getResNameArray().indexOf(value)
                  if ((this.getDataAtCell(row, num_hour) === "") || (this.getDataAtCell(row, num_hour) === null)) {
                    col10 = 0
                  } else { col10 = this.getDataAtCell(row, num_hour) }
                  var resname_val = complete_getBillrateArray()[resname_pos];
                  //console.log(resname_pos + "afterChange- 7prop " + col10 + " [" + row + "][" + prop + "][" + value + "]" + resname_val);
                  //this.setDataAtCell(row, num_hour, col10 * resname_val);
                  this.setDataAtCell(row, num_cost, col10 * resname_val);
                  //console.log("A " + restype_pos + "afterChange- 8prop " + col10 + " [" + row + "][" + prop + "][" + value + "]" + resname_pos);

                  // 
                } else if (resname_pos_dropdown === 0 || restype_pos_dropdown > 0) {
                  //=====>   this is where the issue is               
                  this.setDataAtCell(row, num_rtyp, this.getDataAtCell(row, num_rtyp))
                } else {
                  //do nothing
                }
              }
              else {
                //do nothing
              }
            }
          }
          if (prop === 10) {
            var restype_pos_dropdown = SetupCatArr().indexOf(this.getDataAtCell(row, num_rtyp))
            var resname_pos_dropdown = SetupResnameArr().indexOf(this.getDataAtCell(row, num_rnam))
            var resdept_pos_dropdown = SetupDeptArr().indexOf(value)

            var restype_pos = complete_getCatArray().indexOf(this.getDataAtCell(row, num_rtyp))
            var resdept_pos = complete_getDeptArray().indexOf(value)
            //console.log("-->resdept_pos_dropdown[" + resdept_pos_dropdown + "][" + +"]")

            // x o x
            if (restype_pos_dropdown > 0) {
              //console.log("99 --> RESTYPE [" + this.getDataAtCell(row, num_rtyp) + "] [" + this.getDataAtCell(row, num_rnam)  + "] : [" + this.getDataAtCell(row, num_rdep)  + "] [ ]");

              this.setDataAtCell(row, num_rtyp, this.getDataAtCell(row, num_rtyp))

            }
            // o x x
            else if (resname_pos_dropdown > 0) {
              //console.log("99 --> RESNAME [" + this.getDataAtCell(row, num_rtyp) + "] [" + this.getDataAtCell(row, num_rnam)  + "] : [" + this.getDataAtCell(row, num_rdep)  + "] [ ]");

              this.setDataAtCell(row, num_rnam, this.getDataAtCell(row, num_rnam))
            } else {

            }
          }
          if (prop === 11) {
            //console.log("                         ------> PROP " + prop);
            /**/
            var resname_pos = complete_getResNameArray().indexOf(value)

            if (this.getDataAtCell(row, 1) === "Y") {
              var restype_pos_dropdown = SetupCatArr().indexOf(this.getDataAtCell(row, num_rtyp))
              var resname_pos_dropdown = SetupResnameArr().indexOf(this.getDataAtCell(row, num_rnam))

              var restype_pos = complete_getCatArray().indexOf(this.getDataAtCell(row, num_rtyp))
              var resname_pos = complete_getResNameArray().indexOf(value)
              var col10 = 0;

              // x o
              if (restype_pos_dropdown > 0) {
                this.setDataAtCell(row, num_rtyp, this.getDataAtCell(row, num_rtyp))
              } else if (resname_pos_dropdown > 0) {
                //console.log("             resname_pos_dropdown [" + resname_pos_dropdown + "][" + num_rnam + "][" + value + "]");

                this.setDataAtCell(row, num_rnam, this.getDataAtCell(row, num_rnam))
              } else { }
            }
          }
        },
      },
      formulas: true,
      outsideClickDeselects: false,
      data: tempdata,
      dialog: false,
      dialog_clear: false,
      dialog_downloadSAP: false,
      dialog_TOQ: false,
      WBSName: "",
      WBSElementType: "",
      WBSEstimate: "",
      WBSDepartment: "",
      timeout: 10000,
      text: "Please run FINALIZE before downloading XLSX",
      snackbar_finalize: false,
    }
  },

  methods: {
    checkDepartment: function (department) {
      if (SetupDeptArr().includes(department)) {

      }
    },

    addWBS_element: function () {
      //console.log("SET estimate " + estimate)

      if (this.WBSEstimate === "Keep Hours Blank" || this.WBSEstimate === "") {
        estimate = "blank"
      }
      //console.log("SET department " + this.WBSDepartment)

      department = this.WBSDepartment

      // console.log("SET estimate " + estimate)

      this.$refs.hotTableComponent.hotInstance.setDataAtCell(0, 3, projectInfo_getArray()[0]);  // Project Title
      this.$refs.hotTableComponent.hotInstance.setDataAtCell(0, 5, projectInfo_getArray()[1]);  // Duration
      this.$refs.hotTableComponent.hotInstance.setDataAtCell(0, 4, projectInfo_getArray()[2]);  // Efficency Factor
      this.$refs.hotTableComponent.hotInstance.setDataAtCell(0, 0, projectInfo_getArray()[3]);  // Proj #

      /*for(var i = 0; i < tempdata.length;i++){
        this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 11, this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, 11))
      }*/

      //console.log("this.WBSElementType" + this.WBSElementType)
      if (this.WBSName == '') {
        this.WBSName = this.WBSElementType
      }

      if (SetupDeptArr().includes(department)) {
        if (this.WBSElementType == 'Mobilization Support') { this.add1_MobilizationSupport(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Internal Work Plan') { this.add2_InternalWorkPlan(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Eng Design Plan') { this.add3_EngDesignPlan(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'OPEX Report') { this.add4_OPEXReport(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Walkdown Plan & Report') { this.add5_WalkdownPlanReport(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Design Requirements') { this.add6_DesignRequirements(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Conceptual Eng. Report') { this.add7_ConceptualEngReport(this.UpdatesWBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'FMEA Report') { this.add8_FMEAReport(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'DCP') { this.add9_DCP(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Technical Specification') { this.add10_TechnicalSpecification(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'IDS / ICS') { this.add11_IDSorICS(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Replacement Instruction') { this.add12_ReplacementInstruction(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Model Work Order') { this.add13_ModelWorkOrder(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Mech/Civ DCN') { this.add14_MechCivDCN(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Electrical DCN') { this.add15_ElecDCN(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Software DCN') { this.add16_SoftwareDCN(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Software Patch DCN') { this.add17_SoftwarePatchDCN(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Config. Intent Change') { this.add18_ConfigIntentChange(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'CSNC Code Classification') { this.add19_CSNCCodeClassification(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'SCL Update') { this.add20_SCLUpdate(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Report with Model') { this.add21_ReportwtModel(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Hand Calculation') { this.add22_HandCalculation(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Report / Memo') { this.add23_ReportorMemo(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'IUC') { this.add24_IUC(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Design Registration') { this.add25_DesignRegistration(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Design Reconciliation') { this.add26_DesignReconciliation(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'IEE or PE Evaluation') { this.add27_IEEorPEEvaluation(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Design Manual Update') { this.add28_DesignManualUpdate(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Third Party Review') { this.add29_ThirdPartyReview(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'O&M Doc. Updates') { this.add30_OMDocUpdates(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Commissioning Specification') { this.add31_CommissioningSpecification(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Installation Support with FCNs') { this.add32_InstallationSupportwtFCNs(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Commissioning Report') { this.add33_CommissioningReport(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Closeout') { this.add34_Closeout(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Blank Template') { this.add35_BlankTemplate(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
        else if (this.WBSElementType == 'Blank Template wt 5 Sums') { this.add36_BlankTemplate_5(this.WBSName, this.$refs.hotTableComponent.hotInstance.countRows()) }
      }
    },

    add1_MobilizationSupport: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get1_MobilizationSupport(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add2_InternalWorkPlan: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get2_InternalWorkPlan(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add3_EngDesignPlan: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get3_EngDesignPlan(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add4_OPEXReport: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get4_OPEXReport(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add5_WalkdownPlanReport: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get5_WalkdownPlanReport(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add6_DesignRequirements: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get6_DesignRequirements(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add7_ConceptualEngReport: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get7_ConceptualEngReport(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add8_FMEAReport: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get8_FMEAReport(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add9_DCP: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get9_DCP(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add10_TechnicalSpecification: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get10_TechnicalSpecification(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add11_IDSorICS: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get11_IDSorICS(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add12_ReplacementInstruction: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get12_ReplacementInstruction(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add13_ModelWorkOrder: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get13_ModelWorkOrder(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add14_MechCivDCN: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get14_MechCivDCN(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add15_ElecDCN: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get15_ElecDCN(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add16_SoftwareDCN: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get16_SoftwareDCN(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add17_SoftwarePatchDCN: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get17_SoftwarePatchDCN(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add18_ConfigIntentChange: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get18_ConfigIntentChange(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add19_CSNCCodeClassification: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get19_CSNCCodeClassification(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add20_SCLUpdate: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get20_SCLUpdate(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add21_ReportwtModel: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get21_ReportwtModel(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add22_HandCalculation: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get22_HandCalculation(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add23_ReportorMemo: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get23_ReportorMemo(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add24_IUC: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get24_IUC(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add25_DesignRegistration: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get25_DesignRegistration(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add26_DesignReconciliation: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get26_DesignReconciliation(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add27_IEEorPEEvaluation: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get27_IEEorPEEvaluation(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add28_DesignManualUpdate: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get28_DesignManualUpdate(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add29_ThirdPartyReview: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get29_ThirdPartyReview(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add30_OMDocUpdates: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get30_OMDocUpdates(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add31_CommissioningSpecification: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get31_CommissioningSpecification(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add32_InstallationSupportwtFCNs: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get32_InstallationSupportwtFCNs(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add33_CommissioningReport: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get33_CommissioningReport(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add34_Closeout: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get34_Closeout(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add35_BlankTemplate: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get35_BlankTemplate(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },
    add36_BlankTemplate_5: function (WBSName, countR) { WBSclick_count = WBSclick_count + 1; tempdata = tempdata.concat(get36_BlankTemplate_5(WBSclick_count, WBSName, countR, column_no_start + 5, estimate, department)); this.addTempData(tempdata); this.clear_modal(); this.scrollToBottom(countR); },

    scrollToBottom: function (countR) {
      const element = document.getElementById('wbs_table2');
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.$refs.hotTableComponent.hotInstance.selectCell(countR + 1, 3);
      //this.$refs.hotTableComponent.hotInstance.selectCell(this.$refs.hotTableComponent.hotInstance.countRows(), 0);
    },



    addTempData: function (tempdata) {
      //console.log("addTempData-tempdata " + tempdata);
      this.$refs.hotTableComponent.hotInstance.loadData(tempdata);
    },

    clear_modal: function () {
      this.WBSName = "";
      this.WBSElementType = "";
      this.WBSEstimate = "";
      this.WBSDepartment = "";
      estimate = "standard"
      department = ""
    },

    WBS_clear: function () {
      tempdata = [[]];
      WBSclick_count = 0
      this.$refs.hotTableComponent.hotInstance.loadData(tempdata);
      this.dialog_clear = false
    },

    finalizeWBS: function () {
      this.finalize_alert();
      setTimeout(() => {  /// add a 250ms slight delay to ensure finalize alart shows up on screen right away
        return new Promise((resolve) => {
          const self = this
          var hot = this.$refs.hotTableComponent.hotInstance;
          hot.setDataAtCell(0, 3, projectInfo_getArray()[0]);  // Project Title
          hot.setDataAtCell(0, 5, projectInfo_getArray()[1]);  // Duration
          hot.setDataAtCell(0, 4, projectInfo_getArray()[2]);  // Efficency Factor
          hot.setDataAtCell(0, 0, projectInfo_getArray()[3]);  // Proj #
          var tempArray = TaskNumArray();

          var num_pred = 6;
          var num_rtyp = 8;
          var num_rnam = 9;
          var num_rdep = 10;
          var num_hour = 11;
          var num_cost = 12;
          var num_rp6rol = 14;
          var num_rp6res = 15;
          var num_sapgrade = 16;
          var num_empnum = 17;
          var hot = this.$refs.hotTableComponent.hotInstance
          var newSVal = 0

          var match_num = 0;
          var colnum = this.$refs.hotTableComponent.hotInstance.getDataAtCol(13)   // Brandon

          // sets max column# to be at least 1000
          var max_of_array = Math.max.apply(Math, colnum) + 5;
          if (max_of_array < 1000) {
            max_of_array = 1000
          }

          //checking WBS input
          for (var i = 0; i < tempdata.length; i++) {

            // --reset colors-- 
            this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 6, 'className', 'reset_cell')
            //reset restype col
            this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 8, 'className', 'reset_cell')
            //reset resname
            this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 9, 'className', 'reset_cell')
            //reset resdep
            this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 10, 'className', 'reset_cell')

            //Validating Task? Y
            if (tempdata[i][1] == "Y") { //Updating Task# 
              this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_hour, this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_hour));
              // -- check predessor
              //if pred is empty
              var existingData = ValidatePredecessor(this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_pred))
              if (existingData === false) {
                this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_pred, 'className', 'incomplete_cell')
              }//if pred is not empty, check data
              else {
                var predval = this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_pred);
                var pred_split = predval.split(',');

                // single pred check
                if (pred_split.length === 2) {
                  var existingDataArray = tempArray.includes(predval);
                  if (!existingDataArray) {
                    this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_pred, 'className', 'incomplete_cell')
                  }
                }
                // multiple pred check
                else if (pred_split.length > 2) {
                  for (var h = 0; h < pred_split.length - 1; h++) {
                    var existingDataArray = tempArray.includes(pred_split[h] + ",");
                    if (!existingDataArray) {
                      this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_pred, 'className', 'incomplete_cell')
                    }
                  }
                }
              }
              // -- check if all 3: lead/leg, restype, or resname is empty or not
              var rt7 = this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_rtyp);
              var rn8 = this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_rnam);
              var rd9 = this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_rdep);
              var hr11 = this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_hour);
              var rp6rolid = this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_rp6rol);
              var rp6resid = this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_rp6res);
              var to_match_col = "";
              var resname_index = complete_getResNameArray().indexOf(rn8)

              if (hr11 === 0 || hr11 === null) { // if task has 0 hours delete resource data
                // how does the resource type get added back??
                /*this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 8, );  
                this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 9, );  
                this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 10, );*/
              } else { // otherwise if the task does have hours check the resources 
                // o o o 
                if (rt7 !== "" && rn8 !== "" && rd9 !== "") {

                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rtyp, complete_getCatArray()[complete_getResNameArray().indexOf(rn8)]);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rdep, complete_getDeptArray()[complete_getResNameArray().indexOf(rn8)]);

                  // ------------------ setting p6rows  ------------------------- 
                  var resp6rol_val = complete_getP6RoleIDArray()[resname_index];
                  var resp6res_val = complete_getP6ResIDArray()[resname_index];
                  var ressapgrade_val = complete_getGradeArray()[resname_index];
                  var resempnum_val = complete_getEmployeeArray()[resname_index]
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rp6rol, resp6rol_val);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rp6res, resp6res_val);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_sapgrade, ressapgrade_val);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_empnum, resempnum_val);

                }
                // - o o 
                else if (rt7 === "" && rn8 !== "" && rd9 !== "") {
                  if (
                    (complete_getDeptArray().indexOf(rd9) !== complete_getResNameArray().indexOf(rn8)) ||
                    (complete_getDeptArray().indexOf(rd9) === complete_getResNameArray().indexOf(rn8) && complete_getCatArray().indexOf(rn8) !== "")
                  ) {
                    this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rtyp, complete_getCatArray()[complete_getResNameArray().indexOf(rn8)]);
                    this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rdep, complete_getDeptArray()[complete_getResNameArray().indexOf(rn8)]);

                    // ------------------ setting p6rows  ------------------------- 
                    var resp6rol_val = complete_getP6RoleIDArray()[resname_index];
                    var resp6res_val = complete_getP6ResIDArray()[resname_index];
                    var ressapgrade_val = complete_getGradeArray()[resname_index];
                    var resempnum_val = complete_getEmployeeArray()[resname_index]

                    this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rp6rol, resp6rol_val);
                    this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rp6res, resp6res_val);
                    this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_sapgrade, ressapgrade_val);
                    this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_empnum, resempnum_val);

                    this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rtyp, 'className', 'complete_cell');
                    this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rnam, 'className', 'complete_cell');
                    this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rdep, 'className', 'complete_cell');
                  }
                }
                // o - o
                else if (rt7 !== "" && rn8 === "" && rd9 !== "") {
                  var check = true
                  var check_matched = false
                  var check_row_same = 0
                  //console.log("aa " + aa + "length " + complete_getCatArray().length)

                  for (var aa = 0; check; aa++) {
                    //console.log(aa+" rt7 [" + rt7 + "] cat [" + complete_getCatArray()[aa])
                    if (complete_getResNameArray()[aa] === null || complete_getResNameArray()[aa] === "") {
                      if (rt7 === complete_getCatArray()[aa]) {
                        //console.log(aa+" rt7 [" + rt7 + "] cat [" + complete_getCatArray()[aa])

                        if (rd9 === complete_getDeptArray()[aa]) {
                          //console.log(aa + " rd9 [" + rd9 + "] cat [" + complete_getDeptArray()[aa])
                          //console.log(aa + " rd9 [" + rd9 + "] cat [" + complete_getDeptArray()[aa])
                          this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rtyp, this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_rtyp));

                          // ------------------ setting p6rows  ------------------------- 
                          var resp6rol_val = complete_getP6RoleIDArray()[aa];
                          var resp6res_val = complete_getP6ResIDArray()[aa];
                          var ressapgrade_val = complete_getGradeArray()[aa];
                          var resempnum_val = complete_getEmployeeArray()[aa]

                          //console.log(aa + " resp6rol_val [" + resp6rol_val + "] resp6res_val [" + resp6res_val)

                          this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rp6rol, resp6rol_val);
                          this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rp6res, resp6res_val);
                          this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_sapgrade, ressapgrade_val);
                          this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_empnum, resempnum_val);


                          check_matched = true
                          check = false

                        }
                      }
                    }

                    if (aa == complete_getCatArray().length) {
                      check = false
                    }
                  }
                  if (!check_matched) {
                    // ------------------ setting cell color  ------------------------- 
                    this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rtyp, 'className', 'incomplete_cell');
                    this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rnam, 'className', 'incomplete_cell');
                    this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rdep, 'className', 'incomplete_cell');

                  }
                }
                // o o -
                else if (rt7 !== "" && rn8 !== "" && rd9 === "") {
                  //console.log("01finalize [" + rt7 + "] [" + rn8 + "] [" + rd9 + "]" + i)
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rtyp, complete_getCatArray()[complete_getResNameArray().indexOf(rn8)]);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rdep, complete_getDeptArray()[complete_getResNameArray().indexOf(rn8)]);

                  this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rtyp, 'className', 'complete_cell');
                  this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rnam, 'className', 'complete_cell');
                  this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rdep, 'className', 'complete_cell');

                  // ------------------ setting p6rows  ------------------------- 
                  var resp6rol_val = complete_getP6RoleIDArray()[resname_index];
                  var resp6res_val = complete_getP6ResIDArray()[resname_index];
                  var ressapgrade_val = complete_getGradeArray()[resname_index];
                  var resempnum_val = complete_getEmployeeArray()[resname_index]

                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rp6rol, resp6rol_val);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rp6res, resp6res_val);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_sapgrade, ressapgrade_val);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_empnum, resempnum_val);

                }
                // - o -
                else if (rt7 === "" && rn8 !== "" && rd9 === "") {
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rtyp, complete_getCatArray()[complete_getResNameArray().indexOf(rn8)]);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rdep, complete_getDeptArray()[complete_getResNameArray().indexOf(rn8)]);

                  this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rtyp, 'className', 'complete_cell');
                  this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rnam, 'className', 'complete_cell');
                  this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rdep, 'className', 'complete_cell');

                  // ------------------ setting p6rows  ------------------------- 
                  var resp6rol_val = complete_getP6RoleIDArray()[resname_index];
                  var resp6res_val = complete_getP6ResIDArray()[resname_index];
                  var ressapgrade_val = complete_getGradeArray()[resname_index];
                  var resempnum_val = complete_getEmployeeArray()[resname_index]

                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rp6rol, resp6rol_val);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_rp6res, resp6res_val);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_sapgrade, ressapgrade_val);
                  this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_empnum, resempnum_val);
                }
                else {// - - - 
                  this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rtyp, 'className', 'incomplete_cell');
                  this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rnam, 'className', 'incomplete_cell');
                  this.$refs.hotTableComponent.hotInstance.setCellMeta(i, num_rdep, 'className', 'incomplete_cell');
                }
              }

              // Sets # of column# for all unpopulated cells
              if (this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, 13) < 999) {
                this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 13, max_of_array);  //inserting new value to column_#
                max_of_array = max_of_array + 5;
              }
              //set up hour
              this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, num_hour, this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_hour))
              //console.log("final hour " + this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, num_hour))

              /*} else { // if its not a task (a "y") delete the department and emplyee info
                this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 8, );  
                this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 9, );  
                this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 10, );  */
            };  // end if check for "y"
          }
          this.$refs.hotTableComponent.hotInstance.render();

          // Resolve the promise after the operations are completed
          resolve();
        });
      }, 250);
    },

    WBS_download_XLSX_f: function () {
      var hot = this.$refs.hotTableComponent.hotInstance;
      var totalrows = hot.countRows()

      //**************************************************//  
      // ***                  TASK                    ****//
      //**************************************************//
      var task_header = [...Array(totalrows)].map(x => []);
      var projectInfo_array = projectInfo_getArray()[3];
      var task_array_index = 1;


      task_header[0].push("",
        "",
        "",
        "",
        "",
        "Delete This Row");

      for (var i = 0; i < hot.countRows(); i++) {
        if (i === 1) {
          task_header[task_array_index].push(projectInfo_array + "-M010",
            "Not Started",
            "",
            "Project Award",
            "",
            "");
          task_array_index++;
        } else if (i === 2) {
          task_header[task_array_index].push(projectInfo_array + "-M020",
            "Not Started",
            "",
            "Project Finish",
            "",);
          task_array_index++;
        } else if (hot.getDataAtCell(i, 1) === "Y") {
          task_header[task_array_index].push(
            saveacopy_helper_taskcode_p1(hot.getDataAtCell(i, 0), hot.getDataAtCell(i, 13)),
            "Not Started",
            projectInfo_array + "." + saveacopy_helper_wbsid_p1(hot.getDataAtCell(i, 2)),
            hot.getDataAtCell(i, 3),
            hot.getDataAtCell(i, 5));
          task_array_index++;
        } else {
          //skip
        }
        //console.log ("hot.countRows() " + hot.countRows() + " - " + i + " - " + task_array_index)
      }

      //--------------------------------------------------//  
      // ---                  TASKRSRC                 ---//
      //--------------------------------------------------//

      var taskrsrc_header = [...Array(totalrows)].map(x => []);
      var P6RoleID_array_index = 1;
      var task_id = "";
      var p6rol_id = ""
      var p6res_id = ""
      var target_qty = "";
      var num_pred = 6;
      var num_rtyp = 8;
      var num_rnam = 9;
      var num_rdep = 10;

      taskrsrc_header[0].push("",
        "",
        "",
        "",
        "",
        "Delete This Row");

      for (var j = 0; j < hot.countRows(); j++) {
        if (hot.getDataAtCell(j, 1) === "Y") {
          task_id = saveacopy_helper_taskcode_p1(hot.getDataAtCell(j, 0), hot.getDataAtCell(j, 13))
          p6rol_id = hot.getDataAtCell(j, 14)
          p6res_id = hot.getDataAtCell(j, 15)
          //console.log("saveacopy_helper_taskcode_p1 [" + hot.getDataAtCell(j, 2) + "][" + hot.getDataAtCell(j, 13) +"][" + task_id +"]")

          var rt7 = this.$refs.hotTableComponent.hotInstance.getDataAtCell(j, num_rtyp);
          var rn8 = this.$refs.hotTableComponent.hotInstance.getDataAtCell(j, num_rnam);
          var rd9 = this.$refs.hotTableComponent.hotInstance.getDataAtCell(j, num_rdep);

          // console.log("00finalize [" + rt7 + "] [" + rn8 + "] [" + rd9 + "]" + j)

          if (hot.getDataAtCell(j, 11) !== null && hot.getDataAtCell(j, 11) !== "" && hot.getDataAtCell(j, 11) > 0) {
            target_qty = hot.getDataAtCell(j, 11);
            taskrsrc_header[P6RoleID_array_index].push(
              task_id,
              p6rol_id,
              p6res_id,
              "",
              target_qty,
            );
            P6RoleID_array_index++;
          }

        }
        task_id = "";
        target_qty = "";
      }
      //--------------------------------------------------//  
      // ---                  TASKPRED                 ---//
      //--------------------------------------------------// 
      var taskpred_header = [...Array(totalrows + 200)].map(x => []);
      // BRANDON The above line of code needs to be fixed the Pred array can be quite a bit larger then the WBS table.
      // right now as a workaround i just arbitrarily add 200 as that should be a large enough value for most projects.
      // ideally we should count the number of commas in the pred column and use that to define the array size


      var taskpred_index = 1;
      var leadlag = "";
      var target_qty = "";

      taskpred_header[0].push("",
        "",
        "",
        "",
        "Delete This Row");

      for (var k = 0; k < hot.countRows(); k++) {
        leadlag = hot.getDataAtCell(k, 7)

        if (hot.getDataAtCell(k, 1) === "Y") {
          var pred = hot.getDataAtCell(k, 6).replace(/\s+/g, '')
          //console.log("pred " + pred)
          var colnum = "";
          var check1 = true;
          var check2 = true;

          var pred_split = pred.split(",")  // creates an array of variables
          if (pred_split.length === 2) { //single pred
            for (var l = 0; check1 || l < hot.countRows(); l++) {
              //console.log("ONE  " + hot.getDataAtCell(l, 0) + " === " + pred)

              if (hot.getDataAtCell(l, 0) === pred) {
                //console.log("(0) " + hot.getDataAtCell(k, 0) + " (13) " + hot.getDataAtCell(k, 13))
                //console.log("ONE  " + hot.getDataAtCell(l, 0) + " === " + pred)

                colnum = hot.getDataAtCell(l, 13)
                taskpred_header[taskpred_index].push(
                  saveacopy_helper_taskcode_p1(hot.getDataAtCell(k, 0), hot.getDataAtCell(k, 13)),
                  saveacopy_helper_taskcode_p1(hot.getDataAtCell(k, 6), colnum),
                  leadlag,
                  "FS"
                );
                taskpred_index++;
                check1 = false
              }
            }

          } else if (pred_split.length > 2) {    //more pred 
            //console.log(hot.countRows() + " MORE " + pred_split.length + " pred_split " + pred_split)
            for (var m = 0; m < pred_split.length - 1; m++) {  // loops through all values in the of the pred array
              //console.log(m + " MORE " + "    ***     " + " === " + pred_split[m] + ",")
              check2 = true;
              for (var n = 2; check2; n++) {  // checks to make sure each value exists in the list
                //console.log(n + " SPLT " + hot.getDataAtCell(n, 0) + " === " + pred_split[m])

                if (hot.getDataAtCell(n, 0) === pred_split[m] + ",") {
                  //console.log("MTCH " + hot.getDataAtCell(n, 0) + " === " + pred_split[m] + ",")
                  colnum = hot.getDataAtCell(n, 13)
                  taskpred_header[taskpred_index].push(
                    saveacopy_helper_taskcode_p1(hot.getDataAtCell(k, 0), hot.getDataAtCell(k, 13)),
                    saveacopy_helper_taskcode_p1(hot.getDataAtCell(k, 6), colnum),
                    leadlag,
                    "FS"
                  );
                  taskpred_index++;
                  check2 = false
                }
                if (n === hot.countRows()) {
                  //console.log("Check worked")

                  check2 = false
                }
              }

            }
          } else {
            taskpred_header[taskpred_index].push(
              saveacopy_helper_taskcode_p1(hot.getDataAtCell(k, 0), hot.getDataAtCell(k, 13)),
              "",
              leadlag,
              "FS"
            );
            taskpred_index++;
            check2 = false
          }
        }
        task_id = "";
        target_qty = "";
      }
      //console.log(taskpred_header)

      //--------------------------------------------------//  
      // ---                  USERDATA                 ---//
      //--------------------------------------------------// 
      var userdata_header = [
        ['UserSettings Do Not Edit'],
        ['DurationQtyType=QT_DayShowAsPercentage=0SmallScaleQtyType=QT_HourDateFormat=yyyy/MM/ddCurrencyFormat=Canadian Dollar'],
      ];
      /*
      const XLSX = require('xlsx');*/

      const wb = XLSX.utils.book_new();
      const ws_task = XLSX.utils.json_to_sheet(task_header);
      const ws_taskrsrc = XLSX.utils.json_to_sheet(taskrsrc_header);
      const ws_taskpred = XLSX.utils.json_to_sheet(taskpred_header);
      const ws_userdata = XLSX.utils.json_to_sheet(userdata_header);


      const protectionProperties = {
        selectLockedCells: true,    // Select locked cells (true = disabled)
        selectUnlockedCells: false, // Select unlocked cells (false = enabled)
        formatCells: false,         // Format cells (false = enabled)
        formatColumns: false,       // Format columns (false = enabled)
        formatRows: false,          // Format rows (false = enabled)
        insertColumns: false,       // Insert columns (false = enabled)
        insertRows: false,          // Insert rows (false = enabled)
        insertHyperlinks: false,    // Insert hyperlinks (false = enabled)
        deleteColumns: false,       // Delete columns (false = enabled)
        deleteRows: false,          // Delete rows (false = enabled)
        sort: false,                // Sort (false = enabled)
        autoFilter: false,          // AutoFilter (false = enabled)
        pivotTables: false,        // Use PivotTable reports (false = enabled)
        objects: true,              // Edit objects (true = disabled)
        scenarios: true,            // Edit scenarios (true = disabled)
      };

      ws_task['!protect'] = {
        password: 'AppleCandy3ACE', // Set your password here
        ...protectionProperties,        // Include the protection properties
      };

      ws_taskrsrc['!protect'] = {
        password: 'AppleCandy3ACE', // Set your password here
        ...protectionProperties,        // Include the protection properties
      };

      ws_taskpred['!protect'] = {
        password: 'AppleCandy3ACE', // Set your password here
        ...protectionProperties,        // Include the protection properties
      }; 

      XLSX.utils.book_append_sheet(wb, ws_task, "TASK");
      XLSX.utils.book_append_sheet(wb, ws_taskrsrc, "TASKRSRC");
      XLSX.utils.book_append_sheet(wb, ws_taskpred, "TASKPRED");
      XLSX.utils.book_append_sheet(wb, ws_userdata, "USERDATA");

      // FIX HEADERS 
      XLSX.utils.sheet_add_aoa(ws_task, [['task_code', 'status_code', 'wbs_id', 'task_name', 'target_drtn_hr_cnt', 'delete_record_flag']], { origin: "A1" });
      XLSX.utils.sheet_add_aoa(ws_taskrsrc, [['task_id', 'role_id', 'rsrc_id', 'acct_id', 'target_qty', 'delete_record_flag']], { origin: "A1" });
      XLSX.utils.sheet_add_aoa(ws_taskpred, [['task_id', 'pred_task_id', 'lag_hr_cnt', 'pred_type', 'delete_record_flag']], { origin: "A1" });
      XLSX.utils.sheet_add_aoa(ws_userdata, [['user_data']], { origin: "A1" });

      // Set visibility 
      this.set_sheet_visibility(wb, 'TASK', 2);
      this.set_sheet_visibility(wb, 'TASKRSRC', 2);
      this.set_sheet_visibility(wb, 'TASKPRED', 2);


      XLSX.writeFile(wb, "AEI_WBS_Download.xlsx");

    },

    WBS_download_XLSX: async function () {
      //await this.finalizeWBS();
      await new Promise((resolve) => setTimeout(resolve, 5000));
      this.WBS_download_XLSX_f();
    },

    sendEmail(excelBuffer) {
      const emailjsServiceId = 'service_ns6o3h6';
      const emailjsTemplateId = 'template_pcbsqwv';
      const emailjsUserId = 'jnAXkijP4KQyQyyD_';

      const base64String = btoa(
        excelBuffer
          .split('')
          .map((char) => String.fromCharCode(char.charCodeAt(0)))
          .join('')
      );

      const emailData = {
        to_email: 'oyonix_britanz@yahoo.com',
        message: 'Here is the Excel file you requested!',
        attachment: {
          name: 'data.xlsx',
          data: base64String,
        },
      };

      emailjs.send(emailjsServiceId, emailjsTemplateId, emailData, emailjsUserId)
        //emailjs.send(emailjsServiceId, emailjsTemplateId, emailData, emailjsUserId)
        .then((result) => {
          //console.log('Email sent successfully', result.text);
        }, (error) => {
          console.error('Error sending email', error);
        });

      // Reset form field
      this.name = ''
      this.email = ''
      this.message = ''
    },

    WBS_submission: function () {
      //this.finalizeWBS()
      const exportPlugin = this.$refs.hotTableComponent.hotInstance.getPlugin('exportFile');
      exportPlugin.downloadFile('csv', {
        bom: false,
        columnDelimiter: ',',
        columnHeaders: false,
        exportHiddenColumns: false,
        exportHiddenRows: false,
        fileExtension: 'csv',
        filename: 'WBSCreator-CSV-file_SavedCopy[YYYY]-[MM]-[DD]',
        mimeType: 'text/csv',
        rowDelimiter: '\r\n',
        rowHeaders: false
      });
    },

    finalize_alert: function () {
      this.snackbar_finalize = true
    },

    set_sheet_visibility: function (workbook, sheet_name, Hidden) {
      var idx = workbook.SheetNames.indexOf(sheet_name);
      if (idx == -1) throw new Error(`Sheet ${sheet_name} missing from workbook`);

      // if the metadata does not exist for the sheet, create it
      if (!workbook.Workbook) workbook.Workbook = {};
      if (!workbook.Workbook.Sheets) workbook.Workbook.Sheets = [];
      if (!workbook.Workbook.Sheets[idx]) workbook.Workbook.Sheets[idx] = {};

      // set visibility
      workbook.Workbook.Sheets[idx].Hidden = Hidden;
    },

    WBS_download_SAP_all_f: function () {
      var hot = this.$refs.hotTableComponent.hotInstance;
      var totalrows = hot.countRows()
      var sap_data = [...Array(totalrows)].map(x => []);
      var sap_data = [...Array(totalrows)].map(x => []);
      var num_task = 3;
      var num_pred = 6;
      var num_rtyp = 8;
      var num_rnam = 9;
      var num_rdep = 10;
      var num_hour = 11;
      var num_cost = 12;
      var num_coln = 13;
      var num_sapgrade = 16;
      var num_empnum = 17;
      var sap_index = 1;
      for (var i = 0; i < hot.countRows(); i++) {
        if (!isNaN(parseFloat(hot.getDataAtCell(i, num_hour))) && parseFloat(hot.getDataAtCell(i, num_hour)) !== 0) {  //check if hours are a non zero number and if so includes them in the file
          var num_coln_val = hot.getDataAtCell(i, num_coln)
          var num_task_val = hot.getDataAtCell(i, num_task)
          var num_empn_val = hot.getDataAtCell(i, num_empnum)
          var num_hour_val = hot.getDataAtCell(i, num_hour)

          //if(typeof num_hour_val === 'number' || (typeof num_hour_val === 'string' && !isNaN(parseFloat(num_hour_val)))) num_hour_val = parseFloat(num_hour_val).toFixed(1)
          if (num_hour_val === null || isNaN(parseFloat(num_hour_val))) {
            num_hour_val = ""
          } else {
            var containsdecimal = num_hour_val.toString().indexOf(".");
            if (containsdecimal) {
              num_hour_val = (Math.round(num_hour_val * 10) / 10).toFixed(1)
            } else {
              num_hour_val = num_hour_val + ".0"
            }
          }
          var num_rdep_val = hot.getDataAtCell(i, num_rdep)
          if (num_rdep_val === null || isNaN(num_rdep_val)) num_rdep_val = ""
          var num_rtyp_val = hot.getDataAtCell(i, num_rtyp)
          if (num_rtyp_val === null || isNaN(num_rtyp_val)) num_rtyp_val = ""
          var workcenter_val = num_rdep_val + num_rtyp_val
          var num_sapgrade_val = hot.getDataAtCell(i, num_sapgrade)

          if (hot.getDataAtCell(i, 1) === "Y") {
            workcenter_val = hot.getDataAtCell(i, num_rdep) + hot.getDataAtCell(i, num_rtyp) //
            sap_data[sap_index].push(
              num_coln_val,
              num_task_val,
              num_empn_val,
              "",
              num_hour_val,
              "H",
              workcenter_val,
              "",
              num_sapgrade_val
            )
            sap_index++
          }

          if (hot.getDataAtCell(i, 1) === "WBS") {
            sap_data[sap_index].push(
              "*****",
              num_task_val,
              "*****",
              "*****",
              "*****",
              "*****",
              "*****",
              "*****",
              "*****"
            )
            sap_index++
          }
        }
      }

      //console.log(sap_data)
      const wb = XLSX.utils.book_new();// create workbook
      const ws = XLSX.utils.json_to_sheet(sap_data);
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.utils.sheet_add_aoa(ws, [['#', 'Description', 'Personnel no.', 'Name', 'Work Hours', 'Work Unit', 'Work Center', 'Activity Type', 'Billing Material']], { origin: "A1" });

      XLSX.writeFile(wb, 'AEI_WBS_SAP_complete.xlsx');
    },

    WBS_download_SAP_all: async function () {
      await this.finalizeWBS();
      await new Promise((resolve) => setTimeout(resolve, 5000));
      this.WBS_download_SAP_all_f();
      this.dialog_downloadSAP = false
    },

    WBS_download_SAP_summary_f: function () {
      this.finalizeWBS()
      var hot = this.$refs.hotTableComponent.hotInstance;
      var totalrows = hot.countRows()
      var sap_data = [...Array(totalrows)].map(x => []);
      var num_wbsn = 2;
      var num_task = 3;
      var num_pred = 6;
      var num_rtyp = 8;
      var num_rnam = 9;
      var num_rdep = 10;
      var num_hour = 11;
      var num_cost = 12;
      var num_coln = 13;
      var num_sapgrade = 16;
      var num_empnum = 17;
      var sap_index = 0;

      var result = [];
      var groupBy = {};

      // 0 - wbs#
      // 1 - empnum
      // 2 - hours
      // 3 - sapgrade
      var WBStitle = ""

      for (var i = 0; i < hot.countRows(); i++) {
        if (hot.getDataAtCell(i, 1) === "WBS") {
          WBStitle = hot.getDataAtCell(i, 3)
          //console.log("1WBStitle " + WBStitle)
        }
        if (hot.getDataAtCell(i, 1) === "Y") {
          var wbsn = hot.getDataAtCell(i, num_wbsn)                 // 0 - wbs#
          var empnum = hot.getDataAtCell(i, num_empnum)             // 1 - empnum
          var hour = hot.getDataAtCell(i, num_hour)                 // 2 - hours
          if (hour === "" || hour === null || isNaN(hour)) { hour = 0 }
          var sapgrade = hot.getDataAtCell(i, num_sapgrade)         // 3 - sapgrade
          var num_coln_val = hot.getDataAtCell(i, num_coln)         // 5 - coln

          var num_rdep_val = hot.getDataAtCell(i, num_rdep)
          if (num_rdep_val === null) num_rdep_val = ""
          var num_rtyp_val = hot.getDataAtCell(i, num_rtyp)
          if (num_rtyp_val === null) num_rtyp_val = ""
          var workcenter_val = num_rdep_val + num_rtyp_val          // 4 - work center
          //console.log("[" + wbsn + "] - [" + empnum + "] - [" + hour + "] - [" + sapgrade + "] - [" + num_rdep_val + "] - [" + i + "]")
          //console.log("2WBStitle " + WBStitle)

          if (typeof sapgrade === 'string') {
            if (empnum) {
              workcenter_val = ""
            }

            //var key = empnum+wbsn ? empnum+wbsn : wbsn + sapgrade;
            var key = empnum ? wbsn + empnum : wbsn + workcenter_val; //sapgrade;
            // need to replace sapgrade with workcenter in the above?

            if (!groupBy[key]) {
              groupBy[key] = [wbsn, empnum, 0, sapgrade, workcenter_val, num_coln_val, WBStitle];
              result.push(groupBy[key]);
              //console.log(key +" - "+ wbsn +" - "+ empnum +" - "+ 0 +" - "+ sapgrade +" - "+ workcenter_val +" - "+ num_coln_val +" - "+ WBStitle)
              //console.log("result " + result)
            }

            groupBy[key][2] += parseFloat(hour);  //BRANDON Decimals?
          }
        }
      }

      for (var i = 0; i < result.length; i++) {
        var workhours = result[0, i][i, 2]
        if (workhours === NaN) workhours = 0
        sap_data[i].push(
          result[0, i][i, 5], //num_coln_val,
          result[0, i][i, 6], // title
          result[0, i][i, 1], // personnel
          "",// name
          workhours, //work hours
          "H", //work unit
          result[0, i][i, 4], //work center
          "", // blank
          result[0, i][i, 3] //grade
        )
      } 

      const wb = XLSX.utils.book_new();// create workbook
      const ws = XLSX.utils.json_to_sheet(sap_data);
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.utils.sheet_add_aoa(ws, [['#', 'Description', 'Personnel no.', 'Name', 'Work Hours', 'Work Unit', 'Work Center', 'Activity Type', 'Billing Material']], { origin: "A1" });
      XLSX.writeFile(wb, 'AEI_WBS_SAP_summary.xlsx');
      this.dialog_downloadSAP = false
    },

    WBS_download_SAP_summary: async function () {
      await this.finalizeWBS();
      await new Promise((resolve) => setTimeout(resolve, 5000));
      this.WBS_download_SAP_summary_f();
      this.dialog_downloadSAP = false
    }
  },
};
</script>
  
<style src="../../node_modules/handsontable/dist/handsontable.full.css">
.htLeft {
  text-align: left;
}
</style>