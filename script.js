document.getElementById('calculate-button').addEventListener('click', () => {
    const entranceTime = document.getElementById('entrance-time').value;
    const exitTime = document.getElementById('exit-time').value;
  
    if (entranceTime && exitTime) {
      // Split the time into hours and minutes
      const [entranceHours, entranceMinutes] = entranceTime.split(':').map(Number);
      const [exitHours, exitMinutes] = exitTime.split(':').map(Number);
  
      // Calculate total hours and minutes
      let totalHours = exitHours - entranceHours;
      let totalMinutes = exitMinutes - entranceMinutes;
  
      // Adjust if minutes are negative
      if (totalMinutes < 0) {
        totalMinutes += 60;
        totalHours -= 1;
      }
  
      const resultText = totalHours >= 0 
        ? `עבדת ${totalHours} -שעות ו ${totalMinutes} דקות`
        : "Invalid times. Please check your inputs.";
  
      document.getElementById('result').textContent = resultText;
    } else {
      document.getElementById('result').textContent = "Please fill in both fields.";
    }
  });

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log('Service Worker registered successfully.'))
        .catch((err) => console.error('Service Worker registration failed:', err));
    });
  }
  
  