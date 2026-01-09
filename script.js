//
const veges = [
  {title: "トマト", detail: "赤いの", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThGQvbl-ERbfuHJlOjgWybSFdaSK_YaMlLdQ&s"},
  {title: "きゅうり", detail: "緑の", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAbwPt9sekJuWp2DThyeBzZHV1FSd2Kk-plGTLdwKv4APU2msuAv39I-M60AZdTblfUtX2aA1_6drUwwki6ugyg5JDwxe8nsncdZ03Ukox&s=10"}
];
const fruits = [
  {title: "りんご", detail: "赤いの", image: "https://media.delishkitchen.tv/article/975/fd3sgtfnxen.jpeg?version=1634782151"},
  {title: "ぶどう", detail: "粒が大きいの", image: "https://iconbu.com/wp-content/uploads/2025/09/%E3%81%B6%E3%81%A9%E3%81%86%E3%81%AE%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88.jpg"}
];
const fishes = [
  {title: "アジ", detail: "ハリ", image: "https://yamaria-encyclopedia-us.s3.amazonaws.com/image/artwork/image/5092/a31c732c-a6fb-4548-b711-e0c6ea0f7906.png"},
  {title: "サンマ", detail: "口が黄色", image: "https://www.wwf.or.jp/campaign/osakana/assets/img/detail/08/fish@2x.png"}
];
const others = [
  {title: "牛肉", detail: "なし", image: "https://media.delishkitchen.tv/article/678/ai3zzzkb8xi.jpeg?version=1626853186"},
  {title: "しょうゆ", detail: "なし", image: "https://item-shopping.c.yimg.jp/i/l/soukai_4901515111150"}
];
/*対応表*/
const foodsByCategory = {veges: veges, fruits: fruits, fishes: fishes, others: others};

foodsByCategory.all = [...veges, ...fruits, ...fishes, ...others];

/*検索機能*/
function toKatakana(str) {
  return str.replace(/[\u3041-\u3096]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}

let currentCategory = "all";

function renderFoods(foods, keyword = "") {
  const searchWord = toKatakana(keyword);

  const filteredFoods = foods.filter((food) =>
    toKatakana(food.title).includes(searchWord)
  );

  const list = document.getElementById("list");
  list.innerHTML = "";
 
  filteredFoods.forEach((food) => {
    list.innerHTML += `
      <div class="vege">
        <button class="toggle">
          <img class="icon" src="${food.image}" alt="">
          <span class="title">${food.title}</span>
          <span class="arrow">></span>
        </button>
        
        <div class="detail">
          <img src="${food.image}" alt="${food.title}">
          <p>${food.detail}</p>
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

/* 検索機能*/
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  renderFoods(foodsByCategory[currentCategory], searchInput.value);
  setupAccordion();
});

renderFoods(foodsByCategory[currentCategory]);
setupAccordion();

const categoryBtns = document.querySelectorAll(".category-btn");

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    if (currentCategory === category) {
      currentCategory = "all";
    } else {
      currentCategory = category;
    }

    renderFoods(foodsByCategory[currentCategory], searchInput.value);
    setupAccordion();
  });
});
