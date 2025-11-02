const drop_down = document.getElementsByClassName('fa-angle-down')[0];
const drop_up = document.getElementsByClassName('fa-angle-up')[0];
const aside = document.getElementsByTagName('aside')[0];

// Initial state: aside is hidden above the viewport


drop_down.addEventListener("click", function () {
    aside.style.display = "flex";
    aside.style.transform = "translateY(0vh)";
    drop_down.style.display = "none";
    drop_up.style.display = "block";
});

drop_up.addEventListener("click", function () {
    aside.style.transform = "translateY(-120vh)";
    drop_up.style.display = "none";
    drop_down.style.display = "block";
});