function getResponse() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    // Aturan-aturan sederhana berdasarkan input pengguna
    if (input.toLowerCase().indexOf("hai") !== -1) {
      output.innerHTML = "Halo! Apa kabar?";
    } else if (input.toLowerCase().indexOf("jakarta-lampung") !== -1) {
      output.innerHTML = "Harga tiket pesawat tujuan jakarta lampung mulai dari Rp413.000,Selasa, 29 Apr 2025 dengan penerbangan Lion,Rp513.000,Rabu, 30 Apr 2025 dengan penerbangan Air asia,Hingga 710.000,Senin, 12 Mei 2025 dengan penerbangan Transnusa ?.";
    } else if (input.toLowerCase().indexOf(" jakarta-bali") !== -1) {
      output.innerHTML =
        "Harga tiket pesawat tujuan jakarta bali mulai dari Rp709.000,Senin, 12 Mei 2025 dengan penerbangan Lion,Rp740.000,Rabu, 30 Apr 2025 dengan penerbangan Air asia,Hingga Rp816.000,Selasa, 29 Apr 2025 dengan penerbangan Transnusa..";
    } else if ( input.toLowerCase().indexOf("kalau penerbangan bogor bandung?") !== -1) {
      output.innerHTML = "Maaf tidak ada penerbangan bogor bandung.";
    } else if (input.toLowerCase().indexOf("terimakasih") !== -1) {
      output.innerHTML = "Terima kasih kembali! Semoga penerbanganmu menyenagkan.";
    } else {
      output.innerHTML = "Maaf, saya tidak mengerti apa yang Anda maksud.";
    }
  }