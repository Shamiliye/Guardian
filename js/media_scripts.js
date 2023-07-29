var currentIndex = 0; //Текущий индекс отображаемого изображения
var images = document.getElementsByClassName("image"); //Все эл-ты с классом image
let conceptArts = document.getElementsByClassName("concept-art")
//открытие модального окна
function openModal(element) {
 
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");
  console.log(element);
  modal.style.display = "block";
  modalImg.src = element.src;
  captionText.textContent = element.alt;
}

//Закрытие модального окна
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

//Изменение отображаемого изображения
function changeImage(n) {
  currentIndex += n;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");
  modalImg.src = images[currentIndex].src;
  captionText.innerHTML = images[currentIndex].alt;
}
