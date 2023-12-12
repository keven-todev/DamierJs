let divZone = document.getElementById("zone");

function ecrit(text, tag = "p") {
    divZone.innerHTML += "<" + tag + ' style="background-color: #' + text + '">' + text + "</" + tag + ">";
    
}

for (let i = 0; i <= 999; i++) {
  ecrit(i, "span");
  i.toString(16).padStart(6, '0');
}
