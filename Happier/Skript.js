var Entry1;
var Entry2;
var Entry3;
var elem1 = "<img src='Pictures/Smiley1.png' alt='smiley1' style='width:113px;height:113px;'>"
var elem2= "<img src='Pictures/Smiley2.png' alt='smiley2' style='width:113px;height:113px;'>"
var elem3 = "<img src='Pictures/Smiley3.png' alt='smiley3' style='width:113px;height:113px;'>"
if(localStorage.getItem('Status')==null)
    localStorage.setItem('Status', 1);

function smileyChange () {
    var bar = document.getElementById("myRange").value;
    if(bar < 33)
        document.getElementById("pic").innerHTML = elem3;
    else if(bar > 33 && bar < 66)
        document.getElementById("pic").innerHTML = elem2;
    else if (bar > 66)
        document.getElementById("pic").innerHTML = elem1;
}

function newEntry() {
    

    if(localStorage.getItem('Status')=='1'){
        Entry1 = document.getElementById('kat').selectedIndex;
        Entry2 = document.getElementById('notiz').value;
        Entry3 = document.getElementById('myRange').value;
        localStorage.setItem('Kategorie1', Entry1);
        localStorage.setItem('Notiz1', Entry2);
        localStorage.setItem('Range1', Entry3);
        localStorage.setItem('Status', 2);
        window.alert("Erster Eintrag wurde erfolgreich hinzugefuegt!");
    }

    else if(localStorage.getItem('Status')=='2'){
        Entry1 = document.getElementById('kat').selectedIndex;
        Entry2 = document.getElementById('notiz').value;
        Entry3 = document.getElementById('myRange').value;
        localStorage.setItem('Kategorie2', Entry1);
        localStorage.setItem('Notiz2', Entry2);
        localStorage.setItem('Range2', Entry3);
        localStorage.setItem('Status', 3);
        window.alert("Zweiter Eintrag wurde erfolgreich hinzugefuegt!");
    }
    else {
        window.alert("In der Demo sind nur 2 Datensätze moeglich!");
    }   
      
    location.reload();  
}


