
//   const avatarInput = document.getElementById('avatarUpload');
//   const avatarImg = document.getElementById('avatarPreview');

//   // При загрузке страницы – восстановить изображение из localStorage
//   window.addEventListener('load', () => {
//     const savedImage = localStorage.getItem('avatarImage');
//     if (savedImage) {
//       avatarImg.src = savedImage;
//     }
//   });

//   avatarInput.addEventListener('change', function () {
//     const file = this.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = function (e) {
//         avatarImg.src = e.target.result;
//         // Сохраняем изображение в localStorage
//         localStorage.setItem('avatarImage', e.target.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   });


  const avatarInput = document.getElementById('avatarUpload');
  const avatarImg = document.getElementById('avatarPreview');

  avatarInput.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        avatarImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
