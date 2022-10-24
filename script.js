// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat : false
// };

// personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?', '')] = prompt('На склолько оцените его', '');
// personalMovieDB.movies[prompt('Один из последних просмотренных фильмов?', '')] = prompt('На склолько оцените его', '');

// console.log(personalMovieDB);


// console.log( NaN || 2 || undefined ); 
 
// console.log( NaN && 2 && undefined ); 
 
// console.log( 1 && 2 && 3 ); 
 
// console.log( !1 && 2 || !3 ); 
 
// console.log( 25 || null && !3 ); 
 
// console.log( NaN || null || !3 || undefined || 5); 
 
// console.log( NaN || null && !3 && undefined || 5); 
 
// console.log( 5 === 5 && 3 > 1 || 5); 



// 2 NaN 3 false 25 5 5 5 

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }

// Done

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }

// Done

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// } else{
//     console.log('False!');
// }

// false
// let count ='';
// for(let i = 1; i< 7; i++){
//     for(let j = 1; j <= i; j++)
//     {
//         count += '*';
        
//     }
//     console.log(count);
//     count = '';
// }


// for(let i = 2; i <= 10; i++)
// {
//     console.log(i);
//     i++;
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
// let i = 2;
// while(i < 16) {
//     if (i % 2 === 0) {
//         i ++;
//         continue;
//     } else {
//         console.log(i);
//         i++;
//     }
// }

// let arr = [];
// for(let i = 5, j = 0; i < 11; i ++, j++ ){
//     arr[j] = i;
// }
// console.log(arr);

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for( let i = 0; i < arr.length; i++){
//     result[i] = arr[i];
// }
// console.log(result);

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for( let i = 0; i < data.length; i++){
//     if(typeof data[i] === "string"){
//         data[i] = data[i] + ' - done';
//     }
//     else{
//         data[i] =data[i]* 2;
//     }   
// }
// console.log(data);
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for( let i = data.length - 1, j = 0; i >= 0, j <= 4; i--){
//     result[j] = data[i] ;
//     j++;
// }
// console.log(result);
// return result;


// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat : false
// };
// for(let i = 0; i < 2; i++){
        
//        const  a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На склолько оцените его', '');
//         if (a != null && b != null && a != '' && b != '' && a.length < 5){
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// console.log(personalMovieDB);




// function sayHello(name){
//     let hello = 'Hello';
//     hello += ' ' + name;
//     return hello;
// }
// console.log( sayHello('Evgeny'));

// function returnNeighboringNumber(num){
//     let newNum = [];
//     let j = -1;
//     for(let i = 0; i < 3; i++){
//         newNum[i] = num + j;
//         j++;
//     }
//     return newNum;
// }
// console.log(returnNeighboringNumber(5));

// function getMathResult(num, mult){
//     let newNum = '';
//     if(typeof mult === 'string' || mult <= 0){
//         newNum = num;
//         return newNum;
//     }
//     for(let i = 1; i <= mult; i++){
//         newNum += num * i;
//         if(i != mult){
//             newNum +='---';
//         }   
//     } 
//     return newNum;
// }
// console.log(getMathResult(3, 10));

// console.log(result)

// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     while(numberOfFilms ==''||numberOfFilms== null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
    
// }
// start();

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies:{},
//     actors:{},
//     genres:[],
//     privat : false
// };

// function rememberMyFilms(){
//     for(let i = 0; i < 2; i++){
        
//         const  a = prompt('Один из последних просмотренных фильмов?', ''),
//              b = prompt('На склолько оцените его', '');
//          if (a != null && b != null && a != '' && b != '' && a.length < 50){
//          personalMovieDB.movies[a] = b;
//         } else {
//             console.log('error');
//             i--;
//         }
//     }      
// }
// rememberMyFilms();



// function detectPersonalLevel(){
//     if(personalMovieDB.count < 10){
//         console.log("Просмотрено довольно мало фильмов");
//     }else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//         console.log("Вы классический зритель");
//     }else if(personalMovieDB.coutn >= 30){
//         console.log("Вы киноман");
//     }else{
//         console.log("Произошла ошибка");
//     }
// }

// detectPersonalLevel();

// function showMyDB(){
//     if(personalMovieDB.privat == false){
//         console.log(personalMovieDB);
//     }
// }

// showMyDB();

// function writeYourGenres(){
//     for( let i = 1; i <= 3; i++){
//         personalMovieDB.genres[i] = prompt('Ваш любимый жанр под номером' + i);
//         while(personalMovieDB.genres[i] == null || personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] > 15 || typeof(personalMovieDB.genres[i])!== "string"){
//             personalMovieDB.genres[i -1] = prompt(`Ваш любимый жанр под номером ${i}` );
//         }
//     }
//     console.log(personalMovieDB.genres);
// }
// writeYourGenres();

// // console.log(personalMovieDB);

function calculateVolumeAndArea(a){
    if(a > 0 || !isNaN(a) || typeof(a!="float")){
        let area = (6*a)*a;
        let Volume = a*a*a;
        console.log( `Объем куба: ${Volume}, площадь всей поверхности: ${area}`);
    }else{
        console.log( "При вычислении произошла ошибка");
    }

}
calculateVolumeAndArea(15.5);


function getCoupeNumber(num) {
    if(num >300 || (num == 0 || num > 36)){
        console.log("Таких мест в вагоне не существует");
    }else if(num < 0 || typeof(num ==="float")){
        console.log("Ошибка. Проверьте правильность введенного номера места");
    }else{
        if(num >=1 && num <=4){
            console.log("Ваш вагон 1 ");
        }else if(num >=5 && num<=8){
            console.log("Ваш вагон 2 ");
        }else if(num >=9 && num<=12){
            console.log("Ваш вагон 3 ");
        }else if(num >=13 && num<=16){
            console.log("Ваш вагон 4 ");
        }else if(num >=17 && num<=19){
            console.log("Ваш вагон 5 ");
        }else if(num >=20 && num<=24){
            console.log("Ваш вагон 6 ");
        }else if(num >=25 && num<=28){
            console.log("Ваш вагон 7 ");
        }else if(num >=29 && num<=32){
            console.log("Ваш вагон 8 ");
        }else if(num >=33 && num<=36){
            console.log("Ваш вагон 9 ");
        }
    }
}

getCoupeNumber('Hello');