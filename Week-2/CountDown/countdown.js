function updateCountdown() {
  const now = new Date();
  const year = now.getFullYear();
  const target = new Date(`${year}-12-31T23:59:59`);
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("countdownResult").innerHTML = "🎊 Happy New Year!";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.getElementById("countdownResult").innerHTML = `
    ⌛ <strong>Time Left Until New Year:</strong><br><br>
    👉 <strong>${days}</strong> Days 🎆<br>
    👉 <strong>${hours}</strong> Hours 🕐<br>
    👉 <strong>${minutes}</strong> Minutes ⏰<br>
    👉 <strong>${seconds}</strong> Seconds 🔄
  `;
}

setInterval(updateCountdown, 1000);
