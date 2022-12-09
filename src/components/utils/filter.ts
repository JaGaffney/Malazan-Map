export function filterArray(array, value) {
    let returnValue = array;
    if (array.includes(value)) {
        returnValue = array.filter((i) => i !== value);
    } else {
        returnValue.push(value);
    }
    return returnValue;
}
