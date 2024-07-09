let nums = document.querySelectorAll(" .stats .number");
let statssection = document.querySelector(".stats");
let started = false ;

window.onscroll = function () {
    if(window.scrollY >= statssection.offsetTop) {
        if(!started){
            nums.forEach((num) => startCount(num));
        }
        started = true ;
    }
};

// nums.forEach((num) => startCount(num));

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;  
        if(el.textContent == goal){
            clearInterval(count)
        }
    } , 2000 / goal);
}