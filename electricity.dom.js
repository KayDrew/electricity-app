// DOM element(s) references
let buyRadios= document.querySelectorAll("input[name='buyElectricity']");
let buy= document.querySelector(".topupNow");
let availableUnits= document.querySelector(".unitsAvailable");
let  unitsTotal= document.querySelector(".totalUnits");
let amountTotal= document.querySelector(".totalAmount");
let use=document.querySelector(".useNow");
let advanceTick= document.querySelector(".tick");
let useRadios= document.querySelectorAll("input[name='buyElectricity']");


// Factory Function instance 
const electricity =  Electricity();

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
	
amountTotal.innerHTML=totalAmount;
availableUnits.innerHTML=12;
unitsTotal.innerHTML=15;
}

buy.addEventListener("click",buyElectricity);

function useElectricity(){

availableUnits.innerHTML=82;
unitsTotal.innerHTML=5;

}

use.addEventListener("click",useElectricity);

