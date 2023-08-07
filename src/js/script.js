var control = 1;
var pass;

function surt() {
    contanidor = "<img src='' alt=''>";
    document.getElementById("visualWork").innerHTML=contanidor;
    document.getElementById("visualWork").hidden=true;
}
function enrerre(){
    if (control > 1) control -= 1;
    else control = 16;
    clickWeb(control);
}
function endavant(){
    if (control < 16) control += 1;
    else control = 1;
    clickWeb(control);
}

function clickWeb(work) {
    control = work;
    document.getElementById("visualWork").hidden = false;
    if (screen.width < 1100) {
        window1 = '<div class = "col-md-12"><div id="work">';
    }
    else {
        window1 = '<div class = "col-md-1"></div><div class = "col-md-10"><div id="work">';
    }
    butons = '<div id = "botons"><a id="con1" onclick="enrerre()"><img src="src/img/enrer.png" alt=""/></a><a id="con2" onclick="endavant()"><img src="src/img/endav.png" alt=""/></a><a id="sor" onclick="surt()"><img src="src/img/sortir.png" alt=""/></a></div>';
    window2 = '<iframe id="capt" src="';
    window3 = '" width=100% height="780" frameborder="0" style="border:0" allowfullscreen> </iframe></div></div>';
    if (work == 1) contanidor  = window1 + butons + window2 + 'https://gsxgrxhnupzmx1izaze8yw.on.drv.tw/www.guerraSuccecioI.com/laGuerra_dels_100anys.html' + window3;
    if (work == 2) contanidor = window1 + butons + window2 + 'https://gsxgrxhnupzmx1izaze8yw.on.drv.tw/www.fonamentsI.com/Fonaments.html' + window3;
    if (work == 3) contanidor = window1 + butons + window2 + 'https://gilbert46.github.io/DWG/' + window3;
    if (work== 4) contanidor = window1 + butons + window2 + 'https://gilbert46.github.io/reposition/' + window3;
    if (work== 5) contanidor = window1 + butons + window2 + 'https://gilbert46.github.io/webgame/' + window3;
    if (work== 6) contanidor = window1 + butons + window2 + 'https://gilbert46.github.io/maps_inter9/' + window3;
    if (work== 7) contanidor = window1 + butons + window2 + 'https://gilbert46.github.io/Ex2_Ecommerc/' + window3;
    if (work== 8) contanidor = window1 + butons + window2 + 'https://gilbert46.github.io/slotmachine/' + window3;
    if (work== 9) contanidor = window1 + butons + window2 + 'https://gilbert46.github.io/vacances/' + window3;
    if (work== 10) contanidor = window1 + butons + window2 + 'https://superherois-7d366.web.app/' + window3;
    if (work== 11) contanidor = window1 + butons + window2 + 'https://formulari-13crud.web.app' + window3;
    if (work== 12) contanidor = window1 + butons + window2 + 'https://puzzle-21pop.web.app/' + window3;
    if (work== 13) contanidor = window1 + butons + window2 + 'https://gilbertvs.github.io/time/' + window3;
    if (work== 14) contanidor = window1 + butons + window2 + 'https://gilbert46.github.io/note/' + window3;
    if (work== 15) contanidor = window1 + butons + window2 + 'https://film-49crud.web.app/' + window3;
    if (work== 16) contanidor = window1 + butons + window2 + 'https://mazinger-49z.web.app/' + window3;
    document.getElementById("visualWork").innerHTML = contanidor;    
}

