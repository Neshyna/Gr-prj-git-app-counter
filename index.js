let counter = 0; // cоздаём и инициализируем глобальную переменную счётчика

// Создаём константы для привязки к необходимым объектам на странице
const COUNTER_PAGE = document.getElementById("counter");
const DECREASE_BUTTON = document.getElementById("decrease");
const INCREASE_BUTTON = document.getElementById("increase");
const STOP_BUTTON = document.getElementById("stop");

// Выводим на страницу начальное значение счётчика
COUNTER_PAGE.textContent = counter;

// Функция для кнпоки уменьшения числа счётчика
const decrease = () => {
    COUNTER_PAGE.textContent = --counter;
}

// Функция для кнпоки увеличения числа счётчика
const increase = () => {
    COUNTER_PAGE.textContent = ++counter;
}
// Функция для кнпоки сброса числа счётчика
const stop = () => {
    counter = 0;
    COUNTER_PAGE.textContent = counter;
}

// Подключаем к кнопкеам прослушивание событий с привязкой к функциям
DECREASE_BUTTON.addEventListener("click", decrease);
INCREASE_BUTTON.addEventListener("click", increase);
STOP_BUTTON.addEventListener("click", stop);