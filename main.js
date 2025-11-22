// ===== Dark/Light Mode =====
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});

// تفعيل الوضع المحفوظ
if(localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// ===== Language Toggle =====
const langToggle = document.getElementById('langToggle');
if(langToggle){
  langToggle.addEventListener('click', () => {
    if(location.pathname.includes('-en.html')){
      // إذا النسخة الإنجليزية، اذهب للنسخة العربية
      location.href = location.pathname.replace('-en.html', '.html');
    } else {
      // إذا النسخة العربية، اذهب للنسخة الإنجليزية
      location.href = location.pathname.replace('.html', '-en.html');
    }
  });
}
