/********************************************************
*	      Project name: WBS_Creator					    *
*	      Project by: Nesabyte						    *
*	      Project for: McLean Innovations               * 
*	      DATE: Dec 2022						        *
********************************************************/

console.log("get5_WalkdownPlanReport")
export function get5_WalkdownPlanReport(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E ,                                 F ,G ,   H ,  I , J,  K , L   
        ["", "WBS",  "", "Walkdown Planning & Report",                                              "",''                              ,"", "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", "Walkdown",                                                                "",''                              ,"", "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", "Task Pre-Job Brief",                                                      "",'1'                             ,"", "",  "",  "",  "", '2',''],//2(R+3)
        ["", "Y",    "", "Gather Walkdown Documentation",                                           "",'=ROUND(L'+(countR+4)+'/(8*E1),1)','=A'+(countR+3), "",  "",  "",  "", '2',''],//3(R+4)
        ["", "Y",    "", "Fill out Visitor's Forms If Required (FORM-110190)",                      "",'=ROUND(L'+(countR+5)+'/(8*E1),1)','=A'+(countR+4), "",  "",  "",  "", '7',''],//4(R+5)
        ["", "Y",    "", "Send Visitor's Forms to RP and Obtain NEW Status from Client (if required)", ""                              ,'10','=A'+(countR+5), "",  "",  "",  "", '3',''],//5(R+6)
        ["", "Y",    "", "Prepare Walkdown Checklists (FORM-14052)",                                "",'=ROUND(L'+(countR+7)+'/(8*E1),1)','=A'+(countR+4), "",  "",  "",  "", '10',''],//6(R+7)
        ["", "Y",    "", "Verify Walkdown Checklists",                                              "",'=ROUND(L'+(countR+8)+'/(8*E1),1)','=A'+(countR+7), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+7)+')*0.15,0)',''],//7(R+8)
        ["", "Y",    "", "Prepare Walkdown Plan, if required",                                      "",'=ROUND(L'+(countR+9)+'/(8*E1),1)','=A'+(countR+8), "",  "",  "",  "", '10',''],//8(R+9)
        ["", "Y",    "", "Verify Walkdown Plan, if required",                                       "",'=ROUND(L'+(countR+10)+'/(8*E1),1)','=A'+(countR+9), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+9)+')*0.15,0)',''],//9(R+10)
        ["", "Y",    "", "Submit Walkdown Chklst and/or Plan for Client Review",                    "",'1'                             ,'=A'+(countR+8)+'&A'+(countR+10), "",  "",  "",  "", '1',''],//10(R+11)
        ["", "Y",    "", "Stakeholders to Review Walkdown Checklists and/or Plan",                  "",'5'                             ,'=A'+(countR+11), "",  "",  "",  "", '0',''],//11(R+12)
        ["", "Y",    "", "Incorporate Comments into Walkdown Checklists and/or Plan",               "",'=ROUND(L'+(countR+13)+'/(8*E1),1)','=A'+(countR+12), "",  "",  "",  "", '5',''],//12(R+13)
        ["", "Y",    "", "Walkdown with Stakeholders", '-include 6h travel time for 2 people',     '5','=A'+(countR+13)+'&A'+(countR+6), "",  "",  "",  "", '=2*8',''],//13(R+14)
        ["", "S",    "", "50% Walkdown Report ",                                                    "",''                              ,"", "",  "",  "",  "", '',''],//14(R+15)
        ["", "Y",    "", "Prepare 50% Walkdown Report ",                                            "",'=ROUND(L'+(countR+16)+'/(8*E1),1)','=A'+(countR+14), "",  "",  "",  "", '16',''],//15(R+16)
        ["", "Y",    "", "Verify 50% Walkdown Report ",                                             "",'=ROUND(L'+(countR+17)+'/(8*E1),1)','=A'+(countR+16), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+16)+')*0.15,0)',''],//16(R+17)
        ["", "Y",    "", "Incorporate Internal Comments",                                           "",'=ROUND(L'+(countR+18)+'/(8*E1),1)','=A'+(countR+17), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+16)+')*0.1,0)',''],//17(R+18)
        ["", "Y",    "", "Approve 50% Walkdown Report ",                                            "",'1'                             ,'=A'+(countR+18), "",  "",  "",  "", '1',''],//18(R+19)
        ["", "Y",    "", "Submit 50% Walkdown Report for Client Review",                            "",'1'                             ,'=A'+(countR+19), "",  "",  "",  "", '1',''],//19(R+20)
        ["", "S",    "", "Walkdown Report Comment and Disposition",                                 "",''                              ,"", "",  "",  "",  "", '',''],//20(R+21)
        ["", "Y",    "", "Client Stakeholder to Review of Walkdown Report",                         "",'10'                            ,'=A'+(countR+20), "",  "",  "",  "", '0',''],//21(R+22)
        ["", "Y",    "", "Disposition Stakeholder Comments",                                        "",'=ROUND(L'+(countR+23)+'/(8*E1),1)+2','=A'+(countR+22), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+16)+':L'+(countR+20)+')*0.1,0)',''],//22(R+23)
        ["", "Y",    "", "Client Accept Comment Dispositions",                                      "",'5'                             ,'=A'+(countR+23), "",  "",  "",  "", '0',''],//23(R+24)
        ["", "S",    "", "90% Walkdown Report ",                                                    "",''                              ,"", "",  "",  "",  "", '',''],//24(R+25)
        ["", "Y",    "", "Incorporate Accepted Comments",                                           "",'=ROUND(L'+(countR+26)+'/(8*E1),1)+2','=A'+(countR+24), "",  "",  "",  "", '=ROUNDUP(L'+(countR+23)+'/2,0)',''],//25(R+26)
        ["", "Y",    "", "Final Verification of Walkdown Report",                                   "",'=ROUND(L'+(countR+27)+'/(8*E1),1)','=A'+(countR+26), "",  "",  "",  "", '=L'+(countR+26)+'/2',''],//26(R+27)
        ["", "Y",    "", "Approve Walkdown Report",                                                 "",'1'                             ,'=A'+(countR+27), "",  "",  "",  "", '1',''],//27(R+28)
        ["", "Y",    "", "Submit 90% Walkdown Report for Client Acceptance",                        "",'1'                             ,'=A'+(countR+28), "",  "",  "",  "", '1',''],//28(R+29)
        ["", "Y",    "", "Client Accept 100% Walkdown Report ",                                     "",'5'                             ,'=A'+(countR+29), "",  "",  "",  "", '0',''],//29(R+30)

    ]

    var WBS_task_tasknum = 1 
    var temp_WBSClick_count = WBSClick_count;
    var temp_ts = JSON.parse(JSON.stringify(WBSElementArray));
    var Scount = 0;
    var TopVal = 0;
    var BotVal = 0;
    var Srow = 0;

    temp_ts[0][3] = WBSName;     // pulls in WBS name from click
    temp_ts[0][2] = temp_WBSClick_count;     // Adds WBS number from click
    //temp_ts[2][3] = countR


    for (var i = 0; i < temp_ts.length; i++) {  // if Y task add #ing and WBS #
        if (temp_ts[i][1] == "Y") {
            temp_ts[i][0] = temp_WBSClick_count + "." + WBS_task_tasknum++ + ","; //Updating Task#
            temp_ts[i][2] = "WBS"+temp_WBSClick_count; // Updating WBS Structure

            Scount = Scount + 1;
            if (department !== ""){
                temp_ts[i][10] = department
            }
        } 
        else if (temp_ts[i][1] == "S") {   // if S add a sums to labour hours & cost
            BotVal = i + countR;
            TopVal = i - Scount + countR + 1;
        
            if (Srow > 0) { // update the previous sum row
                temp_ts[Srow][11] = '=SUMIF(B'+TopVal+':B'+BotVal+',"Y",L'+TopVal+':L'+BotVal+')';
                temp_ts[Srow][12] = '=SUMIF(B'+TopVal+':B'+BotVal+',"Y",M'+TopVal+':M'+BotVal+')'; 
                Scount = 0;
            }
            Srow = i;
        };
        if (estimate === "blank"){
            temp_ts[i][11] = ""
        }
    };
    BotVal = i + countR;
    TopVal = i - Scount + countR + 1;

    temp_ts[Srow][11] = '=SUMIF(B'+TopVal+':B'+BotVal+',"Y",L'+TopVal+':L'+BotVal+')';
    temp_ts[Srow][12] = '=SUMIF(B'+TopVal+':B'+BotVal+',"Y",M'+TopVal+':M'+BotVal+')'; 
    temp_ts[0][11] = '=SUMIF(B'+(countR+2)+':B'+BotVal+',"Y",L'+(countR+2)+':L'+BotVal+')';
    temp_ts[0][12] = '=SUMIF(B'+(countR+2)+':B'+BotVal+',"Y",M'+(countR+2)+':M'+BotVal+')'; 

    return temp_ts;
}

