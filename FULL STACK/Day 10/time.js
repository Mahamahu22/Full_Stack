fetch('http://worldtimeapi.org/api/timezone/Asia/Kolkata')
  .then(response => response.json())
  .then(data => {
    document.getElementById('time').textContent = 'Current time in India: ${data.datetime}';
  })
  .catch(error => console.error('Error fetching time:', error));
