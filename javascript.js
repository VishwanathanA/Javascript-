// 1. First program fizzbuzz

for(let i=1;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3==0){
        console.log("Fizz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
}

// 2.second program palindrome
 
let pal="radar";
let rev="";
    for(i=pal.length-1;i>=0;i--){
        rev+=pal.charAt(i);
    }
function palind(pal ,rev){
    if(pal==rev){
        console.log("palindrome");
    }
    else{
        console.log("Not a palindrome");
    }
}
palind(rev,pal);


// 3.largest number

let arr=[12,54,23,53,64,17];
let maxn=arr[0];
function maxm(arr,maxn){
    for(i=0;i<arr.length;i++){
        if(arr[i]>maxn){
            maxn=arr[i];
        }
    }
    return maxn;
}

console.log(maxm(arr,maxn));

//4.object

function obj(x,y){
    let ob={
        First_name:x,
        last_name:y,
        age:20
    }
    return ob;
}
let x="abc";
let y="xyz";
console.log(obj(x,y));

//5.longest words

let sen="this is programming language";
function longest(str) {
    str = str.match(/[a-zA-Z0-9]+/gi);
    let largest = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].length > largest.length) {
            largest = str[i];
        }
    }
    return largest;
}
console.log(longest(sen));

//6.factorial

let n=55;
function fact(n){
    for(i=1;i<=n;i++){
        if(n%i==0){
            console.log(i);
        }
    }
}
fact(n);

//7.Celsius to Fahrenheit

let cel=24;
function fah(cel){
    return cel*33;
}
console.log(fah(cel)+" fahrenheit");

//8.distinct numbers

let ar=[1,2,3,4,5,6,8,9,10];
function dist(ar){
    j=1
    for(i=0;i<ar.length;i++,j++){
        if(ar[i]!=j){
            console.log(j);
            break;
        }
    }
}
dist(ar);
