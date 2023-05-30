//Create localStorage variable  to store units available 
//Create localStorage variable  to store total units bought
//Create localStorage variable  to store total amount spent
//Create localStorage variable  to store whether or not advance  has been taken

/*
   function topUpElectricity
   * if totalAmount equals to null, make it equal to parameter amount
  * else add parameter amount  to totalAmount 
  * use localStorage to update the totalAmount variable
  *increase totalUnits based on electricity purchase amount
**/


/*
   function getUnitsAvailable 
  *return unitsAvailable 
**/


let unitsAvailable=JSON.parse(localStorage.getItem("unitsAvailable"));
let totalUnits=JSON.parse(localStorage.getItem("totalUnits"));
let totalAmount=JSON.parse(localStorage.getItem("totalAmount"));
let advance= JSON.parse(localStorage.getItem("advanceTaken"));

function Electricity() {
	
	let advance=0;
	let advanceAvailable=true;
    // do we want to go with this or array? 
    let appliances = {
        'Stove': 10, 
        'Kettle': 5, 
        'TV': 3, 
        'Fridge': 13
    };

    function topUpElectricity(amount) {

if(amount){

let num= Number(amount);

if(totalAmount===null){

if(amount!==30){
totalAmount=num;
}

else {
totalAmount=0;
}
}

else{
	
if(amount!==30){

totalAmount+=num;
}
}


localStorage.setItem("totalAmount",JSON.stringify(totalAmount));

  if(totalUnits===null){
	
totalUnits=0;
unitsAvailable=0;
}

else
{

num=num-advance;
switch( num){
	
case 10:
totalUnits+=7;
unitsAvailable+=7;
break;

case 20:
totalUnits+=14;
unitsAvailable+=14;
break;

case 30:
totalUnits+=21;
unitsAvailable+=21;
advance=30;
break;

case 50:
totalUnits+=35;
unitsAvailable+=35;
break;

}


}

localStorage.setItem("totalUnits",JSON.stringify(totalUnits));
localStorage.setItem("unitsAvailable",JSON.stringify(unitsAvailable));
    

}

    }

    function getUnitsAvailable() {
    	
         return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        
        if(appliance){
        	
       switch (appliance)  {
       	
       	case "stove":
       unitsAvailable=unitsAvailable-10;
       break;
       
       case "TV" :
             unitsAvailable= unitsAvailable-3;
       break;
       
       case "Fridge" :
         unitsAvailable=unitsAvailable-13;
       break;
       
       case "Kettle" :
             unitsAvailable=unitsAvailable-5;
       break;
 }
 
localStorage.setItem("unitsAvailable",JSON.stringify(unitsAvailable)); }
 
 
 }

    function advanceTaken() {
    	
    }

    function totalAmountSpent() {
   	
    return totalAmount;   
}

    function totalUnitsBought(){
    	return totalUnits;
    }

    return {
        advanceTaken,
        topUpElectricity,
        getUnitsAvailable,
        useAppliance,
        totalAmountSpent,
        totalUnitsBought

    }
}