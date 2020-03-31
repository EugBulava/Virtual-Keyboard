const firstline_keyboard = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
const secondeline_keyboard = [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92];
const thirdline_keyboard = [1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101];
const fourthline_keyboard = [1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];
const fifthline_keyboard = [32];


var wrapper = document.createElement('div');
wrapper.className = "wrapper";
wrapper.id = "wrapper";

var WRAPPER = document.getElementById('wrapper');

var div_textarea = document.createElement('div');
div_textarea.className = "div_textarea";
div_textarea.id = "div_textarea";

var textarea = document.createElement('textarea');
textarea.className = "textarea";
textarea.placeholder = "Virtual Keyboard"

var virtual_keyboard = document.createElement('div');
virtual_keyboard.className = "virtual_keyboard";
virtual_keyboard.id = "virtual_keyboard"

// Lines keys

var div_firstline_keyboard = document.createElement('div');
div_firstline_keyboard.className = "div_firstline_keyboard";
div_firstline_keyboard.id = "div_firstline_keyboard";

var div_secondeline_keyboard = document.createElement('div');
div_secondeline_keyboard.className = "div_secondeline_keyboard";
div_secondeline_keyboard.id = "div_secondeline_keyboard";

var div_thirdline_keyboard = document.createElement('div');
div_thirdline_keyboard.className = "div_thirdline_keyboard";
div_thirdline_keyboard.id = "div_thirdline_keyboard";

var div_fourthline_keyboard = document.createElement('div');
div_fourthline_keyboard.className = "div_fourthline_keyboard";
div_fourthline_keyboard.id = "div_fourthline_keyboard";

var div_fifthline_keyboard = document.createElement('div');
div_fifthline_keyboard.className = "div_fifthline_keyboard";
div_fifthline_keyboard.id = "div_fifthline_keyboard";

// Buttons without charCode

var Backspace = document.createElement('div');
Backspace.className = "button backspace";
Backspace.innerHTML = "Backspace";

var Tab = document.createElement('div');
Tab.className = "button tab";
Tab.innerHTML = "Tab";

var Delete = document.createElement('div');
Delete.className = "button delete";
Delete.innerHTML = "Delete";

var CapsLock = document.createElement('div');
CapsLock.className = "button capslock";
CapsLock.innerHTML = "Caps Lock";

var Enter = document.createElement('div');
Enter.className = "button enter";
Enter.innerHTML = "ENTER";

var Shift = document.createElement('div');
Shift.className = "button shift";
Shift.innerHTML = "Shift";

var R_Shift = document.createElement('div');
R_Shift.className = "button right_shift";
R_Shift.innerHTML = "Shift";

var Up = document.createElement('div');
Up.className = "button up";
Up.innerHTML = "↑";

var Down = document.createElement('div');
Down.className = "button down";
Down.innerHTML = "↓";

var Right = document.createElement('div');
Right.className = "button right";
Right.innerHTML = "→";

var Left = document.createElement('div');
Left.className = "button left";
Left.innerHTML = "←";

var Ctrl = document.createElement('div');
Ctrl.className = "button ctrl";
Ctrl.innerHTML = "Ctrl";

var R_Ctrl = document.createElement('div');
R_Ctrl.className = "button r_ctrl";
R_Ctrl.innerHTML = "Ctrl";

var Win = document.createElement('div');
Win.className = "button win";
Win.innerHTML = "Win";

var Alt = document.createElement('div');
Alt.className = "button alt";
Alt.innerHTML = "Alt";

var R_Alt = document.createElement('div');
R_Alt.className = "button r_alt";
R_Alt.innerHTML = "Alt";

var Space = document.createElement('div');
Space.className = "button space";
Space.innerHTML = "SPACE";

// Make KeyBoard

document.body.prepend(wrapper);

document.getElementById('wrapper').append(virtual_keyboard);
document.getElementById('wrapper').prepend(div_textarea);
document.getElementById('div_textarea').prepend(textarea);

document.getElementById('virtual_keyboard').append(div_firstline_keyboard);
document.getElementById('virtual_keyboard').append(div_secondeline_keyboard);
document.getElementById('virtual_keyboard').append(div_thirdline_keyboard);
document.getElementById('virtual_keyboard').append(div_fourthline_keyboard);
document.getElementById('virtual_keyboard').append(div_fifthline_keyboard);

/*document.onkeypress = function (event){
    fourthline_keyboard.push(event.keyCode);
    console.log(fourthline_keyboard);
}*/

function init(){
    let button = '';
    for(let i = 0; i<= firstline_keyboard.length-1; i++){
        button += '<div class = "button">' + String.fromCharCode(firstline_keyboard[i]) + '</div>';
    }
    document.querySelector('#div_firstline_keyboard').innerHTML = button;
    
    button = '';
    for(let i = 0; i<= secondeline_keyboard.length-1; i++){
        button += '<div class = "button">' + String.fromCharCode(secondeline_keyboard[i]) + '</div>';
    }
    document.querySelector('#div_secondeline_keyboard').innerHTML = button;

    button = '';
    for(let i = 0; i<= thirdline_keyboard.length-1; i++){
        button += '<div class = "button">' + String.fromCharCode(thirdline_keyboard[i]) + '</div>';
    }
    document.querySelector('#div_thirdline_keyboard').innerHTML = button;

    button = '';
    for(let i = 0; i<= fourthline_keyboard.length-1; i++){
        button += '<div class = "button">' + String.fromCharCode(fourthline_keyboard[i]) + '</div>';
    }
    document.querySelector('#div_fourthline_keyboard').innerHTML = button;
}

init();

// Make buttons without charCode

document.getElementById('div_firstline_keyboard').append(Backspace);
document.getElementById('div_secondeline_keyboard').append(Delete);
document.getElementById('div_secondeline_keyboard').prepend(Tab);
document.getElementById('div_thirdline_keyboard').append(Enter);
document.getElementById('div_thirdline_keyboard').prepend(CapsLock);
document.getElementById('div_fourthline_keyboard').append(Up);
document.getElementById('div_fourthline_keyboard').append(R_Shift);
document.getElementById('div_fourthline_keyboard').prepend(Shift);
document.getElementById('div_fifthline_keyboard').prepend(Alt);
document.getElementById('div_fifthline_keyboard').prepend(Win);
document.getElementById('div_fifthline_keyboard').prepend(Ctrl);
document.getElementById('div_fifthline_keyboard').append(Space);
document.getElementById('div_fifthline_keyboard').append(R_Alt);
document.getElementById('div_fifthline_keyboard').append(R_Ctrl);
document.getElementById('div_fifthline_keyboard').append(Left);
document.getElementById('div_fifthline_keyboard').append(Down);
document.getElementById('div_fifthline_keyboard').append(Right);

// Make click animation for keyboard

document.querySelectorAll('#div_firstline_keyboard div, #div_secondeline_keyboard div, #div_thirdline_keyboard div, #div_fourthline_keyboard div, #div_fifthline_keyboard div').forEach((div) =>{
    div.addEventListener('mousedown', (event) => {
        event.target.classList.add('button_active');
    })
});

document.querySelectorAll('#div_firstline_keyboard div, #div_secondeline_keyboard div, #div_thirdline_keyboard div, #div_fourthline_keyboard div, #div_fifthline_keyboard div').forEach((div) =>{
    div.addEventListener('mouseup', (event) => {
        event.target.classList.remove('button_active');
    })
});












