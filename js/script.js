
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);



// update the countdown 
function updateCountdown() {
    const currentTime = new Date();
    const timeDiff = newYearTime- currentTime;
    
    const d = Math.floor(timeDiff / 1000 / 60 / 60 / 24);
    const h = Math.floor(timeDiff / 1000 / 60 / 60 ) % 24;
    const m = Math.floor(timeDiff / 1000 / 60 ) % 60;
    const s = Math.floor(timeDiff / 1000 ) % 60;

    // add values to DOM 
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

// Show Spinner after loading 
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000)

// Run Every Second 
setInterval(updateCountdown, 1000);
