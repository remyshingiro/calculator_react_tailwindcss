const perfomCalculation = (num1, num2, op) => {
    switch (op) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case 'x': return num1 * num2;
        case '÷': return num2 !== 0 ? num1 / num2 : 'Error';
        default: return num2;
    }
}
