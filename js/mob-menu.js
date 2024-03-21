(() => {
    const refs = {
      openModalBtn: document.querySelector("[mobile-menu-open]"),
      closeModalBtn: document.querySelector("[mob-menuile-close]"),
      menu: document.querySelector("[mobile-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();