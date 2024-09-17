// Definindo a data do exame
const examDate = new Date("December 31, 2024 09:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const timeRemaining = examDate - now;

    // Cálculo de dias, horas, minutos e segundos
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Mostrando o resultado no HTML
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // Quando a contagem terminar
    if (timeRemaining < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "Exame Iniciado!";
    }
}, 1000);
