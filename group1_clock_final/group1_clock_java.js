function clock() {
	const MyBrowserDate = new Date();

	var hours = MyBrowserDate.getHours();
	var mins = MyBrowserDate.getMinutes();
	var secs = MyBrowserDate.getSeconds();
	var ampm = MyBrowserDate.getHours(); 



	if (mins < 10) {
		mins = "0" + mins;
	}

	if (secs < 10) {
		secs = "0" + secs;
	}

	if (hours > 12) {
		hours = hours - 12;
	}

	if (hours < 10) {
		hours = "0" + hours; 
	}

	if (ampm >= 12 ){
		ampm="PM";
	}
	else{
		ampm="AM";
	}

	document.getElementById('hours_html').innerHTML = hours + " :";
	document.getElementById('minutes_html').innerHTML = mins + " :";
	document.getElementById('seconds_html').innerHTML = secs;
	document.getElementById('ampm_html').innerHTML = ampm;
}

setInterval(clock, 1000);




// EXPLANATION HERE:

// new Date() pulls the full date and time from the web browser.
// We didn't need the full date, as time was the only thing necessary for the clock, so we used .getHours/Minutes/Seconds and assigned them to their own respective variables.
// Then, we used 'if' statements to make the clock a 12 hour one.
// Same thing was done to display AM and PM.
// Then we used 'document.getElementById' and assigned it to our HTML tag '[interval]_html'. This was done to actually have the clock's information displayed on screen.
// After displayed, each hour/minute/second is assigned it's own <span ID>, which allowed it to be styled in CSS.
// We then wrapped everything into one function titled 'clock', and had it refresh every second by 'setInterval(clock, 1000);'.

// That's all. Shoutout to my group members and Mr. B.C. for contributing to this awesome project.
