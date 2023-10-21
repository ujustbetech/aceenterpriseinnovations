export function get36_BlankTemplate_5(WBSClick_count, WBSName, countR, column_no_start, estimate, department){
    const WBSElementArray = [
        //A,  B   ,  C , D ,                                                                        E , F ,G , H , I , J,  K , L   
        ["", "WBS",  "", 'xxxxxxxxxxxxx',                                                           "",''                                ,"", "",  "",  "",  "", '',''],//0(R+1)
        ["", "S",    "", '=D'+(countR+1),                                                           "",''                                ,"", "",  "",  "",  "", '',''],//1(R+2)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+3)+'/(E1*8),1)',"", "",  "",  "",  "", '1',''],//2(R+3)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+4)+'/(E1*8),1)','=A'+(countR+3), "",  "",  "",  "", '1',''],//3(R+4)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+5)+'/(E1*8),1)','=A'+(countR+4), "",  "",  "",  "", '1',''],//4(R+5)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+6)+'/(E1*8),1)','=A'+(countR+5), "",  "",  "",  "", '1',''],//5(R+6)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+7)+'/(E1*8),1)','=A'+(countR+6), "",  "",  "",  "", '1',''],//6(R+7)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+8)+'/(E1*8),1)','=A'+(countR+7), "",  "",  "",  "", '1',''],//7(R+8)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+9)+'/(E1*8),1)','=A'+(countR+8), "",  "",  "",  "", '1',''],//8(R+9)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+10)+'/(E1*8),1)','=A'+(countR+9), "",  "",  "",  "", '1',''],//9(R+10)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+11)+'/(E1*8),1)','=A'+(countR+10), "",  "",  "",  "", '1',''],//10(R+11)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+12)+'/(E1*8),1)','=A'+(countR+11), "",  "",  "",  "", '1',''],//11(R+12)
        ["", "S",    "", '=D'+(countR+1),                                                           "",''                                 ,"", "",  "",  "",  "", '',''],//12(R+13)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+14)+'/(E1*8),1)','=A'+(countR+12), "",  "",  "",  "", '1',''],//13(R+14)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+15)+'/(E1*8),1)','=A'+(countR+14), "",  "",  "",  "", '1',''],//14(R+15)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+16)+'/(E1*8),1)','=A'+(countR+15), "",  "",  "",  "", '1',''],//15(R+16)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+17)+'/(E1*8),1)','=A'+(countR+16), "",  "",  "",  "", '1',''],//16(R+17)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+18)+'/(E1*8),1)','=A'+(countR+17), "",  "",  "",  "", '1',''],//17(R+18)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+19)+'/(E1*8),1)','=A'+(countR+18), "",  "",  "",  "", '1',''],//18(R+19)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+20)+'/(E1*8),1)','=A'+(countR+19), "",  "",  "",  "", '1',''],//19(R+20)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+21)+'/(E1*8),1)','=A'+(countR+20), "",  "",  "",  "", '1',''],//20(R+21)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+22)+'/(E1*8),1)','=A'+(countR+21), "",  "",  "",  "", '1',''],//21(R+22)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+23)+'/(E1*8),1)','=A'+(countR+22), "",  "",  "",  "", '1',''],//22(R+23)
        ["", "S",    "", '=D'+(countR+1),                                                           "",''                                 ,"", "",  "",  "",  "", '',''],//23(R+24)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+25)+'/(E1*8),1)','=A'+(countR+23), "",  "",  "",  "", '1',''],//24(R+25)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+26)+'/(E1*8),1)','=A'+(countR+25), "",  "",  "",  "", '1',''],//25(R+26)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+27)+'/(E1*8),1)','=A'+(countR+26), "",  "",  "",  "", '1',''],//26(R+27)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+28)+'/(E1*8),1)','=A'+(countR+27), "",  "",  "",  "", '1',''],//27(R+28)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+29)+'/(E1*8),1)','=A'+(countR+28), "",  "",  "",  "", '1',''],//28(R+29)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+30)+'/(E1*8),1)','=A'+(countR+29), "",  "",  "",  "", '1',''],//29(R+30)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+31)+'/(E1*8),1)','=A'+(countR+30), "",  "",  "",  "", '1',''],//30(R+31)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+32)+'/(E1*8),1)','=A'+(countR+31), "",  "",  "",  "", '1',''],//31(R+32)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+33)+'/(E1*8),1)','=A'+(countR+32), "",  "",  "",  "", '1',''],//32(R+33)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+34)+'/(E1*8),1)','=A'+(countR+33), "",  "",  "",  "", '1',''],//33(R+34)
        ["", "S",    "", '=D'+(countR+1),                                                           "",''                                 ,"", "",  "",  "",  "", '',''],//34(R+35)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+36)+'/(E1*8),1)','=A'+(countR+34), "",  "",  "",  "", '1',''],//35(R+36)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+37)+'/(E1*8),1)','=A'+(countR+36), "",  "",  "",  "", '1',''],//36(R+37)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+38)+'/(E1*8),1)','=A'+(countR+37), "",  "",  "",  "", '1',''],//37(R+38)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+39)+'/(E1*8),1)','=A'+(countR+38), "",  "",  "",  "", '1',''],//38(R+39)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+40)+'/(E1*8),1)','=A'+(countR+39), "",  "",  "",  "", '1',''],//39(R+40)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+41)+'/(E1*8),1)','=A'+(countR+40), "",  "",  "",  "", '1',''],//40(R+41)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+42)+'/(E1*8),1)','=A'+(countR+41), "",  "",  "",  "", '1',''],//41(R+42)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+43)+'/(E1*8),1)','=A'+(countR+42), "",  "",  "",  "", '1',''],//42(R+43)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+44)+'/(E1*8),1)','=A'+(countR+43), "",  "",  "",  "", '1',''],//43(R+44)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+45)+'/(E1*8),1)','=A'+(countR+44), "",  "",  "",  "", '1',''],//44(R+45)
        ["", "S",    "", '=D'+(countR+1),                                                           "",''                                 ,"", "",  "",  "",  "", '',''],//45(R+46)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+47)+'/(E1*8),1)','=A'+(countR+45), "",  "",  "",  "", '1',''],//46(R+47)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+48)+'/(E1*8),1)','=A'+(countR+47), "",  "",  "",  "", '1',''],//47(R+48)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+49)+'/(E1*8),1)','=A'+(countR+48), "",  "",  "",  "", '1',''],//48(R+49)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+50)+'/(E1*8),1)','=A'+(countR+49), "",  "",  "",  "", '1',''],//49(R+50)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+51)+'/(E1*8),1)','=A'+(countR+50), "",  "",  "",  "", '1',''],//50(R+51)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+52)+'/(E1*8),1)','=A'+(countR+51), "",  "",  "",  "", '1',''],//51(R+52)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+53)+'/(E1*8),1)','=A'+(countR+52), "",  "",  "",  "", '1',''],//52(R+53)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+54)+'/(E1*8),1)','=A'+(countR+53), "",  "",  "",  "", '1',''],//53(R+54)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+55)+'/(E1*8),1)','=A'+(countR+54), "",  "",  "",  "", '1',''],//54(R+55)
        ["", "Y",    "", '=D'+(countR+1)+'&" - "',                                                  "",'=ROUND(L'+(countR+56)+'/(E1*8),1)','=A'+(countR+55), "",  "",  "",  "", '1',''],//55(R+56)
        
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
