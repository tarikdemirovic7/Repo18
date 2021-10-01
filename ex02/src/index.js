// Only change code below this line
function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}
function* insideGenerator1() {
    for(let x=1; x<6; x++) {
        yield x;
    }
}
function* insideGenerator2() {
    for(let x=10; x<16; x++) {
        yield x;
    }
}
function* insideGenerator3() {
    for(let x=6; x<10; x++) {
        yield x;
    }
}
let iterator = myGenerator();
const fifteenArray =[];

for (let i=0; i < 16 ; i++){
    if(i<15){
    fifteenArray.push(iterator.next().value + '#');
    } else {
    fifteenArray.push(iterator.next().value + '!');
    }
}


console.log(...fifteenArray)

// Only change code above this line
module.exports = { fifteenArray, myGenerator };
