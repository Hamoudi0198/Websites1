    //function dupCheck() {
    //string: var str = 'wael Houry'
    //array: var arr = ['wael','Houry']     [wael][houry] 
    //console.log(arr) = ['wael','Houry'] 
    //console.log(arr[0]) = wael
    //console.log(arr[1]) = hry
    //const cars1 = ["BMW", "audi", "infiniti", "Nissan", "toyota"];
    //const cars2 = ["nissan", "audi", "infiniti", "subaru", "honda"];
    //write a code that checks for car brands that are available in both arrays
    //and puts them in p of id 'dups'
    //note: car brands inside the p tag should be separeted by ','
    //example: nissan,audi,infiniti
    //cars1.forEach(element1 =>{element1 ===element2
    // cars2.forEach(element2 => {
    //});
    //const cars1 = ["BMW", "audi" , "infinity" , "nissan" , "toyota"];
    //const cars2 = ["nissan" , "audi" , "infinity" , "sabaru" , "honda"];
    //const dupss = cars1.filter(element => cars2.includes(element));
    // dupss = dupss.toString();
    //function dupCheck() {
    //document.getElementById('dups').innerHTML = dupss
    //}


function dupCheck(){
const cars1 = ["BMW", "audi" , "infinity" , "nissan" , "toyota"];
const cars2 = ["nissan" , "audi" , "infinity" , "sabaru" , "honda"];
let duplicats = [];
var wael = {
  name:'wael',
  lastn: 'houry'
}
// cars1.forEach(element1 => { //bmw
//   cars2.forEach(element2 => element1 === element2 && duplicats.push(element1));//nissan
// });
for(var i=0; i <= cars1.length -1 ; i++ ){//4
console.log(cars1[i])
}//5
duplicats = duplicats.toString();
document.getElementById('dups').innerText = duplicats
}
/// 