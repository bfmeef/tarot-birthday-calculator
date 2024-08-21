function birthdayCalculator(){
    const birthday = document.getElementById('birthday');
    const digits = birthday.toString().split('');
    const sum = digits.reduce((acc, digit) => acc + parseInt(digit, 10), 0);
    return sum;
}