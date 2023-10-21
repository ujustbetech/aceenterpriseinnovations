/********************************************************
*	      Project name: WBS_Creator					              *
*	      Project by: Nesabyte						                *
*	      Project for: McLean Innovations                 * 
*	      DATE: Dec 2022										              *
********************************************************/
<template>
  <div id="setup_view" class="front setup_view">
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

        <v-snackbar v-model="snackbar_applied" multi-line>
          <h3>Resources have been applied!</h3> <br>
          <template v-slot:actions>
            <v-btn color="red" variant="text" @click="snackbar_applied = false">
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>

      <div class="button-row">
        <v-row justify="center">
        <v-btn color="primary" dark v-bind="attrs" @click="WBS_submission()" class="button-margin">
          APPLY RESOURCES
        </v-btn>
        <v-btn color="blue darken-1" text @click="WBS_clear()" class="button-margin">
          Clear
        </v-btn>
      </v-row>
      </div>
      
      <hot-table ref="hotTableComponent" :data="data" :settings="hotSettings"></hot-table>
    </div>
  </div>
</template>

<script>
import { HotTable, HotColumn } from "@handsontable/vue";
import { registerAllModules } from "handsontable/registry";
import { SetupCat } from "../utils/ResourceSetup/setup_cat_restype.ts";
import { SetupDept } from "../utils/ResourceSetup/setup_dept_resdep.ts";
import { SetupResname } from "../utils/ResourceSetup/setup_resname_resname.ts";

import { complete_setCatArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_setDeptArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_setResNameArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_setEmployeeArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_setBillrateArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_setP6RoleIDArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_setP6ResIDArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_setGradeArray } from "../utils/ResourceSetup/resourceSetup.ts";

import { complete_resetCatArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_resetDeptAArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_resetResNamerray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_resetEmployeeArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_resetBillrateArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_resetP6RoleIDArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_resetP6ResIDArray } from "../utils/ResourceSetup/resourceSetup.ts";
import { complete_resetGradeArray } from "../utils/ResourceSetup/resourceSetup.ts";

// register Handsontable's modules
registerAllModules();

var tempdata_setupview = [
  ["MP2", "MEC", "", "", "EJ002", "90.00", "E&C.Engr.ME", ""],
  ["MP3", "MEC", "", "", "EJ003", "115.00", "E&C.Engr.ME", ""],
  ["MP4", "MEC", "", "", "EJ004", "145.00", "E&C.Engr.ME", ""],

  ["MP2", "CIV", "", "", "EJ002", "90.00", "E&C.Civil/Structural", ""],
  ["MP3", "CIV", "", "", "EJ003", "115.00", "E&C.Civil/Structural", ""],
  ["MP4", "CIV", "", "", "EJ004", "145.00", "E&C.Civil/Structural", ""],

  ["MP2", "EIC", "", "", "EJ002", "90.00", "E&C.Engr.EE", ""],
  ["MP3", "EIC", "", "", "EJ003", "115.00", "E&C.Engr.EE", ""],
  ["MP4", "EIC", "", "", "EJ004", "145.00", "E&C.Engr.EE", ""],

  ["MP5", "MEC", "Emily Johnson", "81236", "MO005", "185.00", "", "MEC.81236"],
  ["MP5", "CIV", "Benjamin Rodriguez", "27451", "MO005", "185.00", "", "CIV.27451"],
  ["MP5", "EIC", "Tyler Baker", "62384", "MO005", "185.00", "", "EIC.62384"],
  ["MP5", "MGT", "Juan Ortiz", "93715", "MO006", "230.00", "", "MGT.93715"],
];
var ApplyCount = 0;

export default {
  name: "",
  components: { HotTable, HotColumn },
  props:
    ['cat_restype_nonnull', 'dept_resdep_nonnull', 'dept_resname_nonnull'],
  data: function () {
    return {
      hotSettings: {
        rowHeaders: true,
        licenseKey: "non-commercial-and-evaluation",
        minRows: 50,
        colHeaders: [
          "Resource Type",
          "Dept (Res Dep)",
          "Resource Name",
          "Employee#",
          "SAP Billing<br>Material",
          "Bill Rate",
          "P6 Role ID",
          "P6 Res ID",
        ],
        columns: [
          { data: 0, type: "text" },
          { data: 1, type: "text" },  // was numeric
          { data: 2, type: "text" },
          { data: 3, type: "numeric" },
          { data: 4, type: "text" },
          { data: 5, type: "numeric" },
          { data: 6, type: "text" },
          { data: 7, type: "text" },
        ],
        colWidths: [
          120, 120, 120, 120, 100, 100, 150, 100
        ],
      },
      outsideClickDeselects: false,
      data: tempdata_setupview,
      cat_restype_n: this.cat_restype_nonnull,
      dept_resdep_n: this.dept_resdep_nonnull,
      resname_resname_n: this.dept_resname_nonnull,
      employee_num_n: this.employee_num_nonnull,
      snackbar_applied: false,
    }
  },
  methods: {
    WBS_clear: function () {
      tempdata_setupview = [];
      this.$refs.hotTableComponent.hotInstance.loadData(tempdata_setupview);
    },
    WBS_submission: function () {

      //reset array
      complete_resetCatArray();
      complete_resetDeptAArray();
      complete_resetResNamerray();
      complete_resetEmployeeArray();
      complete_resetBillrateArray();
      complete_resetP6RoleIDArray();
      complete_resetP6ResIDArray();
      complete_resetGradeArray();

      var cat_restype = this.$refs.hotTableComponent.hotInstance.getDataAtCol(0);
      this.cat_restype_n = cat_restype.filter(n => n); //remove all null from array
      this.cat_restype_n = [...new Set(this.cat_restype_n)]; // remove duplicate value in the array
      this.cat_restype_n = [""].concat(this.cat_restype_n);//add null infront of array
      SetupCat(this.cat_restype_n);

      var dept_resdep = this.$refs.hotTableComponent.hotInstance.getDataAtCol(1);
      this.dept_resdep_n = dept_resdep.filter(n => n); //remove all null from array
      this.dept_resdep_n = [...new Set(this.dept_resdep_n)]; // remove duplicate value in the array
      this.dept_resdep_n = [""].concat(this.dept_resdep_n);//add null infront of array
      SetupDept(this.dept_resdep_n);

      var resname_resname = this.$refs.hotTableComponent.hotInstance.getDataAtCol(2);
      this.resname_resname_n = resname_resname.filter(n => n); //remove all null from array
      this.resname_resname_n = [...new Set(this.resname_resname_n)]; // remove duplicate value in the array
      this.resname_resname_n = [""].concat(this.resname_resname_n);//add null infront of array
      SetupResname(this.resname_resname_n);

      var empnum = this.$refs.hotTableComponent.hotInstance.getDataAtCol(3);
      var SAPgrade = this.$refs.hotTableComponent.hotInstance.getDataAtCol(4);
      var billrate = this.$refs.hotTableComponent.hotInstance.getDataAtCol(5);
      var P6RoleID = this.$refs.hotTableComponent.hotInstance.getDataAtCol(6);
      var P6ResID = this.$refs.hotTableComponent.hotInstance.getDataAtCol(7);

      for (var i = 0; i < cat_restype.length; i++) {
        if (
          ((cat_restype[i] !== "") || (dept_resdep[i] !== "") || (resname_resname[i] !== "")) &&
          ((cat_restype[i] !== null) || (dept_resdep[i] !== null) || (resname_resname[i] !== null))
        ) {
          complete_setCatArray(cat_restype[i]);//save complete table
          complete_setDeptArray(dept_resdep[i]);//save complete table
          complete_setResNameArray(resname_resname[i]);//save complete table

          // 3 ------------ employee # ------------
          if (empnum[i] === "" || empnum[i] === null) {
            complete_setEmployeeArray("");
          } else {
            complete_setEmployeeArray(empnum[i]);//save complete table
          }

          // 4 ------------ grade ------------
          if (SAPgrade[i] === "" || SAPgrade[i] === null) {
            complete_setGradeArray("");
          } else {
            complete_setGradeArray(SAPgrade[i]);//save complete table
          }

          // 5 ------------ billrate ------------
          if (billrate[i] === "" || billrate[i] === null) {
            complete_setBillrateArray("");
          } else {
            complete_setBillrateArray(billrate[i]);//save complete table
          }

          // 6 ------------ P6 Role ID ------------
          if (P6RoleID[i] === "" || P6RoleID[i] === null) {
            complete_setP6RoleIDArray("");
          } else {
            complete_setP6RoleIDArray(P6RoleID[i]);//save complete table
          }

          // 7 ------------ P6 Res ID ------------
          if (P6ResID[i] === "" || P6ResID[i] === null) {
            complete_setP6ResIDArray("");
          } else {
            complete_setP6ResIDArray(P6ResID[i]);//save complete table
          }
        }
        //this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'complete_cell');

        this.snackbar_applied = true
      }

      // Move User to WBS Table on first use of speadsheet
      if (ApplyCount == 0) {
        ApplyCount++
        setTimeout(() => {
          this.$router.push('/wbscreationtool/wbstable');
        }, 1500);
      }
      
    }
  },
}; 
</script>


<style src="../../node_modules/handsontable/dist/handsontable.full.css">
.handsontable .WBS_sub_css {
  background: #FFE699;
}

.handsontable .WBS_title_css {
  background-color: #305496;
  font-weight: bolder;
  color: white;
}

.front {
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
}

.complete_cell {
  background: rgb(155, 201, 165)
}
</style>