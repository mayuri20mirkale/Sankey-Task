var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var email = document.getElementById("email").value;
var password = document.getElementById("form1Example23").value;
if ( email == "sankey901@solution.com" && password == "mindset"){
alert ("Login successfully");
window.location = "welcomepage.html"; // Redirecting to other page.
return false;
}
else{
    
    document.getElementById("form1Example23").style.borderColor="#FF0000"
    document.getElementById("error1").style.color="#FF0000"

    document.getElementById("error1").innerHTML="*Please enter a valid email";

    document.getElementById("error2").style.color="#FF0000"
    document.getElementById("error2").innerHTML="*Please enter a valid password";
    document.getElementById("error3").style.color="#FF0000"
    document.getElementById("error3").innerHTML="*Please enter valid email or password";


attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("email").disabled = true;
document.getElementById("form1Example23").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}