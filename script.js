const btn = document.getElementById('btn');
const msg = document.getElementById('msg');
const text = document.getElementById('text');
let play = false;

let words =['right','remember','love','like','facebook','raman','table','goat','monkey','done','great','rule','python','angular'];
// let new_word;

const fun_words = () =>{
   let i =  Math.floor(Math.random() * words.length);
   let rand_word = words[i];
   return rand_word;
}
const scramble = (a) =>{
    let arr_word= a.split("");
    for(let x = arr_word.length-1; x>=0; x--){
        let temp = arr_word[x];
        let j = Math.floor(Math.random() * (x+1));
        arr_word[x] = arr_word[j];
        arr_word[j] = temp;
    }
    return arr_word ;
}
const start = () =>{  
    if(!play){
    play= true;
    text.classList.remove('d-none');
    btn.innerText = 'GUESS';
    new_word = fun_words();
    exist_word = scramble(new_word).join('');
    msg.innerHTML =`SCRAMBLE WORD IS :  ${exist_word} `;
    }
    else{
      type_text = text.value.trim();
      if(type_text === new_word){
         play = false;
         msg.innerText = `Awesome It's correct. It is " ${new_word} ". `;
         btn.innerText = 'START AGAIN';
         text.value = ' ';
         text.classList.toggle('d-none');
      }
      else{
        msg.innerText =`Sorry. It's not correct. It is " ${new_word} ".`;
        text.value = ' ';
      }
    }
    
}

btn.addEventListener('click',start);
