function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const digitalClock = document.getElementById('digital-clock');
  
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    digitalClock.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;
  }
  
  function updateDate() {
    const now = new Date();
    const dateElement = document.getElementById('date');
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    dateElement.textContent = dateString;
  }
  
  setInterval(updateClock, 1000);
  updateClock();
  updateDate();
  