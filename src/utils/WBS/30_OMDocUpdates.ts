export function get30_OMDocUpdates(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F                   ,G ,              H , I ,  J,   K , L   
        ["", "WBS",  "", 'Operations and Maintenance Document Updates',                             "",''                               ,""              , "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                               ,""              , "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", 'Task Pre-Job Brief',                                                      "",'1'                              ,""              , "",  "",  "",  "", '2',''],//2(R+3)
        ["", "Y",    "", 'Data Collection',                                                         "",'=ROUND(L'+(countR+4)+'/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '8',''],//3(R+4)
        ["", "Y",    "", 'Mark-up/Prepare OM (# docs*x h)',                                         "",'=ROUND(SUM(L'+(countR+5)+':L'+(countR+10)+')/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '4',''],//4(R+5)
        ["", "Y",    "", 'Mark-up SST (# docs * x h)',                                              "",'=ROUND(SUM(L'+(countR+5)+':L'+(countR+10)+')/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '4',''],//5(R+6)
        ["", "Y",    "", 'Mark-up/Prepare CMP/MMPs (# docs * x h)',                                 "",'=ROUND(SUM(L'+(countR+5)+':L'+(countR+10)+')/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '4',''],//6(R+7)
        ["", "Y",    "", 'Mark-up/Prepare ARM (# docs * x h)',                                      "",'=ROUND(SUM(L'+(countR+5)+':L'+(countR+10)+')/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '4',''],//7(R+8)
        ["", "Y",    "", 'Mark-up/Prepare Flowsheets (# docs * x h)',                               "",'=ROUND(SUM(L'+(countR+5)+':L'+(countR+10)+')/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '4',''],//8(R+9)
        ["", "Y",    "", 'Mark-up/Prepare Training Manuals (# docs * x h)',                         "",'=ROUND(SUM(L'+(countR+5)+':L'+(countR+10)+')/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '4',''],//9(R+10)
        ["", "Y",    "", 'Initiate DCRs and route to Responsible Work Groups',                      "",'=ROUND(L'+(countR+11)+'/(E1*8),1)','=A'+(countR+5)+'&A'+(countR+6)+'&A'+(countR+7)+'&A'+(countR+8)+'&A'+(countR+9)+'&A'+(countR+10), "",  "",  "",  "", '=SUM(L'+(countR+5)+':L'+(countR+10)+')/4',''],//10(R+11)
        ["", "Y",    "", 'Review of O&M Docs',                                                      "",'=ROUND(L'+(countR+12)+'/(E1*8),1)','=A'+(countR+5)+'&A'+(countR+6)+'&A'+(countR+7)+'&A'+(countR+8)+'&A'+(countR+9)+'&A'+(countR+10), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+11)+')*0.15,0)',''],//11(R+12)
        ["", "Y",    "", 'Approve of O&M Docs',                                                     "",'1'                                ,'=A'+(countR+12)+'&A'+(countR+11), "",  "",  "",  "", '2',''],//12(R+13)
        ["", "Y",    "", 'Submit O&M Docs for Client Review',                                       "",'1'                                ,'=A'+(countR+13), "",  "",  "",  "", '1',''],//13(R+14)
        ["", "S",    "", 'O&M Documents Comment & Disposition',                                     "",''                                 ,""             , "",  "",  "",  "", '',''],//14(R+15)
        ["", "Y",    "", 'Client Stakeholder Review of O&M Docs',                                   "",'10'                               ,'=A'+(countR+14), "",  "",  "",  "", '0',''],//15(R+16)
        ["", "Y",    "", 'Disposition Stakeholder Comments',                                        "",'=ROUND(L'+(countR+17)+'/(E1*8),1)','=A'+(countR+16), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+14)+')*0.1,0)',''],//16(R+17)
        ["", "Y",    "", 'Client Accept Comment Dispositions',                                      "",'5'                                ,'=A'+(countR+17), "",  "",  "",  "", '0',''],//17(R+18)
        ["", "S",    "", '="90% "&D'+(countR+1),                                                    "",''                                 ,""             , "",  "",  "",  "", '',''],//18(R+19)
        ["", "Y",    "", 'Incorporate Accepted Comments',                                           "",'=ROUND(L'+(countR+20)+'/(E1*8),1)','=A'+(countR+18), "",  "",  "",  "", '=ROUNDUP(L'+(countR+17)+'/2,0)',''],//19(R+20)
        ["", "Y",    "", 'Final Verification of 90% O&M Docs',                                      "",'=ROUND(L'+(countR+21)+'/(E1*8),1)','=A'+(countR+20), "",  "",  "",  "", '=L'+(countR+20)+'/2',''],//20(R+21)
        ["", "Y",    "", 'Approve 90% O&M Docs',                                                    "",'1'                                ,'=A'+(countR+21), "",  "",  "",  "", '1',''],//21(R+22)
        ["", "Y",    "", 'Submit 90% O&M Docs for Client Acceptance',                               "",'1'                                ,'=A'+(countR+22), "",  "",  "",  "", '1',''],//22(R+23)
        ["", "Y",    "", 'Client Accepts 100% O&M Docs',                                            "",'5'                                ,'=A'+(countR+23), "",  "",  "",  "", '0',''],//23(R+24)
        
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
