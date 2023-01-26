const btnModal = document.getElementById("btn-modal");
const btnClose = document.getElementById("btn-close");
const modalContent = document.getElementById("modal-content");

btnModal.addEventListener("click", () => {
  modalContent.classList.remove("scale-0");
});
btnClose.addEventListener("click", () => {
  modalContent.classList.add("scale-0");
});
window.addEventListener("click", (e) => {
  if (e.target != btnModal && e.target != btnClose) {
    modalContent.classList.add("scale-0");
  }
});
