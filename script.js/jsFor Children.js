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
for(var i = 0;i < word.length;i++){
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




//ООП Обьектно-ориентированное программирование(c.176);
//простой обьект(c.176);
var dog ={
    name : "Оладушек",
    legs : 4,
    isAwesome : true
};
dog.age = 6;
//Добавление к обьектам новых методов(c.177)
dog.bark = function(){
    //console.log("Гав-гав меня зовут " + this.name + "!");
}
dog.bark();
//Ключевое слово this(c.178);
//Используем один метод с разными обьектами(c.178);

var speak = function(){
    //console.log(this.sound + " Меня зовут " + this.name + "!");
};
var cat1 = {
    sound : "мяу-мяу",
    name : "Варежка",
    speak : speak
};

var pig = {
    sound : "хрю-хрю",
    name : "Чарли",
    speak : speak
};
var horse = {
    sound : "и-го-го",
    name : "Мэри",
    speak : speak
};
cat1.speak();
horse.speak();
pig.speak();



//СОЗДАНИЕ ОБЬЕКТОВ С ПОМОЩЬЮ КОНСТРУКТОРА(c.180);
var Car = function(x,y){
    this.x = x;
    this.y = y;
};
//Рисуем машины(c.182);
var drawCar = function(car){
    var carHTML = '<img src = "https://nostarch.com/images/car.png">';
    var carElement = $(carHTML);
    carElement.css({
        position : "absolute",
        left : car.x,
        top : car.y
    });
   // $("body").append(carElement);
};

/*
var tesla = new Car(20,20);
var nissan = new Car(100,200);
drawCar(tesla);
drawCar(nissan);
*/



//НАСТРОЙКА ОБЬЕКТОВ ЧЕРЕЗ ПРОТОТИПЫ(C.184);

/*
//ДОБАВЛЯЕМ МЕТОД draw К ПРОТОТИПУ CAR
var Car = function(x,y){
    this.x = x;
    this.y = y;
};
Car.prototype.draw = function(car){
    var carHTML = '<img src = "https://nostarch.com/images/car.png">';
	
	this.carElement = $(carHTML);
	
	this.carElement.css({
        position: "absolute",
        left: this.x,
        top: this.y
    });
    $("body").append(this.carElement);
};

var tesla = new Car(20,20);
var nissan = new Car(100,200);
tesla.draw();
nissan.draw();
*/





//Canvas(c.193);
//РИСОВАНИЕ НА ХОЛСТЕ - черный квадрат(C.194);
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillRect(0,0,10,10);
*/

//РИСУЕМ НЕСКОЛЬКО КВАДРАТОВ(C.195)
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
for(var i = 0;i < 8;i++){
ctx.fillRect(i * 10,i * 10,10,10);
}
*/

//рисуем красный квадрат(c.196);
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "Red";
ctx.fillRect(0,0,100,100);
*/
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "Red";
ctx.fillRect(0,0,100,100);
ctx.fillStyle = "Violet";
ctx.fillRect(100,0,100,100);
ctx.fillStyle = "Orange";
ctx.fillRect(200,0,100,100);
*/


//Рисование контуров(c.197);
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeRect(10,10,100,20);
*/

//РОЗОВЫЙ КОНТУР ПРЯМОУГОЛЬНИКА С ШИРИНОЙ ЛИНИИ 4 ПИКСЕЛЯ;
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "DeepPink";
ctx.lineWidgth = 4;
ctx.strokeRect(10,10,100,20);
*/

//Рисование линий или путей(c.198);
//Бирюзовый крестик нарисованный карандашами moveTo и lineTo
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = "Turquoise";
ctx.lineWidgth = 4;
ctx.beginPath();
ctx.moveTo(10,10);
ctx.lineTo(60,60);
ctx.moveTo(60,10);
ctx.lineTo(10,60);
ctx.stroke();
*/

//Заливка путей цветом(c.200);
//Синий домик залитый цветом с помощью метода fill
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "Blue";
ctx.lineWidgth = 4;
ctx.beginPath();
ctx.moveTo(100,100);
ctx.lineTo(100,60);
ctx.lineTo(130,30);
ctx.lineTo(160,60);
ctx.lineTo(160,100);
ctx.lineTo(100,100);
ctx.fill();
*/






/*
//Рисование дуг и окружностей(c.201);
//Для этого предназначен метод arc;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.lineWidth = 2;//толщина линии
ctx.strokeStyle = "Green";
//Рисуем четверть(c.202);
ctx.beginPath();
ctx.arc(50,50,20,0,Math.PI/2,false);//false - рисуем по часовой,true  - против часовой
ctx.stroke();
//Рисуем половину окружности(c.203)
ctx.beginPath();
ctx.arc(100,50,20,0,Math.PI,false);
ctx.stroke();
//Рисуем окружность(c.203);
ctx.beginPath();
ctx.arc(150,50,20,0,Math.PI * 2,false);
ctx.stroke();

//Рисование окружностей с помощью функции(c.204);

var circle = function(x,y,radius){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI * 2,false);
    ctx.stroke();
};
 
ctx.lineWidth = 4;
ctx.strokeStyle = "Red";
circle(100,100,20);
ctx.strokeStyle = "Orange";
circle(100,100,30);
ctx.strokeStyle = "Yellow";
circle(100,100,40);
ctx.strokeStyle = "Green";
circle(100,100,50);
ctx.strokeStyle = "Blue";
circle(100,100,60);
ctx.strokeStyle = "Purple";
circle(100,100,70);
*/


 //Анимация с CANVAS(c.208);
/*
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


//Рисование квадрата(c.209); 
var position = 0;
setInterval(function(){
ctx.clearRect(0,0,200,200);
ctx.fillRect(position,0,20,20);
position++;
if(position > 200){
position = 0;
}
},30);
*/

/*
//Изменение размера квадрата(c.210);
var size = 0;
setInterval(function(){
ctx.clearRect(0,0,200,200);
ctx.fillRect(0,0,size,size);
size++;
if(size > 200){
size = 0;
}
},30)
*/






/*
//Рисуем пчелу(c.212);
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var circle = function(x,y,radius,fillCircle){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI * 2,false);
    if(fillCircle){
    ctx.fill();
    }else{
    ctx.stroke();
}
    }
   
    var drawBee = function(x,y){
    ctx.lineWidth = 2;
    ctx.strokeStyle = "Black";
    ctx.fillStyle = "Gold";
 
circle(x,y,8,true);   
circle(x,y,8,false); 
circle(x - 5,y - 11,5,false); 
circle(x + 5,y - 11,5,false); 
circle(x - 2,y - 1,2,false); 
circle(x + 2,y - 1,2,false); 
    };
    //Изменение позиции пчелы(c.214);
    var update = function(coordinate){
        var offset = Math.random() * 4 - 2;
        coordinate += offset;
        if(coordinate > 200){
           coordinate = 200; 
        }if(coordinate < 0){
            coordinate = 0;
        }
        return coordinate;
    };
    //Анимируем пчелу(c.215);
    var x = 100;
    var y = 100;

    setInterval(function(){
        ctx.clearRect(0,0,200,200);
        drawBee(x,y);
        x = update(x);
        y = update(y);
        ctx.strokeRect(0,0,200,200);
    },30);
*/





/*
//Отскакивающий мяч(c.217);
//Конструктор Ball(c.217);

var Ball = function(){
    this.x = 100;
    this.y = 100;
    this.xSpeed = -2;
    this.ySpeed = 3;
};
//Рисуем мяч(c.218);
var circle = function(x,y,radius,fillCircle){
    ctx.beginPath();
    ctx.arc(x,y,radius,0,Math.PI * 2,false);
    if(fillCircle){
        ctx.fill();
    }else{
        ctx.stroke();
    }
};
Ball.prototype.draw = function(){
    circle(this.x,this.y,3,true);
};
//Перемещение мяча(c.218);
Ball.prototype.move = function(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
};
//Отскоки мяча(c.219);
Ball.prototype.checkCollision = function(){
    if(this.x < 0 || this.x > 200){
        this.xSpeed = -this.xSpeed;
    }if(this.y < 0 || this.y > 200){
        this.ySpeed = -this.ySpeed;
    }
};
//Анимация мяча(c.221);
var canvas = document.getElementById("canvas");
var ctx = canvas.getCanvas("2d");

var ball = new Ball;

setInterval(function(){
    ctx.clearRect(0,0,200,200);
    ball.draw();//рисует мяч и его текущую позицию
    ball.move();//обновляет значение мяча на основе значений xSpeed и ySpeed
    ball.checkCollision();//меняет направление мяча если он столкнулся с границей

    ctx.strokeRect(0,0,200,200);//видимые границы
},30);
*/





//Управление анимациями с клавиатуры(c.224);
//Обработчик события keydown(c.215);
 /*
    $("body").keydown(function(event){
    console.log(event.keyCode);
    });

    //У каждой клавиши свой код(Например для буквы "П" - 71; "Р" - 72;SHIFT - 16;ENTER - 13);
    */


/*
var keyNames = {
    32 : "spase",
    37 : "left",
    38 : "up",
    39 : "right",
    40 : "down",
    16 : "SHIFT",
    13 : "ENTER"
    };
    
    $("body").keydown(function(event){
    console.log(keyNames[event.keyCode]);
    //console.log(keyNames[32]);
    });
*/


 //Управление мячом с клавиатуры(c.227);
//Настройка холста;
var canvas = document.getElementById("canvas");//находим елемент canvas;
var ctx = canvas.getContext("2d");//метод кот получает контекст рисования;
var width = canvas.width;
var height = canvas.height;

//Функция circle - кот рисует мяч;
var circle = function(x,y,radius,fillCircle){
	ctx.beginPath();//метод определяет начало рисования нового пути
    ctx.arc(x,y,radius,0,Math.PI * 2,false);
    //используем метод arc для создания окружн.в точке(x,y);
    //радиус;
    //Начальный угол мы установили в ноль;
    //Math.PI * 2 - Полная окружность;
    //false - значит рисовать нужно по часовой стрелке;
    if(fillCircle){
	ctx.fill();//заполненная окружность;
	}else{
	ctx.stroke();//контур окружн;
	}
};

//Создаем конструктор Ball;
var Ball = function(){
	this.x = width / 2;//мяч появится в центре холста;
	this.y = height / 2;
	this.xSpeed = 5;// мяч после запуска будет двигаться в право;
	this.ySpeed = 0;
};

//Обновляем позицию мяча соответственно его скорости;
//перемещает мяч в новую позицию в зависимости от его текущей позиции;
Ball.prototype.move = function(){
	this.x += this.xSpeed;
    this.y += this.ySpeed;
    //данная конструкция проверяет нашел ли мяч границу холста;
    //если так и есть перенесет мяч на противоположную сторону;
	if(this.x < 0){
	this.x = width;
	}else if(this.x > width){
	this.x = 0;
	}else if(this.y < 0){
	this.y = height;
	}else if(this.y > height){
	this.y = 0;
	}
};

//Рисуем мяч в его текущей позиции;
//Вызывает функцию передавая ей координаты центра,радиус и true -  в качестве аргумента fillCircle;
Ball.prototype.draw = function(){
	circle(this.x,this.y,10,true);
};

//Задаем направление движения по строке с названием действия;
//метод получает инфу о нажатой клавише;
Ball.prototype.setDirection = function(direction){
	if(direction === "up"){
	this.xSpeed = 0;
	this.ySpeed = -5;
	}else if(direction === "down"){
	this.xSpeed = 0;
	this.ySpeed = 5;
	}else if(direction === "left"){
	this.xSpeed = -5;
	this.ySpeed = 0;
	}else if(direction === "right"){
	this.xSpeed = 5;
	this.ySpeed = 0;
	}else if(direction === "stop"){
	this.xSpeed = 0;
	this.ySpeed = 0;
	}
};

//Создаем обьект мяч;
var ball = new Ball();
//Обьект для перевода кодов клавиш в названия действий;
var keyActions = {
    32 : "stop",
    37 : "left",
    38 : "up",
    39 : "right",
    40 : "down"
    };

    //Обработчик события будет вызван при каждом нажатии клавиши;
    $("body").keydown(function(event){
	var direction = keyActions[event.keyCode];//поиск названия нажатой клавиши и присваиваем это значение переменной direction; 
    ball.setDirection(direction);//передаем строку с направлением;
    });
    
//Функция анимации вызывается раз в 30 мс;	
setInterval(function(){
	ctx.clearRect(0,0,width,height);
	ball.draw();
	ball.move();
	ctx.strokeRect(0,0,width,height);
},30);	




    

















