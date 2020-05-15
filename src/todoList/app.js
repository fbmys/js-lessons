const formElement = document.querySelector('#form');

const inputElement = document.querySelector('#task');

const ulElement = document.querySelector('#tasks');

var all = [];
var inProg = [];
var done = [];

var btnAll = document.getElementById('all');
var btnInProg = document.getElementById('inProg');
var btnDone = document.getElementById('done');

function onInputChange(event) {
  console.log(event.target.value);
}
var count = 0;
function onFormSubmit(event) {
  event.preventDefault();
  const value = inputElement.value.trim();
  if (!value) { return; }
  const liElement = addElement('li', value);
  ulElement.appendChild(liElement);
  inputElement.value = '';
  all.push('li' + count);
  inProg.push('li' + count);
  done.push(undefined);
  Cross(document.getElementById('li' + count), value, false, count)
  count++;
}

function addElement(elementName, elementText) {
  const newElement = document.createElement(elementName);
  newElement.innerHTML = elementText;
  newElement.id = 'li' + count;

  return newElement;
}

function Cross(elem, value, isCross, Count) {
  if (isCross == false) {
    elem.onclick = function () {
      this.innerHTML = '<s>' + value;
      done.splice(Count, 1, inProg[Count]);
      inProg.splice(Count, 1, undefined);
      console.log(inProg);
      console.log(done);
      console.log();
      return (Cross(elem, value, true, Count));
    }
  } else {
    elem.onclick = function () {
      this.innerHTML = value;
      inProg.splice(Count, 1, done[Count]);
      done.splice(Count, 1, undefined);
      console.log(inProg);
      console.log(done);
      console.log();
      console.log(inProg[2])
      return (Cross(elem, value, false, Count));
    }
  }
}
btnAll.onclick = function () {
  for (var i = 0; i < all.length; i++) {
    document.getElementById(all[i]).style.visibility = 'visible';
    document.getElementById(all[i]).style.position = 'static';
  }
  this.style.background = '#30d5c8';
  btnInProg.style.background = 'initial';
  btnDone.style.background = 'initial';
}

btnInProg.onclick = function () {
  for (var i = 0; i < done.length; i++) {
    if (done[i] != undefined) {
      document.getElementById(done[i]).style.visibility = 'hidden';
      document.getElementById(done[i]).style.position = 'absolute';
    }
    else {
      document.getElementById(inProg[i]).style.visibility = 'visible';
      document.getElementById(inProg[i]).style.position = 'static';
    }
  }
  this.style.background = '#30d5c8';
  btnAll.style.background = 'initial';
  btnDone.style.background = 'initial';
}

btnDone.onclick = function () {
  for (var i = 0; i < inProg.length; i++) {
    if (inProg[i] != undefined) {
      document.getElementById(inProg[i]).style.visibility = 'hidden';
      document.getElementById(inProg[i]).style.position = 'absolute';
    }
    else {
      document.getElementById(done[i]).style.visibility = 'visible';
      document.getElementById(done[i]).style.position = 'static';
    }
  }
  this.style.background = '#30d5c8';
  btnInProg.style.background = 'initial';
  btnAll.style.background = 'initial';
}


inputElement.addEventListener('input', onInputChange);


formElement.addEventListener('submit', onFormSubmit);

