export function get16_SoftwareDCN(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F                                ,G              , H , I ,    J,  K , L   
        ["", "WBS",  "", 'DCN xxxxx',                                                               "",''                                ,""             , "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                                ,""             , "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Pre-Job Brief"',                                     "",'1'                               ,""             , "",  "",  "",  "", '3',''],//2(R+3)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Data Collection"',                                   "",'=ROUND(L'+(countR+4)+'/(8*E1),1)','=A'+(countR+3), "",  "",  "",  "", '8',''],//3(R+4)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Create DCN in Maximo"',                             "",'=ROUND(L'+(countR+5)+'/(8*E1),1)','=A'+(countR+4), "",  "",  "",  "", '4',''],//4(R+5)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Create DCN Cover Sheet"',                            "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//5(R+6)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Prepare FORMs (FORM-14431, SQA Checklist, Section G to I FORM-11409) "',"",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '8',''],//6(R+7)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Software Release (SWR)"',                            "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '24',''],//7(R+8)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Software Maintenance Plan (SWM)"',                   "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '24',''],//8(R+9)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Software Transition Plan"',                          "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '24',''],//9(R+10)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Standard&Procedures Handbook (SPH)"',                "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '24',''],//10(R+11)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Software Development Plan (SDP)"',                   "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '24',''],//11(R+12)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Software Qualification Report"',                     "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '24',''],//12(R+13)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Computer System Requirements (CSR)"',                "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '24',''],//13(R+14)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Computer System Design Description (CSD)"',          "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '16',''],//14(R+15)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Computer Hardware Design (CHD)"',                    "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '16',''],//15(R+16)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Software Requirements Specification (SRS)"',         "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '16',''],//16(R+17)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Software Design Description (SDD)"',                 "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+18)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '16',''],//17(R+18)
        ["", "Y",    "", '="50% "&D'+(countR+1)+'&" Drafted"','Milestone','=ROUND(L'+(countR+19)+'/(8*E1),1)','=A'+(countR+7)+'&A'+(countR+8)+'&A'+(countR+9)+'&A'+(countR+10)+'&A'+(countR+11)+'&A'+(countR+12)+'&A'+(countR+13)+'&A'+(countR+14)+'&A'+(countR+15)+'&A'+(countR+16)+'&A'+(countR+17)+'&A'+(countR+18), "",  "",  "",  "", '0',''],//18(R+19)
        ["", "S",    "", '="90% "&D'+(countR+1)+'&" Software Review&Testing"',                      "",''                                ,"",          "",  "",  "",  "", '',''],//19(R+20)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Computer System Design Review Report (CSDRR)"',      "",'=ROUND(SUM(L'+(countR+21)+':L'+(countR+24)+')/(8*E1),1)','=A'+(countR+19), "",  "",  "",  "", '3',''],//20(R+21)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Software Requirements Review Report (SRRR)"',        "",'=ROUND(SUM(L'+(countR+21)+':L'+(countR+24)+')/(8*E1),1)','=A'+(countR+19), "",  "",  "",  "", '8',''],//21(R+22)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Software Design Review Report (SDRR)"',              "",'=ROUND(SUM(L'+(countR+21)+':L'+(countR+24)+')/(8*E1),1)','=A'+(countR+19), "",  "",  "",  "", '4',''],//22(R+23)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Code Review Report (CRR)"',                          "",'=ROUND(SUM(L'+(countR+21)+':L'+(countR+24)+')/(8*E1),1)','=A'+(countR+19), "",  "",  "",  "", '4',''],//23(R+24)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Sub-System Test Procedures (STP)"',                  "",'=ROUND(L'+(countR+25)+'/(8*E1),1)','=A'+(countR+21)+'&A'+(countR+22)+'&A'+(countR+23)+'&A'+(countR+24), "",  "",  "",  "", '8',''],//24(R+25)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Sub-System Test Report (STR)"',                      "",'=ROUND(L'+(countR+26)+'/(8*E1),1)','=A'+(countR+25), "",  "",  "",  "", '8',''],//25(R+26)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Unit Test Procedures (UTP)"',                        "",'=ROUND(L'+(countR+27)+'/(8*E1),1)','=A'+(countR+26), "",  "",  "",  "", '8',''],//26(R+27)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Unit Test Report (UTR)"',                            "",'=ROUND(L'+(countR+28)+'/(8*E1),1)','=A'+(countR+27), "",  "",  "",  "", '8',''],//27(R+28)
        ["", "Y",    "", '=D'+(countR+1)+'&" - System Integration Test Procedures (SITP)"',         "",'=ROUND(L'+(countR+29)+'/(8*E1),1)','=A'+(countR+28), "",  "",  "",  "", '8',''],//28(R+29)
        ["", "Y",    "", '=D'+(countR+1)+'&" - System Integration Test Report (SITR)"',             "",'=ROUND(L'+(countR+30)+'/(8*E1),1)','=A'+(countR+29), "",  "",  "",  "", '8',''],//29(R+30)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Validation Test Procedures (VTP)"',                  "",'=ROUND(L'+(countR+31)+'/(8*E1),1)','=A'+(countR+30), "",  "",  "",  "", '8',''],//30(R+31)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Validation Test Report (VTR)"',                      "",'=ROUND(L'+(countR+32)+'/(8*E1),1)','=A'+(countR+31), "",  "",  "",  "", '8',''],//31(R+32)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update Maximo for all Technical Content"',           "",'=ROUND(L'+(countR+33)+'/(8*E1),1)','=A'+(countR+32), "",  "",  "",  "", '8',''],//32(R+33)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Verify DCN"',                                        "",'2'                                ,'=A'+(countR+33), "",  "",  "",  "", '8',''],//33(R+34)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Disposition/Incorporate Internal Comments"',         "",'3'                                ,'=A'+(countR+34), "",  "",  "",  "", '8',''],//34(R+35)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Endorse and Issue DCN"',                             "",'1'                                ,'=A'+(countR+35), "",  "",  "",  "", '2',''],//35(R+36)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Submit DCN for Client Review"',                      "",'1'                                ,'=A'+(countR+36), "",  "",  "",  "", '1',''],//36(R+37)
        ["", "S",    "", '=D'+(countR+1)+'&": Comment and Disposition"',                            "",''                                 ,"",               "",  "",  "",  "", '' ,''],//37(R+38)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Route Tasks for Stakeholder Review / Stakeholder Interface"',"",'10'                       ,'=A'+(countR+37), "",  "",  "",  "", '5',''],//38(R+39)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Stakeholder Review"',                                "",'10'                               ,'=A'+(countR+37), "",  "",  "",  "", '0',''],//39(R+40)
        ["", "Y",    "", '=D'+(countR+1)+'&" - COMS Meeting"',' - Assumes 2 people with travel time to site','1'                          ,'=A'+(countR+37), "5",  "",  "",  "", '16',''],//40(R+41)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Disposition COMS/Stakeholder Review Comments"',      "",'3'          ,'=A'+(countR+40)+'&A'+(countR+41), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+19)+')*0.15,0)',''],//41(R+42)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Client - Review and Accept Dispositions"',           "",'5'                                ,'=A'+(countR+42), "",  "",  "",  "", '0',''],//42(R+43)
        ["", "S",    "", '="90% "&D'+(countR+1),                                                    "",''                                 ,"", "",  "",  "",  "", '',''],//43(R+44)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update DCN Package to Incorporate Stakeholder Comments"',"",'=ROUND(L'+(countR+45)+'/(8*E1),1)','=A'+(countR+43), "",  "",  "",  "", '=ROUNDUP(L'+(countR+42)+'/2,0)',''],//44(R+45)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Final Verification of Updated DCN"',                 "",'=ROUND(L'+(countR+46)+'/(8*E1),1)','=A'+(countR+45), "",  "",  "",  "", '=L'+(countR+45)+'/2',''],//45(R+46)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Incorporate Internal Comments"',                     "",'=ROUND(L'+(countR+47)+'/(8*E1),1)','=A'+(countR+46), "",  "",  "",  "", '1',''],//46(R+47)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Approve 90% DCN"',                                   "",'1'                                ,'=A'+(countR+47), "",  "",  "",  "", '2',''],//47(R+48)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Endorse / Issue DCN and Signoff Maximo"',            "",'1'                                ,'=A'+(countR+48), "",  "",  "",  "", '1',''],//48(R+49)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Upload DCN for Acceptance"',                        "",'1'                                ,'=A'+(countR+49), "",  "",  "",  "", '1',''],//49(R+50)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Resolve Minor Comments (if any)"',                  "",'2'                                ,'=A'+(countR+50), "",  "",  "",  "", '4',''],//50(R+51)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Client Acceptance & Signoff (Tasks 631, 633 & 635)"',"",'5'                                ,'=A'+(countR+51), "",  "",  "",  "", '0',''],//51(R+52)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Approved as per Task 500"',                'Milestone','0'                                ,'=A'+(countR+52), "",  "",  "",  "", '0',''],//52(R+53)
    
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
