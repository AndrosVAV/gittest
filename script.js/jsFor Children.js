//Разбираю книгу JAVASCRIPT для детей
//Рисуем котиков
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

//DOM Меняем заголовок(c.147)
var headingElem = document.getElementById("heading");
console.log(headingElem.innerHTML);
var newText = prompt("Введите новый заголовок");
headingElem.innerHTML = newText;
// jQuery Меняем заголовок(c.150);
var newText2 = prompt("введите еще один заголовок");
$("#heading").text(newText2);
//Создание новый элементов через jQuery(c.150);
$("body").append("<p>Это будет что-то грандиозное</p>");
//Добавление елем с помощью цикла for
for(var i = 0;i < 3;i++){
    var hoby = prompt("Назовите одно из своих хобби!");
    $("body").append("<p>" + hoby + "</p>"); 
}
//Анимация элементов(jQuery);
$("h1").fadeOut(3000);
//Цепной вызов
$("h1").text("Исчезаючий текст").fadeOut(3000);
$("h1").fadeOut(3000).fadeIn(3000);
$("h1").slideUp(2000).slideDown(2000);