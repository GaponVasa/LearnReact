export const password_generator = ( len, arrCharacters  ) => {
  
  let length;// = (len&&len===" ")?(len):(8);
  let string = "abcdefghijklmnopqrstuvwxyz"; //to upper 
  let numeric = '0123456789';
  let punctuation = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  let password = "";
  let character = "";
  let entity1, entity2, entity3, hold;
  console.log(len);
  console.log(len === "");
  console.log(typeof len);
  if(len === "" || len !== undefined){
    length = 8;
  }else{
    length = len;
  };
  while( password.length < length - 1 ) {
    entity1 = Math.ceil(string.length * Math.random()*Math.random());
    entity2 = Math.ceil(numeric.length * Math.random()*Math.random());
    entity3 = Math.ceil(punctuation.length * Math.random()*Math.random());
    hold = string.charAt( entity1 );
    //hold = (password.length%2==0)?(hold.toUpperCase()):(hold);
    character += hold;
    character += numeric.charAt( entity2 );
    character += punctuation.charAt( entity3 );
    password = character;
  }
  console.log(password);
  password=password.split('').sort(function(){return 0.5-Math.random()}).join('');
  console.log(password);
  console.log(length);
  password = password.substr(0, length); 
  console.log(password);
  return password; 
}
