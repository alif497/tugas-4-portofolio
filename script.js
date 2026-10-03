/* ======================================================
    WELCOME SCREEN
=======================================================*/

window.addEventListener("load",function () {
    const welcomeScreen =
    document.getElementById( "welcomeScreen");
    if (welcomeScreen) {
        setTimeout(function () {
            welcomeScreen.classList.add ("hide");
        },1800);
    }
});


/*===================================
     DARK / LIGHT MODE
===================================*/

const themeButton = document.getElementById("themeButton");

const body= document.body;

/* Ambil tema yang tersimpan */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark");

    if (themeButton) {
           
        themeButton.textContent =  "☀️";
    }

}else {

    body.classList.remove("dark");

    if (themeButton) {
        themeButton.textContent =  "🌙";
    }
}

/* Tombol ganti tema. */

if (themeButton) {

    themeButton.addEventListener("click",function () {
        body.classList.toggle("dark");

        if (
            body.classList.contains("dark")
        ){
            themeButton.textContent = "☀️";

            localStorage.setItem("theme","dark");

        }else{

            themeButton.textContent = "🌙";

            localStorage.setItem(
                "theme","light"
              );
           }
        }
    );
}

/* =================================
        PAGE NAVIGATION
================================== */


const pageSections  =
     document.querySelectorAll(".page-section");

const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );

const pageLinks =
    document.querySelectorAll(
        ".page-link"
    );



/* fungsi untuk menampilkan halaman */

function showpage(pageId) {

    /* sembunyikan semua section.*/

    pageSections.forEach(
        function (section) {
            section.classList.remove("active-page");
        }
    );

    /* cari halaman yang dipilih */

    const selectedPage = document.getElementById (pageId);

    if (selectedPage) {
        selectedPage.classList.add ("active-page");
    }

    /* update navbar aktif. */

    navLinks.forEach (
        function (link) {
            link.classList.remove("active");

            const linkPage = link .getAttribute("href").replace("#","");

            if (
                linkPage === pageId
            ){
                link.classList.add("active");
            }

        }
    );


    /* scroll ke atas.*/

    window.scrollTo({
        top:0,behavior:"smooth"
    });

}

/* ===================================
  NAVBAR
===================================== */

navLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",function (event) {
                event.preventDefault ();

                const pageId = link .getAttribute("href").replace("#","")

                showpage(pageId);

                /* Ubah URL. */

                history.pushState(
                    null,"","#"+pageId
                );

            }
        );
    }
);


/* ==================================
   BUTTON HOME / PROJECT / CONTACT
================================== */

pageLinks.forEach(
    function (link) {

        link.addEventListener("click",function (event) {
            event.preventDefault ();

            const pageId = link .getAttribute("href").replace("#","");

            showpage(pageId);

            history.pushState(null,"","#" + pageId);
        }
      );
    }
);

/* ===========================
     BROWSER BACK / FORWARD
============================ */

window.addEventListener(
    "popstate",function () {
        loadPageFromURl ();
    }
);

/* ===================================
        LOAD PAGE DARI URL
=================================== */

function loadPageFromURL (){

    let pageId = window.location.hash.replace("#","");

    /* Jika tidak ada #,buka Home.*/

    if (!pageId) {
        pageId = "home";
    }

    /* pastikan halaman tersedia. */

    const pageExists = document.getElementById(pageId);

    if (!pageExists) {
        pageId = "home"
    }

    showpage(pageId);
}

/* ===========================================
   SAAT WEBSITE DIBUKA
========================================= */

document.addEventListener(
    "DOMContentLoaded",function () {
        loadPageFromURL ();
    }
);
