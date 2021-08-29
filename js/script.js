'use strickt';

window.addEventListener('DOMContentLoaded', () => {

    let workItem = document.querySelectorAll('.work-item');
    let i = 0;
    const workInterval = setInterval(startMetod, 2000);
   
    function startMetod() {
        workItem[i].classList.add('work-item--active');
        i+=1;
        if(i>=6){
            clearInterval(workInterval);
        }
    }
    
});