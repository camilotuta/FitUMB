const toggleSidebar = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('main');

toggleSidebar.addEventListener('click', () => {

    sidebar.classList.toggle('active');
});

const mealHeaders = document.querySelectorAll('.meal-header');
mealHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        header.querySelector('span').textContent = content.classList.contains('active') ? '▲' : '▼';
    });
});


