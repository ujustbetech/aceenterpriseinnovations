export function get19_CSNCCodeClassification(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F                                ,G              , H ,  I ,   J,  K , L   
        ["", "WBS",  "", 'Code Classification',                                                     "",''                                ,""             , "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                                ,""             , "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", 'Task Pre-Job Brief',                                                      "",'1'                               ,""             , "",  "",  "",  "", '2',''],//2(R+3)
        ["", "Y",    "", 'Perform Code Classification',                                             "",'=ROUND(L'+(countR+4)+'/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '16',''],//3(R+4)
        ["", "Y",    "", 'Prepare Code Classification Form (FORM-12995)',                           "",'=ROUND(SUM(L'+(countR+5)+':L'+(countR+6)+')/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '8',''],//4(R+5)
        ["", "Y",    "", 'Prepare CNSC letter (CAF) (If required)',                                 "",'=ROUND(SUM(L'+(countR+5)+':L'+(countR+6)+')/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '16',''],//5(R+6)
        ["", "Y",    "", 'Review Code Classification',                                              "",'=ROUND(L'+(countR+7)+'/(E1*8),1)','=A'+(countR+5)+'&A'+(countR+6), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+6)+')*0.15,0)',''],//6(R+7)
        ["", "Y",    "", '="Incorporate Internal Comments on "&D'+(countR+1),                       "",'=ROUND(L'+(countR+8)+'/(E1*8),1)','=A'+(countR+7), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+6)+')*0.1,0)',''],//7(R+8)
        ["", "Y",    "", '="Approve "&D'+(countR+1),                                                "",'1'                               ,'=A'+(countR+8), "",  "",  "",  "", '1.5',''],//8(R+9)
        ["", "Y",    "", '="Submit "&D'+(countR+1)+'&" for Client Review"',                         "",'1'                               ,'=A'+(countR+9), "",  "",  "",  "", '1',''],//9(R+10)
        ["", "S",    "", '=D'+(countR+1)+'&": Comment & Disposition"',                              "",''                                ,""             , "",  "",  "",  "", '',''],//10(R+11)
        ["", "Y",    "", '="Stakeholder Review of "&D'+(countR+1),                                  "",'10'                              ,'=A'+(countR+10),"",  "",  "",  "", '0',''],//11(R+12)
        ["", "Y",    "", 'Disposition Stakeholder Comments',                                        "",'=ROUND(L'+(countR+13)+'/(E1*8),1)','=A'+(countR+12),"", "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+10)+')*0.1,0)',''],//12(R+13)
        ["", "Y",    "", 'Client Accept Comment Dispositions',                                      "",'5'                               ,'=A'+(countR+13), "", "",  "",  "", '0',''],//13(R+14)
        ["", "S",    "", '="100% "&D'+(countR+1)+'&" and CNSC Submission"',                         "",''                                ,""              , "",  "",  "",  "", '',''],//14(R+15)
        ["", "Y",    "", 'Incorporate Accepted Comments',                                           "",'=ROUND(L'+(countR+16)+'/(E1*8),1)','=A'+(countR+14),"",  "",  "",  "", '=ROUNDUP(L'+(countR+13)+'/2,0)',''],//15(R+16)
        ["", "Y",    "", '="Final Verification of 90% "&D'+(countR+1),                              "",'=ROUND(L'+(countR+17)+'/(E1*8),1)','=A'+(countR+16),"",  "",  "",  "", '=L'+(countR+16)+'/2',''],//16(R+17)
        ["", "Y",    "", '="Approve 90% "&D'+(countR+1),                                            "",'=ROUND(L'+(countR+18)+'/(E1*8),1)','=A'+(countR+17),"",  "",  "",  "", '1',''],//17(R+18)
        ["", "Y",    "", '="Submit 90% "&D'+(countR+1)+'&" for Client Acceptance"',                 "",'=ROUND(L'+(countR+19)+'/(E1*8),1)','=A'+(countR+18),"",  "",  "",  "", '1',''],//18(R+19)
        ["", "Y",    "", 'Client Approval of Letter',                                               "",'5'                                ,'=A'+(countR+19),"",  "",  "",  "", '0',''],//19(R+20)
        ["", "Y",    "", 'Client Issue Letter to CNSC',                                             "",'1'                                ,'=A'+(countR+20),"",  "",  "",  "", '0',''],//20(R+21)
        ["", "Y",    "", 'Send Letter to Nuclear Records via RRA 00321',                            "",'=ROUND(L'+(countR+22)+'/(E1*8),1)','=A'+(countR+21),"",  "",  "",  "", '2',''],//21(R+22)
        ["", "Y",    "", 'CNSC Review',                                                             "",'25'                               ,'=A'+(countR+21), "",  "",  "",  "", '0',''],//22(R+23)
        ["", "Y",    "", 'Provide Clarifications to the CNSC as Required',                          "",'25'                               ,'=A'+(countR+22), "",  "",  "",  "", '4',''],//23(R+24)
        ["", "Y",    "", '="CNSC Accept "&D'+(countR+1),                                   'Milestone','0'               ,'=A'+(countR+23)+'&A'+(countR+24), "",  "",  "",  "", '0',''],//24(R+25)
        
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
