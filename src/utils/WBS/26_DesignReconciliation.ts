export function get26_DesignReconciliation(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F ,G , H , I , J,  K , L   
        ["", "WBS",  "", 'Design Reconciliation',                          'Registration Not Required',''                   ,"", "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                   ,"", "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", 'Prepare Reconciliation Form',                                             "",'=ROUND(L'+(countR+3)+'/(E1*8),1)','', "",  "",  "",  "", '16',''],//2(R+3)
        ["", "Y",    "", 'Verify Reconciliation Form',                                              "",'=ROUND(L'+(countR+4)+'/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+3)+')*0.15,0)',''],//3(R+4)
        ["", "Y",    "", 'Incorporate Internal Comments',                                           "",'=ROUND(L'+(countR+5)+'/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+3)+')*0.1,0)',''],//4(R+5)
        ["", "Y",    "", 'Approve Reconciliation Form',                                             "",'1'                  ,'=A'+(countR+5), "",  "",  "",  "", '1',''],//5(R+6)
        ["", "Y",    "", '="Submit 50% "&D'+(countR+1)+'&" for Client Review"',                     "",'1'                  ,'=A'+(countR+6), "",  "",  "",  "", '1',''],//6(R+7)
        ["", "S",    "", '=D'+(countR+1)+'&" Comment & Disposition"',                               "",''                   ,"", "",  "",  "",  "", '',''],//7(R+8)
        ["", "Y",    "", '="Client Stakeholder Review of "&D'+(countR+1),                           "",'10'                 ,'=A'+(countR+7), "",  "",  "",  "", '0',''],//8(R+9)
        ["", "Y",    "", 'Disposition Stakeholder Comments',                                        "",'=ROUND(L'+(countR+10)+'/(E1*8),1)','=A'+(countR+9), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+7)+')*0.1,0)',''],//9(R+10)
        ["", "Y",    "", 'Client Accept Comment Dispositions',                                      "",'5'                  ,'=A'+(countR+10), "",  "",  "",  "", '1',''],//10(R+11)
        ["", "S",    "", '="90% "&D'+(countR+1),                                                    "",''                   ,"", "",  "",  "",  "", '',''],//11(R+12)
        ["", "Y",    "", 'Incorporate Accepted Comments',                                           "",'=ROUND(L'+(countR+13)+'/(E1*8),1)','=A'+(countR+11), "",  "",  "",  "", '=ROUNDUP(L'+(countR+10)+'/2,0)',''],//12(R+13)
        ["", "Y",    "", '="Final Verification of 90% "&D'+(countR+1),                              "",'=ROUND(L'+(countR+14)+'/(E1*8),1)','=A'+(countR+13), "",  "",  "",  "", '=L'+(countR+13)+'/2',''],//13(R+14)
        ["", "Y",    "", '="Approve 90% "&D'+(countR+1),                                            "",'1'                  ,'=A'+(countR+14), "",  "",  "",  "", '1',''],//14(R+15)
        ["", "Y",    "", '="Submit 90% "&D'+(countR+1)+'&" for Client Acceptance"',                 "",'1'                  ,'=A'+(countR+15), "",  "",  "",  "", '1',''],//15(R+16)
        ["", "Y",    "", '="Client Accepts 100% "&D'+(countR+1),                                    "",'5'                  ,'=A'+(countR+16), "",  "",  "",  "", '0',''],//16(R+17)
        
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
