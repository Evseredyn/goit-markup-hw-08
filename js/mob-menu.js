(() => {
    const refs = {
      openModalBtn: document.querySelector("[mob-menu-open]"),
      closeModalBtn: document.querySelector("[mob-menu-close]"),
      menu: document.querySelector("[mob-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();