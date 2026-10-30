  const inputSandi = document.getElementById('sandi');
  const toggle = document.getElementById('toggleSandi');

  toggle.addEventListener('click', function() {
    if (inputSandi.type === 'password') {
      inputSandi.type = 'text';
      toggle.textContent = '🙈'; // jadi mata ketutup
    } else {
      inputSandi.type = 'password';
      toggle.textContent = '👁️'; // jadi mata kebuka
    }
  });