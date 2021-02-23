//take input from user name
//take input from user
//get a car
//provide discount based on the kind of car
//display the discount


var nameuserinput=prompt("Enter your name?");
alert("hi " + nameuserinput);
var carcolor=prompt("what color car you prefer?");
alert("great");

var car=prompt("what kind of car do you prefer?");

if (car == 'Mercedes'){
    alert("you get 10% discount");
}else if (car =='Toyota'){
    alert("you get 20% discount");
}else if (car == 'BMW'){
    alert("you get 30% discount");
}else if (car =='ford'){
    alert("you get 15% discount");

}
else{
    alert("sorry No discount for this car");

}




