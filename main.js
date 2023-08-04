const gridStack = document.querySelector('.grid-wrapper');
const btnShowStack = document.querySelector('.btn-togle');

const slider = document.querySelector('.slider');
const sliderItems = Array.from(slider.children);
// slider.style.width = '80%';
// slider.style.height = 'auto';



sliderItems.forEach(function(slide, index) {
    

    if (index !== 0) {
        slide.classList.add('hidden');
    }

    slide.dataset.index = index;

    slide.addEventListener('click', function() {
        // скрываем текущий слайд
        slide.classList.add('hidden');
        console.log(slide);
       
        // рассчитываем индекс след слайда
        let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

        // if (index + 1 === sliderItems.length) {
        //     nextSlideIndex = 0;
        // } else {
        //     nextSlideIndex = index + 1;
        // }

        if (nextSlideIndex === 2) {
            slider.style.width = '40%';
            slider.style.height = 'auto';
        } else {
            slider.style.width = '80%';
            slider.style.height = 'auto';
        }
        
        // находим след слайда
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        //отображаем след слайда
        nextSlide.classList.remove('hidden');

    })
})

btnShowStack.addEventListener('click', function() {
    if (btnShowStack.textContent == 'Скрыть') {
        gridStack.style.display = 'none';
        btnShowStack.textContent = 'Показать';
    } else {
        gridStack.style.display = 'grid';
        btnShowStack.textContent = 'Скрыть';
    }
      
});