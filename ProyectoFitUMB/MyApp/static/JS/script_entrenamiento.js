// Funcionalidad del sidebar
const toggleSidebar = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');
const main = document.querySelector('main');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

// Funcionalidad de los acordeones de ejercicios
const exerciseHeaders = document.querySelectorAll('.exercise-header');
exerciseHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
        header.querySelector('span').textContent = content.classList.contains('active') ? '▲' : '▼';
    });
});

// Funcionalidad del calendario
const calendarBody = document.getElementById('calendarBody');
const currentMonthElement = document.getElementById('currentMonth');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

let currentDate = new Date();

function generateCalendar(year, month) {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    currentMonthElement.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;

    let date = 1;
    let calendarHTML = '';

    for (let i = 0; i < 6; i++) {
        let row = '<tr>';
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < startingDay) {
                row += '<td></td>';
            } else if (date > daysInMonth) {
                row += '<td></td>';
            } else {
                let className = '';
                if (date === currentDate.getDate() && month === currentDate.getMonth() && year === currentDate.getFullYear()) {
                    className = 'today';
                } else if ((j === 2 || j === 5) && date <= daysInMonth) { // Martes y Viernes
                    className = 'training-day';
                }
                row += `<td><div class="${className}">${date}</div></td>`;
                date++;
            }
        }
        row += '</tr>';
        calendarHTML += row;
        if (date > daysInMonth) {
            break;
        }
    }

    calendarBody.innerHTML = calendarHTML;
}

generateCalendar(currentDate.getFullYear(), currentDate.getMonth());

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
});