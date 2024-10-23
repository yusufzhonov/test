function test(right, data) {
    let r = 0
    let w = 0

    for (let i in right) {
        if (data[i] == right[i]) {
            r++
        } else {
            w++
        }
    }
    console.log(r, w)
}


let right = {
    1: "a",
    2: "b,c,d",
    3: "c",
    4: "b",
    5: "b",
    6: "a",
    7: "b",
    8: "c",
    9: "c",
    10: "a,b",
    11: "c",
    12: "a",
    13: "a",
    14: "c",
    15: "c",
    16: "a",
    17: "b",
    18: "c,d",
    19: "a",
    20: "c",
    21: "a",
    22: "b,d",
    23: "a",
    24: "c",
    25: "b",
    26: "b,c",
    27: "c",
    28: "b",
    29: "a",
    30: "b",
    31: "a",
    32: "b,d",
};

let data = {
    1: "a",
    2: "d",
    3: "c,a,d",
    4: "b",
    5: "b",
    6: "a",
    7: "b",
    8: "c,a",
    9: "c",
    10: "a,b",
    11: "c",
    12: "a",
    13: "a",
    14: "a",
    15: "b",
    16: "a",
    17: "b",
    18: "c",
    19: "a",
    20: "c",
    21: "a,c",
    22: "c",
    23: "a",
    24: "a",
    25: "b",
    26: "a",
    27: "c",
    28: "c",
    29: "a",
    30: "c",
    31: "b",
    32: "b,d"
}
test(right, data)