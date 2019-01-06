function functionClick() {
    document.getElementById("demo").innerHTML = '<a href="' + "https://en.uesp.net/wiki/Morrowind:Seyda_Neen" + '">https://en.uesp.net/wiki/Morrowind:Seyda_Neen</a>'
  }
function functionKey()
{
    alert("Proiect realizat de Oprescu Sebastian-Antoniu gr.354");
}
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}