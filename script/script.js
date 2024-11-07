let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
    let currentDate = new Date();
    
    let currentHour = currentDate.getHours();
    if (currentHour === 0) {
        currentHour = 12;
    } else if (currentHour > 12) {
        currentHour -= 12;
    }
    
    hour.innerHTML = (currentHour < 10 ? '0' : '') + currentHour;
    min.innerHTML = (currentDate.getMinutes() < 10 ? '0' : '') + currentDate.getMinutes();
    sec.innerHTML = (currentDate.getSeconds() < 10 ? '0' : '') + currentDate.getSeconds();
}, 1000);