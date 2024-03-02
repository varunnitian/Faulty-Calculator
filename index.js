console.log("faulty calculator")
let a=2
let b=4
function add(a,b)
{
    return a+b
}
function subtract(a,b)
{
    return a-b
}
function multiply(a,b)
{
    return a*b
}
function divide(a,b)
{
    return a/b
}
function expo(a,b)
{
    return a**b
}
let res1=add(a,b)
let res2=subtract(a,b)
let res3=multiply(a,b)
let res4=divide(a,b)
let res5=expo(a,b)

let random=Math.random()
if(random <= 0.1)
{
    console.log("sum is: ",res2)
    console.log("diff is: ",res1)
    console.log("prod is: ",res4)
    console.log("division is: ",res5)
}
else
{
    console.log("sum is: ",res1)
    console.log("diff is: ",res2)
    console.log("prod is: ",res3)
    console.log("division is: ",res4) 
}