const cards = document.querySelector('.card');
const btncomprar = document.querySelector('.btncomprar');
const foto = document.querySelector('.pe');

function criaBtn(){
  
 const expandir = getComputedStyle(document.body);
 const tamanho = expandir.width;
foto.style.width= 90;
 console.log(tamanho);

 const btn = document.createElement('button');
 btn.innerText= 'comprar';
 btncomprar.appendChild(btn);

}

