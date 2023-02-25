document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".button-header"),
    forms = document.querySelectorAll("form"),
    modal = document.querySelector(".modal"),
    closerBtn = document.querySelector("[data-close]"); 

  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.reset()
    })
  })

  function autoOn() {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
    clearInterval(timerId);
  }

  btn.addEventListener("click", autoOn);

  const timerId = setTimeout(autoOn, 3000);

  function removerModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
    document.body.style.overflow = "";
  }
  closerBtn.addEventListener("click", removerModal);

  modal.addEventListener("click", (event) => {
    if (event.target == modal) {
      removerModal();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.code == "Escape" && modal.classList.contains("show")) {
      removerModal();
    }
  });
  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight ==
      document.documentElement.scrollHeight
    ) {
      autoOn();
      removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);
})