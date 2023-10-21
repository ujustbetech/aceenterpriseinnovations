export function get1_MobilizationSupport(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                          E ,  F , G            ,  H ,  I ,  J,  K , L        
        ["", "WBS",  "", 'Mobilization and Support',                                                  "", '', ""            , "",  "",  "",  "",  "", ''],//0(R+1)
        ["", "S",    "", 'Mobilization',                                                              "", '', ""            , "",  "",  "",  "",  "", ''],//1(R+2)
        ["", "Y",    "", 'Contract Award ',                                                           "",'1', ""            , "",  "",  "",  "",  "", ''],//2(R+3)
        ["", "Y",    "", 'Project Setup / Team Mobilization',                                         "",'5','=A'+(countR+3), "",  "",  "",  "", "10",''],//3(R+4)
        ["", "Y",    "", 'Schedule Baseline',                                                         "",'5','=A'+(countR+3), "",  "",  "",  "", "4",''],//4(R+5)
        ["", "Y",    "", 'Internal Project Kickoff Meeting ',               ' - assume x people yh each','1','=A'+(countR+4), "",  "",  "",  "", "6",''],//5(R+6)
        ["", "Y",    "", 'External Project Kickoff Meeting ',               ' - assume x people yh each','1','=A'+(countR+6), "",  "",  "",  "", "6",''],//6(R+7)
        ["", "S",    "", 'Project Support Tasks',                                                     "",'' ,""             , "",  "",  "",  "",  "", ''],//7(R+8)
        ["", "Y",    "", '="Project Management ("&F1&" wk x 4h/w)"',              '- assume 4h per week','' ,'=A'+(countR+4), "",  "",  "",  "", '=F1*4',''],//8(R+9)
        ["", "Y",    "", '="Technical Oversight ("&F1&" wk 1h/w)"',               '- assume 1h per week','' ,'=A'+(countR+5), "",  "",  "",  "", '=F1*1',''],//9(R+10)
        ["", "Y",    "", '="Project Meetings ("&F1&" wk 1.5h/w)"','- assume 3 ppl at 0.30 min per week ','' ,'=A'+(countR+7), "",  "",  "",  "", '=F1*1.5',''],//10(R+11)
        ["", "Y",    "", '="Project Scheduling ("&F1&" wk 1h/w)"',                '- assume 1h per week','' ,'=A'+(countR+5), "",  "",  "",  "", '=F1*1',''],//11(R+12)
        ["", "Y",    "", '="Commercial Management (x months x 0.5h/m)"',      '- assume 30min per month','' ,'=A'+(countR+4), "",  "",  "",  "", '=ROUND(F1*0.5/4.35,2)',''],//12(R+13)
        ["", "Y",    "", '="Financial Reporting ("&F1&" wk x 0.25h/w)"',       '- assume 15min per week','' ,'=A'+(countR+4), "",  "",  "",  "", '=F1*0.25',''],//13(R+14)
        ["", "Y",    "", '="Program Management ("&F1&" wk x 0.25h/w)"',        '- assume 15min per week','' ,'=A'+(countR+4), "",  "",  "",  "", '=F1*0.25',''],//14(R+15)
        ["", "Y",    "", '="Management Oversight ("&F1&" wk 0.5 h/w)"',        '- assume 30min per week','' ,'=A'+(countR+4), "",  "",  "",  "", '=F1*0.5',''],//15(R+16)
    
    ];

    var WBS_task_tasknum = 1 
    var temp_WBSClick_count = WBSClick_count;
    var temp_ts = JSON.parse(JSON.stringify(WBSElementArray));
    var Scount = 0;
    var TopVal = 0;
    var BotVal = 0;
    var Srow = 0;

    //temp_ts[0][0] = temp_WBSClick_count + ".";     // Adds WBS number from click
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