//Mat.op.
function searchTasks() {
    var selectedOperator = document.getElementById('operatorSelect').value;
    var tasks = document.querySelectorAll('#tasksList li');

    tasks.forEach(function(task) {
      var taskText = task.innerText.toLowerCase();
      if (taskText.includes(selectedOperator)) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    });
  }

  function Sum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result = num1 + num2;
    document.getElementById('result1').innerHTML = 'Результат: ' + result;
}

function Min() {
    var num1 = parseFloat(document.getElementById('num3').value);
    var num2 = parseFloat(document.getElementById('num4').value);
    var result = num1 - num2;
    document.getElementById('result2').innerHTML = 'Результат: ' + result;
}

function Mnoj() {
    var num1 = parseFloat(document.getElementById('num5').value);
    var num2 = parseFloat(document.getElementById('num6').value);
    var result = num1 * num2;
    document.getElementById('result3').innerHTML = 'Результат: ' + result;
}

function Dil() {
    var num1 = parseFloat(document.getElementById('num7').value);
    var num2 = parseFloat(document.getElementById('num8').value);
    var result = num1 / num2;
    document.getElementById('result4').innerHTML = 'Результат: ' + result;
}

function Step() {
    var num1 = parseFloat(document.getElementById('num9').value);
    var num2 = parseFloat(document.getElementById('num10').value);
    var result = Math.pow(num1, num2);
    document.getElementById('result5').innerHTML = 'Результат: ' + result;
}

function Kor() {
    var num = parseFloat(document.getElementById('num11').value);
    var result = Math.sqrt(num);
    document.getElementById('result6').innerHTML = 'Результат: ' + result;
}

function Modl() {
    var num = parseFloat(document.getElementById('num12').value);
    var result = Math.abs(num);
    document.getElementById('result7').innerHTML = 'Результат: ' + result;
}

function Ostach() {
    var num1 = parseFloat(document.getElementById('num13').value);
    var num2 = parseFloat(document.getElementById('num14').value);
    var result = num1 % num2;
    document.getElementById('result8').innerHTML = 'Результат: ' + result;
}

function Sin() {
    var num = parseFloat(document.getElementById('num15').value);
    var result = Math.sin(num);
    document.getElementById('result9').innerHTML = 'Результат: ' + result;
}

function Tan() {
    var num = parseFloat(document.getElementById('num16').value);
    var result = Math.tan(num);
    document.getElementById('result10').innerHTML = 'Результат: ' + result;
}

function Ctg() {
    var num = parseFloat(document.getElementById('num17').value);
    var result = 1 / Math.tan(num);
    document.getElementById('result11').innerHTML = 'Результат: ' + result;
}

function Asin() {
    var num = parseFloat(document.getElementById('num18').value);
    var result = Math.asin(num);
    document.getElementById('result12').innerHTML = 'Результат: ' + result;
}

function Acos() {
    var num = parseFloat(document.getElementById('num19').value);
    var result = Math.acos(num);
    document.getElementById('result13').innerHTML = 'Результат: ' + result;
}

function Atan() {
    var num = parseFloat(document.getElementById('num20').value);
    var result = Math.atan(num);
    document.getElementById('result14').innerHTML = 'Результат: ' + result;
}

function Actg() {
    var num = parseFloat(document.getElementById('num21').value);
    var result = Math.PI / 2 - Math.atan(num);
    document.getElementById('result15').innerHTML = 'Результат: ' + result;
}

function Log() {
    var num = parseFloat(document.getElementById('num22').value);
    var result = Math.log(num);
    document.getElementById('result16').innerHTML = 'Результат: ' + result;
}
let display = document.getElementById("display");

//Calculator
function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Ошибка";
    }
}
function removeLastCharacter(){
display.value=display.value.slice(0,-1);
}
function toggleSign(){
    const currentValue=display.value;
    if(currentValue!==""){
      let currentValue=parseFloat(display.value);
      display.value=-currentValue;
        }
    }
    function calculateSqrt() {
        try {
            display.value  = eval(display.value);
            display.value  = Math.sqrt(value);
        } catch (error) {
            display.value  = 'Ошибка';
        }
    }
    function calculateTrig(operation) {
        try {
            var value = eval(display.value);
            display.value = eval(operation + value + ')');
        } catch (error) {
            display.value = 'Ошибка';
        }
    }
    function calculateLog(logFunction) {
        try {
            var inputValue = eval(display.value);
            if (inputValue <= 0) {
                display.value = 'Ошибка: недопустимый аргумент';
            } else {
                display.value = logFunction(inputValue);
            }
        } catch (error) {
            display.value = 'Ошибка';
        }
    }
    function calculateFactorial() {
        try {
            var inputValue = eval(display.value);
            var result = 1;
            for (var i = 2; i <= inputValue; i++) {
                result *= i;
            }
            display.value = result;
        } catch (error) {
            display.value = 'Ошибка';
        }
    }
    function calculateSqrt() {
        try {
            var inputValue = eval(display.value);
            if (inputValue < 0) {
                display.value = 'Ошибка: недопустимый аргумент';
            } else {
                display.value = Math.sqrt(inputValue);
            }
        } catch (error) {
            display.value = 'Ошибка';
        }
    }
//Algebra
function showHint(problemNumber) {
    var hint;
    switch (problemNumber) {
        case 1:
            hint = "Перенесіть 5 на інший бік";
            break;
        case 2:
            hint = "Розділіть обидві сторони на 2(3y - 7)";
            break;
        case 3:
            hint = "Додайте обидві рівняння, щоб вилучити y";
            break;
        default:
            hint = "Підказка недоступна.";
            break;
    }
    document.getElementById('hint' + problemNumber).innerHTML = "Підказка: " + hint;
}

function showSolution(problemNumber) {
    var solution;
    switch (problemNumber) {
        case 1:
            solution = "Перенесіть 5 на інший бік, а потім розділіть на 2, x буде дорівнювати 3";
            break;
        case 2:
            solution = "Розділіть обидві сторони на 2(3y - 7) і перенесіть -7, y буде дорівнювати 4";
            break;
        case 3:
            solution = "Додайте обидві рівняння, щоб вилучити y, а потім визначте значення x, x буде дорівнювати 2, y буде дорівнювати 3";
            break;
        default:
            solution = "Рішення недоступне.";
            break;
    }
    document.getElementById('solution' + problemNumber).innerHTML = "Рішення: " + solution;
}
function checkAnswer(problemNumber) {
    var userAnswer = document.getElementById('answer' + problemNumber).value;
    var correctAnswer;

    switch (problemNumber) {
        case 1:
            correctAnswer = "3";
            break;
        case 2:
            correctAnswer = "4";
            break;
        case 3:
            correctAnswer = "2,3";
            break;
        default:
            correctAnswer = "Рішення недоступне.";
            break;
    }

    var resultElement = document.getElementById('result' + problemNumber);

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Відповідь правильна!";
    } else {
        resultElement.textContent = "Відповідь неправильна. Спробуйте ще раз.";
    }
}
//Math
function showMathHint(problemNumber) {
    var hint;
    switch (problemNumber) {
        case 1:
            hint = "Для знаходження суми натуральних чисел використовуйте формулу n*(n+1)/2.";
            break;
        case 2:
            hint = "Площа прямокутника дорівнює добутку його сторін.";
            break;
        case 3:
            hint = "Корінь квадратний з числа - це число, яке підняте до квадрату дає задане число.";
            break;
        default:
            hint = "Підказка недоступна.";
            break;
    }
    document.getElementById('mathHint' + problemNumber).innerHTML = "Підказка: " + hint;
}

function showMathSolution(problemNumber) {
    var solution;
    switch (problemNumber) {
        case 1:
            solution = "Сума перших 10 натуральних чисел: 10 * (10 + 1) / 2 = 55.";
            break;
        case 2:
            solution = "Площа прямокутника 5 на 8 дорівнює 5 * 8 = 40.";
            break;
        case 3:
            solution = "Корінь квадратний з 144 - це 12, бо 12 * 12 = 144.";
            break;
        default:
            solution = "Рішення недоступне.";
            break;
    }
    document.getElementById('mathSolution' + problemNumber).innerHTML = "Рішення: " + solution;
}

function checkMathAnswer(problemNumber) {
    var userAnswer = document.getElementById('mathAnswer' + problemNumber).value;
    var correctAnswer;

    switch (problemNumber) {
        case 1:
            correctAnswer = "55";
            break;
        case 2:
            correctAnswer = "40";
            break;
        case 3:
            correctAnswer = "12";
            break;
        default:
            correctAnswer = "Рішення недоступне.";
            break;
    }

    var resultElement = document.getElementById('mathResult' + problemNumber);

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Відповідь правильна!";
    } else {
        resultElement.textContent = "Відповідь неправильна. Спробуйте ще раз.";
    }
}
//Geometry
function showGeoHint(problemNumber) {
    var hint;
    switch (problemNumber) {
        case 1:
            hint = "Застосуйте формулу площі трикутника: (a * b) / 2, де a і b - катети.";
            break;
        case 2:
            hint = "Формула об'єму циліндра: V = π * r^2 * h, де r - радіус, h - висота.";
            break;
        case 3:
            hint = "Використовуйте теорему Піфагора: c^2 = a^2 + b^2, де c - гіпотенуза, a і b - катети.";
            break;
        default:
            hint = "Підказка недоступна.";
            break;
    }
    document.getElementById('geoHint' + problemNumber).innerHTML = "Підказка: " + hint;
}

function showGeoSolution(problemNumber) {
    var solution;
    switch (problemNumber) {
        case 1:
            solution = "Площа трикутника: (5 * 12) / 2 = 30 кв. од.";
            break;
        case 2:
            solution = "Об'єм циліндра: π * 3^2 * 8 = 72π куб. од.";
            break;
        case 3:
            solution = "Гіпотенуза трикутника: √(7^2 + 24^2) = 25 од.";
            break;
        default:
            solution = "Рішення недоступне.";
            break;
    }
    document.getElementById('geoSolution' + problemNumber).innerHTML = "Рішення: " + solution;
}

function checkGeoAnswer(problemNumber) {
    var userAnswer = document.getElementById('geoAnswer' + problemNumber).value;
    var correctAnswer;

    switch (problemNumber) {
        case 1:
            correctAnswer = "30";
            break;
        case 2:
            correctAnswer = "72π";
            break;
        case 3:
            correctAnswer = "25";
            break;
        default:
            correctAnswer = "Рішення недоступне.";
            break;
    }

    var resultElement = document.getElementById('geoResult' + problemNumber);

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Відповідь правильна!";
    } else {
        resultElement.textContent = "Відповідь неправильна. Спробуйте ще раз.";
    }
}
//Trigonometry
function showTrigHint(problemNumber) {
    var hint;
    switch (problemNumber) {
        case 1:
            hint = "Використовуйте таблицю значень тригонометричних функцій або розгляньте прямокутний трикутник з кутом 30 градусів.";
            break;
        case 2:
            hint = "Використовуйте визначення тангенса: tan(θ) = sin(θ) / cos(θ).";
            break;
        case 3:
            hint = "Використовуйте визначення косинуса: cos(θ) = adjacent / hypotenuse.";
            break;
        default:
            hint = "Підказка недоступна.";
            break;
    }
    document.getElementById('trigHint' + problemNumber).innerHTML = "Підказка: " + hint;
}

function showTrigSolution(problemNumber) {
    var solution;
    switch (problemNumber) {
        case 1:
            solution = "sin(30°) = 0.5";
            break;
        case 2:
            solution = "tan(45°) = 1";
            break;
        case 3:
            solution = "cos(60°) = 0.5";
            break;
        default:
            solution = "Рішення недоступне.";
            break;
    }
    document.getElementById('trigSolution' + problemNumber).innerHTML = "Рішення: " + solution;
}

function checkTrigAnswer(problemNumber) {
    var userAnswer = document.getElementById('trigAnswer' + problemNumber).value;
    var correctAnswer;

    switch (problemNumber) {
        case 1:
            correctAnswer = "0.5";
            break;
        case 2:
            correctAnswer = "1";
            break;
        case 3:
            correctAnswer = "0.5";
            break;
        default:
            correctAnswer = "Рішення недоступне.";
            break;
    }

    var resultElement = document.getElementById('trigResult' + problemNumber);

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Відповідь правильна!";
    } else {
        resultElement.textContent = "Відповідь неправильна. Спробуйте ще раз.";
    }
}
