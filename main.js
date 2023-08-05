const gridStack = document.querySelector('.grid-wrapper');
const btnShowStack = document.querySelector('.btn-togle');

const slider = document.querySelector('.slider');
const sliderItems = Array.from(slider.children);
// slider.style.width = '80%';
// slider.style.height = 'auto';

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');


sliderItems.forEach(function(slide, index) {
    

    if (index !== 0) {
        slide.classList.add('hidden');
    }

    slide.dataset.index = index;

    // дата атрибут active

    sliderItems[0].setAttribute('data-active', '');

    slide.addEventListener('click', function() {
        // скрываем текущий слайд
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');
       
        // рассчитываем индекс след слайда
        const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;

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
        nextSlide.setAttribute('data-active', '');

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

btnNext.onclick = function () {
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    

    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

    if (nextSlideIndex === 2) {
        slider.style.width = '40%';
        slider.style.height = 'auto';
    } else {
        slider.style.width = '80%';
        slider.style.height = 'auto';
    }

    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '')
}

btnPrev.onclick = function () {
    const currentSlide = slider.querySelector('[data-active]')
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    

    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    console.log(nextSlideIndex);

    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    console.log(nextSlide);

    if (nextSlideIndex === 2) {
        slider.style.width = '40%';
        slider.style.height = 'auto';
    } else {
        slider.style.width = '80%';
        slider.style.height = 'auto';
    }

    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '')
}