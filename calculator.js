// var
var add,sub,mult,div,mod;
var num1,num2;
var price1,price2,price3,total,dis;
var pak
var USA
// prompt
num1=+prompt("Enter your-1-Number");
num2=+prompt("Enter your-2-Number");
price1=+prompt("Enter your price-of-1-product");
price2=+prompt("Enter your price-of-2-product");
price3=+prompt("Enter your price-of-3-product");
pak=+prompt("Enter your Currency in Rupess");
// calculation
add=num1+num2;
sub=num1-num2;
mult=num1*num2;
div=num1/num2;
mod=num1%num2;
total=price1+price2+price3;
dis=total*(10/100);
USA=pak/280;

// Write
document.getElementById("add").innerHTML="Addition="+ add;
document.getElementById("sub").innerHTML="Subtraction="+ sub;
document.getElementById("mult").innerHTML="Multiplation="+ mult;
document.getElementById("div").innerHTML="Division="+ div;
document.getElementById("mod").innerHTML="Moduls="+ mod;
// Discount
document.getElementById("total").innerHTML="Total Price="+total+"$" ;
document.getElementById("dis").innerHTML="After Discount="+ dis+"$";
document.getElementById("USA").innerHTML="Currency Conversion="+ USA+"$";
