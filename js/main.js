//==== 문서 미리보기 ====
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'assets/images/preview01.png',
    'assets/images/preview02.png',
    'assets/images/preview03.png',
    'assets/images/preview04.png',
    'assets/images/preview05.png',
    'assets/images/preview06.png'
  ];

  let currentIndex = 0;
  const mainPreview = document.getElementById('mainPreview');
  const thumbs = document.querySelectorAll('.thumb');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  function updatePreview(index) {
    currentIndex = index;
    mainPreview.src = images[index];

    thumbs.forEach(t => t.classList.remove('active'));
    thumbs[index].classList.add('active');
  }

  prevBtn.addEventListener('click', () => {
    let newIndex = (currentIndex - 1 + images.length) % images.length;
    updatePreview(newIndex);
  });

  nextBtn.addEventListener('click', () => {
    let newIndex = (currentIndex + 1) % images.length;
    updatePreview(newIndex);
  });

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      updatePreview(Number(thumb.dataset.index));
    });
  });
});


//==== 파일업로드 커스텀 ====
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const fileName = document.getElementById('fileName');

// 버튼 클릭 시 숨긴 input 클릭
uploadBtn.addEventListener('click', () => {
  fileInput.click();
});

// 선택된 파일 이름 표시
fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    fileName.textContent = fileInput.files[0].name;
  } else {
    fileName.textContent = '선택된 파일 없음';
  }
});
