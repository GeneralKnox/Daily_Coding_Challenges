//Given a random non - negative number, you have to return the digits of this number within an array in reverse order.

const digitize = (num) => {
    const numString = String(num);
    return numString.split("").map(el => {
        return +el;
    }).reverse();
};