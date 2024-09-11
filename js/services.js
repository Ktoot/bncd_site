function initializeServicesImgAnimation() {
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

    // Выбираем все элементы с классом activityCard и наблюдаем за ними
    document.querySelectorAll('.servicesImg').forEach(card => {
        observer.observe(card);
    });
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeServicesImgAnimation);



function initializeServiceConAnimation() {
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

    // Выбираем все элементы с классом activityCard и наблюдаем за ними
    document.querySelectorAll('.serviceContainer').forEach(card => {
        observer.observe(card);
    });
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', initializeServiceConAnimation);