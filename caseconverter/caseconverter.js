const sidebar = document.getElementsByClassName(".sidebar");
const toggle = document.getElementsByClassName(".toggle");

    toggle.addEventListener("click", () =>{
    sidebar.classList.toggle("close");
    });