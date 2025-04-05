// Ambil parameter dari URL
function getNamaDariURL() {
    const params = new URLSearchParams(window.location.search);
    const nama = params.get("nama");
    return nama ? decodeURIComponent(nama.replace(/\+/g, ' ')) : "Tamu Undangan";
}

// Tampilkan nama ke dalam span
window.addEventListener('DOMContentLoaded', () => {
    const namaSpan = document.getElementById("namaTamu");
    namaSpan.textContent = getNamaDariURL();
});
// https://namadomain.com/undangan.html?nama=Rina%20Saputri