let num = document.querySelectorAll(".num");
let display = document.getElementById("myH1");
let clr = document.querySelector(".clr")
function operate(num1,num2,op){
    let sum = 0;
    switch(op){
        case "+":
            sum=add(num1,num2);
            break;
        case '-':
            sum = subtract(num1,num2)
            break;
        case '*':
            sum = multiply(num1,num2);
            break;
        case "/":
            sum = divide(num1,num2);
            break;
        default:
            break;

    }
    return sum;
    
        

}
function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
   if(num2==0){
       return "invalid";
   }
   else{
       return num1/num2;
   }
}
function fun1(){
    let val = "";
let operator = false;
let op2 = "";
let n1 = 0;
let n2= 0;
num.forEach(n=>{  
    n.addEventListener("click",()=>{
        if(n.textContent=="="){
            val = "";
            n1 = operate(n1,n2,op2);
            val += String(n1);
            display.textContent = val;
            n2 =0;
        }
        else if(n.textContent==="+" || n.textContent==="-" ||n.textContent==="*" ||n.textContent==="/" ){
            if(operator==true){
                val = "";
                n1 = operate(n1,n2,op2);
                val += String(n1);
                display.textContent = `${val}${n.textContent}`;
                n2 = 0;
            }
           else{
            operator = true;
           }
           op2 = n.textContent ;
            console.log(`Operator is : ${op2}`);
        }
        else if(operator === true){
            n2 = n2*10 + Number(n.textContent);
            console.log(`num2 is : ${n2}`);
        }
        else{
            n1 = n1*10+ Number(n.textContent);
            console.log(`num1 is : ${n1}`);
        }
        if(n.textContent!='='){
            val+=n.textContent;
            display.textContent = val;
        }
        });
        });
}
fun1();
clr.addEventListener("click",()=>{
 display.textContent = "";
   fun1();
});