module.exports = function toReadable (number) {
   
let ifOneGoTwo = new Map ([["2", "twenty"], ["3", "thirty"], ["4", "forty"], ["5", "fifty"], ["6", "sixty"], ["7", "seventy"], ["8", "eighty"], ["9", "ninety"]]);

let ifTwoCount = new Map ([["10", "ten"], ["11", "eleven"], ["12", "twelve"], ["13", "thirteen"], ["14", "fourteen"], ["15", "fifteen"], ["16", "sixteen"], ["17", "seventeen"], ["18", "eighteen"], ["19", "nineteen"]]);

let ifOnlyOneCount = new Map ([["0", "zero"], ["1", "one"], ["2", "two"], ["3", "three"], ["4", "four"], ["5", "five"], ["6", "six"], ["7", "seven"], ["8", "eight"], ["9", "nine"]]);
  
number = number.toString()
if (number.length === 1) { 
    return ifOnlyOneCount.get(number);
} 
else if (number.length === 2 && number[0] === "1") { 
    return ifTwoCount.get(number);
} 
else if (number.length === 2 && number[0] !== "1" && number[1] !== "0") { 
    return ifOneGoTwo.get(number[0]) + " " + ifOnlyOneCount.get(number[1]);
} 
else if (number.length === 2 && number[0] !== "1" && number[1] === "0") { 
    return ifOneGoTwo.get(number[0]);
} 
else if (number.length === 3 && number[1] === "0" && number[2] === "0") { 
    return ifOnlyOneCount.get(number[0]) + " hundred";
} 
else if (number.length === 3 && number[1] === "0" && number[2] !== "0") { 
    return ifOnlyOneCount.get(number[0]) + " hundred " + ifOnlyOneCount.get(number[2]);
} 
else if (number.length === 3 && number[1] !== "0" &&  number[1] !== "1" && number[2] === "0") { 
    return ifOnlyOneCount.get(number[0]) + " hundred " + ifOneGoTwo.get(number[1]);
}
else if (number.length === 3 && number[1] === "1") { 
    return ifOnlyOneCount.get(number[0]) + " hundred " + ifTwoCount.get(number[1]+number[2]);
} 
else if (number.length === 3 && number[1] !== "0" && number[1] !== "1" && number[2] !== "0") { 
    return ifOnlyOneCount.get(number[0]) + " hundred " + ifOneGoTwo.get(number[1]) + " " + ifOnlyOneCount.get(number[2]);
}
}

