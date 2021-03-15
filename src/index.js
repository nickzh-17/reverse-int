module.exports = function reverse (n) {
  
    // Преобразования N в строку, затем поэлементно в массив 
    let nString = n.toString().split('');


    //Проверка есть ли минус в первой ячейке. Если есть - удаляем его
    if(nString[0] == '-'){
        nString.splice(0,1);
    }

    // Переворот массива, обращение в строку без разделителей, обращение строки в число 
    return parseFloat(nString.reverse().join(''));

}
