const numsExternal = [5, 15, 25, 35, 45];
let sumExternal = numsExternal.reduce((a, b) => a + b, 0);  // 125
let resultExternal = (sumExternal - 40) * 30;
console.log("Result (External JS):", resultExternal);
