//Create localStorage variable  to store units available 
//Create localStorage variable  to store total units bought
//Create localStorage variable  to store total amount spent
//Create localStorage variable  to store whether or not advance  has been taken

/*
   function topUpElectricity
   * if totalAmount equals to null, make it equal to parameter amount
  * else add parameter amount  to totalAmount 
  * use localStorage to update the totalAmount variable
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

if(totalAmount===null){

totalAmount=amount;

}

else{

totalAmount+=amount;
}

localStorage.setItem("totalAmount",totalAmount);

switch(amount){
	
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

    }

    function getUnitsAvailable() {
    	
         return unitsAvailable;
    }

    /*
    * return true and substract from unit available if there is enough units to use the appliance
    * other wise return false and do nothing.
    */
    function useAppliance(appliance) {
        
    }

    function advanceTaken() {
    }

    function totalAmountSpent() {
    }

    function totalUnitsBought(){
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