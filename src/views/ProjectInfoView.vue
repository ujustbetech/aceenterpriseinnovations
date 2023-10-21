  /********************************************************
*	      Project name: WBS_Creator					              *
*	      Project by: Nesabyte						                *
*	      Project for: McLean Innovations                 * 
*	      DATE: Feb 2023										              *
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
          <h3>Project info has been applied!</h3> <br>
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
            APPLY
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
import { projectInfo_setArray } from "../utils/ProjectInfo/info_project.ts";
import { projectInfo_resetArray } from "../utils/ProjectInfo/info_project.ts";


// register Handsontable's modules
registerAllModules();
var tempdata = [
  ["Test Project"],
  ["25"],
  ["0.8", "Any value between 0.1 and 1."],
  ["ABC-123", "Can be a combination of numbers, letters or symbols. Must match P6 Project # exactly."],
  ["00", "Any value between 00 and 99."],
  ["Client", ""]];
var tempdata2 = [[], [], [], [], []];
var ApplyCount = 0;

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

export default {
  name: "",
  components: { HotTable, HotColumn },
  props:
    ['projectInfo'],
  data: function () {
    return {
      hotSettings: {
        licenseKey: "non-commercial-and-evaluation",
        rowHeaders: true,
        rowHeaderWidth: 200,
        persistentState: true,
        rowHeaders: [
          "Project Name",
          "Project Duration (in weeks)",
          "Efficiency Factor",
          "Project # / P6 Project #",
          "Revision Number",
          "Client"
        ],
        columns: [
          { data: 0, type: "text", className: 'htLeft' },
          { data: 1, type: "text", readOnly: true },

        ],
        //cell: [{ row: 0, col: 0, className: 'htLeft' },],
        colWidths: [250, 400],
      },
      outsideClickDeselects: false,
      data: tempdata,
      projectInfo_arr: this.projectInfo,
      snackbar_applied: false,
    }
  },
  methods: {
    WBS_clear: function () {
      tempdata = [[""], [""], [""], [""], [""]];
      this.$refs.hotTableComponent.hotInstance.loadData(tempdata);
    },
    WBS_submission: function () {
      var checkifgood = true;
      for (var i = 0; i < tempdata.length; i++) {
        
        // Efficiency Factor
        if (i === 2) {
          var eff_fact = this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, 0)
          var eff_fact_split = eff_fact.split('.');

          // Check the format of the Efficiency Factor
          if (eff_fact_split.length === 2) {
            if (isNumeric(eff_fact_split[0]) || isNumeric(eff_fact_split[1])) {  // Check if the split parts are numeric
              if (Number(eff_fact_split[0]) === 1 &&
                (Number(eff_fact_split[1]) === 0 || eff_fact_split[1] == "")
              ) {
                //console.log(Number(eff_fact[0]) + " = " + Number(eff_fact[1]))//+this.$refs.hotTableComponent.hotInstance.getDataAtCol(0))
                this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'complete_cell');
                this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'complete_cell');
                //var eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Accepted")
              } else if (
                (Number(eff_fact_split[0]) === 0 || eff_fact_split[0] === "") &&
                (Number(eff_fact_split[1]) >= 1 && Number(eff_fact_split[1]) <= 100)
              ) {
                this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'complete_cell');
                this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'complete_cell');
                //var eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Accepted")
              } else {
                this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'incomplete_cell');
                this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'incomplete_cell');
                var checkifgood = false;
                //var eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Please redo. Note: Please enter values between 0.1 and 1 only.")
              }
            } else {
              this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'incomplete_cell');
              this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'incomplete_cell');
              var checkifgood = false;
              v//ar eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Please redo. Note: Please enter values between 0.1 and 1 only.")
            }
          } else if (eff_fact === "1") {
            this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'complete_cell');
            this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'complete_cell');
            //var eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Accepted")
          } else {
            this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'incomplete_cell');
            this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'incomplete_cell');
            var checkifgood = false;
            //var eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Please redo. Note: Please enter values between 0.1 and 1 only.")
          }

        // Duration
        } else if (i === 1) {
            var revision = this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, 0)

            if (isNumeric(revision)) {
              if (Number(revision) >= 1) {
                this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'complete_cell');
                this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'complete_cell');
                //var eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Accepted")
              } else {
                this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'incomplete_cell');
                this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'incomplete_cell');
                var checkifgood = false;
                //var eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Please redo. Note: Please enter values between 00 and 99 only.")
              }
            } else {
              this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'incomplete_cell');
              this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'incomplete_cell');
              var checkifgood = false;
              //var eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Please redo. Note: Please enter values between 00 and 99 only.")
            }
          
        // Revision
        } else if (i === 4) {
          var revision = this.$refs.hotTableComponent.hotInstance.getDataAtCell(i, 0)

          if (isNumeric(revision)) {
            if (Number(revision) >= 0 && Number(revision) <= 100) {
              this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'complete_cell');
              this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'complete_cell');
              //var eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Accepted")
            } else {
              this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'incomplete_cell');
              this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'incomplete_cell');
              var checkifgood = false;
              //var eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Please redo. Note: Please enter values between 00 and 99 only.")
            }
          } else {
            this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'incomplete_cell');
            this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 1, 'className', 'incomplete_cell');
            var checkifgood = false;
            //var eff_fact = this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Please redo. Note: Please enter values between 00 and 99 only.")
          }
        } else {
          this.$refs.hotTableComponent.hotInstance.setCellMeta(i, 0, 'className', 'complete_cell');
          this.$refs.hotTableComponent.hotInstance.setDataAtCell(i, 1, "Accepted")
        }
      }
      //set array 
      projectInfo_setArray(this.$refs.hotTableComponent.hotInstance.getDataAtCol(0));
      //this.snackbar_applied = true
  
      // Move User to Resource Setup Table on first use of speadsheet
      if (ApplyCount == 0) {
        ApplyCount++
        setTimeout(() => {
          if (checkifgood == true) {this.$router.push('/wbscreationtool/setupproject');}
        }, 1000);
      }
    }
  },
}; 
</script>


<style src="../../node_modules/handsontable/dist/handsontable.full.css">
.htLeft {
  text-align: left;
}
</style>