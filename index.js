const add = document.getElementById('add');
const remove = document.getElementById('remove');
const screen = document.getElementById('screen');

function randomColor() {
    let code = "0123456789abcdef";
    let str = "#";

    for( let i = 0; i < 6; i++) {
        let r = Math.floor(Math.random() * code.length);
        str += code[r]
    }
    return str;
   
}

function create() {
    if (screen.querySelectorAll('div').length > 8) {
        return
    }
    let el = document.createElement('div');
    el.classList.add('elem');
    el.style.opacity = 1;
    el.style.backgroundColor = randomColor();
    screen.appendChild(el)
}

function remov() {
    let d = screen.querySelectorAll('div');
    screen.removeChild(d[d.length - 1]);
}

function getValue(ki) { 
    let el = ki.querySelectorAll('input');
    for (let i = 0; i < el.length; i++) {
        if (el[i].checked) {
            return el[i].value
        }
    }

}



let aln = document.forms['al'];
let jay = document.forms['js']
let dire = document.forms['dir'];
let wrap = document.forms['rap'];

getValue(dire);

function rep() {
    screen.style.flexWrap = `${getValue(wrap)}`
}

function dir() {
    screen.style.flexDirection = `${getValue(dire)}`
}

function js() {
    screen.style.justifyContent = `${getValue(jay)}`
} 

function al() {
    screen.style.alignItems = `${getValue(aln)}`
}

window.addEventListener('load', () => {
    al()
    js()
    dir()
    rep()
})

console.log(jay.length);

for(let i = 0; i < jay.length; i++) {
    jay[i].addEventListener('change', js)
}

for(let i = 0; i < aln.length; i++) {
    aln[i].addEventListener('change', al)
}

for(let i = 0; i < wrap.length; i++) {
    wrap[i].addEventListener('change', rep)
}

for(let i = 0; i < dire.length; i++) {
    dire[i].addEventListener('change', dir)
}

add.addEventListener('click', create)
remove.addEventListener('click', remov)
