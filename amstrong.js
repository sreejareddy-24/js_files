n=153
cube=0
let original=n
while(n>0){
    digit=n%10
    cube+=digit*digit*digit
    n=Math.floor(n/10)
}
if(original==cube){
    console.log(original+" is a amstrong")
}else{
    console.log(original+" is not a amstrong")
}
