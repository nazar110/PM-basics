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

$(document).ready(function(){
    $("a").on('click', function(event) {
        if(this.hash !== "") {
            //event.preventDefault();
            
            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset.top()
                },
                800,
                function() {
                    window.location.hash = hash;
                }
            );
        }

    });
});