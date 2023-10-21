export function get34_Closeout(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F ,G , H , I , J,  K , L   
        ["", "WBS",  "", 'Closeout',                                                                "",''                              ,""              , "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", 'DCN Closeout',                                                            "",''                              ,""              , "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", 'AFS Declared',                                                   'milestone','0'                             ,""              , "",  "",  "",  "", '0',''],//2(R+3)
        ["", "Y",    "", 'Close DCN Open Items',                                                    "",'=ROUND(SUM(L'+(countR+4)+':L'+(countR+7)+')/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '8',''],//3(R+4)
        ["", "Y",    "", 'Closeout Drawings - by # dwgs (2 h/dwg)',                                 "",'=ROUND(SUM(L'+(countR+4)+':L'+(countR+7)+')/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '2',''],//4(R+5)
        ["", "Y",    "", 'Closeout BOM - by # new (1 h/BOM)',                                       "",'=ROUND(SUM(L'+(countR+4)+':L'+(countR+7)+')/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '1',''],//5(R+6)
        ["", "Y",    "", 'Closeout spec - by # new (2 h/spec)',                                     "",'=ROUND(SUM(L'+(countR+4)+':L'+(countR+7)+')/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '2',''],//6(R+7)
        ["", "Y",    "", 'Review/Verification',                                                     "",'=ROUND(SUM(L'+(countR+8)+')/(E1*8),1)','=A'+(countR+4)+'&A'+(countR+5)+'&A'+(countR+6)+'&A'+(countR+7), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+7)+')*0.15,0)',''],//7(R+8)
        ["", "Y",    "", 'Approval',                                                                "",'5'                              ,'=A'+(countR+8), "",  "",  "",  "", '1',''],//8(R+9)
        ["", "S",    "", 'DCP Closeout',                                                            "",''                               ,""             , "",  "",  "",  "", '',''],//9(R+10)
        ["", "Y",    "", 'Complete ARs',                                             'After last DCN ','5'                              ,'=A'+(countR+9), "",  "",  "",  "", '0',''],//10(R+11)
        ["", "Y",    "", 'Close DCP Open Items',                                     'After last DCN ','5'                              ,'=A'+(countR+9), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+9)+')*0.15,0)',''],//11(R+12)
        ["", "Y",    "", 'DCP Closeout',                                             'After last DCN ','5'                              ,'=A'+(countR+9), "",  "",  "",  "", '1',''],//12(R+13)
        ["", "S",    "", 'Project Closeout',                                                        "",''                               ,""             , "",  "",  "",  "", '',''],//13(R+14)
        ["", "Y",    "", 'Project Closeout Meeting',                                                "",'1'                              ,'=A'+(countR+11)+'&A'+(countR+12)+'&A'+(countR+13), "3",  "",  "",  "", '=ROUNDUP(L'+(countR+12)+'/2,0)',''],//14(R+15)
        ["", "Y",    "", 'Obtain Stakeholder/Client Feedback',                                      "",'5'                              ,'=A'+(countR+15), "",  "",  "",  "", '4',''],//15(R+16)
        ["", "Y",    "", 'Document Lessons Learned',                                                "",'1'                              ,'=A'+(countR+16), "",  "",  "",  "", '2',''],//16(R+17)
        ["", "Y",    "", 'Closeout internal records / files',                                       "",'1'                              ,'=A'+(countR+17), "",  "",  "",  "", '4',''],//17(R+18)
        ["", "Y",    "", 'Close Charge Codes and Issue Final Invoice',                              "",'1'                              ,'=A'+(countR+18), "",  "",  "",  "", '2',''],//18(R+19)
        
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
