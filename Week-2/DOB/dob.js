function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const tobInput = document.getElementById("tob").value;

    if (!dobInput || !tobInput) {
        alert("Please enter both date and time.");
        return;
    }

    const dob = new Date(`${dobInput}T${tobInput}`);
    const now = new Date();

    const diff = now - dob;

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const months = Math.floor(days / 30.44);
    const years = Math.floor(months / 12);

    document.getElementById("result").innerHTML = `
      🧠 You have lived:<br><br>
      👉 <strong>${years}</strong> Years<br>
      👉 <strong>${months}</strong> Months<br>
      👉 <strong>${days}</strong> Days<br>
      👉 <strong>${hours}</strong> Hours<br>
      👉 <strong>${minutes}</strong> Minutes<br>
    `;
}
