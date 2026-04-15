const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const items = document.querySelectorAll('.item');
const list = document.querySelector('.list');

let active = 0;
const totalItems = items.length;
let timer;

function update(direction) {
   const current = document.querySelector('.item.active');
   if (current) {
       current.classList.remove('active');
   }
   if (totalItems === 0) return;

   if (direction > 0) {
       active = active + 1;
       if (active === totalItems) {
           active = 0;
       }
   } else if (direction < 0) {
       active = active - 1;
       if (active < 0) {
           active = totalItems - 1;
       }
   }

   items[active].classList.add('active');

   
   const dots = document.querySelectorAll('.dot');
   dots.forEach((dot, index) => {
       if (index === active) {
           dot.classList.add('active');
       } else {
           dot.classList.remove('active');
       }
   });
}

prevButton.addEventListener('click', () => {
    update(-1);
});

nextButton.addEventListener('click', () => {
   update(+1);
});