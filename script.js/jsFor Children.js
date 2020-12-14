///Рисуем котиков
var drawCats = function (howManyTimes){
    for(var i = 0;i < howManyTimes;i++){
        console.log(i + " =^.^= ");
    }
};
//drawCats(10);

//Получение отдельного символа строки
var codeW1 = "обернитесь";
var codeW2 = "неужели";
var codeW3 = "огурцы";
var codeW4 = "липкие";
var codeW5 = "?!";
codeW1[1] + codew2[1] + codeW3[1] + codeW4[1] + codeW5[1];

//Перевод строки в заглавный или строчный регистр
var str1 = "эЙ каК деЛа";
var lowerStr = str1.toLowerCase();
var firstLetter = lowerStr[0];
var firstLetterUp = firstLetter.toUpperCase();
var newS = lowerStr.slice[1];
var newStr = newS + firstLetterUp;
//str1[0].toUpperCase() + str1.slice(1).toLowerCase();

//Дразнилки
var randomBodyParts = ["уши","нос","губы","глаза"];
var randomPrils = ["унылая","вонючая","дурацкая","смешная"];
var randomWords = ["муха","крыса","мартышка","блошка"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomPril = randomPrils[Math.floor(Math.random() * randomPrils.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
var randomResult = "Утебя " + randomBodyPart + " словно " + randomPril + " " + randomWord + "!!!"
//randomResult = ["Утебя " + randomBodyPart + " словно " + randomPril + " " + randomWord + "!!!"].join(" ");
randomResult;