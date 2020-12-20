//Разбираю книгу JAVASCRIPT для детей Ник Морган
//Рисуем котиков (с.21)
var drawCats = function (howManyTimes){
    for(var i = 0;i < howManyTimes;i++){
        console.log(i + " =^.^= ");
    }
};
//drawCats(10);

//Получение отдельного символа строки(c.37)
var codeW1 = "обернитесь";
var codeW2 = "неужели";
var codeW3 = "огурцы";
var codeW4 = "липкие";
var codeW5 = "?!";
codeW1[1] + codew2[1] + codeW3[1] + codeW4[1] + codeW5[1];

//Перевод строки в заглавный или строчный регистр(c.39)
var str1 = "эЙ каК деЛа";
var lowerStr = str1.toLowerCase();
var firstLetter = lowerStr[0];
var firstLetterUp = firstLetter.toUpperCase();
var newS = lowerStr.slice[1];
var newStr = newS + firstLetterUp;
//str1[0].toUpperCase() + str1.slice(1).toLowerCase();

//МАССИВЫ(С.49)
//Разные типы данных в одном массиве(c.54)
var tree20 = ["береза","тополь",555,10,["заяц","волк","лиса",333,2],true,10];
//последний элем массива
tree20[tree20.length - 1];
//добавление елем в конец массива(c.56)
var animals20 = ["утка","хрушка","бычок"];
animals20.push("овечка","коза");
animals20;
//добавление в начало
animals20.unshift("курица");
animals20;
animals20.length;
//Удаление последнего элем из массивав(с.57)
animals20.pop();
animals20;
//удаляем первый елем
animals20.shift();
animals20;
//поис индекса елемента
animals20[2];
animals20.indexOf("овечка");
//запрос не существующего елем вернет - 1;
//превращаем массив в строку(c.61)
animals20.join(" ");

//Случайные числа использ Math.random()  (c.65);
Math.random();
Math.floor(Math.random() * 4);
//Вопрос  Мне сегодня залезть на гору?
//Шар судьбы(c.66);
var phrases = [
    "Звучит не плохо",
    "Да это определенно надо сделать",
    "Не думаю что это хорошая идея",
    "Может не сегодня",
    "Компьютер говорит нет"
];
phrases[Math.floor(Math.random() * phrases.length)];

//Дразнилки(c.67)
var randomBodyParts = ["уши","нос","губы","глаза"];
var randomPrils = ["унылая","вонючая","дурацкая","смешная"];
var randomWords = ["муха","крыса","мартышка","блошка"];
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomPril = randomPrils[Math.floor(Math.random() * randomPrils.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];
var randomResult = "Утебя " + randomBodyPart + " словно " + randomPril + " " + randomWord + "!!!"
//randomResult = ["Утебя " + randomBodyPart + " словно " + randomPril + " " + randomWord + "!!!"].join(" ");
randomResult;

//ОБЬЕКТЫ (C.70)
//добавление елементов
var cat = {};
cat.legs = 3,
cat.name = "Гармония",
cat.color = "Черепаховый";
cat;
//обращение к не существующему обьекту вернет undefined;

var anna = {name : "Анна",age : 13,lukyNumbers : [1,3,5,8]};
var dave = {name : "Дейв",age : 11,lukyNumbers : [1,2,3,4]};
var kate = {name : "Кейт",age : 14,lukyNumbers : [2,4,6,8]};
//Массив обьектов(c.76)
var frends20 = [anna,dave,kate];
//обращение к елементам обьектов
frends20[2].age;
frends20[1].lukyNumbers[2];

//УСЛОВНЫЕ КОНСТРУКЦИИ(c.95)
//конструкция if....else(c.98)
var name = "Николай";
//console.log("Привет " + name);
if(name.length > 6){
//console.log("Ну и длинющее у тебя имя!!!");
}else{
//console.log("Имя у вас не из длинных");
};
//ЦИКЛ WHILE(c.101);
//считаем овец и засыпаем
var sheepCounted = 0;
while(sheepCounted < 10){
  //console.log("Посчитано овец : " +  sheepCounted + "!"); 
  sheepCounted++;
}
//console.log("Хрррррррр-пссссс");

//ЦИКЛ for(c.103);
var timesToSayHello = 5;
for(var i = 0;i < imesToSayHello;i++){
//console.log("Привет");
};
var animals21 = ["лев","бегемот","жираф","зебра"];
for(var i = 0;i < animals21.length;i++){
//console.log("В этом зоопарке есть " + animals21[i]);
};
var name2 = "Николас";
for(var i = 0;i < name2.length;i++){
  //console.log("В моем имени есть буква " + name2[i]);   
};

for(var x = 2;x < 10000;x = x * 2){
  //console.log(x);  
}




//ИГРА ВИСЕЛИЦА(УГАДАЙ СЛОВО) - (C.110);

/*
//СОЗДАЁМ МАССИВ СО СЛОВАМИ
var words = [
    "джунгли",
    "прерия",
    "пустыня",
    "саванна"
];
//выбираем случайное слово
var word = words[Math.floor(Math.random() * words.length)];

//создаём итоговый массив
var answerArray = [];
for(var i = 0;i < words.length;i++){
   answerArray[i] = "_"; 
}
var remainLetters = word.length;

//игровой цикл
while(remainLetters > 0){
    //показываем состояние игры
    alert(answerArray.join(" "));
    //запрашиваем вариант ответа
    var gues = prompt("Угадайте букву или нажмите отмена для выхода из игры");
    if(gues === null){
        //выходим из игры
        break;
    }else if(gues.length !== 1){
      alert("Пожалуйста введите одиночную букву");  
    }else{
        //обновляем состояние игры
        for(var j = 0;j < word.length;j++){
            if(word[j] === gues){
            answerArray[j] = gues;
            remainLetters--;
            }
        }
    }
    //конец игрового цикла
}
//отображаем ответ и поздравляем игрока
alert(answerArray.join(" "));
alert("Отлично! Загаданное слово " + word);

*/

//ФУНКЦИИ(c.126)
//Передача в функцию нескольких значений(c.130)
var newDrawCats = function(howManyTimes,whatToDraw){
    for(var i = 0;i < howManyTimes;i++){
        //console.log(i + " " + whatToDraw);
    }
};
//newDrawCats(7," =^.^= ");    //(c.130)

//возврат значения из функции(с.131)
var double = function(number){
    return number * 2;
};
double(3);
double(5) + double(3);
double(double(5));

//(c.134)
var pickRandomWord21 = function(words){
    return words[Math.floor(Math.random() * words.length)]
};
var randomWords21= ["планета","червяк","цветок","компьютер","дерево"];
pickRandomWord21(randomWords21);

//Ранний выход из функции по return(c.136);
var fiftLatter = function(name){
  if(name < 5){
      return;
  } 
  return "Пятая буква вашего имени: " + name[4] + "!"; 
};
fiftLatter("Владимир");

//Многократное использование return вместо конструкции if...else(c.137);
var medalForScore = function(score){
    if(score< 3){
        return "Бронзовая";
    }if(score < 7){
        return "Серебрянная";
    }
    return "Золотая";
};



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
//Добавление елем с помощью цикла for(c.151)
for(var i = 0;i < 3;i++){
    var hoby = prompt("Назовите одно из своих хобби!");
    $("body").append("<p>" + hoby + "</p>"); 
}
//Анимация элементов(jQuery)(c.152);
$("h1").fadeOut(3000);
//Цепной вызов
$("h1").text("Исчезаючий текст").fadeOut(3000);
$("h1").fadeOut(3000).fadeIn(3000);
$("h1").slideUp(2000).slideDown(2000);

//ИНТЕРАКТИВНОЕ ПРОГРАММИРОВАНИЕ(c.156)
//setTimeout(c.156)
var timeUp = function(){
    alert("Ваше время вышло");
};
setTimeout(timeUp,3000);
//отмена действия таймера(c.158)
var homeWork = function(){
    alert("just do it");
};
var timeid = setTimeout(homeWork,5000);
//clearTimeout(timeid);

//setInterval(c.158)
var counter = 0;
var message2 = function(){
    console.log("Начни что-то делать Ты смотришь на монитор уже " + counter + " секунд");
    counter++;
};
var interId = setInterval(message2,1000);
//clearInterval(interId);

//Анимация элем с помощью setInterval(c.160);
var leftOffset = 0;
var moveHeading = function(){
    $("#heading").offset({left:leftOffset});
    leftOffset++;
    if(leftOffset > 200){
    leftOffset = 0;
    }
};
setInterval(moveHeading,30);

//Реакция на действие пользователя(c.162);
var clickHand1 = function(event){
    console.log("Клик! " + event.pageX + " " + event.pageY);
};
$("h1").click(clickHand1);
//событие mousemove(c.163);
$("html").mousemove(function(event){
    $("#heading").offset({
        left:event.pageX,
        top:event.pageY
    });
});