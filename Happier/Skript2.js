var arr = ['Sport', 'Familie', 'Freunde', 'Arbeit', 'Reise', 'Musik', 'Unterhaltung', 'Generell'];

window.onload = function fillResult() {
    let value = calcAVG();  
    //picture
    if(value < 50) {
        document.getElementById('pic').innerHTML = '<img src="Pictures/Cloud.png" alt="cloud" style="width:250px;height:250px;"></img>';
    }
    else {
        document.getElementById('pic').innerHTML = '<img src="Pictures/sun.png" alt="sun" style="width:250px;height:250px;"></img>';
    }
    
    //value    
    let num = '<p class="centered" id="percent1">' + calcAVG() + '%</p>';        
    document.getElementById('percent1').innerHTML = num;

    //text
    if(Number(localStorage.getItem('Range1'))>Number(localStorage.getItem('Range2'))) {
        document.getElementById('text1').innerHTML = splitText(localStorage.getItem('Notiz1'), 25, 50);
        document.getElementById('text2').innerHTML = splitText(localStorage.getItem('Notiz2'), 25, 50);
    }
    else {
        /* let text = <p></p> */
        document.getElementById('text1').innerHTML =  splitText(localStorage.getItem('Notiz2'), 25, 50);
        document.getElementById('text2').innerHTML =  splitText(localStorage.getItem('Notiz1'), 25, 50);
    }

    //feed
    //Nr1
    document.getElementById('theme1').innerHTML = arr[localStorage.getItem('Kategorie1')];
    if(Number(localStorage.getItem('Range1'))>=50)
        document.getElementById('pic1').innerHTML = '<img src = "Pictures/sun.png" alt="pic1" style="width:100px;height:100px;">'
    else
        document.getElementById('pic1').innerHTML = '<img src = "Pictures/Cloud.png" alt="pic1" style="width:100px;height:100px;">'
    document.getElementById('percent2').innerHTML = Number(localStorage.getItem('Range1'))+ '%';
    document.getElementById('feedtext1').innerHTML =  splitText(localStorage.getItem('Notiz1'), 50, 120);

    //Nr2
    document.getElementById('theme2').innerHTML = arr[localStorage.getItem('Kategorie2')];
    if(Number(localStorage.getItem('Range2'))>=50)
        document.getElementById('pic2').innerHTML = '<img src = "Pictures/sun.png" alt="pic2" style="width:100px;height:100px;">'
    else
        document.getElementById('pic2').innerHTML = '<img src = "Pictures/Cloud.png" alt="pic2" style="width:100px;height:100px;">'
    document.getElementById('percent3').innerHTML = Number(localStorage.getItem('Range2')) + '%';
    document.getElementById('feedtext2').innerHTML =  splitText(localStorage.getItem('Notiz2'), 50, 120);

}

//average of input values
function calcAVG(){
    let res = (Number(localStorage.getItem('Range1')) + Number(localStorage.getItem('Range2')))/2;
    return res;
}

//break input text into rows
function splitText(text, min, max) {
    var idealSplit = min,
            maxSplit = max,
            lineCounter = 0,
            lineIndex = 0,
            lines = "",
            ch, i;

        for (i = 0; i < text.length; i++) {
            ch = text[i];
            //starts new line
            if ((lineCounter >= idealSplit && ch === " ") || lineCounter >= maxSplit) {
                ch = "<br>";
                lineCounter = -1;
            }
            //writes text and counts
            lines += ch;
            lineCounter++;
        }

        return lines;
    }

function dayWeek () {
    if( document.getElementById('TagWoche').selectedIndex == 2) {
        window.open("Statwindow.html","_self");
    }
    if(document.getElementById('TagWoche').selectedIndex == 1) {
        window.open("week.html","_self");
    }
}


//Problem: Flackern beim laden der Seite. Inhalt wird geladen nachdem Seite das erste Mal geladen wurde. Anders gehts aber nicht weil 
//sonst das DOM noch nicht da ist.
