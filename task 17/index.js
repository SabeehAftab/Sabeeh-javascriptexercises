const guests = ["daniyal", "ali", "ahmed"];
console.log('You are invited to the dinner ',guests[0]);
console.log('You are invited to the dinner ',guests[1]);
console.log('You are invited to the dinner ',guests[2]);
console.log(guests[2],"can not make for dinner")
guests[2]="ahsan";
console.log('You are invited to the dinner ',guests[2]);

console.log("hey i found a bigger dinner table.");
guests.unshift("tahir");
guests.splice( 1, 0, "anwar");
guests.push("kamran");
console.log(guests);


console.log('You are invited to the dinner ',guests[0]);
console.log('You are invited to the dinner ',guests[1]);
console.log('You are invited to the dinner ',guests[2]);
console.log('You are invited to the dinner ',guests[3]);
console.log('You are invited to the dinner ',guests[4]);
console.log('You are invited to the dinner ',guests[5]);

console.log("I can invite only two people for dinner.");
console.log('I am sorry ,I can not invite you to dinner.',guests[2])
console.log('I am sorry ,I can not invite you to dinner.',guests[3])
console.log('I am sorry ,I can not invite you to dinner.',guests[4])
console.log('I am sorry ,I can not invite you to dinner.',guests[5])
guests.pop();
guests.pop();
guests.pop();
guests.pop();
console.log(guests);

console.log('You are still invited to the dinner ',guests[0]);
console.log('You are still invited to the dinner ',guests[1]);
guests.pop();
guests.pop();
console.log(guests);