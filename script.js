"use strict";

/////////////////////////////////////////////////////////// Animation bug fix

setTimeout(function () {
	document.body.className = "";
}, 1550);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function adjustViewHeight() {
// 	document.getElementsByClassName("preload").style.height =
// 		window.outerHeight - window.innerHeight - 70;
// }

// window.onresize = adjustViewHeight;
// adjustViewHeight();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// CODING CHALLANGE #1 BMI calculation

//// Mark weight = 80kg / height = 1.85;
//// John weight = 99kg / height = 1.60;
//// BMI = kg / (height * height);

// const markWeight = 80;
// const markHeight = 1.85;
// const johnWeight = 99;
// const johnHeight = 2.2;

// const bmiMark = markWeight / markHeight ** 2;
// const bmiJohn = johnWeight / johnHeight ** 2;

// if (bmiMark > bmiJohn) {
// 	console.log(
// 		`Marks BMI (${bmiMark}) is higher than Johns BMI (${bmiJohn})? ${
// 			bmiMark > bmiJohn
// 		}`
// 	);
// } else {
// 	console.log(
// 		`Johns BMI (${bmiJohn}) is higher than Marks BMI (${bmiMark})? ${
// 			bmiMark < bmiJohn
// 		}`
// 	);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// SWITCH STATEMENT

// const number = 10;

// switch (number) {
// 	case 1:
// 	case 2:
// 	case 3:
// 		console.log("u suck");
// 		break;
// 	case 4:
// 	case 5:
// 		console.log("Teigiamai, bet reikia stengtis");
// 		break;
// 	case 6:
// 	case 7:
// 		console.log("6 7");
// 		break;
// 	case 8:
// 	case 9:
// 		console.log("8 9");
// 		break;
// 	default:
// 		console.log("10");
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// CODING CHALLANGE #2

////// John team 89 120 103
////// Mark team 116 94 123
////// Marry team 97 134 105

// const avgJohn = ((89 + 120 + 103) / 3).toPrecision(4);
// const avgMark = ((116 + 94 + 123) / 3).toPrecision(4);
// const avgMarry = ((97 + 134 + 105) / 3).toPrecision(4);

// // const avgJohn = 111;
// // const avgMark = 111;
// // const avgMarry = 111;

// if (avgJohn > avgMark && avgJohn > avgMarry) {
// 	console.log(`John won ${avgJohn}, Mark - ${avgMark}, Marry - ${avgMarry}`);
// } else if (avgMark > avgJohn && avgMark > avgMarry) {
// 	console.log(`Mark won ${avgMark}, John - ${avgJohn}, Marry - ${avgMarry}`);
// } else if (avgMarry > avgJohn && avgMarry > avgMark) {
// 	console.log(`Marry won ${avgMarry}, John - ${avgJohn}, Mark - ${avgMark}`);
// } else {
// 	console.log(`Draw ${avgJohn} - ${avgMark} - ${avgMark}`);
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// JS 3 DALIS FUNKCIJOS PRAKTIKA

// function calculation(number1, number2, action) {
// 	if (action == "sum") {
// 		return number1 + number2;
// 	} else if (action == "minus") {
// 		return number1 - number2;
// 	} else if (action == "daug") {
// 		return number1 * number2;
// 	} else if (action == "dal") {
// 		return number1 / number2;
// 	} else {
// 		return null;
// 	}
// }
// // sum(suma), minus(), daug(daugyba), dal(dalyba)
// console.log(calculation(10, 2, "dal"));

//////////////////////////////////////////////////////////////////

// function getVardas(koksVardas) {
// 	if (typeof koksVardas === "string") {
// 		let userName = koksVardas;
// 		return userName;
// 	}
// }

// let savedName = getVardas("Merunas");
// console.log(savedName);

////

// function getVardas(koksVardas) {
// 	return koksVardas;
// }

// const userName = getVardas("Merunas");
// console.log(userName);

// const getVardas = function (koksVardas) {
// 	let check = koksVardas;
// 	if (typeof check === "string")
// };
// getVardas()
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// bills 124, 48, 268.

// 20% >50
// 15% 50 - 200
// 10% <200

//////////////////////////////////////////////////////////////////////////////////// PIRMAS BUDAS (onlyTips)

// const onlyTips = [];
// const calculateTips = function (bill) {
// 	if (bill <= 49) {
// 		return bill * 0.2;
// 	} else if (bill >= 50 && bill <= 199) {
// 		return bill * 0.15;
// 	} else {
// 		return bill * 0.1;
// 	}
// };
// onlyTips.push(calculateTips(124));
// onlyTips.push(calculateTips(48));
// onlyTips.push(calculateTips(268));
// console.log(onlyTips);

/////////////////////////////////////////////////////////////////////////////////// ANTRAS BUDAS (onlyTips, finalAmount)
// const onlyTips = [];
// const finalAmount = [];

// function calculateTips(bill) {
// 	if (bill <= 49) {
// 		let tip = bill * 0.2;
// 		return onlyTips.push(tip) && finalAmount.push(tip + bill);
// 	} else if (bill >= 50 && bill <= 199) {
// 		let tip = bill * 0.15;
// 		return onlyTips.push(bill * 0.15) && finalAmount.push(tip + bill);
// 	} else {
// 		let tip = bill * 0.1;
// 		return onlyTips.push(tip) && finalAmount.push(tip + bill);
// 	}
// }

// calculateTips(124);
// calculateTips(48);
// calculateTips(268);

// console.log(onlyTips);
// console.log(finalAmount);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// LOOP TASK

// const info = Object.entries(person);
// console.log(info);

// const person = {
// 	female: {
// 		Name: "Marie",
// 		Lastname: "Currie",
// 		Inventions: {
// 			first: "Theory of Radioactivity",
// 			second: "Radium",
// 			third: "Polonium",
// 		},
// 	},
// 	male: {
// 		Name: "Thomas",
// 		Lastname: "Edison",
// 		Inventions: {
// 			first: "Electronic lightbulb",
// 			second: "Motion picture camera",
// 		},
// 	},
// };

// for (let i in person) {
// 	for (let j in person[i]) {
// 		console.log(person[i][j]);
// 	}
// }

// let accessFemale = person.female.Inventions;
// for (let k in accessFemale) {
// 	console.log(accessFemale[k]);
// }

// let accessMale = person.male.Inventions;
// for (let l in accessMale) {
// 	console.log(accessMale[l]);
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let data = {
// 	id: "0001",
// 	type: "donut",
// 	name: "Cake",
// 	ppu: 0.55,
// 	topping: [
// 		{ id: "5001", type: "None" },
// 		{ id: "5002", type: "Glazed" },
// 		{ id: "5005", type: "Sugar" },
// 		{ id: "5007", type: "Powdered Sugar" },
// 		{ id: "5006", type: "Chocolate with Sprinkle" },
// 		{ id: "5003", type: "Chocolate" },
// 		{ id: "5004", type: "Maple" },
// 	],
// };

// for (let first in data) {
// 	if (typeof data[first] !== "object") {
// 		console.log(first + " : " + data[first]);
// 	} else {
// 		for (let second of data[first]) {
// 			console.log(first + " : ");
// 			for (let third in second) {
// 				console.log(third + " " + second[third]);
// 			}
// 		}
// 	}
// }

// let toppingList = data.topping;
// // data.topping.forEach((value, index) => console.log(value, index));
// // const { data: topping } = data;
// console.log(toppingList);

// for (let h in data) {
// 	console.log(h, data[h]);
// }

// for (let i in toppingList) {
// 	// console.log(toppingList[i]);
// 	console.log(`topping :`);
// 	for (let j in toppingList[i]) {
// 		console.log(j, toppingList[i][j]);
// 	}
// }

/////////////////////////////////////////////////////////////////
