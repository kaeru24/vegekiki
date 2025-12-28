//
const veges = [
  {title: "トマト", detail: "赤いの", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGQvbl-ERbfuHJlOjgWybSFdaSK_YaMlLdQ&s"},
  {title: "きゅうり", detail: "緑の", image: "https://www.funasho-group.co.jp/salute/mg/wp-content/uploads/2000/04/eggplant2.jpg"},
  {title: "ハム", detail: "ピンクの", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0RPT7OfbPTyqgxuXs1PKN9XhoIWJ3FcNTw&s"}
];

function renderVeges() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  veges.forEach((vege) => {
    list.innerHTML += `
      <div class="vege">
        <button class="toggle">${vege.title}</button>
        
        <div class="detail">
          <img src="${vege.image}" alt="${vege.title}">
          <p>${vege.detail}</p>
        </div>
      </div>
    `;
  });
}

function setupAccordion() {
  const newToggleBtns = document.querySelectorAll(".toggle");
  const newDetails = document.querySelectorAll(".detail");

  newToggleBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const isOpen = newDetails[index].classList.contains("is-open");

      newDetails.forEach((detail) => {
        detail.classList.remove("is-open");
      });
     
      if (!isOpen) {
        newDetails[index].classList.add("is-open")
      };
    });
  });
}

renderVeges();
setupAccordion();