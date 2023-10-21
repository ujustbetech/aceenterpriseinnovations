export function get15_ElecDCN(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F ,G , H , I , J,  K , L   
        ["", "WBS",  "", 'DCN xxxxx',                                                               "",''                  ,"",       "",  "",  "",  "",  '',''],//0(R+1)
        ["", "S",    "", '="50% "&D'+(countR+1),                                                    "",''                  ,"",       "",  "",  "",  "",  '',''],//1(R+2)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Pre-Job Brief"',                                     "",'1'                 ,"",       "",  "",  "",  "", '3',''],//2(R+3)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Data Collection"',                                   "",'=ROUND(L'+(countR+4)+'/(8*E1),1)','=A'+(countR+3), "",  "",  "",  "", '8',''],//3(R+4)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Create DCN in Maximo"',                             "",'=ROUND(L'+(countR+5)+'/(8*E1),1)','=A'+(countR+4), "",  "",  "",  "", '4',''],//4(R+5)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Create DCN Cover Sheet"',                            "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+15)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//5(R+6)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Prepare FORMs (FORM-14431, Seismic Form, OLW checklist, etc.)"',"",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+15)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '12',''],//6(R+7)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Mark-up Existing Drawings (EWDs, CBDs, GAs, Fuse DataSheets, etc.)"','- assume 4 markups at 2h per','=ROUND(SUM(L'+(countR+6)+':L'+(countR+15)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '=4*2',''],//7(R+8)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Create New Drawings (EWDs, CBDs, GAs, Fuse DataSheets, etc.)"','- assume 2 new drawings at 6h per','=ROUND(SUM(L'+(countR+6)+':L'+(countR+15)+')/(8*E1),1)','=A'+(countR+5),  "",  "",  "",  "", '=2*6',''],//8(R+9)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Drafting"',                                          "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+15)+')/(8*E1),1)','=A'+(countR+8)+'&A'+(countR+9), "-1",  "",  "",  "", '=SUM(L'+(countR+8)+':L'+(countR+9)+')*1.5',''],//9(R+10)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Procurement Support/Review"',                        "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+15)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//10(R+11)
        ["", "Y",    "", '=D'+(countR+1)+'&" - CAT ID Creation"',                                   "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+15)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//11(R+12)
        ["", "Y",    "", '=D'+(countR+1)+'&" - CAT ID Screening"',                                  "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+15)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//12(R+13)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Create DBOM"',                                      "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+15)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//13(R+14)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update EBOM"',                                       "",'=ROUND(SUM(L'+(countR+6)+':L'+(countR+15)+')/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//14(R+15)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Vendor Documents Received"',                'Milestone','0'                ,"",         "",  "",  "",  "", '0',''],//15(R+16)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Review Vendor Documents&Update DCN"',               "",'=ROUND(L'+(countR+17)+'/(8*E1),1)','=A'+(countR+16), "",  "",  "",  "", '6',''],//16(R+17)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update MEL and Route Task to Drafting Office for Approval"',"",'=ROUND(L'+(countR+18)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '4',''],//17(R+18)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update Maximo for Tech Content (Change Papers, AEL, ACB etc.)"',"",'=ROUND(L'+(countR+19)+'/(8*E1),1)','=A'+(countR+5), "",  "",  "",  "", '5',''],//18(R+19)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Verify DCN"',                                        "",'2','=A'+(countR+6)+'&A'+(countR+7)+'&A'+(countR+10)+'&A'+(countR+12)+'&A'+(countR+13)+'&A'+(countR+14)+'&A'+(countR+15)+'&A'+(countR+17)+'&A'+(countR+18)+'&A'+(countR+19), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+19)+')*0.15,0)',''],//19(R+20)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Disposition/Incorporate Internal Comments"',        "",'3','=A'+(countR+20),          "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+19)+')*0.1,0)',''],//20(R+21)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Endorse and Issue DCN"',                            "",'1','=A'+(countR+21),          "",  "",  "",  "", '2',''],//21(R+22)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Submit DCN for Client Review"',                     "",'1','=A'+(countR+22),          "",  "",  "",  "", '1',''],//22(R+23)
        ["", "S",    "", '=D'+(countR+1)+'&" Online Wiring"',                                       "",''                  ,"",       "",  "",  "",  "", '' ,''],//23(R+24)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Submit Drawings to Client for Online Wiring (OLW)"',"",'1','=A'+(countR+14),          "",  "",  "",  "", '2',''],//24(R+25)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Client RDE Releases OLW Package to Client Drafting Office"',"",'2','=A'+(countR+25),  "",  "",  "",  "", '0',''],//25(R+26)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Client Drafting Office Completes the OLW"',         "",'15','=A'+(countR+26),         "",  "",  "",  "", '0',''],//26(R+27)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Review OLW Package"',                               "",'2','=A'+(countR+27),          "",  "",  "",  "", '6',''],//27(R+28)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Submit Comments to OLW"',                           "",'1','=A'+(countR+28),          "",  "",  "",  "", '1',''],//28(R+29)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Client Disposition Comments and Update OLW"',       "",'3','=A'+(countR+29),          "",  "",  "",  "", '0',''],//29(R+30)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Review Changes"',                                   "",'2','=A'+(countR+30),          "",  "",  "",  "", '4',''],//30(R+31)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Submit Final OLW Package for Client Acceptance"',   "",'1','=A'+(countR+31),          "",  "",  "",  "", '1',''],//31(R+32)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Perform Post-Design Confirmation Walkdown"','- Assume 1 person','5','=A'+(countR+32), "",  "",  "",  "", '8',''],//32(R+33)
        ["", "S",    "", '=D'+(countR+1)+'&": Comment and Disposition"',                            "",'',       "", "",  "",  "",  "", '',''],//33(R+34)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Route Tasks for Stakeholder Review / Stakeholder Interface"',"",'10','=A'+(countR+22), "",  "",  "",  "", '5',''],//34(R+35)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Stakeholder Review"',                                "",'10','=A'+(countR+23), "",  "",  "",  "", '0',''],//35(R+36)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Constructability Review Meeting (if required)"','- Assume 2 people','1','=A'+(countR+23), "3",  "",  "",  "", '4',''],//36(R+37)
        ["", "Y",    "", '=D'+(countR+1)+'&" - COMS Meeting"','- Assumes 2 people with travel time to site','1','=A'+(countR+23), "5",  "",  "",  "", '16',''],//37(R+38)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Disposition COMS/Constructability/Stakeholder Review Comments"',"",'3','=A'+(countR+35)+'&A'+(countR+36)+'&A'+(countR+37)+'&A'+(countR+38), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+3)+':L'+(countR+23)+')*0.1,0)',''],//38(R+39)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Client - Review and Accept Dispositions"',           "",'5','=A'+(countR+39), "",     "",  "",  "", '0',''],//39(R+40)
        ["", "S",    "", '="90% "&D'+(countR+1),                                                    "",'',""               ,"" ,      "",  "",  "", '',''],//40(R+41)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Update DCN Package to Incorporate Stakeholder Comments"',"",'=ROUND(L'+(countR+42)+'/(8*E1),1)','=A'+(countR+40), "",  "",  "",  "", '=ROUNDUP(L'+(countR+39)+'/2,0)',''],//41(R+42)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Final Verification of Updated DCN"',                 "",'=ROUND(L'+(countR+43)+'/(8*E1),1)','=A'+(countR+42)+'&A'+(countR+33), "",  "",  "",  "", '=L'+(countR+42)+'/2',''],//42(R+43)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Incorporate Internal Comments"',                     "",'=ROUND(L'+(countR+44)+'/(8*E1),1)','=A'+(countR+42), "",  "",  "",  "", '1',''],//43(R+44)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Approve 90% DCN"',                                   "",'1','=A'+(countR+43),          "",  "",  "",  "", '2',''],//44(R+45)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Endorse / Issue DCN and Signoff Maximo"',            "",'1','=A'+(countR+45),          "",  "",  "",  "", '1',''],//45(R+46)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Upload DCN for Acceptance"',                        "",'1','=A'+(countR+46),          "",  "",  "",  "", '1',''],//46(R+47)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Resolve Minor Comments (if any)"',                  "",'2','=A'+(countR+47),          "",  "",  "",  "", '4',''],//47(R+48)
        ["", "Y",    "", '=D'+(countR+1)+'&" - Client Acceptance&Signoff (Tasks 631, 633 & 635)"',  "",'5','=A'+(countR+48),          "",  "",  "",  "", '0',''],//48(R+49)
        ["", "Y",    "", '= D'+(countR+1)+'&" - Approved as per Task 500"',                'Milestone','0','=A'+(countR+49),          "",  "",  "",  "", '0',''],//49(R+50)
        
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
