document.getElementById('add-timer-button').addEventListener('click', function() {
    const targetDateInput = document.getElementById('target-date').value;
    const targetDate = new Date(targetDateInput).getTime();

    if (isNaN(targetDate)) {
        alert('Please select a valid date and time.');
        return;
    }

    const timerElement = document.createElement('div');
    timerElement.className = 'countdown-timer';
    timerElement.innerHTML = `
        <span class="days">00</span> Days 
        <span class="hours">00</span> Hours 
        <span class="minutes">00</span> Minutes 
        <span class="seconds">00</span> Seconds
    `;
    document.getElementById('countdown-timers').appendChild(timerElement);

    const countdownInterval = setInterval(function() {
        const now = new Date().getTime();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
            clearInterval(countdownInterval);
            timerElement.innerHTML = 'Time is up!';
            document.getElementById('alarm-sound').play(); // Play the alarm sound
            document.body.classList.add('timer-finished'); // Add a class for visual effects
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        timerElement.querySelector('.days').textContent = days.toString().padStart(2, '0');
        timerElement.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
        timerElement.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
        timerElement.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
    }, 1000);
});
