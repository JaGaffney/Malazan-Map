export function filterArray(array: Array<number | any>, value: number | string) {
    if (array.includes(value)) {
        array = array.filter((i) => i !== value);
    } else {
        array.push(value);
    }
    return array;
}
