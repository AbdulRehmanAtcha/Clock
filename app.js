var a = new Date();
var b = a.getHours();
document.getElementById("hrs").innerText = b;
var c = a.getMinutes();
if(c >= 0 && c <= 9){
    document.getElementById("mint").innerText = '0'+c;
}
else{
    document.getElementById("mint").innerText = c;
}

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = a.getMonth();
var e = a.getDay();
document.getElementById("DATE").innerText = months[d].slice(0,3) + ", " + days[e] +" " + a.getDate();