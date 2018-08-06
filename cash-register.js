function checkCashRegister(price, cash, cid) {
  var change = (cash - price)*100;
  var totalInReg=0;
  var arr = [];
  var totalChanged=0;
  //console.log(change);
  for(let i=0;i<cid.length;i++){
    totalInReg+=(Math.round(100*cid[i][1]));
    //console.log(totalInReg);
  }
  //console.log(totalInReg);
   if(change>totalInReg){
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  if(totalInReg>=change){
    for(let i=cid.length-1;i>=0;i--){
      var numberBills = 0;
      switch(cid[i][0]){
        case "ONE HUNDRED":
          if(change>=(cid[i][1]*100)){
            arr.push([cid[i][0], cid[i][1]]);
            change-=(cid[i][1])*100;
          }else if(change<(cid[i][1]*100) && cid[i][1]*100>=10000){
            numberBills=Math.floor(change/10000);
            if(numberBills>0){
              arr.push([cid[i][0], 100*numberBills])
              change-=(100*numberBills)*100;
            }
          }
          break;
        case "TWENTY":
          if(change>=(cid[i][1]*100)){
            arr.push([cid[i][0], cid[i][1]]);
            change-=(cid[i][1])*100;
          }else if(change<(cid[i][1]*100) && cid[i][1]*100>=2000){
            numberBills=Math.floor(change/2000);
            if(numberBills>0){
              arr.push([cid[i][0], 20*numberBills])
              change-=(20*numberBills)*100;
            }
          }
          break;
        case "TEN":
          if(change>=(cid[i][1]*100)){
            arr.push([cid[i][0], cid[i][1]]);
            change-=(cid[i][1])*100;
          }else if(change<(cid[i][1]*100) && cid[i][1]*100>=1000){
            numberBills=Math.floor(change/1000);
            if(numberBills>0){
              arr.push([cid[i][0], 10*numberBills])
              change-=(10*numberBills)*100;
            }
          }
          break;
        case "FIVE":
          //console.log("beg");
          //console.log(cid[i][1]*100);
          //console.log(change);
          //console.log("end");
          if(change>=(cid[i][1]*100)){
            arr.push([cid[i][0], cid[i][1]]);
            change-=(cid[i][1])*100;
            //console.log(cid[i][1]);
          }else if(change<(cid[i][1]*100) && cid[i][1]*100>=500){
            numberBills=Math.floor(change/500);
            //console.log(numberBills);
            if(numberBills>0){
              arr.push([cid[i][0], 5*numberBills])
              change-=(5*numberBills)*100;
            }
          }
          break;
        case "ONE":
          if(change>=(cid[i][1]*100)){
            arr.push([cid[i][0], cid[i][1]]);
            change-=(cid[i][1])*100;
          }else if(change<(cid[i][1]*100) && cid[i][1]*100>=100){
            numberBills=Math.floor(change/100);
            if(numberBills>0){
              arr.push([cid[i][0], 1*numberBills])
              change-=(1*numberBills)*100;
            }
          }
          break;
        case "QUARTER":
          if(change>=(cid[i][1]*100)){
            arr.push([cid[i][0], cid[i][1]]);
            change-=(cid[i][1])*100;
          }else if(change<(cid[i][1]*100) && cid[i][1]*100>=25){
            numberBills=Math.floor(change/25);
            if(numberBills>0){
              arr.push([cid[i][0], 0.25*numberBills])
              change-=(0.25*numberBills)*100;
            }
          }
          break;
        case "DIME":
        //console.log("here");
          if(change>=(cid[i][1]*100)){
            arr.push([cid[i][0], cid[i][1]]);
            change-=(cid[i][1])*100;
          }else if(change<(cid[i][1]*100) && cid[i][1]*100>=10){
            numberBills=Math.floor(change/10);
            if(numberBills>0){
              arr.push([cid[i][0], 0.10*numberBills])
              change-=(0.10*numberBills)*100;
            }
          }
          break;
        case "NICKEL":
        //console.log("no, here");
          if(change>=(cid[i][1]*100)){
            arr.push([cid[i][0], cid[i][1]]);
            change-=(cid[i][1])*100;
          }else if(change<(cid[i][1]*100) && cid[i][1]*100>=5){
            numberBills=Math.floor(change/5);
            if(numberBills>0){
              arr.push([cid[i][0], 0.05*numberBills])
              change-=(0.05*numberBills)*100;
            }
          }
          break;
        case "PENNY":
        //console.log("Im here");
        //console.log(cid[i][1]);
        //console.log(i);
          if(change>=(cid[i][1]*100)){
            //console.log("now im here");
            //console.log(cid[i][1]);
            arr.push([cid[i][0], cid[i][1]]);
            change-=(cid[i][1])*100;
          }else if(change<(cid[i][1]*100) && cid[i][1]*100>=1){
            numberBills=Math.floor(change/1);
            if(numberBills>0){
              arr.push([cid[i][0], 0.01*numberBills])
              change-=(0.01*numberBills)*100;
            }
          }
          break;
      }
      //console.log(change);
    }
    if(change>0){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  }
  for(let i=0;i<arr.length;i++){
    totalChanged+=arr[i][1]*100;
    /*console.log(i);
    console.log("^that is i");
    console.log(arr[i][1]*100);
    console.log("^that is the other one");*/
  }
  //console.log("beggin");
  //console.log(totalInReg);
  //console.log("mid");
  //console.log(totalChanged);
  //console.log("end");
  if(totalChanged==totalInReg){
    return{status: "CLOSED", change: [...cid]};
  }
  //console.log(arr);
  // Here is your change, ma'am.
  return {status: "OPEN", change: [...arr]};
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);