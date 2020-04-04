const firstline_keyboard = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61];
const secondeline_keyboard = [1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92];
const thirdline_keyboard = [1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101];
const fourthline_keyboard = [1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46];
const fifthline_keyboard = [32];
const all_keyboard = [1105, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 1081, 1094, 1091, 1082, 1077, 1085, 1075, 1096, 1097, 1079, 1093, 1098, 92, 1092, 1099, 1074, 1072, 1087, 1088, 1086, 1083, 1076, 1078, 1101, 1103, 1095, 1089, 1084, 1080, 1090, 1100, 1073, 1102, 46, 32];
const key_codes_firstline = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal"];
const key_codes_secondline = ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"];
const key_codes_thirdline = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote"];
const key_codes_fourthline = ["KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash"];
const firstline_keyboard_shift = ['!','"','№',';','%',':','?','*','(',')','_','+'];
const firstline_keyboard_not_shift = ['1', '2', '3','4','5','6','7','8','9','0','-','='];

var wrapper = document.createElement('div');
wrapper.className = "wrapper";
wrapper.id = "wrapper";

var WRAPPER = document.getElementById('wrapper');

var div_textarea = document.createElement('div');
div_textarea.className = "div_textarea";
div_textarea.id = "div_textarea";

var textarea = document.createElement('textarea');
textarea.className = "textarea";
textarea.placeholder = "Virtual Keyboard";
textarea.id = "textarea";

var virtual_keyboard = document.createElement('div');
virtual_keyboard.className = "virtual_keyboard";
virtual_keyboard.id = "virtual_keyboard";

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
Backspace.className = "additional_button backspace";
Backspace.innerHTML = "Backspace";

var Tab = document.createElement('div');
Tab.className = "additional_button tab";
Tab.innerHTML = "Tab";

var Delete = document.createElement('div');
Delete.className = "additional_button delete";
Delete.innerHTML = "Delete";

var CapsLock = document.createElement('div');
CapsLock.className = "additional_button capslock";
CapsLock.innerHTML = "Caps Lock";

var Enter = document.createElement('div');
Enter.className = "additional_button enter";
Enter.innerHTML = "ENTER";

var Shift = document.createElement('div');
Shift.className = "additional_button shift";
Shift.innerHTML = "Shift";

var R_Shift = document.createElement('div');
R_Shift.className = "additional_button right_shift";
R_Shift.innerHTML = "Shift";

var Up = document.createElement('div');
Up.className = "additional_button up";
Up.innerHTML = "↑";

var Down = document.createElement('div');
Down.className = "additional_button down";
Down.innerHTML = "↓";

var Right = document.createElement('div');
Right.className = "additional_button right";
Right.innerHTML = "→";

var Left = document.createElement('div');
Left.className = "additional_button left";
Left.innerHTML = "←";

var Ctrl = document.createElement('div');
Ctrl.className = "additional_button ctrl";
Ctrl.innerHTML = "Ctrl";

var R_Ctrl = document.createElement('div');
R_Ctrl.className = "additional_button r_ctrl";
R_Ctrl.innerHTML = "Ctrl";

var Win = document.createElement('div');
Win.className = "additional_button win";
Win.innerHTML = "Win";

var Alt = document.createElement('div');
Alt.className = "additional_button alt";
Alt.innerHTML = "Alt";

var R_Alt = document.createElement('div');
R_Alt.className = "additional_button r_alt";
R_Alt.innerHTML = "Alt";

var Space = document.createElement('div');
Space.className = "additional_button space";
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
        if(key_codes_firstline[i] !== undefined){
            button += '<div class = "button ' + key_codes_firstline[i] +'">' + String.fromCharCode(firstline_keyboard[i]) + '</div>';
        } else {
            button += '<div class = "button">' + String.fromCharCode(firstline_keyboard[i]) + '</div>';
        }
    }
    document.querySelector('#div_firstline_keyboard').innerHTML = button;
    
    button = '';
    for(let i = 0; i<= secondeline_keyboard.length-1; i++){
        if(key_codes_secondline[i] !== undefined){
            button += '<div class = "button '+ key_codes_secondline[i] + '">' + String.fromCharCode(secondeline_keyboard[i]) + '</div>';
        }else {
            button += '<div class = "button">' + String.fromCharCode(secondeline_keyboard[i]) + '</div>';
        }
    }
    document.querySelector('#div_secondeline_keyboard').innerHTML = button;

    button = '';
    for(let i = 0; i<= thirdline_keyboard.length-1; i++){
        if(key_codes_thirdline[i] !== undefined){
            button += '<div class = "button ' + key_codes_thirdline[i] + '">' + String.fromCharCode(thirdline_keyboard[i]) + '</div>';
        }else{
            button += '<div class = "button">' + String.fromCharCode(thirdline_keyboard[i]) + '</div>';
        }
    }
    document.querySelector('#div_thirdline_keyboard').innerHTML = button;

    button = '';
    for(let i = 0; i<= fourthline_keyboard.length-1; i++){
        if(key_codes_fourthline[i] !== undefined){
            button += '<div class = "button ' + key_codes_fourthline[i] +  '">' + String.fromCharCode(fourthline_keyboard[i]) + '</div>';
        }else{
            button += '<div class = "button">' + String.fromCharCode(fourthline_keyboard[i]) + '</div>';
        }
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
        document.getElementById("textarea").innerHTML += event.target.innerText;
    })
});

document.querySelectorAll('#div_firstline_keyboard div, #div_secondeline_keyboard div, #div_thirdline_keyboard div, #div_fourthline_keyboard div, #div_fifthline_keyboard div').forEach((div) =>{
    div.addEventListener('mouseup', (event) => {
        event.target.classList.remove('button_active');
        document.getElementById('textarea').focus();
        document.getElementById('textarea').selectionStart = document.getElementById('textarea').value.length;
    })
});

let diode = document.createElement('div');
diode.className = "diode";
document.getElementsByClassName('capslock')[0].prepend(diode);

var capslock_on = 0;
document.addEventListener('keydown', (event) => {
    if(event.code == "Tab"){
        event.preventDefault();
        document.getElementsByClassName('tab')[0].classList.add('button_active');
        document.getElementById("textarea").innerHTML += "&#9;";
    }else if(event.code == "CapsLock"){
        event.preventDefault();
        document.getElementsByClassName('capslock')[0].classList.add('button_active');
        if(capslock_on == 0){
            for(let i = 0; i<= document.getElementsByClassName('button').length-1; i++){
                document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
            }
            document.getElementsByClassName('diode')[0].classList.add('diode_active');
            capslock_on = 1;
        }else if(capslock_on == 1){
            for(let i = 0; i<= document.getElementsByClassName('button').length-1; i++){
                document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
            }
            document.getElementsByClassName('diode')[0].classList.remove('diode_active');
            capslock_on = 0;
        }
    }else if(event.code == "ShiftLeft"){
        event.preventDefault();
        document.getElementsByClassName('shift')[0].classList.add('button_active');
        for(let i = 0; i<= document.getElementsByClassName('button').length-1; i++){
            document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
        }
        document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length-1].innerHTML = '/';
        document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length-1].innerHTML = ',';
        for(let i = 1; i<=document.getElementById('div_firstline_keyboard').querySelectorAll('.button').length-1; i++){
            document.getElementById('div_firstline_keyboard').querySelectorAll('.button')[i].innerHTML = firstline_keyboard_shift[i-1];
        }
    }else if(event.code == "Backspace"){
        event.preventDefault();
        document.getElementsByClassName('backspace')[0].classList.add('button_active');

    }else if(event.code == "Delete"){
        event.preventDefault();
        document.getElementsByClassName('delete')[0].classList.add('button_active');
    }else if(event.code == "Enter"){
        event.preventDefault();
        document.getElementsByClassName('enter')[0].classList.add('button_active');
        document.getElementById("textarea").innerHTML += '\n';
    }else if(event.code == "ShiftRight"){
        event.preventDefault();
        document.getElementsByClassName('right_shift')[0].classList.add('button_active');
        for(let i = 0; i<= document.getElementsByClassName('button').length-1; i++){
            document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toUpperCase();
        }
        document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length-1].innerHTML = '/';
        document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length-1].innerHTML = ',';
        for(let i = 1; i<=document.getElementById('div_firstline_keyboard').querySelectorAll('.button').length-1; i++){
            document.getElementById('div_firstline_keyboard').querySelectorAll('.button')[i].innerHTML = firstline_keyboard_shift[i-1];
        }
    }else if(event.code == "ControlLeft"){
        event.preventDefault();
        document.getElementsByClassName('ctrl')[0].classList.add('button_active');
    }else if(event.code == "MetaLeft"){
        event.preventDefault();
        document.getElementsByClassName('win')[0].classList.add('button_active');
    }else if(event.code == "AltLeft"){
        event.preventDefault();
        document.getElementsByClassName('alt')[0].classList.add('button_active');
    }else if(event.code == "AltRight"){
        event.preventDefault();
        document.getElementsByClassName('r_alt')[0].classList.add('button_active');
    }else if(event.code == "Space"){
        event.preventDefault();
        document.getElementsByClassName('space')[0].classList.add('button_active');
        document.getElementById("textarea").innerHTML += '  ';
    }else if(event.code == "ControlRight"){
        event.preventDefault();
        document.getElementsByClassName('r_ctrl')[0].classList.add('button_active');
    }else if(event.code == "ArrowUp"){
        event.preventDefault();
        document.getElementsByClassName('up')[0].classList.add('button_active');
        document.getElementById("textarea").innerHTML += '↑';
    }else if(event.code == "ArrowLeft"){
        event.preventDefault();
        document.getElementsByClassName('left')[0].classList.add('button_active');
        document.getElementById("textarea").innerHTML += '←';
    }else if(event.code == "ArrowRight"){
        event.preventDefault();
        document.getElementsByClassName('right')[0].classList.add('button_active');
        document.getElementById("textarea").innerHTML += '→';
    }else if(event.code == "ArrowDown"){
        event.preventDefault();
        document.getElementsByClassName('down')[0].classList.add('button_active');
        document.getElementById("textarea").innerHTML += '↓';
    }else {
        event.preventDefault();
        for(let i = 0; i<= document.getElementsByClassName('button').length-1; i++){
            if(document.getElementsByClassName('button')[i].classList.contains(event.code)){
                document.getElementsByClassName('button')[i].classList.add('button_active');
                document.getElementById("textarea").innerHTML += document.getElementsByClassName('button')[i].innerText;
            }
        }
    }
    document.getElementById('textarea').focus();
    document.getElementById('textarea').selectionStart = document.getElementById('textarea').value.length;
})

document.addEventListener('keyup', (event) => {
    if(event.code == "Tab"){
        event.preventDefault();
        document.getElementsByClassName('tab')[0].classList.remove('button_active');
    }else if(event.code == "CapsLock"){
        event.preventDefault();
        document.getElementsByClassName('capslock')[0].classList.remove('button_active');
    }else if(event.code == "ShiftLeft"){
        event.preventDefault();
        document.getElementsByClassName('shift')[0].classList.remove('button_active');
        for(let i = 0; i<= document.getElementsByClassName('button').length-1; i++){
            document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
        }
        document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length-1].innerHTML = String.fromCharCode(92);
        document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length-1].innerHTML = '.';
        for(let i = 1; i<=document.getElementById('div_firstline_keyboard').querySelectorAll('.button').length-1; i++){
            document.getElementById('div_firstline_keyboard').querySelectorAll('.button')[i].innerHTML = firstline_keyboard_not_shift[i-1];
        }
    }else if(event.code == "Backspace"){
        event.preventDefault();
        document.getElementsByClassName('backspace')[0].classList.remove('button_active');
    }else if(event.code == "Delete"){
        event.preventDefault();
        document.getElementsByClassName('delete')[0].classList.remove('button_active');
    }else if(event.code == "Enter"){
        event.preventDefault();
        document.getElementsByClassName('enter')[0].classList.remove('button_active');
    }else if(event.code == "ShiftRight"){
        event.preventDefault();
        document.getElementsByClassName('right_shift')[0].classList.remove('button_active');
        for(let i = 0; i<= document.getElementsByClassName('button').length-1; i++){
            document.getElementsByClassName('button')[i].innerHTML = document.getElementsByClassName('button')[i].innerText.toLowerCase();
        }
        document.getElementById('div_secondeline_keyboard').querySelectorAll('.button')[document.getElementById('div_secondeline_keyboard').querySelectorAll('.button').length-1].innerHTML = String.fromCharCode(92);
        document.getElementById('div_fourthline_keyboard').querySelectorAll('.button')[document.getElementById('div_fourthline_keyboard').querySelectorAll('.button').length-1].innerHTML = '.';
        for(let i = 1; i<=document.getElementById('div_firstline_keyboard').querySelectorAll('.button').length-1; i++){
            document.getElementById('div_firstline_keyboard').querySelectorAll('.button')[i].innerHTML = firstline_keyboard_not_shift[i-1];
        }
    }else if(event.code == "ControlLeft"){
        event.preventDefault();
        document.getElementsByClassName('ctrl')[0].classList.remove('button_active');
    }else if(event.code == "MetaLeft"){
        event.preventDefault();
        document.getElementsByClassName('win')[0].classList.remove('button_active');
    }else if(event.code == "AltLeft"){
        event.preventDefault();
        document.getElementsByClassName('alt')[0].classList.remove('button_active');
    }else if(event.code == "AltRight"){
        event.preventDefault();
        document.getElementsByClassName('r_alt')[0].classList.remove('button_active');
    }else if(event.code == "Space"){
        event.preventDefault();
        document.getElementsByClassName('space')[0].classList.remove('button_active');
    }else if(event.code == "ControlRight"){
        event.preventDefault();
        document.getElementsByClassName('r_ctrl')[0].classList.remove('button_active');
    }else if(event.code == "ArrowUp"){
        event.preventDefault();
        document.getElementsByClassName('up')[0].classList.remove('button_active');
    }else if(event.code == "ArrowLeft"){
        event.preventDefault();
        document.getElementsByClassName('left')[0].classList.remove('button_active');
    }else if(event.code == "ArrowRight"){
        event.preventDefault();
        document.getElementsByClassName('right')[0].classList.remove('button_active');
    }else if(event.code == "ArrowDown"){
        event.preventDefault();
        document.getElementsByClassName('down')[0].classList.remove('button_active');
    }else{
        for(let i = 0; i<= document.getElementsByClassName('button').length-1; i++){
            if(document.getElementsByClassName('button')[i].classList.contains(event.code)){
                document.getElementsByClassName('button')[i].classList.remove('button_active');
            }
        }
    }
});












