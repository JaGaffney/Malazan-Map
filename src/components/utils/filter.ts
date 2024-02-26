export function filterArray(array, value) {
    if (array.includes(value)) {
        array = array.filter((i) => i !== value);
    } else {
        array.push(value);
    }
    return array;
}
