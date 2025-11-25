let maxChars=100;
let textBpx=document.getElementById("textBox");
let counter=document.getElementById("counter");

textBox.oninput=function(){
    let typed=textBox.value.length;
    let remaining=maxChars-typed;

    counter.textContent="Characters left: " + remaining;

    if(typed>=maxChars){
        textBox.value=textBox.value.substring(1,maxChars);
    }
    if(remaining >60){
        counter.style.color="green";
    }
    else if(remaining>20){
        counter.style.color="orange";
    }
    else{
        counter.style.color="red";
    }
};