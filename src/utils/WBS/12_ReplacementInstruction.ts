export function get12_ReplacementInstruction(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F ,G , H , I , J,  K , L   
        ["", "WBS",  "", 'Replacement Instructions',                                                "",''                                 ,""             , "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                                 ,""             , "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", 'Task Pre-Job Brief',                                                      "",'1'                                ,""             , "",  "",  "",  "", '2',''],//2(R+3)
        ["", "Y",    "", 'Prepare Replacement Instructions (1RI / CatID)',                           "",'=ROUND(L'+(countR+4)+'/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '6',''],//3(R+4)
        ["", "Y",    "", 'Create End Use List and Gather all ADL',                                  "",'=ROUND(L'+(countR+5)+'/(E1*8),1)' ,'=A'+(countR+4), "",  "",  "",  "", '4',''],//4(R+5)
        ["", "Y",    "", 'Create Typical Markups',                                                  "",'=ROUND(L'+(countR+6)+'/(E1*8),1)' ,'=A'+(countR+5), "",  "",  "",  "", '16',''],//5(R+6)
        ["", "Y",    "", 'Send Markups to Drafting',                                                "",'=ROUND(L'+(countR+7)+'/(E1*8),1)' ,'=A'+(countR+6), "",  "",  "",  "", '1',''],//6(R+7)
        ["", "Y",    "", 'Drafting Updates Drawings for Typicals',                                  "",'=ROUND(L'+(countR+8)+'/(E1*8),1)' ,'=A'+(countR+7), "",  "",  "",  "", '8',''],//7(R+8)
        ["", "Y",    "", 'Review of Typical Drawings',                                              "",'=ROUND(L'+(countR+9)+'/(E1*8),1)' ,'=A'+(countR+8), "",  "",  "",  "", '2',''],//8(R+9)
        ["", "Y",    "", 'Perform Calcs as required',                                               "",'=ROUND(L'+(countR+10)+'/(E1*8),1)','=A'+(countR+9), "",  "",  "",  "", '8',''],//9(R+10)
        ["", "Y",    "", 'Create Typical ICSs',                                                     "",'=ROUND(L'+(countR+11)+'/(E1*8),1)','=A'+(countR+10), "",  "",  "",  "", '8',''],//10(R+11)
        ["", "Y",    "", 'Create Typical OLW Markups',                                              "",'=ROUND(L'+(countR+12)+'/(E1*8),1)','=A'+(countR+11), "",  "",  "",  "", '0',''],//11(R+12)
        ["", "Y",    "", 'Create Typical BOM',                                                      "",'=ROUND(L'+(countR+13)+'/(E1*8),1)','=A'+(countR+12), "",  "",  "",  "", '4',''],//12(R+13)
        ["", "Y",    "", 'Incorporate PMT in RI (If there is no separate Comm. Spec)',               "",'=ROUND(L'+(countR+14)+'/(E1*8),1)','=A'+(countR+13), "",  "",  "",  "", '8',''],//13(R+14)
        ["", "Y",    "", 'Document Requirements for CIC-PER for JIT Documents',                     "",'=ROUND(L'+(countR+15)+'/(E1*8),1)','=A'+(countR+14), "",  "",  "",  "", '8',''],//14(R+15)
        ["", "Y",    "", 'Verify Replacement Instructions',                                         "",'=ROUND(L'+(countR+16)+'/(E1*8),1)','=A'+(countR+15), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+15)+')*0.15,0)',''],//15(R+16)
        ["", "Y",    "", 'Incorporate Internal Comments',                                           "",'=ROUND(L'+(countR+17)+'/(E1*8),1)','=A'+(countR+16), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+15)+')*0.1,0)',''],//16(R+17)
        ["", "Y",    "", 'Approve Replacement Instructions',                                        "",'1'                                ,'=A'+(countR+17), "",  "",  "",  "", '1',''],//17(R+18)
        ["", "Y",    "", '="Submit 50% "&D'+(countR+1)+'&" for Client Review"',                     "",'1'                                ,'=A'+(countR+18), "",  "",  "",  "", '1',''],//18(R+19)
        ["", "S",    "", 'Comment & Disposition',                                                     "",''                                 ,""              , "",  "",  "",  "", '',''],//19(R+20)
        ["", "Y",    "", '="Stakeholder Review of "&D'+(countR+1),                                  "",'10'                               ,'=A'+(countR+19), "",  "",  "",  "", '0',''],//20(R+21)
        ["", "Y",    "", 'Disposition Stakeholder Comments',                                        "",'=ROUND(L'+(countR+22)+'/(E1*8),1)+2','=A'+(countR+21), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+19)+')*0.1,0)',''],//21(R+22)
        ["", "Y",    "", 'Client Accept Comment Dispositions',                                      "",'5'                                ,'=A'+(countR+22), "",  "",  "",  "", '1',''],//22(R+23)
        ["", "S",    "", '="90% "&D'+(countR+1),                                                    "",''                                 ,""              , "",  "",  "",  "", '',''],//23(R+24)
        ["", "Y",    "", 'Incorporate Accepted Comment',                                            "",'=ROUND(L'+(countR+25)+'/(E1*8),1)','=A'+(countR+23), "",  "",  "",  "", '=ROUNDUP(L'+(countR+22)+'/2,0)',''],//24(R+25)
        ["", "Y",    "", '="Final Verification of 90% "&D'+(countR+1),                              "",'=ROUND(L'+(countR+26)+'/(E1*8),1)','=A'+(countR+25), "",  "",  "",  "", '=L'+(countR+25)+'/2',''],//25(R+26)
        ["", "Y",    "", '="Approve 90% "&D'+(countR+1),                                            "",'1'                                ,'=A'+(countR+26), "",  "",  "",  "", '1',''],//26(R+27)
        ["", "Y",    "", '="Submit "&D'+(countR+1)+'&" for Client Acceptance"',                        "",'1'                                ,'=A'+(countR+27), "",  "",  "",  "", '1',''],//27(R+28)
        ["", "Y",    "", '="Client Accept 100% "&D'+(countR+1),                                     "",'5'                                ,'=A'+(countR+28), "",  "",  "",  "", '0',''],//28(R+29)

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
