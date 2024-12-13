var currentIndex = 0;
var images = document.querySelectorAll('.gallery img');
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");

function openModal(index) {
    currentIndex = index;
    modal.style.display = "flex";
    modalImg.src = images[currentIndex].src;
}

function closeModal() {
    modal.style.display = "none";
}

function changeImage(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    modalImg.src = images[currentIndex].src;
}

// Close the modal if clicked outside of the image
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}
