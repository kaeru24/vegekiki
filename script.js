//
const veges = [
  {title: "トマト", detail: "赤いの", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGQvbl-ERbfuHJlOjgWybSFdaSK_YaMlLdQ&s"},
  {title: "きゅうり", detail: "緑の", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbwPt9sekJuWp2DThyeBzZHV1FSd2Kk-plGTLdwKv4APU2msuAv39I-M60AZdTblfUtX2aA1_6drUwwki6ugyg5JDwxe8nsncdZ03Ukox&s=10"},
  {title: "ハム", detail: "ピンクの", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0RPT7OfbPTyqgxuXs1PKN9XhoIWJ3FcNTw&s"}
];

/*（★）検索機能*/
function toKatakana(str) {
  return str.replace(/[\u3041-\u3096]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}
/*(★)*/

function renderVeges(keyword = "") {
  const list = document.getElementById("list");
  list.innerHTML = "";

  const searchWord = toKatakana(keyword);

  const filteredVeges = veges.filter((vege) =>
    toKatakana(vege.title).includes(searchWord)
  );

  filteredVeges.forEach((vege) => {
    list.innerHTML += `
      <div class="vege">
        <button class="toggle">
          <img class="icon" src="${vege.image}" alt="">
          <span class="title">${vege.title}</span>
          <span class="arrow">></span>
        </button>
        
        <div class="detail">
          <img src="${vege.image}" alt="${vege.title}">
          <p>${vege.detail}</p>
        </div>
      </div>
    `;
  });
}

/*アコーディオン*/
function setupAccordion() {
  const newToggleBtns = document.querySelectorAll(".toggle");
  const newDetails = document.querySelectorAll(".detail");

  newToggleBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const isOpen = newDetails[index].classList.contains("is-open");

      newDetails.forEach((detail) =>
        detail.classList.remove("is-open"));

      newToggleBtns.forEach((btn) =>
      btn.classList.remove("is-open"));
     
      if (!isOpen) {
        newDetails[index].classList.add("is-open");
        newToggleBtns[index].classList.add("is-open");
      }
    });
  });
}

renderVeges();
setupAccordion();

/* 検索機能*/
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  renderVeges(searchInput.value);
  setupAccordion();
});