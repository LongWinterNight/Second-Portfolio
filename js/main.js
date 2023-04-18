const btnDarkMode = document.querySelector('.dark-mode-button');

// 1. проверка тёмной темы на системной уровне

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  btnDarkMode.classList.add('dark-mode-button--active');
  document.body.classList.add('dark')
};

// 2. проверка тёмной темы в localStorage

if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-button--active');
  document.body.classList.add('dark');
} else if (localStorage.getItem('darkMode') === 'light') {
  btnDarkMode.classList.remove('dark-mode-button--active');
  document.body.classList.remove('dark');
};

// 3. если меняються системый настройки то меняем тему
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('cnange', (event) => {
  const newColorScheme = event.matches ? 'dark' : 'light';

  if (newColorScheme === 'dark') {
    btnDarkMode.classList.add('dark-mode-button--active');
    document.body.classList.add('dark')
    localStorage.setItem('darkMode', 'dark');
  } else {
    (newColorScheme === 'dark')
    btnDarkMode.classList.remove('dark-mode-button--active');
    document.body.classList.remove('dark')
    localStorage.setItem('darkMode', 'light');
  }

});

// включение ночного режима по кнопке
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle('dark-mode-button--active');
  const isDark = document.body.classList.toggle('dark');

  if (isDark) {
    localStorage.setItem('darkMode', 'dark')
  } else {
    localStorage.setItem('darkMode', 'light')
  };
}
