/*  Задание на урок :
1) Создат переменную numberOfFilms и в нее поместить ответ от пользователя  на вопрос;
'Сколько филмов вы уже посмотрели ?'

2) Создат обект personalMovieDB и в него поместить такие свойства :
 - count - cюда передается  ответ на первый вопрос
 - movies - в это свойства поместить пустой обект
 - actors - тоже поместить пустой обект
 - genres - суда поместить пустой массив
 - privat - в это свойства поместит boolean значения false
3) Задайте ползователю по два раза вопросы :
 - 'Один из последных посмотренных фильмов '
 - 'На сколко чените его ?'
 Ответы стоит переместит в отделные переменные
 Записат ответы  в обект movies в формате :
  movies: {
     'logan': '8.1'

  } 
Проверит , что бы все работало   без ошибок в консоли */

'use strict';
const numberOfFilms = +prompt('Сколько филмов вы уже посмотрели ?','');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {} ,
  actors: {},
  genres: [],
  privat: false

};
const a = prompt('Один из последных посмотренных фильмов ',''),
      b = prompt('На сколко чените его ?',''),
      c = prompt('Один из последных посмотренных фильмов ',''),
      d = prompt('На сколко чените его ?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);


