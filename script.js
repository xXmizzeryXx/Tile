function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

function openApp(url) {
  window.location.href = url;
}

window.onload = () => {
  updateClock();
  setInterval(updateClock, 10000);

  // Simulate battery (placeholder)
  const batteryIcon = document.getElementById('battery');
  batteryIcon.textContent = "🔋 82%";
};
