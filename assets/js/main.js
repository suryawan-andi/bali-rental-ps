document.addEventListener('DOMContentLoaded', () => {
  const bar = document.getElementById('top-progress');

  document.querySelectorAll('a[href$=".html"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.startsWith('#')) return;

      e.preventDefault();
      
      // Mulai jalan
      bar.classList.remove('done');
      bar.classList.add('loading');
      
      // Biar keliatan jalan cepet
      setTimeout(() => {
        bar.style.width = '90%';
      }, 50);

      // Pindah halaman setelah 350ms aja, jadi gak lambat
      setTimeout(() => {
        bar.classList.add('done');
        window.location.href = this.href;
      }, 350);
    });
  });
});