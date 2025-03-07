const inputArea = document.getElementById("text-input");
const buttons = document.querySelectorAll("button");
const nums= document.getElementById("num&symbol");

let CapsLock = false;

buttons.forEach(button =>{
    button.addEventListener("click",function(){
        // const buttons = document.querySelectorAll("button");
        if(button.innerText==="Backspace"){
            inputArea.value = inputArea.value.slice(0,-1)
            
        }
        else if(button.innerText==="Enter"){
            inputArea.value+="\n"
        }
        // else if(!CapsLock){
        //     inputArea.value+=button.innerText.toUpperCase()
        //     CapsLock= false;
            
        // }
        else if(button.innerText==="Tab"){
            inputArea.value += " "
        }

        else if(button.innerText==="="){
            if(inputArea.value === typeof(Number)){
                inputArea.value=eval(inputArea.value)

            }else{
                inputArea.value +=button.innerText
            }
        }
        else{
            inputArea.value += button.innerText.toLowerCase();
        }
    })
});