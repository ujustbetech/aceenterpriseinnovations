export function get21_ReportwtModel(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F                                ,G , H , I , J,  K , L   
        ["", "WBS",  "", 'Report wt Model',                                                         "",''                                ,""             , "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", 'Model / Analyses',                                                        "",''                                ,""             , "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", 'Task Pre-job Brief',                                                      "",'1'                               ,""             , "",  "",  "",  "", '2',''],//2(R+3)
        ["", "Y",    "", 'Data Collection & Review',                                                "",'=ROUND(L'+(countR+4)+'/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '8',''],//3(R+4)
        ["", "Y",    "", 'Create Model(s) / Analyses',                                              "",'=ROUND(L'+(countR+5)+'/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '32',''],//4(R+5)
        ["", "Y",    "", 'Verify Model(s)  / Analyses',                                             "",'=ROUND(L'+(countR+6)+'/(E1*8),1)','=A'+(countR+5), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+5)+')*0.15,0)',''],//5(R+6)
        ["", "Y",    "", 'Run Model(s) / Analyses and Post-Processing',                             "",'=ROUND(L'+(countR+7)+'/(E1*8),1)','=A'+(countR+8), "",  "",  "",  "", '5',''],//6(R+7)
        ["", "Y",    "", 'Adjust / Iterate Model(s) as Required',                                   "",'=ROUND(L'+(countR+8)+'/(E1*8),1)','=A'+(countR+6), "",  "",  "",  "", '8',''],//7(R+8)
        ["", "Y",    "", 'Summarize & Document Results',                                            "",'=ROUND(L'+(countR+9)+'/(E1*8),1)','=A'+(countR+7), "",  "",  "",  "", '8',''],//8(R+9)
        ["", "S",    "", '50% Report / Memo',                                                       "",''                                ,""             , "",  "",  "",  "", '',''],//9(R+10)
        ["", "Y",    "", '="Prepare 50% "&D'+(countR+1),                                            "",'=ROUND(L'+(countR+11)+'/(E1*8),1)','=A'+(countR+9),"",  "",  "",  "", '24',''],//10(R+11)
        ["", "Y",    "", '="Verify 50% "&D'+(countR+1),                                             "",'=ROUND(L'+(countR+12)+'/(E1*8),1)','=A'+(countR+11),"", "",  "",  "", '=ROUNDUP(L'+(countR+11)+'*0.15,0)',''],//11(R+12)
        ["", "Y",    "", 'Incorporate Internal Comments',                                           "",'=ROUND(L'+(countR+13)+'/(E1*8),1)','=A'+(countR+12),"", "",  "",  "", '=ROUNDUP(L'+(countR+11)+'*0.1,0)',''],//12(R+13)
        ["", "Y",    "", '="Approval 50% "&D'+(countR+1),                                           "",'1'                               ,'=A'+(countR+13), "", "",  "",  "", '2',''],//13(R+14)
        ["", "Y",    "", '="Submit 50% "&D'+(countR+1),                                             "",'1'                               ,'=A'+(countR+14), "", "",  "",  "", '1',''],//14(R+15)
        ["", "S",    "", 'Report: Comment & Disposition',                                           "",''                                ,""             , "",  "",  "",  "", '',''],//15(R+16)
        ["", "Y",    "", '="Client Stakeholder Review of "&D'+(countR+1),                           "",'10'                              ,'=A'+(countR+15),"",  "",  "",  "", '0',''],//16(R+17)
        ["", "Y",    "", 'Disposition Stakeholder Comments',                                        "",'=ROUND(L'+(countR+18)+'/(E1*8),1)','=A'+(countR+17),"", "",  "",  "", '=ROUNDUP(SUM(L'+(countR+11)+':L'+(countR+15)+',L'+(countR+3)+':L'+(countR+9)+')*0.1,0)',''],//17(R+18)
        ["", "Y",    "", 'Client Accept Comment Dispositions',                                      "",'5'                               ,'=A'+(countR+18), "", "",  "",  "", '0',''],//18(R+19)
        ["", "S",    "", '90% Report / Memo',                                                       "",''                                ,                  "", "",  "",  "",  "", '',''],//19(R+20)
        ["", "Y",    "", 'Incorporate Accepted Comments',                                           "",'=ROUND(L'+(countR+21)+'/(E1*8),1)','=A'+(countR+19), "",  "",  "",  "", '=ROUNDUP(L'+(countR+18)+'/2,0)',''],//20(R+21)
        ["", "Y",    "", 'Final Verification of 90% Report / Memo',                                 "",'=ROUND(L'+(countR+22)+'/(E1*8),1)','=A'+(countR+21), "",  "",  "",  "", '=L'+(countR+21)+'/2',''],//21(R+22)
        ["", "Y",    "", 'Approve 90% Report / Memo',                                               "",'1'                               ,'=A'+(countR+22), "",  "",  "",  "", '1',''],//22(R+23)
        ["", "Y",    "", 'Submit 90% Report / Memo for Client Acceptance',                          "",'1'                               ,'=A'+(countR+23), "",  "",  "",  "", '1',''],//23(R+24)
        ["", "Y",    "", '="Client Accept 100% "&D'+(countR+1),                                     "",'5'                               ,'=A'+(countR+24), "",  "",  "",  "", '0',''],//24(R+25)
        
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
