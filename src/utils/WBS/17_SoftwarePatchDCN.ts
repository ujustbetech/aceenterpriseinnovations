export function get17_SoftwarePatchDCN(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F                                ,G              , H ,  I ,   J,  K , L   
        ["", "WBS",  "", 'DCN xxxxx',                                                               "",''                                ,""             , "",  "",  "",  "", '' ,''],//0(R+1)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                                ,""             , "",  "",  "",  "", '' ,''],//1(R+2)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Pre-Job Brief"',                                     "",'1'                               ,""             , "",  "",  "",  "", '3',''],//2(R+3)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Data Collection"',                                   "",'=ROUND(L'+(countR+4)+'/(8*E1),1)','=A'+(countR+3), "",  "",  "",  "", '8',''],//3(R+4)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Create DCN in Maximo"',                             "",'=ROUNDUP(SUM(L'+(countR+5)+')/(8*E1),1)*2','=A'+(countR+4), "",  "",  "",  "", '4',''],//4(R+5)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Create DCN Cover Sheet"',                            "",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+7)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//5(R+6)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Prepare FORMs (FORM-14431, SQA Checklist, Section G to I FORM-11409) "',"",'=ROUNDUP(SUM(L'+(countR+6)+':L'+(countR+7)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '8',''],//6(R+7)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Perform Work Order Planning"',                       "",'=ROUND(L'+(countR+8)+'/(8*E1),1)','=A'+(countR+4), "",  "",  "",  "", '6',''],//7(R+8)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Prepare Testing Environment"',                       "",'=ROUND(L'+(countR+9)+'/(8*E1),1)','=A'+(countR+8), "",  "",  "",  "", '4',''],//8(R+9)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Prepare Test Plan"',                                 "",'=ROUND(L'+(countR+10)+'/(8*E1),1)','=A'+(countR+9), "",  "",  "",  "", '4',''],//9(R+10)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Verify Test Plan"',                                  "",'=ROUND(L'+(countR+11)+'/(8*E1),1)','=A'+(countR+10), "",  "",  "",  "", '2',''],//10(R+11)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Approve Test Plan"',                                 "",'=ROUND(L'+(countR+12)+'/(8*E1),1)','=A'+(countR+11), "",  "",  "",  "", '1',''],//11(R+12)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Write Patches"',                                     "",'=ROUND(L'+(countR+13)+'/(8*E1),1)','=A'+(countR+12), "",  "",  "",  "", '8',''],//12(R+13)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Software Walkdown"',                                 "",'=ROUND(L'+(countR+14)+'/(8*E1),1)','=A'+(countR+13), "",  "",  "",  "", '4',''],//13(R+14)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Verify Patch"',                                      "",'=ROUND(L'+(countR+15)+'/(8*E1),1)','=A'+(countR+14), "",  "",  "",  "", '2',''],//14(R+15)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Prepare Draft Test Report"',                         "",'=ROUND(L'+(countR+16)+'/(8*E1),1)','=A'+(countR+15), "",  "",  "",  "", '6',''],//15(R+16)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Approve Patch"',                                     "",'=ROUND(L'+(countR+17)+'/(8*E1),1)','=A'+(countR+16), "",  "",  "",  "", '1',''],//16(R+17)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Prepare Troubleshooting Documents&Discuss with Operations"',"",'=ROUND(L'+(countR+18)+'/(8*E1),1)','=A'+(countR+17), "",  "",  "",  "", '8',''],//17(R+18)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Verify Troubleshooting Documentation"',              "",'=ROUND(L'+(countR+19)+'/(8*E1),1)','=A'+(countR+18), "",  "",  "",  "", '2',''],//18(R+19)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Approve Troubleshooting Documentation"',             "",'=ROUND(SUM(L'+(countR+20)+':L'+(countR+23)+')/(8*E1),1)','=A'+(countR+19), "",  "",  "",  "", '1',''],//19(R+20)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Perform Troubleshooting"',                           "",'=ROUND(SUM(L'+(countR+20)+':L'+(countR+23)+')/(8*E1),1)','=A'+(countR+20), "",  "",  "",  "", '8',''],//20(R+21)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Write Software Test Report"',                        "",'=ROUND(SUM(L'+(countR+20)+':L'+(countR+23)+')/(8*E1),1)','=A'+(countR+21), "",  "",  "",  "", '6',''],//21(R+22)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Verify Software Test Report"',                       "",'=ROUND(SUM(L'+(countR+20)+':L'+(countR+23)+')/(8*E1),1)','=A'+(countR+22), "",  "",  "",  "", '2',''],//22(R+23)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Approve Software Test Report"',                      "",'=ROUND(L'+(countR+24)+'/(8*E1),1)','=A'+(countR+23), "",  "",  "",  "", '1',''],//23(R+24)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Write Tuning Patches"',                              "",'=ROUND(L'+(countR+25)+'/(8*E1),1)','=A'+(countR+21), "",  "",  "",  "", '6',''],//24(R+25)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Verify Tuning Patches"',                             "",'=ROUND(L'+(countR+26)+'/(8*E1),1)','=A'+(countR+25), "",  "",  "",  "", '2',''],//25(R+26)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Approve Tuning Patches"',                            "",'=ROUND(L'+(countR+27)+'/(8*E1),1)','=A'+(countR+26), "",  "",  "",  "", '1',''],//26(R+27)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update Maximo for all Technical Content"',           "",'=ROUND(L'+(countR+28)+'/(8*E1),1)','=A'+(countR+6)+'&A'+(countR+7)+'&A'+(countR+24)+'&A'+(countR+27), "",  "",  "",  "", '8',''],//27(R+28)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Verify DCN"',                                        "",'=ROUND(L'+(countR+29)+'/(8*E1),1)','=A'+(countR+28), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+7)+',L'+(countR+28)+')*0.15,0)',''],//28(R+29)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Disposition/Incorporate Internal Comments"',         "",'=ROUND(L'+(countR+30)+'/(8*E1),1)','=A'+(countR+29), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+7)+',L'+(countR+28)+')*0.1,0)',''],//29(R+30)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Endorse and Issue DCN"',                             "",'1'                                ,'=A'+(countR+30), "",  "",  "",  "", '2',''],//30(R+31)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Submit DCN for Stakeholder Review"',                 "",'1'                                ,'=A'+(countR+31), "",  "",  "",  "", '1',''],//31(R+32)
        ["", "S",    "", '=D'+(countR+1)+'&": Comment and Disposition"',                            "",''                                 ,""              , "",  "",  "",  "", '',''],//32(R+33)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Route Tasks for Stakeholder Review / Stakeholder Interface"',"",'10'                       ,'=A'+(countR+32), "",  "",  "",  "", '5',''],//33(R+34)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Stakeholder Review"',                                "",'10'                               ,'=A'+(countR+32), "",  "",  "",  "", '0',''],//34(R+35)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Disposition COMS/Stakeholder Review Comments"',      "",'3'                                ,'=A'+(countR+34)+'&A'+(countR+35), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+32)+')*0.1,0)',''],//35(R+36)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Client - Review and Accept Dispositions"',           "",'5'                                ,'=A'+(countR+36), "",  "",  "",  "", '0',''],//36(R+37)
        ["", "S",    "", '="90% "&D'+(countR+1),                                                    "",''                                 ,"", "",  "",  "",  "", '',''],//37(R+38)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update DCN Package to Incorporate Stakeholder Comments"',"",'=ROUND(L'+(countR+39)+'/(8*E1),1)','=A'+(countR+37), "",  "",  "",  "", '=ROUNDUP(L'+(countR+36)+'/2,0)',''],//38(R+39)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Final Verification of Updated DCN"',                 "",'=ROUND(L'+(countR+40)+'/(8*E1),1)','=A'+(countR+39), "",  "",  "",  "", '=L'+(countR+39)+'/2',''],//39(R+40)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Incorporate Internal Comments"',                     "",'=ROUND(L'+(countR+41)+'/(8*E1),1)','=A'+(countR+39), "",  "",  "",  "", '1',''],//40(R+41)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Approve 90% DCN"',                                   "",'1'                                ,'=A'+(countR+40), "",  "",  "",  "", '2',''],//41(R+42)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Endorse / Issue DCN and Signoff Maximo"',            "",'1'                                ,'=A'+(countR+42), "",  "",  "",  "", '1',''],//42(R+43)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Upload DCN for Acceptance"',                        "",'1'                                ,'=A'+(countR+43), "",  "",  "",  "", '1',''],//43(R+44)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Resolve Minor Comments (if any)"',                  "",'2'                                ,'=A'+(countR+44), "",  "",  "",  "", '4',''],//44(R+45)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Client Acceptance & Signoff (Tasks 631, 633 & 635)"',"",'5'                                ,'=A'+(countR+45), "",  "",  "",  "", '0',''],//45(R+46)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Approved as per Task 500"',                'Milestone','0'                                ,'=A'+(countR+46), "",  "",  "",  "", '0',''],//46(R+47)

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

