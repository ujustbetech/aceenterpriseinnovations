/********************************************************
*	      Project name: WBS_Creator					    *
*	      Project by: Nesabyte						    *
*	      Project for: McLean Innovations               * 
*	      DATE: Dec 2022						        *
********************************************************/
export function get3_EngDesignPlan(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E ,                             F ,G , H , I , J,  K , L   
        ["", "WBS",  "", 'Engineering Plan',                                                        "",''                          ,"", "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                          ,"", "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", 'Task Pre-Job Brief',                                                      "",'1'                         ,"", "",  "",  "",  "", '2',''],//2(R+3)
        ["", "Y",    "", 'Gather Documentation',                                                    "",'=ROUND(L'+(countR+4)+'/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '4',''],//3(R+4)
        ["", "Y",    "", '= "Prepare 50% "&D'+(countR+1),                                           "",'=ROUND(L'+(countR+5)+'/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '23',''],//4(R+5)
        ["", "Y",    "", '="Review 50% "&D'+(countR+1),                                             "",'=ROUND(L'+(countR+6)+'/(E1*8),1)','=A'+(countR+5), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+5)+')*0.15,0)',''],//5(R+6)
        ["", "Y",    "", 'Incorporate Internal Comments',                                           "",'=ROUND(L'+(countR+7)+'/(E1*8),1)','=A'+(countR+6), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+5)+')*0.1,0)',''],//6(R+7)
        ["", "Y",    "", '= "Approve 50% "&D'+(countR+1),                                           "",'1'                         ,'=A'+(countR+7), "",  "",  "",  "", '1',''],//7(R+8)
        ["", "Y",    "", '="Submit 50% "&D'+(countR+1)+'&" for Client Review"',                     "",'1'                         ,'=A'+(countR+8), "",  "",  "",  "", '1',''],//8(R+9)
        ["", "S",    "", '=D'+(countR+1)+'&" Comment&Disposition"',                                 "",''                          ,"", "",  "",  "",  "", '',''],//9(R+10)
        ["", "Y",    "", '="Client Stakeholder Review "&D'+(countR+1),                              "",'10'                        ,'=A'+(countR+9), "",  "",  "",  "", '0',''],//10(R+11)
        ["", "Y",    "", 'Disposition Stakeholder Comments',                                        "",'=ROUND(L'+(countR+12)+'/(E1*8),1)+2','=A'+(countR+11), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+9)+')*0.1,0)',''],//11(R+12)
        ["", "Y",    "", 'Client Accept Comment Dispositions',                                      "",'5'                         ,'=A'+(countR+12), "",  "",  "",  "", '0',''],//12(R+13)
        ["", "S",    "", '="90% "&D'+(countR+1),                                                    "",''                          ,"", "",  "",  "",  "", '',''],//13(R+14)
        ["", "Y",    "", 'Incorporate Accepted Comments',                                           "",'=ROUND(L'+(countR+15)+'/(E1*8),1)','=A'+(countR+13), "",  "",  "",  "", '=ROUNDUP(L'+(countR+12)+'/2,0)',''],//14(R+15)
        ["", "Y",    "", '="Final Verification for 90% "&D'+(countR+1),                             "",'=ROUND(L'+(countR+16)+'/(E1*8),1)','=A'+(countR+15), "",  "",  "",  "", '=L'+(countR+15)+'/2',''],//15(R+16)
        ["", "Y",    "", '="Approve 90% "&D'+(countR+1),                                            "",'1'                         ,'=A'+(countR+16), "",  "",  "",  "", '1',''],//16(R+17)
        ["", "Y",    "", '="Submit 90% "&D'+(countR+1)+'&" for Client Acceptance"',                 "",'1'                         ,'=A'+(countR+17), "",  "",  "",  "", '1',''],//17(R+18)
        ["", "Y",    "", '="Client Accepts 100% "&D'+(countR+1),                                    "",'5'                         ,'=A'+(countR+18), "",  "",  "",  "", '0',''],//18(R+19)
        ["", "Y",    "", '="Client Authorizes 100% "&D'+(countR+1),                                 "",'5'                         ,'=A'+(countR+19), "",  "",  "",  "", '0',''],//19(R+20)
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
