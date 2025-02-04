document.addEventListener("DOMContentLoaded", function () {
    const modelsContainer = document.getElementById("modelsContainer");

    // Smooth scrolling effect on the models container
    modelsContainer.addEventListener("wheel", (event) => {
        if (event.deltaY !== 0) {
            window.scrollBy({
                top: event.deltaY,
                left: 0,
                behavior: "smooth"
            });
        }
    });
});