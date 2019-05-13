var arr = 'CAT';
var mass = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789';

class flapDisplay {
	constructor(arr, mass) {
    this.arr = arr;
    this.mass = mass;
  }
  offset(i, off) {
    arr = this.arr.split('');
    mass = this.mass.split('');
    arr.forEach((val, index, array) => {
    	console.log('test', val, mass.indexOf(val), i);
    	arr[index] = mass.slice(mass.indexOf(val) + i - 2 + off, mass.indexOf(val) + i -1 + off).toString();
    });
    return arr;
  }
}


Мультиплекс КАРО ФИЛЬМ на Лиговском . обводный
КАРО ФИЛЬМ в ТРК Варшавский Экспресс . фрунз балт
ФОРМУЛА КИНО Галерея . восстание
Формула Кино Заневский Каскад . ладожская
КАРО ФИЛЬМ в ТРК Невский - 2 . дыбенко

КАРО ФИЛЬМ в ТРК Континент . Звездной
:
Формула Кино СитиМолл . пионерская