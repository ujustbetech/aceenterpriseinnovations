export function get32_InstallationSupportwtFCNs(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F ,G , H , I , J,  K , L   
        ["", "WBS",  "", 'Installation Support',                                                    "",''                 ,"", "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", 'Installation Support',                                                    "",''                 ,"", "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", 'Site Acceptance Testing (if required)',                                   "",'5'                ,"", "",  "",  "",  "", '14',''],//2(R+3)
        ["", "Y",    "", 'Installation Start',                                             'Milestone','0'                ,"", "",  "",  "",  "", '0',''],//3(R+4)
        ["", "Y",    "", 'Design Support for Field Engineering ',' - assume either # h/DCN or #h/week',''                 ,'=A'+(countR+4), "",  "",  "",  "", '40',''],//4(R+5)
        ["", "Y",    "", 'Procurement Support ',                 ' - assume either # h/DCN or #h/week',''                 ,'=A'+(countR+4), "",  "",  "",  "", '20',''],//5(R+6)
        ["", "S",    "", '50% FCN Preparation',                      '- assume x total number of FCNs',''                 ,"", "",  "",  "",  "", '',''],//6(R+7)
        ["", "Y",    "", 'Prepare 50% FCN',                                                         "",'1'                ,"", "",  "",  "",  "", '6',''],//7(R+8)
        ["", "Y",    "", 'Mark-up Drawings/Documentation',                                          "",'=ROUND(L'+(countR+9)+'/(E1*8),1)','=A'+(countR+8), "",  "",  "",  "", '8',''],//8(R+9)
        ["", "Y",    "", 'FCN Task Entries',                                                        "",'=ROUND(L'+(countR+10)+'/(E1*8),1)','=A'+(countR+9), "",  "",  "",  "", '2',''],//9(R+10)
        ["", "Y",    "", 'Review 50% FCN',                                                          "",'=ROUND(L'+(countR+11)+'/(E1*8),1)','=A'+(countR+10), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+8)+':L'+(countR+10)+')*0.15,0)',''],//10(R+11)
        ["", "Y",    "", 'Incorporate Internal Comments',                                           "",'=ROUND(L'+(countR+12)+'/(E1*8),1)','=A'+(countR+11), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+8)+':L'+(countR+10)+')*0.1,0)',''],//11(R+12)
        ["", "Y",    "", 'Approve 50% FCN',                                                         "",'1'                 ,'=A'+(countR+12), "",  "",  "",  "", '1',''],//12(R+13)
        ["", "Y",    "", 'Submit 50% FCN for Client Review',                                        "",'1'                 ,'=A'+(countR+13), "",  "",  "",  "", '1',''],//13(R+14)
        ["", "S",    "", 'FCN Comment & Disposition',                                               "",''                  ,"", "",  "",  "",  "", '',''],//14(R+15)
        ["", "Y",    "", 'Client Stakeholder Review of FCN',                                        "",'5'                 ,'=A'+(countR+14), "",  "",  "",  "", '0',''],//15(R+16)
        ["", "Y",    "", 'Disposition Stakeholder Comments',                                        "",'=ROUND(L'+(countR+17)+'/(E1*8),1)','=A'+(countR+16), "",  "",  "",  "", '=ROUNDUP(SUM(L'+(countR+8)+':L'+(countR+14)+')*0.1,0)',''],//16(R+17)
        ["", "Y",    "", 'Client Accept Comment Dispositions',                                      "",'2'                 ,'=A'+(countR+17), "",  "",  "",  "", '1',''],//17(R+18)
        ["", "S",    "", '90% FCN Preparation',                                                     "",''                  ,"", "",  "",  "",  "", '',''],//18(R+19)
        ["", "Y",    "", 'Incorporate Accepted Comments',                                           "",'=ROUND(L'+(countR+20)+'/(E1*8),1)','=A'+(countR+18), "",  "",  "",  "", '=ROUNDUP(L'+(countR+17)+'/2,0)',''],//19(R+20)
        ["", "Y",    "", 'Approve 90% FCN',                                                         "",'=ROUND(L'+(countR+21)+'/(E1*8),1)','=A'+(countR+20), "",  "",  "",  "", '=L'+(countR+20)+'/2',''],//20(R+21)
        ["", "Y",    "", 'Endorse FCN and Issue to Client',                                         "",'1'                 ,'=A'+(countR+21), "",  "",  "",  "", '1',''],//21(R+22)
        ["", "Y",    "", 'Client Accepts 100% FCN',                                                 "",'5'                 ,'=A'+(countR+22), "",  "",  "",  "", '0',''],//22(R+23)
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
