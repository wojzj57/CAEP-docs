
export const FIndexInterval = (index: number, min: number, max: number) => {
    let spa = max - min;
    if (index < min) {
        index = FIndexInterval(index + spa, min, max);
    }
    else if (index > max) {
        index = FIndexInterval(index - spa, min, max);
    }
    return spa
}