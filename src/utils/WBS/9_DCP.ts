export function get9_DCP(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E ,                                   F ,              G , H , I , J,  K , L   
        ["", "WBS",  "", 'DCP xxxxx',                                                               "",''                                ,""             , "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                                ,""             , "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", 'Task Pre-Job Brief',                                                      "",'1'                               ,""             , "",  "",  "",  "", '3',''],//2(R+3)
        ["", "Y",    "", 'Determine EC Type&Subtype',                                               "",'=ROUND(L'+(countR+4)+'/(8*E1),1)','=A'+(countR+3), "",  "",  "",  "", '4',''],//3(R+4)
        ["", "Y",    "", 'Prepare Design Scoping Checklist',                                        "",'=ROUND(L'+(countR+5)+'/(8*E1),1)','=A'+(countR+3), "",  "",  "",  "", '8',''],//4(R+5)
        ["", "Y",    "", 'Enter Attributes Based on Design Scoping Checklist',                      "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//5(R+6)
        ["", "Y",    "", 'Prepare FORM-14452',                                                      "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//6(R+7)
        ["", "Y",    "", 'Prepare Licensing Screen',                                                "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//7(R+8)
        ["", "Y",    "", 'Prepare Seismic Assessment',                                              "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '6',''],//8(R+9)
        ["", "Y",    "", 'Prepare Documentation Scoping Checklist',                                 "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '12',''],//9(R+10)
        ["", "Y",    "", 'Prepare Software QA Checklist',                                           "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '6',''],//10(R+11)
        ["", "Y",    "", 'Prepare Software Categorization Report',                                  "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '8',''],//11(R+12)
        ["", "Y",    "", 'Prepare Software Development Plan',                                       "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '12',''],//12(R+13)
        ["", "Y",    "", 'Prepare Computer System Requirements',                                    "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '12',''],//13(R+14)
        ["", "Y",    "", 'Prepare Reactor Safety Designers Checklist',                              "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '12',''],//14(R+15)
        ["", "Y",    "", 'Prepare Pre-Start Health & Safety Review',                                  "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//15(R+16)
        ["", "Y",    "", 'Prepare Fire Protection Engineering Review ',                             "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//16(R+17)
        ["", "Y",    "", 'Prepare Environmental Impact Worksheet Form',                             "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '6',''],//17(R+18)
        ["", "Y",    "", 'Complete Risk Classification Assessment ',                                "",'=ROUND(L'+(countR+19)+'/(8*E1),1)','=A'+(countR+6)+'&A'+(countR+7)+'&A'+(countR+8)+'&A'+(countR+9)+'&A'+(countR+10)+'&A'+(countR+11)+'&A'+(countR+12)+'&A'+(countR+13)+'&A'+(countR+14)+'&A'+(countR+15)+'&A'+(countR+16)+'&A'+(countR+17)+'&A'+(countR+18), "",  "",  "",  "", '6',''],//18(R+19)
        ["", "Y",    "", 'Add Maximo Tasks Based on Risk and Required Approvals',                   "",'=ROUND(L'+(countR+20)+'/(8*E1),1)','=A'+(countR+19), "",  "",  "",  "", '4',''],//19(R+20)
        ["", "Y",    "", 'Populate Attributes',                                                     "",'=ROUND(L'+(countR+21)+'/(8*E1),1)','=A'+(countR+20), "",  "",  "",  "", '4',''],//20(R+21)
        ["", "Y",    "", 'Identify Ops and Maintenance Documents that Require Updates',             "",'=ROUNDUP(SUM(L'+(countR+22)+':L'+(countR+26)+')/(8*E1),1)','=A'+(countR+21), "",  "",  "",  "", '4',''],//21(R+22)
        ["", "Y",    "", 'Initiate Training Change Request (TCR)',                                  "",'=ROUNDUP(SUM(L'+(countR+22)+':L'+(countR+26)+')/(8*E1),1)','=A'+(countR+21), "",  "",  "",  "", '2',''],//22(R+23)
        ["", "Y",    "", 'Initiate CRs for PMIDs, O&M Documents, BOM Group, RS, etc',               "",'=ROUNDUP(SUM(L'+(countR+22)+':L'+(countR+26)+')/(8*E1),1)','=A'+(countR+21), "",  "",  "",  "", '2',''],//23(R+24)
        ["", "Y",    "", 'If CGD is required, Initiate Process as per Client PROC',                 "",'=ROUNDUP(SUM(L'+(countR+22)+':L'+(countR+26)+')/(8*E1),1)','=A'+(countR+21), "",  "",  "",  "", '4',''],//24(R+25)
        ["", "Y",    "", 'Identify and set up DCNs in Maximo (xref to DCP)',                        "",'=ROUNDUP(SUM(L'+(countR+22)+':L'+(countR+26)+')/(8*E1),1)','=A'+(countR+21), "",  "",  "",  "", '2',''],//25(R+26)
        ["", "Y",    "", 'Prepare Modification Outline',                                            "",'=ROUND(L'+(countR+27)+'/(8*E1),1)','=A'+(countR+22)+'&A'+(countR+23)+'&A'+(countR+24)+'&A'+(countR+25)+'&A'+(countR+26), "",  "",  "",  "", '8',''],//26(R+27)
        ["", "Y",    "", 'Update Affected & Reference Document Lists',                              "",'=ROUND(L'+(countR+28)+'/(8*E1),1)','=A'+(countR+27), "",  "",  "",  "", '4',''],//27(R+28)
        ["", "Y",    "", 'Prepare COMS Screening',                                                  "",'=ROUND(L'+(countR+29)+'/(8*E1),1)','=A'+(countR+28), "",  "",  "",  "", '4',''],//28(R+29)
        ["", "Y",    "", 'Prepare COMS Package',                                                    "",'1'                                ,'=A'+(countR+29), "",  "",  "",  "", '4',''],//29(R+30)
        ["", "Y",    "", '="Internal Verification of 50% "&D'+(countR+1),                           "",'5'                                ,'=A'+(countR+29), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+30)+')*0.15,0)',''],//30(R+31)
        ["", "Y",    "", '="Submit  50% "&D'+(countR+1)+'&" for Client Review"',                    "",'1'                                ,'=A'+(countR+30), "",  "",  "",  "", '1',''],//31(R+32)
        ["", "S",    "", '=D'+(countR+1)+'&" Comment and Disposition"',                             "",''                                 , "",  "",  "",  "",  "", '',''],//32(R+33)
        ["", "Y",    "", 'Route DCP for Stakeholders Review / Coordinate Stakeholder Review',       "",'10'                               ,'=A'+(countR+32), "",  "",  "",  "", '8',''],//33(R+34)
        ["", "Y",    "", 'COMS Review Meeting','assume 2 people for 2h','1','=A'+(countR+32),       "4",""                                ,"",   "", '4',''],//34(R+35)
        ["", "Y",    "", '="Stakeholder Review of "&D'+(countR+1),                                  "",'5'                                ,'=A'+(countR+32), "",  "",  "",  "", '0',''],//35(R+36)
        ["", "Y",    "", 'Disposition Stakeholder Comments',                                        "",'5'                                ,'=A'+(countR+34)+'&A'+(countR+35)+'&A'+(countR+36), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+32)+')*0.1,0)',''],//36(R+37)
        ["", "Y",    "", 'Obtain Stakeholder Acceptance on Comments',                               "",'5'                                ,'=A'+(countR+37), "",  "",  "",  "", '0',''],//37(R+38)
        ["", "S",    "", '="100% "&D'+(countR+1),                                                   "",''                                 ,"", "",  "",  "",  "", '',''],//38(R+39)
        ["", "Y",    "", 'Incorporate Stakeholders Comments and Complete Maximo Tasks',             "",'=ROUND(L'+(countR+40)+'/(8*E1),1)','=A'+(countR+38), "",  "",  "",  "", '=ROUNDUP(L'+(countR+37)+'/2,0)',''],//39(R+40)
        ["", "Y",    "", '="Verify 90% "&D'+(countR+1),                                             "",'=ROUND(L'+(countR+41)+'/(8*E1),1)','=A'+(countR+40), "",  "",  "",  "", '=L'+(countR+40)+'/2',''],//40(R+41)
        ["", "Y",    "", 'Route Maximo Tasks for Approval ',                                        "",'=ROUND(L'+(countR+42)+'/(8*E1),1)','=A'+(countR+41), "",  "",  "",  "", '2',''],//41(R+42)
        ["", "Y",    "", '="Approve 90% "&D'+(countR+1),                                            "",'1'                                ,'=A'+(countR+42), "",  "",  "",  "", '3',''],//42(R+43)
        ["", "Y",    "", 'OE sign off Task XXX',                                                    "",'2'                                ,'=A'+(countR+43), "",  "",  "",  "", '0',''],//43(R+44)
        ["", "Y",    "", 'SM sign off Task XXX',                                                    "",'2'                                ,'=A'+(countR+44), "",  "",  "",  "", '0',''],//44(R+45)
        ["", "Y",    "", 'Schedule Challenge Board Meeting',                                        "",'=ROUND(L'+(countR+46)+'/(8*E1),1)','=A'+(countR+38), "",  "",  "",  "", '1',''],//45(R+46)
        ["", "Y",    "", 'Prepare for Challenge Board Meeting',                                     "",'=ROUND(L'+(countR+47)+'/(8*E1),1)','=A'+(countR+43), "",  "",  "",  "", '4',''],//46(R+47)
        ["", "Y",    "", 'Attend Challenge Board Meeting',                                          "",'5'                                ,'=A'+(countR+45)+'&A'+(countR+46)+'&A'+(countR+47), "",  "",  "",  "", '4',''],//47(R+48)
        ["", "Y",    "", 'Resolve Comments from Challenge Board Meeting',                           "",'3'                                ,'=A'+(countR+48)  , "",  "",  "",  "", '8',''],//48(R+49)
        ["", "Y",    "", '="Incorporate Changes into %100 "&D'+(countR+1)+'&" (if required)"',      "",'=ROUND(L'+(countR+50)+'/(8*E1),1)','=A'+(countR+49), "",  "",  "",  "", '4',''],//49(R+50)
        ["", "Y",    "", '="Approve 100% "&D'+(countR+1),                                           "",'1'                                ,'=A'+(countR+50), "",  "",  "",  "", '1',''],//50(R+51)

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
