let num = Number.parseInt(prompt("Введите значение тепературы по Цельсию"));
function Farenheit(number){
    let far = (9/5) * number + 32;
    return far;
}
alert(`Цельсия${num} Ференгейты ${Farenheit(num).toFixed(1)}`);


