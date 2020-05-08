

function zeroBetweenOnes(str) {
    let matches = str.match(/1([01]+)1/g);
    if (matches) {
        let zeros = matches.map((item) => item.split("1"))[0]
        let numberOfZeros = zeros.map((item) => item.length).sort((a, b) => b - a).shift();
        return numberOfZeros;
    }
    return 0;
}

console.log(zeroBetweenOnes("00100100"));
console.log(zeroBetweenOnes("01000100101"));
console.log(zeroBetweenOnes("00000000"));
console.log("------------");
console.log(zeroBetweenOnes("0100100001100"), "<=");
console.log(zeroBetweenOnes("00011110000"));
console.log(zeroBetweenOnes("“00000000”"));
console.log(zeroBetweenOnes("111111111”"));

console.log("------------");
console.log(zeroBetweenOnes("1001011"));
console.log("------------");
console.log(zeroBetweenOnes("1bbb1001"));
/*

“00100100” = 2
“01000100101” = 3
“00000000” = 0


“0100100001100” = 4
“00011110000” = 0
“00000000” = 0
“111111111” = 0
*/