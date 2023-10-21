export function get14_MechCivDCN(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F ,G , H , I , J,  K , L   
        ["", "WBS",  "", 'DCN xxxxx',                                                               "",''                                ,""              , "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                                ,""              , "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Pre-Job Brief"',                                     "",'1'                               ,""              , "",  "",  "",  "", '3',''],//2(R+3)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Data Collection"',                                   "",'=ROUND(L'+(countR+4)+'/(8*E1),1)','=A'+(countR+3) , "",  "",  "",  "", '8',''],//3(R+4)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Create DCN in Maximo"',                             "",'=ROUND(L'+(countR+5)+'/(8*E1),1)','=A'+(countR+4) , "",  "",  "",  "", '4',''],//4(R+5)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Create DCN Cover Sheet"',                            "",'=ROUND(L'+(countR+6)+'/(8*E1),1)','=A'+(countR+5) , "",  "",  "",  "", '4',''],//5(R+6)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Prepare FORMs (FORM-14431, Seismic Form, etc.)"',    "",'=ROUND(L'+(countR+7)+'/(8*E1),1)','=A'+(countR+5) , "",  "",  "",  "", '12',''],//6(R+7)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Mark-up Existing Drawings (Piping Isometrics, GAs, etc.)"','- assume 6 markups at 2h per','=ROUND(L'+(countR+8)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '=6*2',''],//7(R+8)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Create New Drawings (Piping Isometrics, GAs, etc.)"','- assume 3 new drawings at 6h per','=ROUND(L'+(countR+9)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '=3*6',''],//8(R+9)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Drafting"',                                          "",'=ROUND(L'+(countR+10)+'/(8*E1),1)','=A'+(countR+8)+'&A'+(countR+9), "-1",  "",  "",  "", '=SUM(L'+(countR+8)+':L'+(countR+9)+')*1.5',''],//9(R+10)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Procurement Support/Review"',                        "",'=ROUND(L'+(countR+11)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//10(R+11)
        ["", "Y",    "", '=D'+(countR+1)+'&" - CAT ID Creation"',                                   "",'=ROUND(L'+(countR+12)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//11(R+12)
        ["", "Y",    "", '=D'+(countR+1)+'&" - CAT ID Screening"',                                  "",'=ROUND(L'+(countR+13)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//12(R+13)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Create DBOM"',                                      "",'=ROUND(L'+(countR+14)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//13(R+14)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update EBOM"',                                       "",'=ROUND(L'+(countR+15)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//14(R+15)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Vendor Documents Received"',                'Milestone','0'                                ,""             , "",  "",  "",  "", '0',''],//15(R+16)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Review Vendor Documents&Update DCN"',               "",'=ROUND(L'+(countR+17)+'/(8*E1),1)','=A'+(countR+16), "",  "",  "",  "", '6',''],//16(R+17)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update MEL and Route Task to Drafting Office for Approval"',"",'=ROUND(L'+(countR+18)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//17(R+18)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update Maximo for Tech Content (Change Papers, AEL, ACB etc.)"',"",'=ROUND(L'+(countR+19)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//18(R+19)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Verify DCN"',                                        "",'2'                               ,'=A'+(countR+6)+'&A'+(countR+7)+'&A'+(countR+10)+'&A'+(countR+12)+'&A'+(countR+13)+'&A'+(countR+14)+'&A'+(countR+15)+'&A'+(countR+17)+'&A'+(countR+18)+'&A'+(countR+19), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+19)+')*0.15,0)',''],//19(R+20)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Disposition/Incorporate Internal Comments"',        "",'3'                               ,'=A'+(countR+20), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+19)+')*0.1,0)',''],//20(R+21)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Endorse and Issue DCN"',                            "",'1'                               ,'=A'+(countR+21), "",  "",  "",  "", '2',''],//21(R+22)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Submit DCN for Stakeholder Review"',                "",'1'                               ,'=A'+(countR+22), "",  "",  "",  "", '1',''],//22(R+23)
        ["", "S",    "", '=D'+(countR+1)+'&": Comment and Disposition"',                            "",''                                ,""              , "",  "",  "",  "", '',''],//23(R+24)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Route Tasks for Stakeholder Review / Stakeholder Interface"',"",'10'                      ,'=A'+(countR+22), "",  "",  "",  "", '5',''],//24(R+25)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Stakeholder Review"',                                "",'10'                              ,'=A'+(countR+23), "",  "",  "",  "", '0',''],//25(R+26)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Constructability Review Meeting (if required)"',' - Assumes 2 people','1'                 ,'=A'+(countR+23), "3", "",  "",  "", '4',''],//26(R+27)
        ["", "Y",    "", '=D'+(countR+1)+'&" - COMS Meeting"',' - Assumes 2 people with travel time to site','1'                         ,'=A'+(countR+23), "5", "",  "",  "", '16',''],//27(R+28)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Disposition COMS/Constructability/Stakeholder Review Comments"',"",'3','=A'+(countR+25)+'&A'+(countR+26)+'&A'+(countR+27)+'&A'+(countR+28), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+23)+')*0.1,0)',''],//28(R+29)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Client - Review and Accept Dispositions"',           "",'5'                               ,'=A'+(countR+29), "",  "",  "",  "", '0',''],//29(R+30)
        ["", "S",    "", '="90% "&D'+(countR+1),                                                    "",''                                ,""              , "",  "",  "",  "", '',''],//30(R+31)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update DCN Package to Incorporate Stakeholder Comments"',"",'=ROUND(L'+(countR+32)+'/(8*E1),1)','=A'+(countR+30), "",  "",  "",  "", '=ROUNDUP(L'+(countR+29)+'/2,0)',''],//31(R+32)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Final Verification of Updated DCN"',                 "",'=ROUND(L'+(countR+33)+'/(8*E1),1)','=A'+(countR+32), "", "",  "",  "", '=L'+(countR+32)+'/2',''],//32(R+33)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Incorporate Internal Comments"',                     "",'=ROUND(L'+(countR+34)+'/(8*E1),1)','=A'+(countR+32), "", "",  "",  "", '1',''],//33(R+34)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Approve 90% DCN"',                                   "",'1'                               ,'=A'+(countR+33), "",  "",  "",  "", '2',''],//34(R+35)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Endorse / Issue DCN and Signoff Maximo"',            "",'1'                               ,'=A'+(countR+35), "",  "",  "",  "", '1',''],//35(R+36)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Upload DCN for Acceptance"',                        "",'1'                               ,'=A'+(countR+36), "",  "",  "",  "", '1',''],//36(R+37)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Resolve Minor Comments (if any)"',                  "",'2'                               ,'=A'+(countR+37), "",  "",  "",  "", '4',''],//37(R+38)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Client Acceptance&Signoff (Tasks 631, 633 & 635)"',  "",'5'                               ,'=A'+(countR+38), "",  "",  "",  "", '0',''],//38(R+39)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Approved as per Task 500"',                'Milestone','0'                               ,'=A'+(countR+39), "",  "",  "",  "", '0',''],//39(R+40)
        
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

