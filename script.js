function toggleClass(element) {
    element.querySelector('i').classList.toggle("bi-caret-right-fill");
    element.querySelector('i').classList.toggle("bi-caret-down-fill");
}
document.querySelector("#year").innerHTML = new Date().getFullYear();