// DOM element(s) references
let buyRadios= document.querySelectorAll("input[name='buyElectricity']");
let buy= document.querySelector(".topupNow");
let availableUnits= document.querySelector(".unitsAvailable");
let  unitsTotal= document.querySelector(".totalUnits");
let amountTotal= document.querySelector(".totalAmount");
let use=document.querySelector(".useNow");
let advanceTick= document.querySelector(".tick");
let useRadios= document.querySelectorAll("input[name='useElectricity']");


// Factory Function instance 
const electricity =  Electricity();

amountTotal.innerHTML=electricity.totalAmountSpent();
unitsTotal.innerHTML=electricity.totalUnitsBought();
availableUnits.innerHTML=electricity.getUnitsAvailable();


// DOM events here 

function buyElectricity(){


var amount=0;

for(let radio of buyRadios){

if(radio.checked){
	
	if(radio.value!=="advance"){
		
amount=Number(radio.value);

}

else{

amount=30;
advanceTick.style.visibility="visible";
}

}


}
	
electricity.topUpElectricity(amount);
	
amountTotal.innerHTML=electricity.totalAmountSpent();
availableUnits.innerHTML=electricity.getUnitsAvailable();
unitsTotal.innerHTML=electricity.totalUnitsBought();
}

buy.addEventListener("click",buyElectricity);

function useElectricity(){

var appliance="";
for(let radio of useRadios){

if(radio.checked){
appliance=radio.value;
}

}
electricity.useAppliance(appliance);
availableUnits.innerHTML=electricity.getUnitsAvailable();

}

use.addEventListener("click",useElectricity);

