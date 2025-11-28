/* --------------------------------------------------------------------------------------------- */
// Приклади з конспекту
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Події
/* ============================================================================================= */
//
/* --------------------------------------------------------------------------------------------- */
//
/* --------------------------------------------------------------------------------------------- */
console.log(`Події`);

const addListenerBtn = document.querySelector('.js-add');
const removeListenerBtn = document.querySelector('.js-remove');
const btn = document.querySelector('.target-btn');

const handleClick = () => {
  console.log('click event listener callback');
};

addListenerBtn.addEventListener('click', () => {
  btn.addEventListener('click', handleClick);
  console.log('click event listener was added to btn');
});

removeListenerBtn.addEventListener('click', () => {
  btn.removeEventListener('click', handleClick);
  console.log('click event listener was removed from btn');
});

console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Об'єкт події
/* ============================================================================================= */
//
/* --------------------------------------------------------------------------------------------- */
//
/* --------------------------------------------------------------------------------------------- */
console.log(`Об'єкт події`);

const viewEventBtn = document.querySelector('.view-event-btn');
console.log(`viewEventBtn`, viewEventBtn);

viewEventBtn.addEventListener('click', btnHandleClickEvent);

function btnHandleClickEvent(event) {
  console.log('event : ', event);
  console.log('event type : ', event.type);
  console.log('currentTarget : ', event.currentTarget);
  console.log(`event.target :`, event.target);
}

console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Події клавіатури
/* ============================================================================================= */
// Властивості key і code
/* --------------------------------------------------------------------------------------------- */
//
/* --------------------------------------------------------------------------------------------- */
console.log(`Події клавіатури`);

const clearLogBtn = document.querySelector('.js-clear');
const logList = document.querySelector('.log-list');
let keypressCounter = 1;

console.log(clearLogBtn);

document.addEventListener('keydown', logMessage);
document.addEventListener('keyup', logMessage);
clearLogBtn.addEventListener('click', reset);

function logMessage({ type, key, code }) {
  const markup = `<div class="log-item">
    <span class="chip">${keypressCounter}</span>
    <ul>
      <li><b>Event</b>: ${type}</li>
      <li><b>Key</b>: ${key}</li>
      <li><b>Code</b>: ${code}</li>
    </ul>
  </div>`;

  logList.insertAdjacentHTML('afterbegin', markup);

  if (type === 'keyup') {
    incrementKeypressCounter();
  }
}

function reset() {
  keypressCounter = 1;
  logList.innerHTML = '';
}

function incrementKeypressCounter() {
  keypressCounter += 1;
}
console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Події елементів форм
/* ============================================================================================= */
// Подія submit
/* --------------------------------------------------------------------------------------------- */
//
/* --------------------------------------------------------------------------------------------- */
console.log(`Події елементів форм.`);
console.log(`Подія submit`);

const registerForm = document.querySelector('.form');

registerForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;

  if (login === '' || password === '') {
    return console.log('Please fill in all the fields!');
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Подія change
/* ============================================================================================= */
//
/* --------------------------------------------------------------------------------------------- */
//
/* --------------------------------------------------------------------------------------------- */
console.log(`Подія change`);

const select = document.querySelector('.pizza-select');
const textOutput = document.querySelector('.text-output');
const valueOutput = document.querySelector('.value-output');

select.addEventListener('change', setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}
console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Подія input
/* ============================================================================================= */
//
/* --------------------------------------------------------------------------------------------- */
//
/* --------------------------------------------------------------------------------------------- */
console.log(`Подія input`);

const textInputMain = document.querySelector('.text-input-main');
const output = document.querySelector('.output');

textInputMain.addEventListener('input', event => {
  output.textContent = event.currentTarget.value;
});

console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
// Подія focus і blur
/* ============================================================================================= */
//
/* --------------------------------------------------------------------------------------------- */
//
/* --------------------------------------------------------------------------------------------- */
console.log(`Подія focus і blur`);

const textInput = document.querySelector(".text-input");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInput.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInput.blur();
});

textInput.addEventListener("focus", () => {
  textInput.value = "This input has focus";
});

textInput.addEventListener("blur", () => {
  textInput.value = "";
});

console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
//
/* ============================================================================================= */
//
/* --------------------------------------------------------------------------------------------- */
//
/* --------------------------------------------------------------------------------------------- */
console.log(``);

console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */

/* ============================================================================================= */
//
/* ============================================================================================= */
//
/* --------------------------------------------------------------------------------------------- */
//
/* --------------------------------------------------------------------------------------------- */
console.log(``);

console.log('-'.repeat(40));
/* --------------------------------------------------------------------------------------------- */
