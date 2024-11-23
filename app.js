document.addEventListener("DOMContentLoaded", function () {
    const popupButton = document.querySelectorAll("#pop");
    const popupBox = document.querySelector("#popup-con");

    popupButton.forEach((button) => {
        button.addEventListener("click", function (e) {
            e.stopPropagation();
            popupBox.style.display = popupBox.style.display === "flex" ? "none" : "flex";
        });
    });

    document.addEventListener("click", function (e) {
        if (!popupBox.contains(e.target)) {
            popupBox.style.display = "none";
        }
    });
});