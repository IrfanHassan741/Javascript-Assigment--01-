var firstName,lastName,city,DOB,fullName,age;
firstName=prompt("Enter your First Name")
lastName=prompt("Enter your last Name")
city=prompt("Enter your Address")
DOB=+prompt("Enter your Birth year")
fullName=firstName + lastName;
age=2026-DOB;

var eng,urdu,isl,maths,bio,total,per;
eng=80
urdu=70
isl=95
maths=85
bio=50
total=eng+urdu+isl+maths+bio;
per=(total/550)*100;




document.getElementById("fullName").innerHTML="Full Name:"+fullName;
document.getElementById("city").innerHTML="Your Adress:"+city;
document.getElementById("DOB").innerHTML="Your Birth Year:"+DOB;
document.getElementById("age").innerHTML="Your age:"+age;

document.getElementById("eng").innerHTML="Your English marks:"+eng;
document.getElementById("urdu").innerHTML="Your Urdu marks:"+urdu;
document.getElementById("maths").innerHTML="Your Maths marks:"+maths;
document.getElementById("bio").innerHTML="Your Biology marks:"+bio;
document.getElementById("isl").innerHTML="Your Islamiyat marks:"+isl;

document.getElementById("total").innerHTML="Your Total marks:"+total;
document.getElementById("per").innerHTML="Your Percentage marks:"+per+"%";


