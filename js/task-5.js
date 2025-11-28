// Завдання 5. 

/* ============================================================================================= */
// Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль 
// по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
/* --------------------------------------------------------------------------------------------- */
// Для генерування випадкового кольору використовуй функцію getRandomHexColor().
/* --------------------------------------------------------------------------------------------- */

// Функція для генерування випадкового кольору 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Кнопка зміну кольору
const btnChangeColor = document.querySelector('.change-color');

// Текстовий елемент для виведення значення поточного кольору
const textColor = document.querySelector('.color');

// Слухач подій на кнопку зміни кольору
btnChangeColor.addEventListener('click', changeColorBody);

// Функція зміни кольору
function changeColorBody(event) {
  // Генеруємо новий колір
  const newColor = getRandomHexColor();
  console.log(`newColor`,newColor);
  // Встановлюемо новий колір фону для body
  document.body.style.backgroundColor = newColor;
  // Виводимо позначення нового кольору в span
  textColor.textContent = newColor;
}
