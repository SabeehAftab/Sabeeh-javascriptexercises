//Task 3
var name1 = "Sabeeh";
var lcname= name1.toLowerCase();
var ucname= name1.toUpperCase();
console.log(name1);
console.log(lcname);
console.log(ucname);
function toTitles(s){ return s.replace(/\w\S*/g, function(t) { return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase(); }); }
var str = toTitles('sabeeh aftab'); 
console.log(str);
