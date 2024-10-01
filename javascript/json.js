let jsonObj={
    name:"diskha",
    channel:"cwh",
    friend:"shubhi",
    food:"bhindi"
}
console.log(jsonObj);
let myJsonStr=JSON.stringify(jsonObj);
console.log(myJsonStr);

myJsonStr.replace('shweta','shubhi');
console.log(myJsonStr)

newJsonObj=JSON.parse(myJsonStr);
console.log(newJsonObj);


