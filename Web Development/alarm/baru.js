var time,
    alarm,
    currentH,
    currentM,
    activeAlarm = false;
var sound = new Audio("https://freesound.org/data/previews/316/316847_4939433-lq.mp3");
sound.loop = true;

function displayTime() {
    var now = new Date();
    time = now.toLocaleTimeString();
    
    // Ganti CSSLayerBlockRule dengan ID yang benar
    document.getElementById('clock').textContent = time;

    // Periksa waktu alarm dengan format yang sama
    if (time === alarm) {
        sound.play();
        snooze.className = "";
    }

    setTimeout(displayTime, 1000);
}
displayTime();

function addMinSecVals(id) {
    var select = id;
    var min = 59;
    for (var i = 0; i <= min; i++) {
        select.options[select.options.length] = new Option(
            i < 10 ? "0" + i : i,
            i < 10 ? "0" + i : i
        );
    }
}

function addHours(id) {
    var select = id;
    var hour = 12;
    for (var i = 1; i <= hour; i++) {
        select.options[select.options.length] = new Option(
            i < 10 ? "0" + i : i,
            i
        );
    }
}

addMinSecVals(minutes);
addMinSecVals(seconds);
addHours(hours);

startstop.onclick = function () {
    if (activeAlarm === false) {
        hours.disabled = true;
        minutes.disabled = true;
        seconds.disabled = true;
        ampm.disabled = true;

        alarm =
            hours.value +
            ":" +
            minutes.value +
            ":" +
            seconds.value +
            " " + ampm.value; // Pastikan ada spasi sebelum AM/PM
        this.textContent = "Clear Alarm";
        activeAlarm = true;
    } else {
        hours.disabled = false;
        minutes.disabled = false;
        seconds.disabled = false;
        ampm.disabled = false;
        sound.pause();
        alarm = "00:00:00 AM"; // Atur ke waktu default saat alarm dibersihkan
        this.textContent = "Set Alarm";
        snooze.className = "hide";
        activeAlarm = false;
    }
};

snooze.onclick = function () {
    if (activeAlarm === true) {
        currentH = parseInt(time.substr(0, 2));
        currentM = parseInt(time.substr(3, 2));

        // Menambahkan 5 menit ke waktu saat ini
        currentM += 5;
        if (currentM >= 60) {
            currentM -= 60;
            currentH += 1;
            if (currentH > 12) currentH -= 12; // Menyesuaikan jam 12-jam
        }

        // Update nilai jam dan menit di elemen
        hours.value = currentH < 10 ? "0" + currentH : currentH;
        minutes.value = currentM < 10 ? "0" + currentM : currentM;

        snooze.className = "hide";
        startstop.click(); // Memulai alarm lagi
    } else {
        return false;
    }
};
