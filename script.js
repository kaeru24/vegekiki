//
const veges = [
  {title: "トマト", detail: "", image: "", detailImage: ""},
  {title: "きゅうり", detail: "", image: "", detailImage: ""},
  {title: "なす", detail: "", image: "", detailImage: ""},
  {title: "じゃがいも", detail: "", image: "", detailImage: ""},
  {title: "たまねぎ", detail: "", image: "", detailImage: ""},
  {title: "にんじん", detail: "", image: "", detailImage: ""},
  {title: "キャベツ", detail: "", image: "", detailImage: ""},
  {title: "レタス", detail: "", image: "", detailImage: ""},
  {title: "ねぎ", detail: "", image: "", detailImage: ""},
  {title: "大根", detail: "", image: "", detailImage: ""},
  {title: "白菜", detail: "", image: "", detailImage: ""},
  {title: "もやし", detail: "", image: "", detailImage: ""},
  {title: "ほうれん草", detail: "", image: "", detailImage: ""},
  {title: "小松菜", detail: "", image: "", detailImage: ""},
  {title: "ピーマン", detail: "", image: "", detailImage: ""},
  {title: "ブロッコリー", detail: "", image: "", detailImage: ""},
  {title: "パプリカ", detail: "", image: "", detailImage: ""},
  {title: "かぼちゃ", detail: "", image: "", detailImage: ""},
  {title: "さつまいも", detail: "", image: "", detailImage: ""},
  {title: "里いも", detail: "", image: "", detailImage: ""},
  {title: "ごぼう", detail: "", image: "", detailImage: ""},
  {title: "れんこん", detail: "", image: "", detailImage: ""},
  {title: "たけのこ", detail: "", image: "", detailImage: ""},
  {title: "にら", detail: "", image: "", detailImage: ""},
  {title: "しょうが", detail: "", image: "", detailImage: ""},
  {title: "にんにく", detail: "", image: "", detailImage: ""},
  {title: "チンゲン菜", detail: "", image: "", detailImage: ""},
  {title: "水菜", detail: "", image: "", detailImage: ""},
  {title: "春菊", detail: "", image: "", detailImage: ""},
  {title: "セロリ", detail: "", image: "", detailImage: ""},
  {title: "ズッキーニ", detail: "", image: "", detailImage: ""},
  {title: "オクラ", detail: "", image: "", detailImage: ""},
  {title: "いんげん", detail: "", image: "", detailImage: ""},
  {title: "枝豆", detail: "", image: "", detailImage: ""},
  {title: "とうもろこし", detail: "", image: "", detailImage: ""},
  {title: "アスパラガス", detail: "", image: "", detailImage: ""},
  {title: "カリフラワー", detail: "", image: "", detailImage: ""},
  {title: "かぶ", detail: "", image: "", detailImage: ""},
  {title: "ししとう", detail: "", image: "", detailImage: ""},
  {title: "唐辛子", detail: "", image: "", detailImage: ""},
  {title: "ゴーヤ", detail: "", image: "", detailImage: ""},
  {title: "しそ", detail: "", image: "", detailImage: ""},
  {title: "みょうが", detail: "", image: "", detailImage: ""},
  {title: "長芋", detail: "", image: "", detailImage: ""},
  {title: "らっきょう", detail: "", image: "", detailImage: ""},

  {title: "しいたけ", detail: "", image: "", detailImage: ""},
  {title: "しめじ", detail: "", image: "", detailImage: ""},
  {title: "えのき", detail: "", image: "", detailImage: ""},
  {title: "まいたけ", detail: "", image: "", detailImage: ""},
  {title: "エリンギ", detail: "", image: "", detailImage: ""},
  {title: "なめこ", detail: "", image: "", detailImage: ""},
  {title: "きくらげ", detail: "", image: "", detailImage: ""},

  {title: "ルッコラ", detail: "", image: "", detailImage: ""},
  {title: "パクチー", detail: "", image: "", detailImage: ""},
  {title: "三つ葉", detail: "", image: "", detailImage: ""},
  {title: "パセリ", detail: "", image: "", detailImage: ""},
  {title: "バジル", detail: "", image: "", detailImage: ""},
  {title: "ラディッシュ", detail: "", image: "", detailImage: ""},
  {title: "芽キャベツ", detail: "", image: "", detailImage: ""}
];

const fruits = [
  {title: "りんご", detail: "", image: "", detailImage: ""},
  {title: "バナナ", detail: "", image: "", detailImage: ""},
  {title: "みかん", detail: "", image: "", detailImage: ""},
  {title: "いちご", detail: "", image: "", detailImage: ""},
  {title: "ぶどう(グレープ）", detail: "", image: "", detailImage: ""},
  {title: "マスカット", detail: "", image: "", detailImage: ""},
  {title: "キウイ", detail: "", image: "", detailImage: ""},
  {title: "オレンジ", detail: "", image: "", detailImage: ""},
  {title: "グレープフルーツ", detail: "", image: "", detailImage: ""},
  {title: "もも", detail: "", image: "", detailImage: ""},
  {title: "なし", detail: "", image: "", detailImage: ""},
  {title: "パイナップル", detail: "", image: "", detailImage: ""},
  {title: "すいか", detail: "", image: "", detailImage: ""},
  {title: "メロン", detail: "", image: "", detailImage: ""},
  {title: "さくらんぼ", detail: "", image: "", detailImage: ""},
  {title: "柿", detail: "", image: "", detailImage: ""},
  {title: "ブルーベリー", detail: "", image: "", detailImage: ""},
  {title: "マンゴー", detail: "", image: "", detailImage: ""},
  {title: "レモン", detail: "", image: "", detailImage: ""},
  {title: "アボカド", detail: "", image: "", detailImage: ""},
  {title: "いちじく", detail: "", image: "", detailImage: ""},
  {title: "びわ", detail: "", image: "", detailImage: ""},
  {title: "すもも", detail: "", image: "", detailImage: ""},
  {title: "あんず", detail: "", image: "", detailImage: ""},
  {title: "梅", detail: "", image: "", detailImage: ""},
  {title: "金柑", detail: "", image: "", detailImage: ""},

  {title: "いよかん", detail: "", image: "", detailImage: ""},
  {title: "はっさく", detail: "", image: "", detailImage: ""},
  {title: "デコポン", detail: "", image: "", detailImage: ""},
  {title: "ぽんかん", detail: "", image: "", detailImage: ""},
  {title: "甘夏", detail: "", image: "", detailImage: ""},
  {title: "文旦", detail: "", image: "", detailImage: ""},
  {title: "ゆず", detail: "", image: "", detailImage: ""},
  {title: "すだち", detail: "", image: "", detailImage: ""},
  {title: "かぼす", detail: "", image: "", detailImage: ""},
  {title: "ライム", detail: "", image: "", detailImage: ""},

  {title: "洋なし", detail: "", image: "", detailImage: ""},
  {title: "栗", detail: "", image: "", detailImage: ""},
  {title: "なつめ", detail: "", image: "", detailImage: ""},
  {title: "ざくろ", detail: "", image: "", detailImage: ""},
  {title: "ラズベリー", detail: "", image: "", detailImage: ""},
  {title: "ブラックベリー", detail: "", image: "", detailImage: ""},
  {title: "クランベリー", detail: "", image: "", detailImage: ""},

  {title: "ドラゴンフルーツ", detail: "", image: "", detailImage: ""},
  {title: "パパイヤ", detail: "", image: "", detailImage: ""},
  {title: "グァバ", detail: "", image: "", detailImage: ""},
  {title: "スターフルーツ", detail: "", image: "", detailImage: ""},
  {title: "パッションフルーツ", detail: "", image: "", detailImage: ""},
  {title: "ライチ", detail: "", image: "", detailImage: ""},
  {title: "ロンガン", detail: "", image: "", detailImage: ""},
  {title: "マンゴスチン", detail: "", image: "", detailImage: ""},
  {title: "ランブータン", detail: "", image: "", detailImage: ""},

  {title: "デーツ", detail: "", image: "", detailImage: ""},
  {title: "プルーン", detail: "", image: "", detailImage: ""},
  {title: "ココナッツ", detail: "", image: "", detailImage: ""},
];

const fishes = [
  {title: "サケ", detail: "", image: "", detailImage: ""},
  {title: "サバ", detail: "", image: "", detailImage: ""},
  {title: "アジ", detail: "", image: "", detailImage: ""},
  {title: "マグロ", detail: "", image: "", detailImage: ""},
  {title: "ブリ", detail: "", image: "", detailImage: ""},
  {title: "タイ", detail: "", image: "", detailImage: ""},
  {title: "イワシ", detail: "", image: "", detailImage: ""},
  {title: "サンマ", detail: "", image: "", detailImage: ""},
  {title: "タラ", detail: "", image: "", detailImage: ""},
  {title: "カツオ", detail: "", image: "", detailImage: ""},
  {title: "ヒラメ", detail: "", image: "", detailImage: ""},
  {title: "カレイ", detail: "", image: "", detailImage: ""},
  {title: "アユ", detail: "", image: "", detailImage: ""},
  {title: "サワラ", detail: "", image: "", detailImage: ""},
  {title: "イカ", detail: "", image: "", detailImage: ""},
  {title: "タコ", detail: "", image: "", detailImage: ""},
  {title: "エビ", detail: "", image: "", detailImage: ""},
  {title: "カニ", detail: "", image: "", detailImage: ""},
  {title: "ホタテ", detail: "", image: "", detailImage: ""},
  {title: "アサリ", detail: "", image: "", detailImage: ""},
  {title: "シジミ", detail: "", image: "", detailImage: ""},
  {title: "ハマグリ", detail: "", image: "", detailImage: ""},
  {title: "カキ", detail: "", image: "", detailImage: ""},
  {title: "ウナギ", detail: "", image: "", detailImage: ""},
  {title: "アナゴ", detail: "", image: "", detailImage: ""},
  {title: "メカジキ", detail: "", image: "", detailImage: ""},
  {title: "カジキ", detail: "", image: "", detailImage: ""},
  {title: "ホッケ", detail: "", image: "", detailImage: ""},
  {title: "ニシン", detail: "", image: "", detailImage: ""},
  {title: "シシャモ", detail: "", image: "", detailImage: ""},
  {title: "コハダ", detail: "", image: "", detailImage: ""},
  {title: "イナダ", detail: "", image: "", detailImage: ""}, // ブリ系の若魚（別名扱いが気になるなら削除OK）
  {title: "ハマチ", detail: "", image: "", detailImage: ""}, // 同上（別名扱いが気になるなら削除OK）
  {title: "コイ", detail: "", image: "", detailImage: ""},
  {title: "フナ", detail: "", image: "", detailImage: ""},
  {title: "ワカサギ", detail: "", image: "", detailImage: ""},
  {title: "キス", detail: "", image: "", detailImage: ""},
  {title: "ハゼ", detail: "", image: "", detailImage: ""},
  {title: "メバル", detail: "", image: "", detailImage: ""},
  {title: "カサゴ", detail: "", image: "", detailImage: ""},
  {title: "アンコウ", detail: "", image: "", detailImage: ""},
  {title: "キンメダイ", detail: "", image: "", detailImage: ""},
  {title: "ノドグロ", detail: "", image: "", detailImage: ""},
  {title: "フグ", detail: "", image: "", detailImage: ""},
  {title: "ハタハタ", detail: "", image: "", detailImage: ""},
  {title: "コマイ", detail: "", image: "", detailImage: ""},
  {title: "ボラ", detail: "", image: "", detailImage: ""},
  {title: "トビウオ", detail: "", image: "", detailImage: ""},
  {title: "アマエビ", detail: "", image: "", detailImage: ""},
  {title: "ブラックタイガー", detail: "", image: "", detailImage: ""}, // 品種/商材名寄りなら削除OK
  {title: "イセエビ", detail: "", image: "", detailImage: ""},
  {title: "ズワイガニ", detail: "", image: "", detailImage: ""}, // 種別なのでOK（かにと重複扱いなら削除）
  {title: "タラバガニ", detail: "", image: "", detailImage: ""},
  {title: "アカガイ", detail: "", image: "", detailImage: ""},
  {title: "サザエ", detail: "", image: "", detailImage: ""},
  {title: "アワビ", detail: "", image: "", detailImage: ""},
  {title: "イクラ", detail: "", image: "", detailImage: ""}, // 加工寄りなので条件厳密なら削除
  {title: "タラコ", detail: "", image: "", detailImage: ""} // 同上
];

const others = [
  { title: "牛肉", detail: "", image: "", detailImage: "" },
  { title: "豚肉", detail: "", image: "", detailImage: "" },
  { title: "鶏肉", detail: "", image: "", detailImage: "" },
  { title: "ひき肉（合いびき）", detail: "", image: "", detailImage: "" },
  { title: "ハム", detail: "", image: "", detailImage: "" },
  { title: "ベーコン", detail: "", image: "", detailImage: "" },
  { title: "ソーセージ", detail: "", image: "", detailImage: "" },
  { title: "サラダチキン", detail: "", image: "", detailImage: "" },
  { title: "肉団子（加工）", detail: "", image: "", detailImage: "" },
  { title: "焼き鳥（惣菜）", detail: "", image: "", detailImage: "" },

  // 卵・乳製品
  { title: "卵", detail: "", image: "", detailImage: "" },
  { title: "牛乳", detail: "", image: "", detailImage: "" },
  { title: "豆乳", detail: "", image: "", detailImage: "" },
  { title: "ヨーグルト", detail: "", image: "", detailImage: "" },
  { title: "バター", detail: "", image: "", detailImage: "" },
  { title: "マーガリン", detail: "", image: "", detailImage: "" },
  { title: "生クリーム", detail: "", image: "", detailImage: "" },
  { title: "チーズ（ブロック）", detail: "", image: "", detailImage: "" },
  { title: "スライスチーズ", detail: "", image: "", detailImage: "" },
  { title: "シュレッドチーズ（ピザ用）", detail: "", image: "", detailImage: "" },
  { title: "クリームチーズ", detail: "", image: "", detailImage: "" },

  // 大豆製品
  { title: "豆腐", detail: "", image: "", detailImage: "" },
  { title: "厚揚げ", detail: "", image: "", detailImage: "" },
  { title: "油揚げ", detail: "", image: "", detailImage: "" },
  { title: "納豆", detail: "", image: "", detailImage: "" },
  { title: "高野豆腐", detail: "", image: "", detailImage: "" },
  { title: "大豆（水煮）", detail: "", image: "", detailImage: "" },
  { title: "ミックスビーンズ（水煮）", detail: "", image: "", detailImage: "" },
  { title: "おから", detail: "", image: "", detailImage: "" },

  // 主食・粉・麺
  { title: "米（白米）", detail: "", image: "", detailImage: "" },
  { title: "玄米", detail: "", image: "", detailImage: "" },
  { title: "雑穀米", detail: "", image: "", detailImage: "" },
  { title: "パックごはん", detail: "", image: "", detailImage: "" },
  { title: "食パン", detail: "", image: "", detailImage: "" },
  { title: "ロールパン", detail: "", image: "", detailImage: "" },
  { title: "パン粉", detail: "", image: "", detailImage: "" },
  { title: "小麦粉（薄力粉）", detail: "", image: "", detailImage: "" },
  { title: "小麦粉（強力粉）", detail: "", image: "", detailImage: "" },
  { title: "米粉", detail: "", image: "", detailImage: "" },
  { title: "片栗粉", detail: "", image: "", detailImage: "" },
  { title: "コーンスターチ", detail: "", image: "", detailImage: "" },
  { title: "パスタ", detail: "", image: "", detailImage: "" },
  { title: "うどん（乾麺）", detail: "", image: "", detailImage: "" },
  { title: "そば（乾麺）", detail: "", image: "", detailImage: "" },
  { title: "春雨", detail: "", image: "", detailImage: "" },

  // 基本調味料
  { title: "塩", detail: "", image: "", detailImage: "" },
  { title: "砂糖", detail: "", image: "", detailImage: "" },
  { title: "はちみつ", detail: "", image: "", detailImage: "" },
  { title: "みりん", detail: "", image: "", detailImage: "" },
  { title: "料理酒", detail: "", image: "", detailImage: "" },
  { title: "酢（米酢）", detail: "", image: "", detailImage: "" },
  { title: "しょうゆ", detail: "", image: "", detailImage: "" },
  { title: "味噌", detail: "", image: "", detailImage: "" },
  { title: "ごま油", detail: "", image: "", detailImage: "" },
  { title: "サラダ油", detail: "", image: "", detailImage: "" },
  { title: "オリーブオイル", detail: "", image: "", detailImage: "" },
  { title: "マヨネーズ", detail: "", image: "", detailImage: "" },
  { title: "ケチャップ", detail: "", image: "", detailImage: "" },
  { title: "ソース（中濃）", detail: "", image: "", detailImage: "" },
  { title: "ぽん酢", detail: "", image: "", detailImage: "" },
  { title: "めんつゆ", detail: "", image: "", detailImage: "" },
  { title: "白だし", detail: "", image: "", detailImage: "" },
  { title: "顆粒だし", detail: "", image: "", detailImage: "" },

  // 旨味・洋中調味
  { title: "コンソメ", detail: "", image: "", detailImage: "" },
  { title: "鶏ガラスープの素", detail: "", image: "", detailImage: "" },
  { title: "中華だし（ペースト/顆粒）", detail: "", image: "", detailImage: "" },
  { title: "オイスターソース", detail: "", image: "", detailImage: "" },
  { title: "豆板醤", detail: "", image: "", detailImage: "" },
  { title: "コチュジャン", detail: "", image: "", detailImage: "" },
  { title: "ラー油", detail: "", image: "", detailImage: "" },
  { title: "パスタソース（レトルト）", detail: "", image: "", detailImage: "" }, // ←ここも「レトルト」なので不要なら消してOK

  // 香辛料
  { title: "こしょう", detail: "", image: "", detailImage: "" },
  { title: "ブラックペッパー", detail: "", image: "", detailImage: "" },
  { title: "七味唐辛子", detail: "", image: "", detailImage: "" },
  { title: "一味唐辛子", detail: "", image: "", detailImage: "" },
  { title: "カレー粉", detail: "", image: "", detailImage: "" },
  { title: "ガラムマサラ", detail: "", image: "", detailImage: "" },
  { title: "シナモン", detail: "", image: "", detailImage: "" },
  { title: "ナツメグ", detail: "", image: "", detailImage: "" },
  { title: "バジル（乾燥）", detail: "", image: "", detailImage: "" },
  { title: "オレガノ", detail: "", image: "", detailImage: "" },

  // 海藻・乾物・便利系
  { title: "焼きのり", detail: "", image: "", detailImage: "" },
  { title: "あおのり", detail: "", image: "", detailImage: "" },
  { title: "乾燥わかめ", detail: "", image: "", detailImage: "" },
  { title: "ひじき", detail: "", image: "", detailImage: "" },
  { title: "とろろ昆布", detail: "", image: "", detailImage: "" },
  { title: "すりごま", detail: "", image: "", detailImage: "" },
  { title: "練りごま", detail: "", image: "", detailImage: "" },
  { title: "きなこ", detail: "", image: "", detailImage: "" },
  { title: "ふりかけ", detail: "", image: "", detailImage: "" }
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

const savedFavs = JSON.parse(localStorage.getItem("vegekiki_favorites") || "[]");
const favorites = new Set(savedFavs);

function renderFoods(foods, keyword = "") {
  const searchWord = toKatakana(keyword);

  const filteredFoods = foods.filter((food) =>
    toKatakana(food.title).startsWith(searchWord)
  );

  const favFoods = filteredFoods.filter((f) => favorites.has(f.title));
  const normalFoods = filteredFoods.filter((f) => !favorites.has(f.title));
  const orderedFoods = [...favFoods, ...normalFoods];

  const list = document.getElementById("list");
  list.innerHTML = "";
 
  orderedFoods.forEach((food) => {
    list.innerHTML += `
      <div class="vege">
        <div class="toggle" role="button" tabindex="0">
          <img class="icon" src="${food.image}" alt="">
          <span class="title">${food.title}</span>
          <span class="right">
            <button type="button" class="fav-btn" data-title="${food.title}">
              ${favorites.has(food.title) ? "♥" : "♡"}
            </button>
            <span class="arrow">></span>
          </span>
        </div>
        
        <div class="detail">
          <img src="${food.detailImage}" alt="">
          <p>${food.detail}</p>
        </div>
      </div>
    `;
  });
}

/* 検索機能*/
const searchInput = document.getElementById("search");

document.getElementById("list").addEventListener("click", (e) => {
  const favBtn = e.target.closest(".fav-btn");
  if (!favBtn) return;

  const title = favBtn.dataset.title;
   if (favorites.has(title)) {
    favorites.delete(title);
    favBtn.textContent = "♡"; // ←見た目だけ即反映
  } else {
    favorites.add(title);
    favBtn.textContent = "♥"; // ←見た目だけ即反映
  }

  localStorage.setItem("vegekiki_favorites", JSON.stringify([...favorites]));
});

const listEl = document.getElementById("list");

listEl.addEventListener("click", (e) => {
  // ① ハートを押した時は「開閉」しない
  if (e.target.closest(".fav-btn")) return;

  // ② クリックされた場所が「どのtoggleの中か」を特定する
  const toggle = e.target.closest(".toggle");
  if (!toggle) return;

  // ③ toggleに対応するdetailを見つける
  const vege = toggle.closest(".vege");
  const detail = vege.querySelector(".detail");

  // ④ いま開いてるかどうか
  const isOpen = detail.classList.contains("is-open");

  // ⑤ いったん全部閉じる（1個だけ開く仕様）
  listEl.querySelectorAll(".detail.is-open").forEach(d => d.classList.remove("is-open"));
  listEl.querySelectorAll(".toggle.is-open").forEach(t => t.classList.remove("is-open"));

  // ⑥ さっき閉じる前に閉じてたなら、今回だけ開く
  if (!isOpen) {
    detail.classList.add("is-open");
    toggle.classList.add("is-open");
  }
});

searchInput.addEventListener("input", () => {
  renderFoods(foodsByCategory[currentCategory], searchInput.value);
});

const clearBtn = document.getElementById("clearSearch");

clearBtn.addEventListener("click", () => {
  searchInput.value = "";
  renderFoods(foodsByCategory[currentCategory]);
});

renderFoods(foodsByCategory[currentCategory]);

const categoryBtns = document.querySelectorAll(".category-btn");

categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;

    if (currentCategory === category) {
      currentCategory = "all";
    } else {
      currentCategory = category;
    }

    categoryBtns.forEach((b) =>
      b.classList.remove("is-dim"));

    if (currentCategory !== "all") {
      categoryBtns.forEach((b) => b.classList.add("is-dim"));
      btn.classList.remove("is-dim");
    }

    renderFoods(foodsByCategory[currentCategory], searchInput.value);
  });
});
