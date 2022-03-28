value1=parseInt(document.getElementById("Input1"))
value2=parseInt(document.getElementById("Input2")) 
signtype=document.getElementById("SignType")

function getvalue(value1,value2,signtype){
    if (signtype === "+") {
        sum(value1,value2)
        res=
        
    }
    else if (signtype === "-") {
        sub(value1,value2)
        
    } 
    else if (signtype === "*") {
        mul(value1,value2)
        
    }else if (signtype === "/") {
        div(value1,value2)

    }else if (signtype === "%"){
        per(value1,value2)

    }else if (signtype === "^"){
        sqr(value1,value2)

    }else{
        console.log("Invalid type");
    }

}


function sum(value1,value2)
{
   const result= value1+value2
   return result
   
}
function sub(value1,value2)
{
    const result= value1-value2
    return result
}
function mul(value1,value2)
{
    const result= value1*value2
    return result
}
function div(value1,value2)
{
    const result= value1/value2
    return result
}
function per(value1,value2)
{
    const result= value1%value2
    return result
}
function sqr(value1,value2)
{
    const result= value1^value2
   return result
}
