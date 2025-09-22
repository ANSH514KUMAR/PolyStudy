
const menuBtn = document.getElementById('menu-btn');
const sidePannel = document.getElementById("sidePannel");
const mainOpacity = document.getElementById('mainContent');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    sidePannel.classList.toggle('active');
    bodyOpacity.classList.toggle('active');
});
