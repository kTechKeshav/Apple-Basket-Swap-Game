
const leftbtn = document.getElementById('btn1');
const rightbtn = document.getElementById('btn2');
const basket1 = document.querySelector('#display1 span');
const basket2 = document.querySelector('#display2 span');

const total = basket1.innerHTML = 10;
basket2.innerHTML = 0;

let basket2apples = 0;
let basket1apples = total - basket2apples;

leftbtn.addEventListener('click', ()=>{
      if(basket2apples > 0){
            basket2apples--;
            basket1apples++;
            basket1.innerHTML = basket1apples;
            basket2.innerHTML = basket2apples;
      }
      else{
            alert('No apples in basket 2');
      }
})

rightbtn.addEventListener('click', ()=>{
      if(basket1apples > 0){
            basket2apples++;
            basket1apples--;
            basket1.innerHTML = basket1apples;
            basket2.innerHTML = basket2apples;
      }else{
            alert('No apples in basket 1');
      }
})
