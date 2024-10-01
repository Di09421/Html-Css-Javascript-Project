for (let index = 1; index <=10; index++) {
    console.log(`${index}`);   
}
let array=[1,2,3,4,5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);   
}
var array1=[]
for (let index = 0; index <= array.length; index++) {
    const element = array[index];
    if(array.length===0)
    {
        console.log("array is empty array")
    }
    console.log(element);  
}
let i=1;
while(i<=10)
{
     console.log(i)
     i++;
}

for(let i=1;i<=10;i++)
{
    for(let j=1;j<=10;j++)
    {
        console.log(i+"x"+j+"="+i*j);
    }
}

for(let i=1;i<=20;i++)
{
    for(let j=1;j<=10;j++)
    {
        console.log(i+"x"+j+"="+i*j);
    }
}
let num=0;
do
{
    console.log(`${num}`);
    num++;
}
    while(num<=10);

for(let i=1;i<=10;i++)
{
    for(let j=1;j<=10;j++)
    {
        if(j===5)
        {
            continue;
        }
        console.log(i+"x"+j+"="+i*j);
    }
}


let arr1=[1,2,3,4,5]

arr.forEach((element)=>{

    console.log(element)

});
let arr2=[1,2,3,4,5]

arr.forEach((item,index,value)=>{

    console.log(item,index,value)

});

arr.forEach((item,index,array)=>{

    console.log(array)

});

let arr3=[1,2,3,4,5]

let x1=arr.filter((num)=>num<3)
console.log(x);

let arr4=[1,2,3,4,5]

 let x=arr.filter((num)=>num%2==0)
 console.log(x);


let arr5=[65,75,55,85,95]
let x2=arr.filter((num)=>num>=75)
console.log(x);
  
let user=[
    {
        title:"pierets",
        price:599,
        subject:"History"
    },
    {
        title:"merchant of venice",
        price:999,
        subject:"lictr"
    },
    {
        title:"a accient india",
        price:699,
        subject:"History"
    }];
    console.log(user);


let arr6=[65,55,75,85,95]
let newarr=arr.map((num)=>num*2);
console.log(newarr);


let arr=[65,55,75,85,95] 
let red1=arr.reduce((acc,cvr)=>acc+cvr,1);
console.log(red);

let red=arr.reduce((acc,cvr)=>{console.log(`acc=${acc},cvr=${cvr}`)});
console.log(red);























































































































