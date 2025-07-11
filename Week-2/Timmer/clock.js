function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // 0 becomes 12

  const timeStr = `
    ⌚ <strong>Current Time:</strong><br><br>
    👉 ${String(hours).padStart(2, '0')} :
    ${String(minutes).padStart(2, '0')} :
    ${String(seconds).padStart(2, '0')} ${ampm}
  `;

  document.getElementById("clockResult").innerHTML = timeStr;
}

setInterval(updateClock, 1000);
updateClock(); // run immediately
