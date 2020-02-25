module.exports = function createDreamTeam(members) {
    // проверка массива, обработка
    if (Array.isArray(members) && (!members.length == 0)) {
      let arr = [];
      for (element of members) {
         if (typeof element == "string") {
          arr.push(element.trim().substr(0, 1).toLocaleUpperCase());
        }
      }
      // сортируем массив по возрастающей
      function compareNumbers(a, b) {
        return a - b;
      }
      arr.sort();
      // свертываем буквы в слово
      let word = arr.join('');
      return word;
    }
    return false;
  };
