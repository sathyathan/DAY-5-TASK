//TASK 1:
//CREATE RESUME FOR JSON FORMAT

var resume={
    "name":"sathya",
    "email":"sathyathangavel7@gmail.com",
    "phoneno":"9786361262",
    "degree":"BE",
    "department":"computer science",
    "languagesknown":"tamil,english",
    "address":"1/2 kariyakaliamman kovil street",
    "postalcode":"641653",
    "city":"coimabtore",
    "state":"tamilnadu",
    "country":"india",

}
console.log(resume);
//for loop
for(var i=0;i<resume.length;i++)
    {
        console.log(resume[i]);
    }
//for in loop
for(var i in resume)
{
    console.log(resume[i]);
}
//for of loop
for(var newresume of i)
{
    console.log(newresume);
}
//for each loop
resume.forEach((element => console.log(element)));
    
