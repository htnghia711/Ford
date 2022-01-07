var coll = document.querySelectorAll("footer .footer__main .navbar-inverse .nav .list-heading");
for(var i = 1; i < coll.length; i++) {
    coll[i].addEventListener("click", function(){
        var nav = document.querySelectorAll("footer .footer__main .navbar-inverse .nav .nav");
        content = this.nextElementSibling;
        for (var j = 1; j < nav.length; j++) {
            if(content != nav[j]) {
                nav[j].classList.remove("active");
            }
        }
        content.classList.toggle("active");

    })
}