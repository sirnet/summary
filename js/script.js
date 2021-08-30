'use strickt';

window.addEventListener('DOMContentLoaded', () => {

    let workItem = document.querySelectorAll('.work-item');
    const workInterval = setInterval(startMetod, 1000);
    const menuList = document.querySelector('.menu');
    const leftBlock = document.querySelector('.left-block');
    
    let i = 0;

    function startMetod() {
        workItem[i].classList.add('work-item--active');
        i+=1;
        if(i>=6){
            clearInterval(workInterval);
        }
    }

    menuList.addEventListener('click', () => {
        if(menuList.classList.contains('menu--active')){
            menuList.classList.remove('menu--active');
        }else {
            menuList.classList.add('menu--active');
        }
        if(leftBlock.classList.contains('left-block--active')){
            leftBlock.classList.remove('left-block--active');
        }else {
            leftBlock.classList.add('left-block--active');
        }
    });

    
    
});