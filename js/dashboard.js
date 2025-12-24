// LNB 
const sidebar = document.getElementById('sidebar');
const btnToggle = document.getElementById('btnToggle');
const logoImg = document.getElementById('logoImg');

btnToggle.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');

  if (sidebar.classList.contains('collapsed')) {
    logoImg.src = 'assets/images/logo-icon.svg';
  } else {
    logoImg.src = 'assets/images/logo-full.svg';
  }
});

// lnb 메뉴 아이콘 이미지 교체
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  const img = item.querySelector('.icon img');

  // 초기 active 상태 처리
  if (item.classList.contains('active')) {
    img.src = img.dataset.active;
  }

  item.addEventListener('click', () => {
    menuItems.forEach(i => {
      i.classList.remove('active');
      const icon = i.querySelector('.icon img');
      icon.src = icon.dataset.default;
    });

    item.classList.add('active');
    img.src = img.dataset.active;
  });
});

// progress bar
window.addEventListener('load', () => {
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const percent = bar.dataset.percent;
    requestAnimationFrame(() => {
      bar.style.width = percent + '%';
    });
  });
});