const timeText = document.querySelector('[data-testid="currentTimeUTC"]');
const dayText = document.querySelector('[data-testid="currentDay"]');

const brief = document.querySelector("#brief");
const header = brief.querySelector(".brief-header");
const content = brief.querySelector(".brief-content");

const flipCard = document.querySelector(".flip-card");
const flipButtons = document.querySelectorAll(".flip-button");

header.addEventListener("click", () => {
  const isActive = brief.classList.contains("active");

  brief.classList.remove("active");
  brief.querySelector(".brief-content").style.maxHeight = null;

  if (!isActive) {
    brief.classList.add("active");
    content.style.maxHeight = content.scrollHeight + "px";
  }
});

flipButtons.forEach((button) => {
  button.addEventListener("click", () => {
    flipCard.classList.toggle("flipped");
  });
});

function updateDateTime() {
  const now = new Date();

  // Format the time in UTC
  const hours = now.getUTCHours().toString().padStart(2, "0");
  const minutes = now.getUTCMinutes().toString().padStart(2, "0");
  const currentTimeUTC = `${hours}:${minutes}`;

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDay = daysOfWeek[now.getUTCDay()];

  timeText.textContent = currentTimeUTC;
  dayText.textContent = currentDay;
}
updateDateTime();

// Update the time every minute
setInterval(updateDateTime, 60000);
