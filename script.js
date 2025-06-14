let selectedAvatar = "";

document.getElementById("avatarUpload").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    selectedAvatar = e.target.result;
    document.getElementById("avatarPreview").src = selectedAvatar;
  };
  reader.readAsDataURL(file);
});




function add() {
  event.preventDefault();

  const name = document.getElementById("nameInput").value.trim();
  const surname = document.getElementById("surnameInput").value.trim();
  const phone = document.getElementById("phoneInput").value.trim();
  const date = document.getElementById("dateInput").value.trim();

  if (!name || !surname || !phone || !date) {
    alert("Iltimos, ism, familiya, telefon raqam va sana kiriting!");
    return;
  }

  const saveContactPlace = document.getElementById("saveContactPlace");

  const contactDiv = document.createElement("div");
  contactDiv.classList.add("user-contact");

  contactDiv.innerHTML = `
        <div class="user-icon-2" style="width: 65px; height: 65px;">
            <img src="${selectedAvatar || './img/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector 1.svg'}"
                class="rounded-circle"
                style="width: 65px; height: 65px; object-fit: cover; border: 2px solid #394867;"
                alt="avatar">
        </div>
        <div class="save-contact-text">
            <h2 class="save-contact-h2">${name} ${surname}</h2>
            <p class="save-contact-p">+${phone}, ${date}</p>
        </div>
        <i class="bi bi-star"></i>
    `;

  saveContactPlace.appendChild(contactDiv);

  document.getElementById("login-form").reset();
  document.getElementById("avatarPreview").src = "./img/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector 1.svg";
  selectedAvatar = "";

  const star = contactDiv.querySelector(".bi-star");

  star.addEventListener("click", () => {
    const isFavorite = star.classList.contains("bi-star-fill");

    if (isFavorite) {
      // Удаляем "избранное"
      star.classList.remove("bi-star-fill");
      star.classList.add("bi-star");
      contactDiv.style.backgroundColor = "#f6f9fa"; // сброс фона
      contactDiv.style.width = '100%'
    } else {
      // Делаем "избранным"
      star.classList.remove("bi-star");
      star.classList.add("bi-star-fill");
      contactDiv.style.backgroundColor = "#e7ecee"; // затемнённый фон
      contactDiv.style.borderRadius = '15px'
      contactDiv.style.width = '100%'
    }
  });

}

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const contacts = document.querySelectorAll("#saveContactPlace .user-contact");

  contacts.forEach(contact => {
    const name = contact.querySelector(".save-contact-h2")?.textContent.toLowerCase() || "";
    const phone = contact.querySelector(".save-contact-p")?.textContent.toLowerCase() || "";

    if (name.includes(query) || phone.includes(query)) {
      contact.style.display = "flex";
    } else {
      contact.style.display = "none";
    }
  });
});


  // function darkmode() {
  //   document.body.classList.toggle("dark-mode");
  // }


// function darkmode() {
//   let body = document.querySelector('body')
//   let left = document.querySelector('.left')
//   let right = document.querySelector('.right')
//   let navbar = document.querySelector('.navbar')
//   let contactList = document.querySelector('.contact-list')
//   let loginPlace = document.querySelector('.login-place')
//   let inputGroup = document.querySelectorAll('.input-group')
//   let inputText  = document.querySelector('.input-group-text')

//   body.classList.toggle('body-darkmode')
//   left.classList.toggle('left-darkmode')
//   right.classList.toggle('right-darkmode')
//   contactList.classList.toggle('contact-list-darkmode')
//   loginPlace.classList.toggle('login-place-darkmode')
//   inputGroup.classList.toggle('input-group-darkmode')
//   inputText.classList.toggle('input-group-text-darkmode')
//   navbar.classList.toggle('navbar-darkmode')
// }
