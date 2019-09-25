function findPercentage1(){
    var obtained = document.getElementById('inputObtained1').value;
    var total = document.getElementById('inputTotal1').value;
    var result = parseFloat(obtained) / parseFloat(total);
    if(!isNaN(result)){
        document.getElementById('percentage1').value = result*100;
    }
} 
function findPercentage2(){
    var obtained = document.getElementById('inputObtained2').value;
    var total = document.getElementById('inputTotal2').value;
    var result = parseFloat(obtained) / parseFloat(total);
    if(!isNaN(result)){
        document.getElementById('percentage2').value = result*100;
    }
}   
function findPercentage3(){
    var obtained = document.getElementById('inputObtained3').value;
    var total = document.getElementById('inputTotal3').value;
    var result = parseFloat(obtained) / parseFloat(total);
    if(!isNaN(result)){
        document.getElementById('percentage3').value = result*100;
    }
}   
function findPercentage4(){
    var obtained = document.getElementById('inputObtained4').value;
    var total = document.getElementById('inputTotal4').value;
    var result = parseFloat(obtained) / parseFloat(total);
    if(!isNaN(result)){
        document.getElementById('percentage4').value = result*100;
    }
}    
function average(){
    var p1 = parseFloat(document.getElementById("percentage1").value);
    var p2 = parseFloat(document.getElementById("percentage2").value);
    var p3 = parseFloat(document.getElementById("percentage3").value);
    var p4 = parseFloat(document.getElementById("percentage4").value);
    var totalValue = 0;
    var totalWeight = 0;
    if(p1){
        totalValue = totalValue + p1;
        totalWeight++;
    }
    if(p2){
        totalValue = totalValue + p2;
        totalWeight++;
    }
    if(p3){
        totalValue = totalValue + p3;
        totalWeight++;
    }
    if(p4){
        totalValue = totalValue + p4;
        totalWeight++;
    }
    if(totalValue && totalWeight){
        document.getElementById("result").value = (totalValue / totalWeight);
    }
} 
function weightedAverage(){
    var w1 = parseFloat(document.getElementById("inputWeight1").value);
    var w2 = parseFloat(document.getElementById("inputWeight2").value);
    var w3 = parseFloat(document.getElementById("inputWeight3").value);
    var w4 = parseFloat(document.getElementById("inputWeight4").value);
    var p1 = parseFloat(document.getElementById("percentage1").value);
    var p2 = parseFloat(document.getElementById("percentage2").value);
    var p3 = parseFloat(document.getElementById("percentage3").value);
    var p4 = parseFloat(document.getElementById("percentage4").value);
    var totalValue = 0;
    var totalWeight = 0;
    if(w1 && p1){
        totalValue = totalValue + (w1 * p1);
        totalWeight = totalWeight + w1;
    }
    if(w2 && p2){
        totalValue = totalValue + (w2 * p2);
        totalWeight = totalWeight + w2;
    }
    if(w3 && p3){
        totalValue = totalValue + (w3 * p3);
        totalWeight = totalWeight + w3;
    }
    if(w4 && p4){
        totalValue = totalValue + (w4 * p4);
        totalWeight = totalWeight + w4;
    }
    if(totalValue && totalWeight){
        document.getElementById("result").value = (totalValue / totalWeight);
    }
}

function langToggle(){
    if(document.body.getAttribute('lang') == "en"){
        document.body.setAttribute('lang',"fr");
    }
    else{
        document.body.setAttribute('lang',"en");
    }
}

function clearTable(){
    var inputs = document.getElementsByTagName("input");
    for(var i = 0; i<inputs.length; i++){
        if(inputs[i].type == "number"){
            inputs[i].value = "";
        }
    }
}