document.querySelector('.input__search').oninput = function(){
    let val = this.value.trim().toLowerCase();
    let elasticItems = document.querySelectorAll('.container__title');
    if (val != '' ){
        elasticItems.forEach(elem => {
            if (elem.innerText.toLowerCase().search(val) == -1){
                elem.parentNode.classList.add('hide');
            }
            else {
                elem.parentNode.classList.remove('hide');
                
            }
        });
    } else { 
         elasticItems.forEach(elem => {
        elem.parentNode.classList.remove('hide'); });   
    } 
}

document.querySelector('.page__input').oninput = function(){
    let val = this.value.trim().toLowerCase();
    let elasticItems = document.querySelectorAll('.container__title');
    if (val != '' ){
        elasticItems.forEach(elem => {
            if (elem.innerText.toLowerCase().search(val) == -1){
                elem.parentNode.classList.add('hide');
            }
            else {
                elem.parentNode.classList.remove('hide');
                
            }
        });
    } else { 
         elasticItems.forEach(elem => {
        elem.parentNode.classList.remove('hide'); });   
    } 
}

const mainPageClick = document.querySelector('.menu__link__search');
const page = document.querySelector('.page__search');
console.log(page);
  mainPageClick.onclick = () => {
    if(page.style.top == '15px'){
        mainPageClick.className = 'page__button__active';
        page.style.top = '80px';
    } else { 
        page.style.top = '15px';
        mainPageClick.className = 'menu__link__search';
    }
  }


//////////////////////////////////////////////////////////////////////////


const menuBurg = document.querySelector('.menu__burger');
const headerMenu = document.querySelector('.header__menu');

menuBurg.onclick = () =>{
    if(headerMenu.style.left == "-100%"){
        menuBurg.style.margin  = '0 0 0 40%'
        headerMenu.style.left = "0";
    }else {
        headerMenu.style.left = "-100%";
        menuBurg.style.margin  = '0px 0px 0px 20px'
    }
}




