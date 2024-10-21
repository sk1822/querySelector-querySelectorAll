// Write the code as shown in the video below:

// Write answer to the questions asked below:
let mainheading=document.querySelector('#main-heading')
mainheading.style.textAlign='right'
// mainheading.style.backgroundColor='green'
let fruits=document.querySelector('.fruits');
fruits.style.backgroundColor='grey';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px'
fruits.style.listStyleType='none'

const basketHeading=document.querySelector('h2');
basketHeading.style.marginLeft='30px';
basketHeading.style.color='brown'

// const fruit=document.querySelector('.fruit:last-child');//returns HTML collections which does not accept arrays methods
// const fruit=document.querySelector('.fruit:nth-child(2)');
const fruit=document.querySelectorAll('.fruit')//returns node list which accepts arrays methods
// fruit.style.backgroundColor='white'
for(let i=0;i<fruit.length;i++){
  fruit[i].style.background='white';
  fruit[i].style.padding='10px';
fruit[i].style.margin='10px';
fruit[i].style.width='50%';
fruit[i].style.borderRadius='5px'
if(i%2!==0){
  fruit[i].style.backgroundColor='brown'
  fruit[i].style.color='white'
}

}
