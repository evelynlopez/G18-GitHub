function llamarMenu() {
    var status = document.getElementById("popout").style.display;
    if(status == "none") {
        $("#popout").css("display", "flex");
    } else {
        $("#popout").css("display", "none");
    }
}
function openForm() {
  document.getElementById("loging").style.display = "block";
}

function closeForm() {
  document.getElementById("loging").style.display = "none";
}

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        openForm();
    }
    else{
        closeForm();
    }
};
