
// Accordéon
var acc = document.querySelectorAll(".accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {

    var accTitle = this.querySelector(".accordion--title")
    var accContent = this.querySelector(".accordion--content")

    accTitle.classList.toggle("is-active");
    accContent.classList.toggle("is-open");

});
}

//Menu effet scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var header = document.querySelector("header")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // header.style.padding = "0px 10px";
        header.classList.add("is-sticky");
    
    } else {
        //header.style.padding = "10px 10px";
        header.classList.remove("is-sticky"); 
    }
}






/*

 // Accordéon
            var acc = document.querySelectorAll(".accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
                } 
            });
            }

            //Menu effet scroll

            window.onscroll = function() {scrollFunction()};

            function scrollFunction() {
                var header = document.querySelector("header")
                if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                   // header.style.padding = "0px 10px";
                   header.classList.add("is-sticky");
               
                } else {
                    //header.style.padding = "10px 10px";
                    header.classList.remove("is-sticky"); 
                }
            }

           
*/