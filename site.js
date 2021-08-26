window.onscroll = function() { stick() };
function stick()
{
    var header = document.getElementById("myheader");
    var newPosition = header.offsetTop;

    if(window.pageYOffset > newPosition) {
        header.classList.add("sticky");
    }
    else {
        header.classList.remove("sticky");
    }
}