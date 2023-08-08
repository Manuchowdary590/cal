let operator="";
let firstnumber="";
let secondnumber="";
function append(num){
   if(operator===""){
    firstnumber+=num;
    document.getElementById('result').value=firstnumber;
   }
   else{
    secondnumber+=num;
    document.getElementById('result').value=secondnumber;
   }
}
function operation(op){
    operator=op;
}
function calculate(){
    let result;
    switch(operator){
        case '+':
            result=parseInt(firstnumber)+parseInt(secondnumber);
            break;
            case '-':
            result=parseInt(firstnumber)-parseInt(secondnumber);
            break;
            case '*':
            result=parseInt(firstnumber)*parseInt(secondnumber);
            break;
            case '/':
            result=parseInt(firstnumber)/parseInt(secondnumber);
            break;
    }
    document.getElementById('result').value=result;
}
function clearresult(){
     firstnumber="";
     secondnumber="";
     operator="";
     document.getElementById('result').value='';
}