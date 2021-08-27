//javascript program to sort an array by the property values.
//sort array by property name
function compareNames(a, b){
    const name1 = a.name.toUpperCase();
    const name2 = b.name.toUpperCase();
    let comparison = 0;

    if(name1 > name2){
        comparison = 1;
    }
    else if(name1 < name2){
        comparison = -1;
    }
    return comparison;
}
const students = [{name : "peter", age : 19}, {name : "tony", age : "51"}, {name : "steve", age : 106}];
console.log(students.sort(compareNames));

//sort array by age value
function compareAges(c, d){
    return c.age - d.age;
}
const students = [{name : "peter", age : 19}, {name : "tony", age : "51"}, {name : "steve", age : 106}];
console.log(students.sort(compareAges));
