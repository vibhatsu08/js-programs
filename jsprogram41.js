//javasccript program to check whether a given year is a leap year or not.
const year = 2000;
console.log(year);

if((year%4 == 0 && year%100 != 0) || year%400 == 0){
    console.log("leap year");
}
else {
    console.log("not leap year");
}