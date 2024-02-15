function toggleClass(element, target) {
    element.querySelector('i').classList.toggle("bi-caret-right-fill");
    element.querySelector('i').classList.toggle("bi-caret-down-fill");

    console.log(element);
    console.log(target);
    
    if (window.innerWidth > 768) {
        target.classList.add("collapsible");
        target.classList.remove("collapsed");
    }
    else {
        target.classList.toggle("collapsible");
        target.classList.toggle("collapsed");
        // target.style.display = target.style.display === "none" ? "block" : "none";
    
    }

}
document.querySelector("#year").innerHTML = new Date().getFullYear();