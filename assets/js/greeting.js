// ┌─┐┬─┐┌─┐┌─┐┌┬┐┬┌┐┌┌─┐┌─┐
// │ ┬├┬┘├┤ ├┤  │ │││││ ┬└─┐
// └─┘┴└─└─┘└─┘ ┴ ┴┘└┘└─┘└─┘
// Function to set Greetings

const name = CONFIG.name;

const gree1 = `${CONFIG.greetingNight}\xa0`;
const gree2 = `${CONFIG.greetingMorning}\xa0`;
const gree3 = `${CONFIG.greetingAfternoon}\xa0`;
const gree4 = `${CONFIG.greetingEvening}\xa0`;

function updateGreeting() {
	const today = new Date();
	const hour = today.getHours();

	if (hour >= 22 || hour < 5) {
		document.getElementById('greetings').innerText = gree1 + name;
	} else if (hour >= 5 && hour < 12) {
		document.getElementById('greetings').innerText = gree2 + name;
	} else if (hour >= 12 && hour < 17) {
		document.getElementById('greetings').innerText = gree3 + name;
	} else {
		document.getElementById('greetings').innerText = gree4 + name;
	}
}

// Initial greeting
updateGreeting();

// Update greeting every 15 minutes (900000ms)
setInterval(updateGreeting, 900000);
