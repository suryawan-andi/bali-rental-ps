// assets/js/sidebar.js - versi fix
const sidebar = document.getElementById('sidebar');
if (sidebar) {
  const activePage = sidebar.getAttribute('data-active') || 'beranda';
  
  // tentukan path balik ke root (karena kamu di dalam pages/)
  const isInPages = window.location.pathname.includes('/pages/');
  const rootPath = isInPages ? '../../' : '';

  sidebar.innerHTML = `
    <div style="font-weight:800;color:#1e40af;margin-bottom:24px;font-size:20px; padding:10px;">🎮 Rental PS</div>
    <a href="${rootPath}dashboard.html" class="${activePage==='beranda'?'active':''}">🏠 Beranda</a>
    <a href="${rootPath}pages/booking-saya/index.html" class="${activePage==='booking'?'active':''}">📅 Booking saya</a>
    <a href="${rootPath}pages/tagihan/index.html" class="${activePage==='tagihan'?'active':''}">💳 Tagihan dan Deposit</a>
    <a href="${rootPath}pages/riwayat/index.html" class="${activePage==='riwayat'?'active':''}">🕒 Riwayat Sewa</a>
    <a href="${rootPath}pages/promo/index.html" class="${activePage==='promo'?'active':''}">🏷️ Promo & Info</a>
    <a href="${rootPath}pages/profil/index.html" class="${activePage==='profil'?'active':''}">👤 Profil</a>
    <a href="${rootPath}login.html" style="margin-top:30px; color:#ef4444;">🚪 Keluar</a>
  `;
}