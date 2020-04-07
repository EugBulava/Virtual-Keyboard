let lenguage = '';

if (localStorage.getItem('lenguage') !== null) {
  lenguage = localStorage.getItem('lenguage');
} else {
  lenguage = 'ru';
}

const keyCodesFirstline = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal'];
const keyCodesSecondline = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash'];
const keyCodesThirdline = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote'];
const keyCodesFourthline = ['KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash'];
const firstlineKeyboardNotShift = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='];

let capslockOn = 0;
let pressedButtons = [];
let shiftIsPress = false;

// make elements for layout

const wrapper = document.createElement('div');
wrapper.className = 'wrapper';
wrapper.id = 'wrapper';

const divTextarea = document.createElement('div');
divTextarea.className = 'div_textarea';
divTextarea.id = 'div_textarea';

const textarea = document.createElement('textarea');
textarea.className = 'textarea';
textarea.placeholder = 'Virtual Keyboard';
textarea.id = 'textarea';

const virtualKeyboard = document.createElement('div');
virtualKeyboard.className = 'virtual_keyboard';
virtualKeyboard.id = 'virtual_keyboard';

const diode = document.createElement('div');
diode.className = 'diode';

const description = document.createElement('p');
description.className = 'description';
description.innerHTML = 'Keyboard made in Windows OS. Change lenguage = Left-Ctrl + Left-Alt';

// Lines keys

const divFirstlineKeyboard = document.createElement('div');
divFirstlineKeyboard.className = 'div_firstline_keyboard';
divFirstlineKeyboard.id = 'div_firstline_keyboard';

const divSecondelineKeyboard = document.createElement('div');
divSecondelineKeyboard.className = 'div_secondeline_keyboard';
divSecondelineKeyboard.id = 'div_secondeline_keyboard';

const divThirdlineKeyboard = document.createElement('div');
divThirdlineKeyboard.className = 'div_thirdline_keyboard';
divThirdlineKeyboard.id = 'div_thirdline_keyboard';

const divFourthlineKeyboard = document.createElement('div');
divFourthlineKeyboard.className = 'div_fourthline_keyboard';
divFourthlineKeyboard.id = 'div_fourthline_keyboard';

const divFifthlineKeyboard = document.createElement('div');
divFifthlineKeyboard.className = 'div_fifthline_keyboard';
divFifthlineKeyboard.id = 'div_fifthline_keyboard';

// Buttons without charCode

const Backspace = document.createElement('div');
Backspace.className = 'additional_button backspace';
Backspace.innerHTML = 'Backspace';

const Tab = document.createElement('div');
Tab.className = 'additional_button tab';
Tab.innerHTML = 'Tab';

const Delete = document.createElement('div');
Delete.className = 'additional_button delete';
Delete.innerHTML = 'Delete';

const CapsLock = document.createElement('div');
CapsLock.className = 'additional_button capslock';
CapsLock.innerHTML = 'Caps Lock';

const Enter = document.createElement('div');
Enter.className = 'additional_button enter';
Enter.innerHTML = 'ENTER';

const Shift = document.createElement('div');
Shift.className = 'additional_button shift';
Shift.innerHTML = 'Shift';

const RightShift = document.createElement('div');
RightShift.className = 'additional_button right_shift';
RightShift.innerHTML = 'Shift';

const Up = document.createElement('div');
Up.className = 'additional_button up';
Up.innerHTML = '↑';

const Down = document.createElement('div');
Down.className = 'additional_button down';
Down.innerHTML = '↓';

const Right = document.createElement('div');
Right.className = 'additional_button right';
Right.innerHTML = '→';

const Left = document.createElement('div');
Left.className = 'additional_button left';
Left.innerHTML = '←';

const Ctrl = document.createElement('div');
Ctrl.className = 'additional_button ctrl';
Ctrl.innerHTML = 'Ctrl';

const RightCtrl = document.createElement('div');
RightCtrl.className = 'additional_button r_ctrl';
RightCtrl.innerHTML = 'Ctrl';

const Win = document.createElement('div');
Win.className = 'additional_button win';
Win.innerHTML = 'Win';

const Alt = document.createElement('div');
Alt.className = 'additional_button alt';
Alt.innerHTML = 'Alt';

const RightAlt = document.createElement('div');
RightAlt.className = 'additional_button r_alt';
RightAlt.innerHTML = 'Alt';

const Space = document.createElement('div');
Space.className = 'additional_button space';
Space.innerHTML = 'SPACE';

// Make KeyBoard

document.body.prepend(wrapper);

document.getElementById('wrapper').append(virtualKeyboard);
document.getElementById('wrapper').prepend(divTextarea);
document.getElementById('div_textarea').prepend(textarea);

document.getElementById('virtual_keyboard').append(divFirstlineKeyboard);
document.getElementById('virtual_keyboard').append(divSecondelineKeyboard);
document.getElementById('virtual_keyboard').append(divThirdlineKeyboard);
document.getElementById('virtual_keyboard').append(divFourthlineKeyboard);
document.getElementById('virtual_keyboard').append(divFifthlineKeyboard);

// Make symbols on buttons of keyboard

function init() {
  if (lenguage === 'ru') {
    var firstlineKeyboard = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
    var secondelineKeyboard = [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92] ;
    var thirdlineKeyboard = [1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101];
    var fourthlineKeyboard = [1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];
  } else if (lenguage === 'en') {
    var firstlineKeyboard = [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
    var secondelineKeyboard = [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92];
    var thirdlineKeyboard = [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39];
    var fourthlineKeyboard = [122, 120, 99, 118, 98, 110, 109, 44, 46, 47];
  }
  let button = '';
  for (let i = 0; i <= firstlineKeyboard.length - 1; i += 1) {
    if (keyCodesFirstline[i] !== undefined) {
      button += `<div class = "button ${keyCodesFirstline[i]}">${String.fromCharCode(firstlineKeyboard[i])}</div>`;
    } else {
      button += `<div class = "button">${String.fromCharCode(firstlineKeyboard[i])}</div>`;
    }
  }
  document.querySelector('#div_firstline_keyboard').innerHTML = button;

  button = '';
  for (let i = 0; i <= secondelineKeyboard.length - 1; i += 1) {
    if (keyCodesSecondline[i] !== undefined) {
      button += `<div class = "button ${keyCodesSecondline[i]}">${String.fromCharCode(secondelineKeyboard[i])}</div>`;
    } else {
      button += `<div class = "button">${String.fromCharCode(secondelineKeyboard[i])}</div>`;
    }
  }
  document.querySelector('#div_secondeline_keyboard').innerHTML = button;

  button = '';
  for (let i = 0; i <= thirdlineKeyboard.length - 1; i += 1) {
    if (keyCodesThirdline[i] !== undefined) {
      button += `<div class = "button ${keyCodesThirdline[i]}">${String.fromCharCode(thirdlineKeyboard[i])}</div>`;
    } else {
      button += `<div class = "button">${String.fromCharCode(thirdlineKeyboard[i])}</div>`;
    }
  }
  document.querySelector('#div_thirdline_keyboard').innerHTML = button;

  button = '';
  for (let i = 0; i <= fourthlineKeyboard.length - 1; i += 1) {
    if (keyCodesFourthline[i] !== undefined) {
      button += `<div class = "button ${keyCodesFourthline[i]}">${String.fromCharCode(fourthlineKeyboard[i])}</div>`;
    } else {
      button += `<div class = "button">${String.fromCharCode(fourthlineKeyboard[i])}</div>`;
    }
  }
  document.querySelector('#div_fourthline_keyboard').innerHTML = button;

  // Make buttons without charCode

  document.getElementById('div_firstline_keyboard').append(Backspace);
  document.getElementById('div_secondeline_keyboard').append(Delete);
  document.getElementById('div_secondeline_keyboard').prepend(Tab);
  document.getElementById('div_thirdline_keyboard').append(Enter);
  document.getElementById('div_thirdline_keyboard').prepend(CapsLock);
  document.getElementById('div_fourthline_keyboard').append(Up);
  document.getElementById('div_fourthline_keyboard').append(RightShift);
  document.getElementById('div_fourthline_keyboard').prepend(Shift);
  document.getElementById('div_fifthline_keyboard').prepend(Alt);
  document.getElementById('div_fifthline_keyboard').prepend(Win);
  document.getElementById('div_fifthline_keyboard').prepend(Ctrl);
  document.getElementById('div_fifthline_keyboard').append(Space);
  document.getElementById('div_fifthline_keyboard').append(RightAlt);
  document.getElementById('div_fifthline_keyboard').append(RightCtrl);
  document.getElementById('div_fifthline_keyboard').append(Left);
  document.getElementById('div_fifthline_keyboard').append(Down);
  document.getElementById('div_fifthline_keyboard').append(Right);

  if (capslockOn === 1) {
    for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
      document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
    }
  }
}

init();

// Make indicator on button CAPSLOCK and description about switch lenguage

document.getElementsByClassName('capslock')[0].prepend(diode);
document.getElementById('wrapper').append(description);

// Make click animation for keyboard and functional

document.querySelector('.virtual_keyboard').addEventListener('mousedown', (event) => {
  const karetCurPos = document.getElementById('textarea').selectionStart;

  if (event.target.classList.contains('button') || event.target.classList.contains('additional_button')) {
    event.target.classList.add('button_active');
  }

  if (event.target.classList.contains('tab')) {
    event.preventDefault();
    document.getElementsByClassName('tab')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}&#9;${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.target.classList.contains('enter')) {
    event.preventDefault();
    document.getElementsByClassName('enter')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}\n${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`; 
  } else if (event.target.classList.contains('backspace')) {
    event.preventDefault();
    document.getElementsByClassName('backspace')[0].classList.add('button_active');
    if (karetCurPos>0){
        document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart - 1) + document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, (document.getElementById('textarea').innerHTML.length));
    }
  } else if (event.target.classList.contains('delete')) {
    event.preventDefault();
    document.getElementsByClassName('delete')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart) + document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart + 1, (document.getElementById('textarea').innerHTML.length));
  } else if (event.target.classList.contains('capslock')) {
    event.preventDefault();
    document.getElementsByClassName('capslock')[0].classList.add('button_active');
    if (capslockOn === 0) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
      }
      document.getElementsByClassName('diode')[0].classList.add('diode_active');
      capslockOn = 1;
    } else if (capslockOn === 1) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
      }
      document.getElementsByClassName('diode')[0].classList.remove('diode_active');
      capslockOn = 0;
    }
  } else if (event.target.classList.contains('shift')) {
    event.preventDefault();
    document.getElementsByClassName('shift')[0].classList.add('button_active');
    if (capslockOn === 0) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
      }
      if (lenguage === 'ru') {
        document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '/';
        document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = ',';
      } else if (lenguage === 'en') {
        document.getElementsByClassName('Backquote')[0].innerHTML = '~';
        document.getElementsByClassName('BracketLeft')[0].innerHTML = '{';
        document.getElementsByClassName('BracketRight')[0].innerHTML = '}';
        document.getElementsByClassName('Backslash')[0].innerHTML = '|';
        document.getElementsByClassName('Semicolon')[0].innerHTML = ':';
        document.getElementsByClassName('Quote')[0].innerHTML = '"';
        document.getElementsByClassName('Comma')[0].innerHTML = '<';
        document.getElementsByClassName('Period')[0].innerHTML = '>';
        document.getElementsByClassName('Slash')[0].innerHTML = '?';
      }
    } else if (capslockOn === 1) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
      }
    }
    if (lenguage === 'ru') {
      var firstline_keyboard_shift = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
      document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '/';
      document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = ',';
    } else if (lenguage === 'en') {
      var firstline_keyboard_shift = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
      document.getElementsByClassName('Backquote')[0].innerHTML = '~';
      document.getElementsByClassName('BracketLeft')[0].innerHTML = '{';
      document.getElementsByClassName('BracketRight')[0].innerHTML = '}';
      document.getElementsByClassName('Backslash')[0].innerHTML = '|';
      document.getElementsByClassName('Semicolon')[0].innerHTML = ':';
      document.getElementsByClassName('Quote')[0].innerHTML = '"';
      document.getElementsByClassName('Comma')[0].innerHTML = '<';
      document.getElementsByClassName('Period')[0].innerHTML = '>';
      document.getElementsByClassName('Slash')[0].innerHTML = '?';
    }
    for (let i = 1; i <= document.getElementById('div_firstline_keyboard').querySelectorAll('.button').length - 1; i += 1) {
      document.getElementById('div_firstline_keyboard').querySelectorAll('.button')[i].innerHTML = firstline_keyboard_shift[i - 1];
    }
  } else if (event.target.classList.contains('right_shift')) {
    event.preventDefault();
    document.getElementsByClassName('right_shift')[0].classList.add('button_active');
    if (capslockOn === 0) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
      }
      if (lenguage === 'ru') {
        document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '/';
        document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = ',';
      } else if (lenguage === 'en') {
        document.getElementsByClassName('Backquote')[0].innerHTML = '~';
        document.getElementsByClassName('BracketLeft')[0].innerHTML = '{';
        document.getElementsByClassName('BracketRight')[0].innerHTML = '}';
        document.getElementsByClassName('Backslash')[0].innerHTML = '|';
        document.getElementsByClassName('Semicolon')[0].innerHTML = ':';
        document.getElementsByClassName('Quote')[0].innerHTML = '"';
        document.getElementsByClassName('Comma')[0].innerHTML = '<';
        document.getElementsByClassName('Period')[0].innerHTML = '>';
        document.getElementsByClassName('Slash')[0].innerHTML = '?';
      }
    } else if (capslockOn === 1) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
      }
    }
    if (lenguage === 'ru') {
      var firstline_keyboard_shift = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
      document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '/';
      document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = ',';
    } else if (lenguage === 'en') {
      var firstline_keyboard_shift = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
      document.getElementsByClassName('Backquote')[0].innerHTML = '~';
      document.getElementsByClassName('BracketLeft')[0].innerHTML = '{';
      document.getElementsByClassName('BracketRight')[0].innerHTML = '}';
      document.getElementsByClassName('Backslash')[0].innerHTML = '|';
      document.getElementsByClassName('Semicolon')[0].innerHTML = ':';
      document.getElementsByClassName('Quote')[0].innerHTML = '"';
      document.getElementsByClassName('Comma')[0].innerHTML = '<';
      document.getElementsByClassName('Period')[0].innerHTML = '>';
      document.getElementsByClassName('Slash')[0].innerHTML = '?';
    }
    for (let i = 1; i <= document.getElementById('div_firstline_keyboard').querySelectorAll('.button').length - 1; i += 1) {
      document.getElementById('div_firstline_keyboard').querySelectorAll('.button')[i].innerHTML = firstline_keyboard_shift[i - 1];
    }
  } else if (event.target.classList.contains('ctrl')) {
    event.preventDefault();
    document.getElementsByClassName('ctrl')[0].classList.add('button_active');
  } else if (event.target.classList.contains('win')) {
    event.preventDefault();
    document.getElementsByClassName('win')[0].classList.add('button_active');
  } else if (event.target.classList.contains('alt')) {
    event.preventDefault();
    document.getElementsByClassName('alt')[0].classList.add('button_active');
  } else if (event.target.classList.contains('r_alt')) {
    event.preventDefault();
    document.getElementsByClassName('r_alt')[0].classList.add('button_active');
  } else if (event.target.classList.contains('space')) {
    event.preventDefault();
    document.getElementsByClassName('space')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)} ${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.target.classList.contains('r_ctrl')) {
    event.preventDefault();
    document.getElementsByClassName('r_ctrl')[0].classList.add('button_active');
  } else if (event.target.classList.contains('up')) {
    event.preventDefault();
    document.getElementsByClassName('up')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}↑${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.target.classList.contains('left')) {
    event.preventDefault();
    document.getElementsByClassName('left')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}←${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.target.classList.contains('right')) {
    event.preventDefault();
    document.getElementsByClassName('right')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}→${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.target.classList.contains('down')) {
    event.preventDefault();
    document.getElementsByClassName('down')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}↓${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.target.classList.contains('button')) {
    event.preventDefault();
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart) + event.target.innerText + document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length);
  }

  if (event.target.classList.contains('backspace') && karetCurPos>0) {
    document.getElementById('textarea').focus();
    document.getElementById('textarea').selectionStart = karetCurPos - 1;
  } else if (event.target.classList.contains('delete')) {
    document.getElementById('textarea').focus();
    document.getElementById('textarea').selectionStart = karetCurPos;
  } else if (event.target.classList.contains('button') || event.target.classList.contains('tab') || event.target.classList.contains('space') || event.target.classList.contains('up') || 
  event.target.classList.contains('down') || event.target.classList.contains('left') || event.target.classList.contains('right') || event.target.classList.contains('enter')) {
    document.getElementById('textarea').focus();
    document.getElementById('textarea').selectionStart = karetCurPos + 1;
  }
});

document.addEventListener('mouseup', (event) => {
  event.target.classList.remove('button_active');
  if (event.target.classList.contains('shift') || event.target.classList.contains('right_shift')) {
    event.preventDefault();
    document.getElementsByClassName('shift')[0].classList.remove('button_active');
    if (capslockOn === 0) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
      }
      if (lenguage === 'ru') {
        document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = String.fromCharCode(92);
        document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '.';
      } else if (lenguage === 'en') {
        document.getElementsByClassName('Backquote')[0].innerHTML = '`';
        document.getElementsByClassName('BracketLeft')[0].innerHTML = '[';
        document.getElementsByClassName('BracketRight')[0].innerHTML = ']';
        document.getElementsByClassName('Backslash')[0].innerHTML = String.fromCharCode(92);
        document.getElementsByClassName('Semicolon')[0].innerHTML = ';';
        document.getElementsByClassName('Quote')[0].innerHTML = String.fromCharCode(39);
        document.getElementsByClassName('Comma')[0].innerHTML = ',';
        document.getElementsByClassName('Period')[0].innerHTML = '.';
        document.getElementsByClassName('Slash')[0].innerHTML = '/';
      }
    } else if (capslockOn === 1) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
      }
    }
    if (lenguage === 'ru') {
      document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = String.fromCharCode(92);
      document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '.';
    } else if (lenguage === 'en') {
      document.getElementsByClassName('Backquote')[0].innerHTML = '`';
      document.getElementsByClassName('BracketLeft')[0].innerHTML = '[';
      document.getElementsByClassName('BracketRight')[0].innerHTML = ']';
      document.getElementsByClassName('Backslash')[0].innerHTML = String.fromCharCode(92);
      document.getElementsByClassName('Semicolon')[0].innerHTML = ';';
      document.getElementsByClassName('Quote')[0].innerHTML = String.fromCharCode(39);
      document.getElementsByClassName('Comma')[0].innerHTML = ',';
      document.getElementsByClassName('Period')[0].innerHTML = '.';
      document.getElementsByClassName('Slash')[0].innerHTML = '/';
    }
    for (let i = 1; i <= document.getElementById('div_firstline_keyboard').querySelectorAll('.button').length - 1; i += 1) {
      document.getElementById('div_firstline_keyboard').querySelectorAll('.button')[i].innerHTML = firstlineKeyboardNotShift[i - 1];
    }
  }
});

// Make keydown animation for keyboard and functional

document.addEventListener('keydown', (event) => {
  const karetCurPos = document.getElementById('textarea').selectionStart;

  if (event.code === 'Tab') {
    event.preventDefault();
    document.getElementsByClassName('tab')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}&#9;${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.code === 'CapsLock') {
    event.preventDefault();
    document.getElementsByClassName('capslock')[0].classList.add('button_active');
    if (capslockOn === 0) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
      }
      document.getElementsByClassName('diode')[0].classList.add('diode_active');
      capslockOn = 1;
    } else if (capslockOn === 1) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
      }
      document.getElementsByClassName('diode')[0].classList.remove('diode_active');
      capslockOn = 0;
    }
  } else if (event.code === 'ShiftLeft' && shiftIsPress === false) {
    event.preventDefault();
    document.getElementsByClassName('shift')[0].classList.add('button_active');
    if (capslockOn === 0) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
      }
      if (lenguage === 'ru') {
        document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '/';
        document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = ',';
      } else if (lenguage === 'en') {
        document.getElementsByClassName('Backquote')[0].innerHTML = '~';
        document.getElementsByClassName('BracketLeft')[0].innerHTML = '{';
        document.getElementsByClassName('BracketRight')[0].innerHTML = '}';
        document.getElementsByClassName('Backslash')[0].innerHTML = '|';
        document.getElementsByClassName('Semicolon')[0].innerHTML = ':';
        document.getElementsByClassName('Quote')[0].innerHTML = '"';
        document.getElementsByClassName('Comma')[0].innerHTML = '<';
        document.getElementsByClassName('Period')[0].innerHTML = '>';
        document.getElementsByClassName('Slash')[0].innerHTML = '?';
      }
    } else if (capslockOn === 1) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
      }
    }
    if (lenguage === 'ru') {
      var firstlineKeyboardShift = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
      document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '/';
      document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = ',';
    } else if (lenguage === 'en') {
      var firstlineKeyboardShift = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
      document.getElementsByClassName('Backquote')[0].innerHTML = '~';
      document.getElementsByClassName('BracketLeft')[0].innerHTML = '{';
      document.getElementsByClassName('BracketRight')[0].innerHTML = '}';
      document.getElementsByClassName('Backslash')[0].innerHTML = '|';
      document.getElementsByClassName('Semicolon')[0].innerHTML = ':';
      document.getElementsByClassName('Quote')[0].innerHTML = '"';
      document.getElementsByClassName('Comma')[0].innerHTML = '<';
      document.getElementsByClassName('Period')[0].innerHTML = '>';
      document.getElementsByClassName('Slash')[0].innerHTML = '?';
    }
    for (let i = 1; i <= document.getElementById('div_firstline_keyboard').querySelectorAll('.button').length - 1; i += 1) {
      document.getElementById('div_firstline_keyboard').querySelectorAll('.button')[i].innerHTML = firstlineKeyboardShift[i - 1];
    }
    shiftIsPress = true;
  } else if (event.code === 'Backspace') {
    event.preventDefault();
    document.getElementsByClassName('backspace')[0].classList.add('button_active');
    if (karetCurPos>0){
        document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart - 1) + document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, (document.getElementById('textarea').innerHTML.length));
    }
  } else if (event.code === 'Delete') {
    event.preventDefault();
    document.getElementsByClassName('delete')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart) + document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart + 1, (document.getElementById('textarea').innerHTML.length));
  } else if (event.code === 'Enter') {
    event.preventDefault();
    document.getElementsByClassName('enter')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}\n${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.code === 'ShiftRight' && shiftIsPress === false) {
    event.preventDefault();
    document.getElementsByClassName('right_shift')[0].classList.add('button_active');
    if (capslockOn === 0) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
      }
      if (lenguage === 'ru') {
        document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '/';
        document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = ',';
      } else if (lenguage === 'en') {
        document.getElementsByClassName('Backquote')[0].innerHTML = '~';
        document.getElementsByClassName('BracketLeft')[0].innerHTML = '{';
        document.getElementsByClassName('BracketRight')[0].innerHTML = '}';
        document.getElementsByClassName('Backslash')[0].innerHTML = '|';
        document.getElementsByClassName('Semicolon')[0].innerHTML = ':';
        document.getElementsByClassName('Quote')[0].innerHTML = '"';
        document.getElementsByClassName('Comma')[0].innerHTML = '<';
        document.getElementsByClassName('Period')[0].innerHTML = '>';
        document.getElementsByClassName('Slash')[0].innerHTML = '?';
      }
    } else if (capslockOn === 1) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
      }
    }
    if (lenguage === 'ru') {
      var firstlineKeyboardShift = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+'];
      document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '/';
      document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = ',';
    } else if (lenguage === 'en') {
      var firstlineKeyboardShift = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
      document.getElementsByClassName('Backquote')[0].innerHTML = '~';
      document.getElementsByClassName('BracketLeft')[0].innerHTML = '{';
      document.getElementsByClassName('BracketRight')[0].innerHTML = '}';
      document.getElementsByClassName('Backslash')[0].innerHTML = '|';
      document.getElementsByClassName('Semicolon')[0].innerHTML = ':';
      document.getElementsByClassName('Quote')[0].innerHTML = '"';
      document.getElementsByClassName('Comma')[0].innerHTML = '<';
      document.getElementsByClassName('Period')[0].innerHTML = '>';
      document.getElementsByClassName('Slash')[0].innerHTML = '?';
    }
    for (let i = 1; i <= document.getElementById('div_firstline_keyboard').querySelectorAll('.button').length - 1; i += 1) {
      document.getElementById('div_firstline_keyboard').querySelectorAll('.button')[i].innerHTML = firstlineKeyboardShift[i - 1];
    }
    shiftIsPress = true;
  } else if (event.code === 'ControlLeft') {
    event.preventDefault();
    document.getElementsByClassName('ctrl')[0].classList.add('button_active');
    pressedButtons.push('ControlLeft');
  } else if (event.code === 'MetaLeft') {
    event.preventDefault();
    document.getElementsByClassName('win')[0].classList.add('button_active');
  } else if (event.code === 'AltLeft') {
    event.preventDefault();
    document.getElementsByClassName('alt')[0].classList.add('button_active');
    pressedButtons.push('AltLeft');
  } else if (event.code === 'AltRight') {
    event.preventDefault();
    document.getElementsByClassName('r_alt')[0].classList.add('button_active');
  } else if (event.code === 'Space') {
    event.preventDefault();
    document.getElementsByClassName('space')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)} ${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.code === 'ControlRight') {
    event.preventDefault();
    document.getElementsByClassName('r_ctrl')[0].classList.add('button_active');
  } else if (event.code === 'ArrowUp') {
    event.preventDefault();
    document.getElementsByClassName('up')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}↑${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.code === 'ArrowLeft') {
    event.preventDefault();
    document.getElementsByClassName('left')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}←${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.code === 'ArrowRight') {
    event.preventDefault();
    document.getElementsByClassName('right')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}→${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else if (event.code === 'ArrowDown') {
    event.preventDefault();
    document.getElementsByClassName('down')[0].classList.add('button_active');
    document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML = `${document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart)}↓${document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length)}`;
  } else {
    event.preventDefault();
    for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
      if (document.getElementsByClassName('button')[i].classList.contains(event.code)) {
        document.getElementsByClassName('button')[i].classList.add('button_active');
        document.getElementById('textarea').innerHTML = document.getElementById('textarea').innerHTML.slice(0, document.getElementById('textarea').selectionStart) + document.getElementsByClassName('button')[i].innerText + document.getElementById('textarea').innerHTML.slice(document.getElementById('textarea').selectionStart, document.getElementById('textarea').innerHTML.length);
      }
    }
  }
  if (event.code === 'Backspace' && karetCurPos>0) {
    document.getElementById('textarea').focus();
    document.getElementById('textarea').selectionStart = karetCurPos - 1;
  } else if (event.code === 'Delete') {
    document.getElementById('textarea').focus();
    document.getElementById('textarea').selectionStart = karetCurPos;
  } else if (event.code !== 'Delete' && event.code !== 'Backspace' && event.code !== 'CapsLock' && event.code !== 'ShiftLeft' && event.code !== 'ShiftRight' && event.code !== 'ControlLeft' && event.code !== 'ControlRight' && event.code !== 'AltRight' && event.code !== 'AltLeft') {
    document.getElementById('textarea').focus();
    document.getElementById('textarea').selectionStart = karetCurPos + 1;
  }

  if (pressedButtons.length === 2) {
    if (lenguage === 'en') {
      lenguage = 'ru';
      localStorage.setItem('lenguage', 'ru');
      init();
    } else if (lenguage === 'ru') {
      lenguage = 'en';
      localStorage.setItem('lenguage', 'en');
      init();
    }
  }
});

document.addEventListener('keyup', (event) => {
  if (event.code === 'Tab') {
    event.preventDefault();
    document.getElementsByClassName('tab')[0].classList.remove('button_active');
  } else if (event.code === 'CapsLock') {
    event.preventDefault();
    document.getElementsByClassName('capslock')[0].classList.remove('button_active');
  } else if (event.code === 'ShiftLeft') {
    event.preventDefault();
    document.getElementsByClassName('shift')[0].classList.remove('button_active');
    if (capslockOn === 0) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
      }
      if (lenguage === 'ru') {
        document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = String.fromCharCode(92);
        document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '.';
      } else if (lenguage === 'en') {
        document.getElementsByClassName('Backquote')[0].innerHTML = '`';
        document.getElementsByClassName('BracketLeft')[0].innerHTML = '[';
        document.getElementsByClassName('BracketRight')[0].innerHTML = ']';
        document.getElementsByClassName('Backslash')[0].innerHTML = String.fromCharCode(92);
        document.getElementsByClassName('Semicolon')[0].innerHTML = ';';
        document.getElementsByClassName('Quote')[0].innerHTML = String.fromCharCode(39);
        document.getElementsByClassName('Comma')[0].innerHTML = ',';
        document.getElementsByClassName('Period')[0].innerHTML = '.';
        document.getElementsByClassName('Slash')[0].innerHTML = '/';
      }
    } else if (capslockOn === 1) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
      }
    }
    if (lenguage === 'ru') {
      document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = String.fromCharCode(92);
      document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '.';
    } else if (lenguage === 'en') {
      document.getElementsByClassName('Backquote')[0].innerHTML = '`';
      document.getElementsByClassName('BracketLeft')[0].innerHTML = '[';
      document.getElementsByClassName('BracketRight')[0].innerHTML = ']';
      document.getElementsByClassName('Backslash')[0].innerHTML = String.fromCharCode(92);
      document.getElementsByClassName('Semicolon')[0].innerHTML = ';';
      document.getElementsByClassName('Quote')[0].innerHTML = String.fromCharCode(39);
      document.getElementsByClassName('Comma')[0].innerHTML = ',';
      document.getElementsByClassName('Period')[0].innerHTML = '.';
      document.getElementsByClassName('Slash')[0].innerHTML = '/';
    }
    for (let i = 1; i <= document.getElementById('div_firstline_keyboard').querySelectorAll('.button').length - 1; i += 1) {
      document.getElementById('div_firstline_keyboard').querySelectorAll('.button')[i].innerHTML = firstlineKeyboardNotShift[i - 1];
    }
    shiftIsPress = false;
  } else if (event.code === 'Backspace') {
    event.preventDefault();
    document.getElementsByClassName('backspace')[0].classList.remove('button_active');
  } else if (event.code === 'Delete') {
    event.preventDefault();
    document.getElementsByClassName('delete')[0].classList.remove('button_active');
  } else if (event.code === 'Enter') {
    event.preventDefault();
    document.getElementsByClassName('enter')[0].classList.remove('button_active');
  } else if (event.code === 'ShiftRight') {
    event.preventDefault();
    document.getElementsByClassName('right_shift')[0].classList.remove('button_active');
    if (capslockOn === 0) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
      }
      if (lenguage === 'ru') {
        document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = String.fromCharCode(92);
        document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '.';
      } else if (lenguage === 'en') {
        document.getElementsByClassName('Backquote')[0].innerHTML = '`';
        document.getElementsByClassName('BracketLeft')[0].innerHTML = '[';
        document.getElementsByClassName('BracketRight')[0].innerHTML = ']';
        document.getElementsByClassName('Backslash')[0].innerHTML = String.fromCharCode(92);
        document.getElementsByClassName('Semicolon')[0].innerHTML = ';';
        document.getElementsByClassName('Quote')[0].innerHTML = String.fromCharCode(39);
        document.getElementsByClassName('Comma')[0].innerHTML = ',';
        document.getElementsByClassName('Period')[0].innerHTML = '.';
        document.getElementsByClassName('Slash')[0].innerHTML = '/';
      }
    } else if (capslockOn === 1) {
      for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
        document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
      }
    }
    if (lenguage === 'ru') {
      document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length - 1].innerHTML = String.fromCharCode(92);
      document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length - 1].innerHTML = '.';
    } else if (lenguage === 'en') {
      document.getElementsByClassName('Backquote')[0].innerHTML = '`';
      document.getElementsByClassName('BracketLeft')[0].innerHTML = '[';
      document.getElementsByClassName('BracketRight')[0].innerHTML = ']';
      document.getElementsByClassName('Backslash')[0].innerHTML = String.fromCharCode(92);
      document.getElementsByClassName('Semicolon')[0].innerHTML = ';';
      document.getElementsByClassName('Quote')[0].innerHTML = String.fromCharCode(39);
      document.getElementsByClassName('Comma')[0].innerHTML = ',';
      document.getElementsByClassName('Period')[0].innerHTML = '.';
      document.getElementsByClassName('Slash')[0].innerHTML = '/';
    }
    for (let i = 1; i <= document.getElementById('div_firstline_keyboard').querySelectorAll('.button').length - 1; i += 1) {
      document.getElementById('div_firstline_keyboard').querySelectorAll('.button')[i].innerHTML = firstlineKeyboardNotShift[i - 1];
    }
    shiftIsPress = false;
  } else if (event.code === 'ControlLeft') {
    event.preventDefault();
    document.getElementsByClassName('ctrl')[0].classList.remove('button_active');
    pressedButtons = [];
  } else if (event.code === 'MetaLeft') {
    event.preventDefault();
    document.getElementsByClassName('win')[0].classList.remove('button_active');
  } else if (event.code === 'AltLeft') {
    event.preventDefault();
    document.getElementsByClassName('alt')[0].classList.remove('button_active');
    pressedButtons = [];
  } else if (event.code === 'AltRight') {
    event.preventDefault();
    document.getElementsByClassName('r_alt')[0].classList.remove('button_active');
  } else if (event.code === 'Space') {
    event.preventDefault();
    document.getElementsByClassName('space')[0].classList.remove('button_active');
  } else if (event.code === 'ControlRight') {
    event.preventDefault();
    document.getElementsByClassName('r_ctrl')[0].classList.remove('button_active');
  } else if (event.code === 'ArrowUp') {
    event.preventDefault();
    document.getElementsByClassName('up')[0].classList.remove('button_active');
  } else if (event.code === 'ArrowLeft') {
    event.preventDefault();
    document.getElementsByClassName('left')[0].classList.remove('button_active');
  } else if (event.code === 'ArrowRight') {
    event.preventDefault();
    document.getElementsByClassName('right')[0].classList.remove('button_active');
  } else if (event.code === 'ArrowDown') {
    event.preventDefault();
    document.getElementsByClassName('down')[0].classList.remove('button_active');
  } else {
    for (let i = 0; i <= document.getElementsByClassName('button').length - 1; i += 1) {
      if (document.getElementsByClassName('button')[i].classList.contains(event.code)) {
        document.getElementsByClassName('button')[i].classList.remove('button_active');
      }
    }
  }
});
