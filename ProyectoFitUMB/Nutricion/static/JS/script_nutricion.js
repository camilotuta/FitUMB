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

        // Actualiza el contador de comidas completadas
        completedMealsCounter.textContent = `${completedMeals}/${totalMeals}`;

        // Calcula el desplazamiento de la barra de progreso
        const offset = circumference - (completedMeals / totalMeals) * circumference;
        progressCircle.style.strokeDashoffset = offset;

        // Verifica si todas las comidas están completadas
        if (completedMeals === totalMeals) {
            updateStreak();
        }
    };

    const updateStreak = () => {
        const targetStreak = streakDays + 1; // Incrementa el objetivo en 1
        const interval = setInterval(() => {
            if (streakDays < targetStreak) {
                streakDays++;
                streakText.textContent = `¡Llevas ${streakDays} días de racha!`;
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

