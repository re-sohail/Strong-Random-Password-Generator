let passwordBox = document.getElementById("Password");
let btn = document.getElementById("btn")
let copy = document.getElementById("copy")
let passwordLenght = 30;

let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let number = '0123456789';
let symbol = '!@#$%^&*()_+-={}[]|\:;<>,.?/"';

let allChar = upperCase + lowerCase + number + symbol;

btn.addEventListener('click', ()=>{
    let password = '';

    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(passwordLenght > password.length){
        password += allChar[Math.floor(Math.random() * allChar.length)]
    }
    passwordBox.value = password;
})

copy.addEventListener('click', ()=>{
    passwordBox.select();
    document.execCommand('copy');
})