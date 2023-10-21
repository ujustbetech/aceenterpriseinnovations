export function get29_ThirdPartyReview(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F ,G , H , I , J,  K , L   
        ["", "WBS",  "", 'Third Party Review',                                                      "",''                  ,""             , "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", 'Review of Documents',                                                     "",''                  ,""             , "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", 'Receive Documents for Review',                                   'milestone','0'                 ,""             , "",  "",  "",  "", '0',''],//2(R+3)
        ["", "Y",    "", 'Task Pre-Job Brief',                                                      "",'1'                 ,'=A'+(countR+3), "",  "",  "",  "", '1',''],//3(R+4)
        ["", "Y",    "", 'Review Documents (# of Docs x h/per)',                                     "",'=ROUND(L'+(countR+5)+'/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '8',''],//4(R+5)
        ["", "Y",    "", 'Document Comments',                                                       "",'=ROUND(L'+(countR+6)+'/(E1*8),1)','=A'+(countR+5), "",  "",  "",  "", '=ROUNDUP(L'+(countR+5)+'*0.1,0)',''],//5(R+6)
        ["", "Y",    "", 'Internal Verification of Comments (if required)',                          "",'=ROUND(L'+(countR+7)+'/(E1*8),1)','=A'+(countR+6), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+6)+')*0.15,0)',''],//6(R+7)
        ["", "Y",    "", 'Submit Comments to Third Party',                                          "",'=ROUND(L'+(countR+8)+'/(E1*8),1)','=A'+(countR+7), "",  "",  "",  "", '1',''],//7(R+8)
        ["", "S",    "", 'Comment Resolution',                                                      "",''                  ,""            , "",  "",  "",  "", '',''],//8(R+9)
        ["", "Y",    "", 'Third Party Disposition Comments',                                        "",'10'                ,'=A'+(countR+8), "",  "",  "",  "", '0',''],//9(R+10)
        ["", "Y",    "", 'Accept/Reject Third Party Comment Dispositions',                          "",'=ROUND(L'+(countR+11)+'/(E1*8),1)','=A'+(countR+10), "",  "",  "",  "", '7',''],//10(R+11)
        ["", "Y",    "", 'Meeting to Resolve Outstanding Comment Dispositions (if required)','- assume x people attend','3','=A'+(countR+11), "",  "",  "",  "", '=1*3',''],//11(R+12)
        ["", "Y",    "", 'Return Accepted Comment Dispositions',                                    "",'5'                 ,'=A'+(countR+12), "",  "",  "",  "", '0',''],//12(R+13)
        ["", "S",    "", 'Documentation Update',                                                    "",''                  ,""              , "",  "",  "",  "", '',''],//13(R+14)
        ["", "Y",    "", 'Third Party Submit Updated Documents',                           'miltesone','5'                 ,""              , "",  "",  "",  "", '0',''],//14(R+15)
        ["", "Y",    "", 'Review Updated Documents to Ensure Comment Incorporation',                "",'=ROUND(L'+(countR+16)+'/(E1*8),1)','=A'+(countR+15), "",  "",  "",  "", '=ROUNDUP(L'+(countR+5)+'*0.1,0)',''],//15(R+16)
        ["", "Y",    "", 'Create Memo Documenting Third Party Review',                              "",'=ROUND(L'+(countR+17)+'/(E1*8),1)','=A'+(countR+16), "",  "",  "",  "", '5',''],//16(R+17)
        ["", "Y",    "", 'Approve Memo',                                                            "",'=ROUND(L'+(countR+18)+'/(E1*8),1)','=A'+(countR+17), "",  "",  "",  "", '1',''],//17(R+18)
        ["", "Y",    "", 'Submit Memo to Third Party and/or Client',                                "",'=ROUND(L'+(countR+19)+'/(E1*8),1)','=A'+(countR+18), "",  "",  "",  "", '1',''],//18(R+19)
        ["", "Y",    "", 'Client Approves Third Party Review Memo',                                 "",'5'               ,'=A'+(countR+19),  "",  "",  "",  "", '0',''],//19(R+20)
        
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

