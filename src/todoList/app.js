const formElement = document
.querySelector('#form');


const inputElement = document
.querySelector('#task');

const ulElement = document
.querySelector('#tasks');

function onInputChange(event){

}

function onFormSubmit(event){
    event.preventDefault();
    const value=inputElement.value.trim();
    if (!value) {return };
    const liElement=createElement('li', value);
    ulElement.appendChild(liElement);
    inputElement.value= '';
}

function createElement(elementName, elementText)
{
    const newElement= document
    .createElement(elementName);
    newElement.innerText=elementText
    return newElement;
}

function onInputChange(event){
    console.log('значение: ', event.target.value);
}

inputElement.addEventListener('input', onInputChange);

inputElement
.addEventListener('input', onInputChange)

formElement
.addEventListener('submit', onFormSubmit);

const filterButtons = document.querySelectorAll('button[cell]');

const rootElement = document.querySelector('#root');

filterButtons.forEach(function(button){
    button.addEventListener('click', function(event)
    {
         const a = event.target.getAttribute('cell');
         rootElement.setAttribute('cell', a)}
         )
});