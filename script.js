let year = prompt("Введите год: ");
let month = prompt("Введите месяц: ");
let day = prompt("Введите день: ");



let lunanumber = 0;
let num = 0;
for (let i = 0; i < year; i++) {
    if(num == 19){
        num = 0;
    }
    num++;
    lunanumber = num;
}
lunanumber++;
let b = Number(lunanumber) * 11 - 14 + Number(day) + Number(month);


while (b > 30){
    b = b - 30;
}


let luna = document.getElementById('luna');

let lunam = document.getElementById('lunam');
let phase = document.getElementById('phase');


if(b > 0 && b <= 7){
    luna.style.cssText = 'background: linear-gradient(to left, black 50%, transparent 0%);';
}
else if(b > 7 && b <= 15){
    luna.style.cssText = 'background: linear-gradient(to left, black 100%, transparent 0%);';
}
else if(b > 15 && b < 30){
    luna.style.cssText = 'background: linear-gradient(to right, black 50%, transparent 0%);';

}
else if(b == 0 || b == 30){
    luna.style.cssText = 'background: linear-gradient(to right, black 0%, transparent 0%);';

}
lunam.innerHTML = lunanumber; 
phase.innerHTML = b;
