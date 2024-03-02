let person =
{
    firstname:"Ram",
    Lastname :"Sita",
    age :45,
    weight :75
}
console.log(person["firstname"]);
console.log(person.age);
// add new property to current object
person["height"] = 5.11;
console.log(person["height"]);
//person.weight =80
//console.log(person.weight);
delete person["weight"]
for(let x in person)
{
    console.log(x);
    console.log(person[x]);
    console.log(x +   "     " + person[x]);
}
