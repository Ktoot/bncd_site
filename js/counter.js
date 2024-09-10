//Параллакс
window.addEventListener('scroll', function () {
    const parallax = document.getElementById('mainSlider');
    const scrollY = window.scrollY;
    parallax.style.backgroundPositionY = scrollY * 0.5 + 'px'; // Скорость движения фона
});


//Анимация текста
document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.sliderText');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {threshold: 0.2});

    observer.observe(text);
});


document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.sliderTitle');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {threshold: 0.2});

    observer.observe(text);
});

document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.activityTitle');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {threshold: 0.2});

    observer.observe(text);

});

function initializeActivityCardAnimation() {
    // Функция для обработки видимости элемента
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Если элемент видим, добавляем класс для анимации
                entry.target.classList.add('show');
            } else {
                // Если элемент не видим, удаляем класс для сброса анимации
                entry.target.classList.remove('show');
            }
        });
    }

    // Создаем новый IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5 // Доля видимости для запуска анимации
    });

    // Выбираем все элементы с классом activityCard и наблюдаем за ними
    document.querySelectorAll('.activityCard').forEach(card => {
        observer.observe(card);
    });
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeActivityCardAnimation);



function initializeFadeonText() {
    // Функция для обработки видимости элемента
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Если элемент видим, добавляем класс для анимации
                entry.target.classList.add('visible');
            } else {
                // Если элемент не видим, удаляем класс для сброса анимации
                entry.target.classList.remove('visible');
            }
        });
    }

    // Создаем новый IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5 // Доля видимости для запуска анимации
    });

    // Выбираем все элементы с классом fade-in-text и наблюдаем за ними
    document.querySelectorAll('.mainAboutContainer').forEach(text => {
        observer.observe(text);
    });
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeFadeonText);



function initializeFadeInText() {
    // Функция для обработки видимости элемента
    function handleInterection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Если элемент видим, добавляем класс для анимации
                entry.target.classList.add('visible');
            } else {
                // Если элемент не видим, удаляем класс для сброса анимации
                entry.target.classList.remove('visible');
            }
        });
    }

    // Создаем новый IntersectionObserver
    const observer = new IntersectionObserver(handleInterection, {
        threshold: 0.3 // Доля видимости для запуска анимации
    });

    // Выбираем все элементы с классом fade-in-text и наблюдаем за ними
    document.querySelectorAll('.MnewsCotainer').forEach(text => {
        observer.observe(text);
    });
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeFadeInText);





document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.mainAboutText');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {threshold: 0.2});

    observer.observe(text);
});



document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.statCounter');

    // Функция для анимации отсчета
    function animateCounter(element, target) {
        let start = 0;
        const increment = Math.ceil(target / 100); // Частота обновления, 100 шагов
        const duration = 2000; // Продолжительность анимации в миллисекундах
        const stepTime = Math.abs(Math.floor(duration / (target / increment)));

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.innerText = target;
                clearInterval(timer);
            } else {
                element.innerText = start;
            }
        }, stepTime);
    }

    // Intersection Observer для отслеживания видимости
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'), 10);
                if (!counter.classList.contains('animated')) {
                    animateCounter(counter, target);
                    counter.classList.add('animated');
                }
                observer.unobserve(counter); // Остановить наблюдение после начала анимации
            }
        });
    }, {threshold: 0.5}); // Порог видимости 50%

    counters.forEach(counter => {
        observer.observe(counter);
    });
});





function initializeFadeOnText() {
    // Функция для обработки видимости элемента
    function handleIntersection(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Если элемент видим, добавляем класс для анимации
                entry.target.classList.add('visible');
            } else {
                // Если элемент не видим, удаляем класс для сброса анимации
                entry.target.classList.remove('visible');
            }
        });
    }

    // Создаем новый IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.3 // Доля видимости для запуска анимации
    });

    // Выбираем все элементы с классом fade-in-text и наблюдаем за ними
    document.querySelectorAll('.MnewsCotainer').forEach(text => {
        observer.observe(text);
    });
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeFadeOnText);





document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('.MconContainer');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {threshold: 0.2});

    observer.observe(text);
});

