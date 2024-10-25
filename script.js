function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("aktif");
}

function tampilkanKonten(id) {
  const sidebar = document.getElementById("sidebar");
  const kontenItems = document.querySelectorAll(".konten-item");

  kontenItems.forEach((item) => item.classList.remove("aktif"));
  document.getElementById(id).classList.add("aktif");

  // Tutup sidebar setelah memilih menu
  sidebar.classList.remove("aktif");
}

// Inisialisasi Chart.js untuk data dashboard
const ctx = document.getElementById("grafikData").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Total Postingan", "Total Pengunjung", "Komentar"],
    datasets: [
      {
        label: "Jumlah Data",
        data: [504, 80, 284],
        backgroundColor: "rgba(0, 192, 239, 0.2)",
        borderColor: "#00c0ef",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  },
});

// Inisialisasi Chart.js untuk data laporan aktivitas
const ctxLaporan = document.getElementById("grafikLaporan").getContext("2d");
new Chart(ctxLaporan, {
  type: "line",
  data: {
    labels: ["22 Okt", "23 Okt", "24 Okt"],
    datasets: [
      {
        label: "Pengunjung Baru",
        data: [30, 120, 50],
        backgroundColor: "rgba(255, 105, 180, 0.2)",
        borderColor: "#ff69b4",
        borderWidth: 2,
        tension: 0.4,
        fill: true,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
    },
  },
});
