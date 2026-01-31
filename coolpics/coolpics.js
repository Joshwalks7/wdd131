const btn = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");
const header = document.querySelector("header");

const gallery = document.querySelector("main");
const modal = document.querySelector("dialog");
const modalImage = document.querySelector("dialog img");
const closeButton = document.querySelector(".close-viewer");

btn.addEventListener("click", toggleMenu);

function toggleMenu() {
    menu.classList.toggle("hide");
    header.classList.toggle("change");
}

gallery.addEventListener("click", openModal);

function openModal(e) {
    const img = e.target;
    const src = img.getAttribute("src");
    const alt = img.getAttribute("alt");

    const full = src.replace("lake", "lake-lg");
    const new_alt = alt.replace("lake image", "lake image big");

    modalImage.src = full;
    modalImage.alt = new_alt;
    modal.showModal();
}

closeButton.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});