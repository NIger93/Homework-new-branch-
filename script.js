$(document).ready(function () {
    const button = document.getElementById('toggleButton');
    button.addEventListener("click", () => {
        document.body.classList.toggle('dark-mode');

    });
    
});
function hideImage(image) {
    image.classList.add("hidden");
}
