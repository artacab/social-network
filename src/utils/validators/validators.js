export const required = value => {
    if (value) return undefined;
    return "Field is required";
}


export const maxLenghthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max len is ${maxLength} symbols`
    return undefined
}