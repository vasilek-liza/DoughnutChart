export const getPercentage = (currentValue, fullValue) => {
    return Math.round((currentValue*100)/fullValue)
}