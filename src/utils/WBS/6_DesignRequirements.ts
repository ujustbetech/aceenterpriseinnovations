/********************************************************
*	      Project name: WBS_Creator					    *
*	      Project by: Nesabyte						    *
*	      Project for: McLean Innovations               * 
*	      DATE: Dec 2022						        *
********************************************************/


console.log("get6_DesignRequirements")

export function get6_DesignRequirements(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
    //A,  B   , C , D ,                                                   E , F ,                                 G ,                H , I , J,  K , L 
    ["", "WBS", "", WBSName,                                              "", '',                                 "",                "", "", "",    "", ], //0(R+1)
    ["", "S",   "", '="50% "&D'+(countR+1),                               "", '',                                 "",                "", "", "",    "", ], //1(R+2)
    ["", "Y",   "", 'Task Pre-Job Brief',                                 "", '1',                                "",                "", "", "",    "", "2"], //2(R+3)
    ["", "Y",   "", 'Gather Documentation',                               "", '=ROUND(L'+(countR+4)+'/(8*E1),1)', '=A'+(countR+3),   "", "", "",    "", '8'],//3(R+4)
    ["", "Y",   "", 'Complete DR Design Product Board Checklist',         "", '=ROUND(L'+(countR+5)+'/(8*E1),1)', '=A'+(countR+4),   "", "", "",    "", '4'],//4(R+5)
    ["", "Y",   "", '="Prepare 50% "&D'+(countR+1),                       "", '=ROUND(L'+(countR+6)+'/(8*E1),1)', '=A'+(countR+5),   "",  "",  "",  "", '60'],//5(R+6)
    ["", "Y",   "", '="Verify 50% "&D'+(countR+1),                        "", '=ROUND(L'+(countR+7)+'/(8*E1),1)', '=A'+(countR+6),   "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+6)+')*0.15,0)'],//6(R+7)
    ["", "Y",   "", 'Incorporate Internal Comments',                      "", '=ROUND(L'+(countR+8)+'/(8*E1),1)', '=A'+(countR+7),   "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+7)+')*0.1,0)'],//7(R+8)
    ["", "Y",   "", '="Approve 50% "&D'+(countR+1),                       "", '1',                                '=A'+(countR+8),   "",  "",  "",  "", '2.5'],//8(R+9)
    ["", "Y",   "", '="Submit 50% "&D'+(countR+1)+'&" for Client Review"',"", '1',                                '=A'+(countR+9),   "",  "",  "",  "", '1'],  //9(R+10)
    ["", "S",   "", '=D'+(countR+1)+'&" Comment and Disposition"',        "", '',                                 "",                "",  "",  "",  "", ],     //10(R+11)
    ["", "Y",   "", '="Stakeholder Review of "&D'+(countR+1),             "", '10',                               '=A'+(countR+10),  "",  "",  "",  "", '0'],  //11(R+12)
    ["", "Y",   "", 'Disposition Stakeholder Comments',                   "", '=ROUND(L'+(countR+13)+'/(8*E1),1)+2','=A'+(countR+12),"",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+10)+')*0.1,0)'],//12(R+13)
    ["", "Y",   "", 'Client Accept Comment Dispositions',                 "", '5',                                '=A'+(countR+13),  "",  "",  "",  "", '0'],  //13(R+14)
    ["", "S",   "", '="90% "&D'+(countR+1),                               "", '',                                 '',                "",  "",  "",  "", ],     //14(R+15)
    ["", "Y",    "", 'Incorporate Accepted Comments',                     "",'=ROUND(L'+(countR+16)+'/(8*E1),1)', '=A'+(countR+14),  "",  "",  "",  "", '=L'+(countR+13)+'/2'],//15(R+16)
    ["", "Y",    "", 'Submit Interim Draft DR for DPCB Meeting',          "",'=ROUND(L'+(countR+17)+'/(8*E1),1)', '=A'+(countR+16),  "",  "",  "",  "", '1'],//16(R+17)
    ["", "Y",    "", 'Schedule Design Product Challenge Board',           "",'=ROUND(L'+(countR+18)+'/(8*E1),1)', '=A'+(countR+17),  "",  "",  "",  "", '1'],//17(R+18)
    ["", "Y",    "", 'Prepare for DPCB Meeting',                          "",'=ROUND(L'+(countR+19)+'/(8*E1),1)', '=A'+(countR+18),  "",  "",  "",  "", '6'],//18(R+19)
    ["", "Y",    "", 'Attend Design Products Challenge Board Meeting',"assume remote telecon",'=ROUND(L'+(countR+20)+'/(8*E1),1)','=A'+(countR+18)+'&A'+(countR+19), "5",  "",  "",  "", '2'],//19(R+20)
	["", "Y",    "", 'Incorporate Comments from DPCB Meeting',            "",'=ROUND(L'+(countR+21)+'/(8*E1),1)', '=A'+(countR+20),  "",  "",  "",  "", '8'],//20(R+21)
    ["", "Y",    "", 'Final Verification of Design Requirements',         "",'=ROUND(L'+(countR+22)+'/(8*E1),1)', '=A'+(countR+21),  "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+16)+':L'+(countR+21)+')*0.2,0)'],//21(R+22)
    ["", "Y",    "", '="Approve 90% "&D'+(countR+1),                      "",'=ROUND(L'+(countR+23)+'/(8*E1),1)', '=A'+(countR+22),  "",  "",  "",  "", '1.5'],//22(R+23)
    ["", "Y",   "", '="Submit "&D'+(countR+1)+'&" for Client Acceptance"',"",'=ROUND(L'+(countR+24)+'/(8*E1),1)', '=A'+(countR+23),  "",  "",  "",  "", '1'],//23(R+24)
    ["", "Y",    "", '="Client Accepts 100% "&D'+(countR+1),              "",'=ROUND(L'+(countR+25)+'/(8*E1),1)', '=A'+(countR+24),  "",  "",  "",  "", '0'],//24(R+25)
    ["", "Y",    "", 'DIVM Authorize Design Requirements ',               "",'5',                                 '=A'+(countR+25),  "",  "",  "",  "", '0'],//25(R+26)
    ["", "Y",    "", 'Issue Design Requirements in Content Server',       "",'2',                                 '=A'+(countR+26),  "",  "",  "",  "", '1'],//26(R+27)
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
