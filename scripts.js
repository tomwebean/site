const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
  card.addEventListener("click", function() {
    const imagensId = card.getAttribute("id")
    modalOverlay.classList.add("active")
    modalOverlay.querySelector("iframe").src=`imagens/${imagensId}`
  })
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active")
  modalOverlay.querySelector("iframe").src="" // Caso queira colocar video e fechar apos o click
})
