export function get7_ConceptualEngReport(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E ,                           F ,G , H , I , J,  K , L   
        ["", "WBS",  "", 'Conceptual Engineering Report',                                           "",''                       ,"", "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", 'Problem Definition',                                                      "",''                       ,"", "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", 'Task Pre-Job Brief',                                                      "",'1'                      ,"", "",  "",  "",  "", '2',''],//2(R+3)
        ["", "Y",    "", 'Define Problem to be Solved',                                             "",'=ROUND(L'+(countR+4)+'/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '8',''],//3(R+4)
        ["", "Y",    "", 'Prepare Evaluation Criteria',                                             "",'=ROUND(L'+(countR+5)+'/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '14',''],//4(R+5)
        ["", "Y",    "", 'Gather Documentation / Discussions with Equipment Vendors',               "",'=ROUND(L'+(countR+6)+'/(E1*8),1)','=A'+(countR+5), "",  "",  "",  "", '21',''],//5(R+6)
        ["", "Y",    "", 'Estimate Loss Prevention/Benefit Gained',                                 "",'=ROUND(L'+(countR+7)+'/(E1*8),1)','=A'+(countR+6), "",  "",  "",  "", '4',''],//6(R+7)
        ["", "S",    "", 'Alternatives Analysis',                                                   "",''                       ,"", "",  "",  "",  "", '',''],//7(R+8)
        ["", "Y",    "", 'Option 1 Analysis',                                                       "",'=ROUND(SUM(L'+(countR+9)+':L'+(countR+12)+')/(E1*8),1)','=A'+(countR+6), "",  "",  "",  "", '15',''],//8(R+9)
        ["", "Y",    "", 'Option 2 Analysis',                                                       "",'=ROUND(SUM(L'+(countR+9)+':L'+(countR+12)+')/(E1*8),1)','=A'+(countR+6), "",  "",  "",  "", '15',''],//9(R+10)
        ["", "Y",    "", 'Option 3 Analysis',                                                       "",'=ROUND(SUM(L'+(countR+9)+':L'+(countR+12)+')/(E1*8),1)','=A'+(countR+6), "",  "",  "",  "", '15',''],//10(R+11)
        ["", "Y",    "", 'Option 4 Analysis',                                                       "",'=ROUND(SUM(L'+(countR+9)+':L'+(countR+12)+')/(E1*8),1)','=A'+(countR+6), "",  "",  "",  "", '15',''],//11(R+12)
        ["", "Y",    "", 'Finalize Options',                                                        "",'=ROUND(L'+(countR+13)+'/(E1*8),1)','=A'+(countR+9)+'&A'+(countR+10)+'&A'+(countR+11)+'&A'+(countR+12), "",  "",  "",  "", '8',''],//12(R+13)
        ["", "Y",    "", 'Provide information to Client for Class 5 Estimate',                      "",'3'                      ,'=A'+(countR+7), "",  "",  "",  "", '5',''],//13(R+14)
        ["", "Y",    "", 'Class 5 Estimate from PMC',                                               "",'20'                     ,'=A'+(countR+14), "",  "",  "",  "", '0',''],//14(R+15)
        ["", "Y",    "", 'Establish Cost Benefit Analysis/ROI Analysis',                            "",'=ROUND(L'+(countR+16)+'/(E1*8),1)','=A'+(countR+13)+'&A'+(countR+15), "",  "",  "",  "", '21',''],//15(R+16)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                       ,"", "",  "",  "",  "", '',''],//16(R+17)
        ["", "Y",    "", '="Prepare 50% "&D'+(countR+1),                                            "",'=ROUND(L'+(countR+18)+'/(E1*8),1)','=A'+(countR+16), "",  "",  "",  "", '24',''],//17(R+18)
        ["", "Y",    "", '="Verify 50% "&D'+(countR+1),                                             "",'=ROUND(L'+(countR+19)+'/(E1*8),1)','=A'+(countR+18), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+9)+':L'+(countR+16)+',L'+(countR+18)+')*0.15,0)',''],//18(R+19)
        ["", "Y",    "", 'Incorporate Internal Comments',                                           "",'=ROUND(L'+(countR+20)+'/(E1*8),1)','=A'+(countR+19), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+9)+':L'+(countR+16)+',L'+(countR+18)+')*0.1,0)',''],//19(R+20)
        ["", "Y",    "", '="Approve 50% "&D'+(countR+1),                                            "",'1'                      ,'=A'+(countR+20), "",  "",  "",  "", '2',''],//20(R+21)
        ["", "Y",    "", '="Submit 50% "&D'+(countR+1)+'&" for Client Review"',                     "",'1'                      ,'=A'+(countR+21), "",  "",  "",  "", '1',''],//21(R+22)
        ["", "S",    "", 'Stakeholder Review&Challenge Board Meeting',                              "",''                       ,"", "",  "",  "",  "", '',''],//22(R+23)
        ["", "Y",    "", 'Stakeholder Review Meeting for CER','- assume 2 people via teleconference ','10'                      ,'=A'+(countR+22), "",  "",  "",  "", '4',''],//23(R+24)
        ["", "Y",    "", 'Select Alternative Based on Recommendations',                             "",'=ROUND(L'+(countR+25)+'/(E1*8),1)','=A'+(countR+24), "",  "",  "",  "", '4',''],//24(R+25)
        ["", "Y",    "", 'Refine the Estimate to Class 4 for Selected Alternative',                 "",'=ROUND(L'+(countR+26)+'/(E1*8),1)','=A'+(countR+25), "",  "",  "",  "", '4',''],//25(R+26)
        ["", "Y",    "", 'Update the Conceptual Engineering Report',                                "",'=ROUND(L'+(countR+27)+'/(E1*8),1)','=A'+(countR+26), "",  "",  "",  "", '12',''],//26(R+27)
        ["", "Y",    "", 'Submit Draft 90% CER for DPCB Meeting',                                   "",'=ROUND(L'+(countR+28)+'/(E1*8),1)','=A'+(countR+27), "",  "",  "",  "", '1',''],//27(R+28)
        ["", "Y",    "", 'Schedule Design Product Challenge Board',                                 "",'=ROUND(L'+(countR+29)+'/(E1*8),1)','=A'+(countR+28), "",  "",  "",  "", '1',''],//28(R+29)
        ["", "Y",    "", 'Prepare for and Attend DPCB Meeting','- assume 2 people via teleconference ','5'                      ,'=A'+(countR+29), "",  "",  "",  "", '8',''],//29(R+30)
        ["", "S",    "", '="100% "&D'+(countR+1),                                                   "",''                       ,"", "",  "",  "",  "", '',''],//30(R+31)
        ["", "Y",    "", '="Update 100% "&D'+(countR+1),                                            "",'=ROUND(L'+(countR+32)+'/(E1*8),1)','=A'+(countR+30), "",  "",  "",  "", '12',''],//31(R+32)
        ["", "Y",    "", '="Verify 100% "&D'+(countR+1),                                            "",'=ROUND(L'+(countR+33)+'/(E1*8),1)','=A'+(countR+32), "",  "",  "",  "", '4',''],//32(R+33)
        ["", "Y",    "", '="Approve 100% "&D'+(countR+1),                                           "",'1'                      ,'=A'+(countR+33), "",  "",  "",  "", '2',''],//33(R+34)
        ["", "Y",    "", 'Submit for Client Acceptance',                                            "",'1'                      ,'=A'+(countR+34), "",  "",  "",  "", '1',''],//34(R+35)
        ["", "Y",    "", '="Client Accept/Approve 100% "&D'+(countR+1),                             "",'5'                      ,'=A'+(countR+35), "",  "",  "",  "", '0',''],//35(R+36)

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
