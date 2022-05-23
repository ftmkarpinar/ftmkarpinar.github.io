
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})

//sayfayi yukari cikaran kodum
function sayfaYukariCik(){
    window.scrollTo(0,0);
}
//sayfayi asagi indiren kodum
function sayfaAsagiIn(){
    window.scrollTo(0,1000);
}

//mouse yaziya gelince ve cekilince renkleri degistiren kodum.
$("#anasayfaYazi").hover(function(){
    document.getElementById("anasayfaYazi").style.color="blue"; 
},function(){
    document.getElementById("anasayfaYazi").style.color="white"; 
});

function resmiSagaGotur(){
    document.getElementById("anasayfaResim").style.marginLeft = "500px";
}

function resmiSolaGotur(){
    document.getElementById("anasayfaResim").style.marginLeft = "-300px";
}

function resmiDondur(){
    document.getElementById("anasayfaResim").style.transform = "rotate(90deg)";
}

$("#resimGizleButton").click(function(){
    $("#anasayfaResim").hide();
});

$("#resimGosterButton").click(function(){
    $("#anasayfaResim").show();
});


function sayfayiSil(){
        $("#butunSayfa").hide();
        setTimeout(sayfaGoster,1000);
}

function sayfaGoster(){
    $("#butunSayfa").show("slow");

}

