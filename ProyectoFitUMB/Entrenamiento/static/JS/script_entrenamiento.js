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
                } else if ((j === 1 || j === 3) && date <= daysInMonth) { // Martes y Viernes
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
  
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".checkbox-wrapper input[type='checkbox']");
    const completedMealsCounter = document.querySelector(".number");
    const progressCircle = document.querySelector(".circular-progress circle:nth-child(2)");
    const streakText = document.querySelector(".streak");

    const totalMeals = checkboxes.length;
    const circleRadius = 65; // Radio del círculo
    const circumference = 2 * Math.PI * circleRadius; // Circunferencia del círculo

    // Configura la circunferencia inicial del círculo
    progressCircle.style.strokeDasharray = `${circumference}`;
    progressCircle.style.strokeDashoffset = `${circumference}`;

    let streakDays = 0; // Contador de días de racha

    const updateProgress = () => {
        const completedMeals = Array.from(checkboxes).filter(checkbox => checkbox.checked).length;

        // Actualiza el contador de ejercicios completados
        completedMealsCounter.textContent = `${completedMeals}/${totalMeals}`;

        // Calcula el desplazamiento de la barra de progreso
        const offset = circumference - (completedMeals / totalMeals) * circumference;
        progressCircle.style.strokeDashoffset = offset;

        // Verifica si todas los ejercicios están completados
        if (completedMeals === totalMeals) {
            updateStreak();
        }
    };

    const updateStreak = () => {
        const targetStreak = streakDays + 1; // Incrementa el objetivo en 1
        const interval = setInterval(() => {
            if (streakDays < targetStreak) {
                streakDays++;
                streakText.textContent = `¡Llevas una racha de ${streakDays} días!`;
            } else {
                clearInterval(interval); // Detén la animación cuando llegue al objetivo
            }
        }, 100); // Ajusta la velocidad de la animación
    };

    // Añade el evento de cambio a cada checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateProgress);
    });

    // Inicializa el progreso al cargar la página
    updateProgress();
});
  
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const nextTrainingDateElement = document.querySelector(".next-training-date");
    
    // Define una fecha inicial
    let nextTrainingDate = new Date(2024, 10, 18); // Mes en JavaScript empieza desde 0 (5 = Junio)

    // Muestra la fecha en el formato correcto
    function updateNextTrainingDate() {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        nextTrainingDateElement.textContent = nextTrainingDate.toLocaleDateString('es-ES', options);
    }

    // Escucha cambios en los checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", () => {
            const allChecked = [...checkboxes].every(chk => chk.checked);

            if (allChecked) {
                nextTrainingDate.setDate(nextTrainingDate.getDate() + 2); // Sumar un día
                updateNextTrainingDate();
                
                // Reinicia los checkbox
                checkboxes.forEach(chk => chk.checked = true);
            }
        });
    });

    // Inicializa la fecha
    updateNextTrainingDate();
});
