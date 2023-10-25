const array = [1, 211, 344, 5, 666, 999, 2]
let large1 = large2 = large3 = Number.MIN_SAFE_INTEGER
if (array.length < 3) {
    console.error('Invalid Input')
}

for (let i = 0; i < array.length; i++) {
    let currentElem = array[i]
    if (currentElem > large1) {
        large3 = large2
        large2 = large1
        large1 = currentElem
    }

    else if (currentElem > large2) {
        large3 = large2
        large2 = currentElem
    }
    else if (currentElem > large3) {
        large3 = currentElem
    }
}

console.log(large1, large2, large3)