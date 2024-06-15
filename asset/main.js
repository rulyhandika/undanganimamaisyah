function updateCountdown() {
    // Tanggal target untuk countdown (misalnya: 1 Desember 2023, 09:00 WIB)
    var targetDate = new Date('2024-09-07T09:30:00Z').getTime();
    
    var now = new Date().getTime();
    var distance = targetDate - now;
    
    // Perhitungan waktu
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Update elemen HTML dengan nilai yang dihitung
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    
    // Jika waktu sudah habis, hentikan countdown
    if (distance < 0) {
        clearInterval(intervalId);
        document.getElementById('countdown').innerHTML = '<h3>Acara Telah Berlangsung!</h3>';
    }
}

// Panggil updateCountdown setiap detik (1000 milidetik)
var intervalId = setInterval(updateCountdown, 1000);

// Pemanggilan awal untuk memastikan countdown langsung terlihat
updateCountdown();


