const resultField = document.getElementById("result");
let currentInput = "";

function appendToResult(value) {
    currentInput += value;
    resultField.value = currentInput;
}

function clearResult() {
    currentInput = "";
    resultField.value = "";
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        if (isNaN(result)) {
            result = "Error";
        }
        currentInput = result.toString();
        resultField.value = result;
    } catch (error) {
        resultField.value = "Error";
    }
}

function calculateTrig(func) {
    try {
        const angle = parseFloat(prompt(`Enter angle in degrees for ${func} function:`));
        if (!isNaN(angle)) {
            const radians = (angle * Math.PI) / 180;
            let result;
            switch (func) {
                case 'sin':
                    result = Math.sin(radians);
                    break;
                case 'cos':
                    result = Math.cos(radians);
                    break;
                case 'tan':
                    result = Math.tan(radians);
                    break;
                default:
                    result = "Error";
                    break;
            }
            currentInput = result.toString();
            resultField.value = result;
        } else {
            resultField.value = "Error";
        }
    } catch (error) {
        resultField.value = "Error";
    }
}

function calculateLogarithm(func) {
    try {
        const num = parseFloat(prompt(`Enter a number for ${func} function:`));
        if (!isNaN(num) && num > 0) {
            let result;
            switch (func) {
                case 'log':
                    result = Math.log10(num);
                    break;
                case 'ln':
                    result = Math.log(num);
                    break;
                default:
                    result = "Error";
                    break;
            }
            currentInput = result.toString();
            resultField.value = result;
        } else {
            resultField.value = "Error";
        }
    } catch (error) {
        resultField.value = "Error";
    }
}

function calculateComplex(op) {
    try {
        const complexInput = prompt(`Enter a complex number (e.g., 3+2i):`);
        const parts = complexInput.split('+');
        if (parts.length !== 2) {
            resultField.value = "Error";
        } else {
            const real = parseFloat(parts[0]);
            const imaginary = parseFloat(parts[1].replace('i', ''));
            if (!isNaN(real) && !isNaN(imaginary)) {
                let result;
                switch (op) {
                    case '+':
                        result = `${real + real} + ${imaginary + imaginary}i`;
                        break;
                    case '-':
                        result = `${real - real} + ${imaginary - imaginary}i`;
                        break;
                    default:
                        result = "Error";
                        break;
                }
                currentInput = result;
                resultField.value = result;
            } else {
                resultField.value = "Error";
            }
        }
    } catch (error) {
        resultField.value = "Error";
    }
}
