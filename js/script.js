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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count : numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat : false
};
for(let i = 0; i < 2; i++){
        
       const  a = [prompt('Один из последних просмотренных фильмов?', '')],
            b = prompt('На склолько оцените его', '');
       if(a != null && b != null && a != '' && b != '' && a.length < 5 ){
        personalMovieDB[a] = b;
        console.log(a.length);
       }
       else{
        i--;
        console.log('Feald');
       }
}

console.log(personalMovieDB);


