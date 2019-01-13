function button_func_1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("ajax_get").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "ajax_data.txt", true);
    xhttp.send();
}