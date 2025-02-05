// mob sub menu

document.addEventListener("DOMContentLoaded", () => {
  const languageItems = document.querySelectorAll(".mob-language-item");
  languageItems.forEach((item) => {
    item.addEventListener("click", () => {
      languageItems.forEach((el) => el.classList.remove("active"));

      item.classList.add("active");

      const selectedLanguage = item.dataset.language;

      if (selectedLanguage === "ua") {
        window.location.href = "/ua/index.html";
      } else if (selectedLanguage === "en") {
        window.location.href = "/index.html";
      }
    });
  });
});

// open close mob menu

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),

    closeModalBtn: document.querySelector("[data-modal-close]"),

    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-open");
  }
})();
