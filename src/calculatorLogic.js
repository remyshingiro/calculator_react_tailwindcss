export const performCalculation = (n1, n2, op) => {

    const num1 = parseFloat(n1);
    const num2 = parseFloat(n2);
    switch (op) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case 'x': return num1 * num2;
        case '÷': return num2 !== 0 ? num1 / num2 : 'Error';
        default: return num2;
    }
}
