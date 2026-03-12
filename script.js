document.addEventListener('DOMContentLoaded', () => {
    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const eclipseListElement = document.getElementById('eclipse-list');

    let eclipseDates = [];

    // Fetch and parse eclipse dates
    fetch('eclipse-dates.txt')
        .then(response => response.text())
        .then(text => {
            eclipseDates = text.trim().split('\n').map(dateStr => new Date(dateStr));
            if (eclipseDates.length > 0) {
                startCountdown(eclipseDates[0]);
                populateEclipseList();
            }
        });

    function startCountdown(targetDate) {
        function updateCountdown() {
            const now =.
..
        }

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    }

    function populateEclipseList() {
        eclipseDates.forEach(date => {
            const listItem = document.createElement('li');
            listItem.textContent = date.toDateString();
            eclipseListElement.appendChild(listItem);
        });
    }
});
