export function get18_ConfigIntentChange(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F                                ,G              , H ,  I ,   J,  K , L   
        ["", "WBS",  "", 'Configuration Intent Change',                                             "",''                                ,""             , "",  "",  "",  "", '' ,''],//0(R+1)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                                ,""             , "",  "",  "",  "", '' ,''],//1(R+2)
        ["", "Y",    "", 'Pre-Job Brief',                                                           "",'1'                               ,""             , "",  "",  "",  "", '3',''],//2(R+3)
        ["", "Y",    "", 'Data Collection',                                                         "",'=ROUND(L'+(countR+4)+'/(8*E1),1)','=A'+(countR+3), "",  "",  "",  "", '8',''],//3(R+4)
        ["", "Y",    "", 'Create CIC in Maximo',                                                    "",'=ROUND(L'+(countR+5)+'/(8*E1),1)','=A'+(countR+4), "",  "",  "",  "", '4',''],//4(R+5)
        ["", "Y",    "", 'Create CIC Cover Sheet',                                                  "",'=ROUND(L'+(countR+6)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//5(R+6)
        ["", "Y",    "", 'Prepare FORMs (FORM-14431, Seismic Form, etc.)',                          "",'=ROUND(L'+(countR+7)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '12',''],//6(R+7)
        ["", "Y",    "", 'Mark-up Existing Drawings (Piping Isometrics, GAs, EWDs, CBDs, GAs, FuseData Sheets, etc.)','- assume 6 markups at 2h per','=ROUND(L'+(countR+8)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '=6*2',''],//7(R+8)
        ["", "Y",    "", 'Create New Drawings (Piping Isometrics, GAs, EWDs, CBDs, GAs, FuseData Sheets, etc.)','- assume 3 new drawings at 6h per','=ROUND(L'+(countR+9)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '=3*6',''],//8(R+9)
        ["", "Y",    "", 'Drafting',                                                                "",'=ROUND(L'+(countR+10)+'/(8*E1),1)','=A'+(countR+8)+'&A'+(countR+9), "-1",  "",  "",  "", '=SUM(L'+(countR+8)+':L'+(countR+9)+')*1.5',''],//9(R+10)
        ["", "Y",    "", 'Procurement Support/Review',                                              "",'=ROUND(L'+(countR+11)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//10(R+11)
        ["", "Y",    "", 'CAT ID Creation',                                                         "",'=ROUND(L'+(countR+12)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//11(R+12)
        ["", "Y",    "", 'CAT ID Screening',                                                        "",'=ROUND(L'+(countR+13)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//12(R+13)
        ["", "Y",    "", 'Create DBOM',                                                             "",'=ROUND(L'+(countR+14)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//13(R+14)
        ["", "Y",    "", 'Update EBOM',                                                             "",'=ROUND(L'+(countR+15)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//14(R+15)
        ["", "Y",    "", 'Vendor Documents Received',                                      'Milestone','0'                                ,""             , "",  "",  "",  "", '0',''],//15(R+16)
        ["", "Y",    "", 'Review Vendor Documents / Purchasability Review',                         "",'=ROUND(L'+(countR+17)+'/(8*E1),1)','=A'+(countR+16), "",  "",  "",  "", '6',''],//16(R+17)
        ["", "Y",    "", 'Update MEL and Route Task to Drafting Office for Approval',               "",'=ROUND(L'+(countR+18)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//17(R+18)
        ["", "Y",    "", 'Update Maximo for Tech Content (Change Papers, AEL, ACB etc.)',           "",'=ROUND(L'+(countR+19)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//18(R+19)
        ["", "Y",    "", 'Verify CIC',                                                              "",'=ROUND(L'+(countR+20)+'/(8*E1),1)','=A'+(countR+6)+'&A'+(countR+7)+'&A'+(countR+10)+'&A'+(countR+12)+'&A'+(countR+13)+'&A'+(countR+14)+'&A'+(countR+15)+'&A'+(countR+17)+'&A'+(countR+18)+'&A'+(countR+19), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+19)+')*0.15,0)',''],//19(R+20)
        ["", "Y",    "", 'Disposition/Incorporate Internal Comments',                               "",'3'                                ,'=A'+(countR+20), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+19)+')*0.1,0)',''],//20(R+21)
        ["", "Y",    "", 'Endorse and Issue CIC',                                                   "",'1'                                ,'=A'+(countR+21), "",  "",  "",  "", '2',''],//21(R+22)
        ["", "Y",    "", 'Submit 50% CIC for Stakeholder Review',                                   "",'1'                                ,'=A'+(countR+22), "",  "",  "",  "", '1',''],//22(R+23)
        ["", "S",    "", 'Online Wiring',                                                           "",''                                 ,""              , "",  "",  "",  "", '',''],//23(R+24)
        ["", "Y",    "", 'Submit Drawings to Client for Online Wiring (OLW)',                       "",'1'                                ,'=A'+(countR+10), "",  "",  "",  "", '2',''],//24(R+25)
        ["", "Y",    "", 'Client RDE Releases OLW Package to the Client Drafting Office',           "",'2'                                ,'=A'+(countR+25), "",  "",  "",  "", '0',''],//25(R+26)
        ["", "Y",    "", 'Client Drafting Office Completes the OLW',                                "",'15'                               ,'=A'+(countR+26), "",  "",  "",  "", '0',''],//26(R+27)
        ["", "Y",    "", 'Review OLW Package',                                                      "",'2'                                ,'=A'+(countR+27), "",  "",  "",  "", '6',''],//27(R+28)
        ["", "Y",    "", 'Submit Comments to OLW',                                                  "",'1'                                ,'=A'+(countR+28), "",  "",  "",  "", '1',''],//28(R+29)
        ["", "Y",    "", 'Client Disposition Comments and update OLW',                              "",'3'                                ,'=A'+(countR+29), "",  "",  "",  "", '0',''],//29(R+30)
        ["", "Y",    "", 'Review changes to OLW Package',                                           "",'2'                                ,'=A'+(countR+30), "",  "",  "",  "", '4',''],//30(R+31)
        ["", "Y",    "", 'Submit final OLW package for Client Acceptance',                          "",'1'                                ,'=A'+(countR+31), "",  "",  "",  "", '1',''],//31(R+32)
        ["", "Y",    "", 'Perform Post-Design Confirmation Walkdown',    ' assume 1 person over 1 day','1'                                ,'=A'+(countR+32), "4", "",  "",  "", '8',''],//32(R+33)
        ["", "S",    "", '=D'+(countR+1)+'&": Comment and Disposition"',                            "",''                                 ,""              , "",  "",  "",  "", '' ,''],//33(R+34)
        ["", "Y",    "", 'Route Tasks for Stakeholder Review / Stakeholder Interface',              "",'10'                               ,'=A'+(countR+22), "",  "",  "",  "", '5',''],//34(R+35)
        ["", "Y",    "", 'Stakeholder Review',                                                      "",'10'                               ,'=A'+(countR+23), "",  "",  "",  "", '0',''],//35(R+36)
        ["", "Y",    "", 'Disposition Stakeholder Review Comments',                                 "",'3'               ,'=A'+(countR+35)+'&A'+(countR+36), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+23)+')*0.1,0)',''],//36(R+37)
        ["", "Y",    "", 'Client - Review and Accept Dispositions',                                 "",'5'                                ,'=A'+(countR+37), "",  "",  "",  "", '0',''],//37(R+38)
        ["", "S",    "", '="90% "&D'+(countR+1),                                                    "",''                                 ,""              , "",  "",  "",  "", '',''],//38(R+39)
        ["", "Y",    "", 'Update CIC Package to Incorporate Stakeholder Comments',                  "",'=ROUND(L'+(countR+40)+'/(8*E1),1)','=A'+(countR+38), "",  "",  "",  "", '=ROUNDUP(L'+(countR+37)+'/2,0)',''],//39(R+40)
        ["", "Y",    "", 'Verify Updated CIC',                                                      "",'=ROUND(L'+(countR+41)+'/(8*E1),1)','=A'+(countR+40), "",  "",  "",  "", '=L'+(countR+40)+'/2',''],//40(R+41)
        ["", "Y",    "", 'Incorporate Internal Comments',                                           "",'=ROUND(L'+(countR+42)+'/(8*E1),1)','=A'+(countR+40), "",  "",  "",  "", '1.5',''],//41(R+42)
        ["", "Y",    "", 'Approve 90% CIC',                                                         "",'1'                                ,'=A'+(countR+41), "",  "",  "",  "", '2',''],//42(R+43)
        ["", "Y",    "", 'Endorse / Issue DCN and Signoff Maximo',                                  "",'1'                                ,'=A'+(countR+43), "",  "",  "",  "", '1',''],//43(R+44)
        ["", "Y",    "", 'Upload CIC for Acceptance',                                               "",'1'                                ,'=A'+(countR+44), "",  "",  "",  "", '1',''],//44(R+45)
        ["", "Y",    "", 'Resolve Minor Comments (if any)',                                         "",'2'                                ,'=A'+(countR+45), "",  "",  "",  "", '4',''],//45(R+46)
        ["", "Y",    "", 'Client Acceptance&Signoff (Tasks 631, 633 & 635)',                        "",'5'                                ,'=A'+(countR+46), "",  "",  "",  "", '0',''],//46(R+47)
        ["", "Y",    "", 'Approved as per Task 500',                                       'Milestone','0'                                ,'=A'+(countR+47), "",  "",  "",  "", '0',''],//47(R+48)

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

