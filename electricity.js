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




let unitsAvailable=localStorage.getItem("unitsAvailable");
let totalUnits= localStorage.getItem("totalUnits");
let totalAmount=localStorage.getItem("totalAmount");
let advance= localStorage.getItem("advanceTaken");

function Electricity() {

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

totalAmount=num;

}

else{

totalAmount+=num;
}

localStorage.setItem("totalAmount",totalAmount);

  if(totalUnits===null){
	
totalUnits=0;
}

else
{
switch( num){
	
case 10:
totalUnits+=7;
break;

case 20:
totalUnits+=14;
break;

case 30:
totalUnits+=21;
break;

case 50:
totalUnits+=35;
break;

}

}

localStorage.setItem("totalUnits",totalUnits);
    

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
       totalUnits-5;
       break;
       
       case "TV" :
          totalUnits-3;
       break;
       
       case "Fridge" :
        totalUnits- 13;
       break;
       
       case "Kettle" :
          totalUnits-10;
       break;
 }
 
 }
 
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