export const password_generator = ( passwordLength, arrCharacters  ) => {
  
  let length, arrayIndexesForDelete;
  let password = "";
  let allSymbolsString = [];
  const defaultPasswordLength = 8;
  const upperCaseArray = [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
  ];
  const lowerCaseArray = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
  ];
  const nuberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //Перевіряєм чи є в arrCharacters послідовності "a-z", "A-Z" та "0-9" 
  const existLowerCase = arrCharacters.indexOf("a-z");
  const existUpperCase = arrCharacters.indexOf("A-Z");
  const existNumber = arrCharacters.indexOf("0-9");
  //Ф-ція для довільної генерації цифри яка лежить в межах від 0 до inputData.length
  const randomData = (inputData)=>{return Math.floor(inputData.length * Math.random())};
  //Ф-ція для довільної генерації сисволу з данного масиву arr
  const generatorSymbol = (arr)=>{
    let currentString = randomData(arr);
    let currentArr = arr[currentString];
    let curentDigit = randomData(currentArr);
    return currentArr[curentDigit];
  };
  //Видаляємо послідовності "a-z", "A-Z" та "0-9" з масиву arrCharacters
  arrayIndexesForDelete = [existLowerCase, existUpperCase, existNumber].sort((a,b)=>b-a);
  arrayIndexesForDelete.forEach(el=>{if(el !== -1)arrCharacters.splice(el, 1)});
  //Збираємо массив allSymbolsString з підмассивами елементів які ввійшли до масиву arrCharacters
  if(existUpperCase !== -1)allSymbolsString.push(upperCaseArray);
  if(existLowerCase !== -1)allSymbolsString.push(lowerCaseArray);
  if(existNumber !== -1)allSymbolsString.push(nuberArray);
  allSymbolsString.push(arrCharacters);
  //Довжина паролю за замовчуванням
  if(passwordLength === "" || passwordLength === undefined){
    length = defaultPasswordLength;
  }else{
    length = passwordLength;
  };
  //Генеруємо попередню послідовність символів паролю
  while( password.length < length) {
    password += generatorSymbol(allSymbolsString);
  };
  //Перемішуємо символи і отримуємо пароль
  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
  return password; 
}
