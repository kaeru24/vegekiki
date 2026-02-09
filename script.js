//
const veges = [
  {title: "トマト", detail: "", image: "veges-images2/トマト.webp", detailImage: "veges-details2/tomato.webp"},
  {title: "きゅうり", detail: "", image: "veges-images2/きゅうり.webp", detailImage: "veges-details2/kyuuri.webp"},
  {title: "ナス", detail: "", image: "veges-images2/なす.webp", detailImage: "veges-details2/nasu.webp"},
  {title: "じゃがいも", detail: "", image: "veges-images2/じゃがいも.webp", detailImage: "veges-details2/potato.webp"},
  {title: "たまねぎ", detail: "", image: "veges-images2/たまねぎ.webp", detailImage: "veges-details2/onion.webp"},
  {title: "にんじん", detail: "", image: "veges-images2/にんじん.webp", detailImage: "veges-details2/carrot.webp"},
  {title: "キャベツ", detail: "", image: "veges-images2/キャベツ.webp", detailImage: "veges-details2/kyabetu.webp"},
  {title: "レタス", detail: "", image: "veges-images2/レタス.webp", detailImage: "veges-details2/lettuce.webp"},
  {title: "ネギ", detail: "", image: "veges-images2/ネギ.webp", detailImage: "veges-details2/negi.webp"},
  {title: "大根", detail: "", image: "veges-images2/大根.webp", detailImage: "veges-details2/daikon.webp"},
  {title: "白菜", detail: "", image: "veges-images2/白菜.webp", detailImage: "veges-details2/hakusai.webp"},
  {title: "もやし", detail: "", image: "veges-images2/もやし.webp", detailImage: "veges-details2/moyashi.webp"},

  {title: "ほうれん草", detail: "", image: "veges-images2/ほうれん草.webp", detailImage: "veges-details2/horennsou.webp"},
  {title: "小松菜", detail: "", image: "veges-images2/小松菜.webp", detailImage: "veges-details2/komatsuna.webp"},
  {title: "ピーマン", detail: "", image: "veges-images2/ピーマン.webp", detailImage: "veges-details2/piman.webp"},
  {title: "ブロッコリー", detail: "", image: "veges-images2/ブロッコリー.webp", detailImage: "veges-details2/burokkori.webp"},
  {title: "パプリカ", detail: "", image: "veges-images2/パプリカ.webp", detailImage: "veges-details2/papurika.webp"},
  {title: "かぼちゃ", detail: "", image: "veges-images2/かぼちゃ.webp", detailImage: "veges-details2/kabocya.webp"},
  {title: "さつまいも", detail: "", image: "veges-images2/さつまいも.webp", detailImage: "veges-details2/satsumaimo.webp"},
  {title: "里いも", detail: "", image: "veges-images2/里芋.webp", detailImage: "veges-details2/satoimo.webp"},
  {title: "ごぼう", detail: "", image: "veges-images2/ごぼう.webp", detailImage: "veges-details2/gobou.webp"},
  {title: "れんこん", detail: "", image: "veges-images2/れんこん.webp", detailImage: "veges-details2/rennkon.webp"},
  {title: "たけのこ", detail: "", image: "veges-images2/たけのこ.webp", detailImage: "veges-details2/takenoko.webp"},
  {title: "にら", detail: "", image: "veges-images2/ニラ.webp", detailImage: "veges-details2/nira.webp"},
  {title: "しょうが", detail: "", image: "veges-images2/ショウガ.webp", detailImage: "veges-details2/syouga.webp"},
  {title: "にんにく", detail: "", image: "veges-images2/ニンニク.webp", detailImage: "veges-details2/ninniku.webp"},
  {title: "チンゲン菜", detail: "", image: "veges-images2/チンゲン菜.webp", detailImage: "veges-details2/tinngennsai.webp"},
  {title: "水菜", detail: "", image: "veges-images2/水菜.webp", detailImage: "veges-details2/mizuna.webp"},
  {title: "春菊", detail: "", image: "veges-images2/春菊.webp", detailImage: "veges-details2/syunngiku.webp"},
  {title: "セロリ", detail: "", image: "veges-images2/セロリ.webp", detailImage: "veges-details2/serori.webp"},
  {title: "ズッキーニ", detail: "", image: "veges-images2/ズッキーニ.webp", detailImage: "veges-details2/zukiini.webp"},
  {title: "オクラ", detail: "", image: "veges-images2/オクラ.webp", detailImage: "veges-details2/okura.webp"},
  {title: "いんげん", detail: "", image: "veges-images2/インゲン.webp", detailImage: "veges-details2/inngenn.webp"},
  {title: "枝豆", detail: "", image: "veges-images2/枝豆.webp", detailImage: "veges-details2/edamame.webp"},
  {title: "とうもろこし", detail: "", image: "veges-images2/とうもろこし.webp", detailImage: "veges-details2/toumorokosi.webp"},
  {title: "アスパラガス", detail: "", image: "veges-images2/アスパラガス.webp", detailImage: "veges-details2/asuparagasu.webp"},
  {title: "カリフラワー", detail: "", image: "veges-images2/カリフラワー.webp", detailImage: "veges-details2/karihurawa.webp"},
  {title: "かぶ", detail: "", image: "veges-images2/かぶ.webp", detailImage: "veges-details2/kabu.webp"},
  {title: "ししとう", detail: "", image: "veges-images2/ししとう.webp", detailImage: "veges-details2/sisitou.webp"},
  {title: "唐辛子", detail: "", image: "veges-images2/唐辛子.webp", detailImage: "veges-details2/tougarasi.webp"},
  {title: "ゴーヤ", detail: "", image: "veges-images2/ゴーヤ.webp", detailImage: "veges-details2/goya.webp"},
  {title: "しそ", detail: "", image: "veges-images2/しそ.webp", detailImage: "veges-details2/siso.webp"},
  {title: "みょうが", detail: "", image: "veges-images2/ミョウガ.webp", detailImage: "veges-details2/myouga.webp"},
  {title: "長芋", detail: "", image: "veges-images2/長芋.webp", detailImage: "veges-details2/nagaimo.webp"},

  {title: "ルッコラ", detail: "", image: "veges-images2/ルッコラ.webp", detailImage: "veges-details2/rukkora.webp"},
  {title: "パクチー", detail: "", image: "veges-images2/パクチー.webp", detailImage: "veges-details2/pakuti.webp"},
  {title: "三つ葉", detail: "", image: "veges-images2/三つ葉.webp", detailImage: "veges-details2/mitsuba.webp"},
  {title: "パセリ", detail: "", image: "veges-images2/パセリ.webp", detailImage: "veges-details2/paseri.webp"},
  {title: "バジル", detail: "", image: "veges-images2/バジル.webp", detailImage: "veges-details2/baziru.webp"},
  {title: "ラディッシュ", detail: "", image: "veges-images2/ラディッシュ.webp", detailImage: "veges-details2/raddish.webp"},
];


const fruits = [
  {title: "りんご", detail: "", image: "fruits-images2/りんご.webp", detailImage: "fruits-details2/apple.webp"},
  {title: "バナナ", detail: "", image: "fruits-images2/バナナ.webp", detailImage: "fruits-details2/banana.webp"},
  {title: "みかん（オレンジ）", detail: "", image: "fruits-images2/みかん.webp", detailImage: "fruits-details2/mikan.webp"},
  {title: "いちご", detail: "", image: "fruits-images2/いちご.webp", detailImage: "fruits-details2/ichigo.webp"},
  {title: "ぶどう（グレープ）", detail: "", image: "fruits-images2/ぶどう.webp", detailImage: "fruits-details2/grape.webp"},
  {title: "マスカット", detail: "", image: "fruits-images2/マスカット.webp", detailImage: "fruits-details2/muscat.webp"},
  {title: "キウイ", detail: "", image: "fruits-images2/キウイ.webp", detailImage: "fruits-details2/kiwi.webp"},
  {title: "グレープフルーツ", detail: "", image: "fruits-images2/グレープフルーツ.webp", detailImage: "fruits-details2/grapefruits.webp"},
  {title: "モモ", detail: "", image: "fruits-images2/もも.webp", detailImage: "fruits-details2/peach.webp"},
  {title: "梨", detail: "", image: "fruits-images2/なし.webp", detailImage: "fruits-details2/nashi.webp"},
  {title: "パイナップル", detail: "", image: "fruits-images2/パイナップル.webp", detailImage: "fruits-details2/pineapple.webp"},
  {title: "スイカ", detail: "", image: "fruits-images2/スイカ.webp", detailImage: "fruits-details2/suika.webp"},
  {title: "メロン", detail: "", image: "fruits-images2/メロン.webp", detailImage: "fruits-details2/melon.webp"},
  {title: "さくらんぼ", detail: "", image: "fruits-images2/さくらんぼ.webp", detailImage: "fruits-details2/cherry.webp"},
  {title: "柿", detail: "", image: "fruits-images2/かき.webp", detailImage: "fruits-details2/kaki.webp"},
  {title: "ブルーベリー", detail: "", image: "fruits-images2/ブルーベリー.webp", detailImage: "fruits-details2/blueberry.webp"},
  {title: "マンゴー", detail: "", image: "fruits-images2/マンゴー.webp", detailImage: "fruits-details2/mango.webp"},
  {title: "レモン", detail: "", image: "fruits-images2/レモン.webp", detailImage: "fruits-details2/lemon.webp"},
  {title: "イチジク", detail: "", image: "fruits-images2/イチジク.webp", detailImage: "fruits-details2/ichijiku.webp"},
  {title: "洋ナシ", detail: "", image: "fruits-images2/洋ナシ.webp", detailImage: "fruits-details2/younashi.webp"},
  {title: "栗", detail: "", image: "fruits-images2/栗.webp", detailImage: "fruits-details2/kuri.webp"},
  {title: "かぼす", detail: "", image: "fruits-images2/かぼす.webp", detailImage: "fruits-details2/kabosu.webp"},
  
  {title: "びわ", detail: "", image: "fruits-images2/びわ.webp", detailImage: ""},
  {title: "すもも", detail: "", image: "fruits-images2/すもも.webp", detailImage: ""},
  {title: "あんず", detail: "", image: "fruits-images2/あんず.webp", detailImage: ""},

  {title: "デコポン", detail: "", image: "fruits-images2/デコポン.webp", detailImage: ""},
  {title: "ゆず", detail: "", image: "fruits-images2/ゆず.webp", detailImage: ""},
  {title: "すだち", detail: "", image: "fruits-images2/すだち.webp", detailImage: ""},

  {title: "ザクロ", detail: "", image: "fruits-images2/ざくろ.webp", detailImage: ""},
  {title: "ラズベリー", detail: "", image: "fruits-images2/ラズベリー.webp", detailImage: ""},
  {title: "ブラックベリー", detail: "", image: "fruits-images2/ブラックベリー.webp", detailImage: ""},
  {title: "クランベリー", detail: "", image: "fruits-images2/クランベリー.webp", detailImage: ""},

  {title: "ドラゴンフルーツ", detail: "", image: "fruits-images2/ドラゴンフルーツ.webp", detailImage: ""},
  {title: "パッションフルーツ", detail: "", image: "fruits-images2/パッションフルーツ.webp", detailImage: ""},
  {title: "ライチ", detail: "", image: "fruits-images2/ライチ.webp", detailImage: ""},
];

const fishes = [
  {title: "サケ", detail: "", image: "fishes-images2/シャケ.webp", detailImage: "fishes-details2/syake.webp"},
  {title: "サバ", detail: "", image: "fishes-images2/鯖.webp", detailImage: "fishes-details2/saba.webp"},
  {title: "アジ", detail: "", image: "fishes-images2/アジ.webp", detailImage: "fishes-details2/aji.webp"},
  {title: "マグロ", detail: "", image: "fishes-images2/マグロ.webp", detailImage: "fishes-details2/maguro.webp"},
  {title: "ブリ", detail: "", image: "fishes-images2/ぶり.webp", detailImage: "fishes-details2/buri.webp"},
  {title: "タイ", detail: "", image: "fishes-images2/たい.webp", detailImage: "fishes-details2/tai.webp"},
  {title: "イワシ", detail: "", image: "fishes-images2/いわし.webp", detailImage: "fishes-details2/iwasi.webp"},
  {title: "サンマ", detail: "", image: "fishes-images2/さんま.webp", detailImage: "fishes-details2/sanma.webp"},
  {title: "タラ", detail: "", image: "fishes-images2/タラ.webp", detailImage: "fishes-details2/tara.webp"},
  {title: "カツオ", detail: "", image: "fishes-images2/かつお.webp", detailImage: "fishes-details2/katuo.webp"},

  {title: "カレイ", detail: "", image: "fishes-images2/かれい.webp", detailImage: "fishes-details2/karei.webp"},
  {title: "イカ", detail: "", image: "fishes-images2/いか.webp", detailImage: "fishes-details2/ika.webp"},
  {title: "タコ", detail: "", image: "fishes-images2/たこ.webp", detailImage: "fishes-details2/tako.webp"},
  {title: "エビ", detail: "", image: "fishes-images2/えび.webp", detailImage: "fishes-details2/ebi.webp"},
  {title: "カニ", detail: "", image: "fishes-images2/カニ.webp", detailImage: "fishes-details2/kani.webp"},
  {title: "ホタテ", detail: "", image: "fishes-images2/ほたて.webp", detailImage: "fishes-details2/hotate.webp"},
  {title: "アサリ", detail: "", image: "fishes-images2/あさり.webp", detailImage: "fishes-details2/asari.webp"},
  {title: "シジミ", detail: "", image: "fishes-images2/しじみ.webp", detailImage: "fishes-details2/sijimi.webp"},
  {title: "カキ", detail: "", image: "fishes-images2/かき.webp", detailImage: "fishes-details2/kaki.webp"},
  {title: "ウナギ", detail: "", image: "fishes-images2/うなぎ.webp", detailImage: "fishes-details2/unagi.webp"},
  {title: "ホッケ", detail: "", image: "fishes-images2/ほっけ.webp", detailImage: "fishes-details2/hokke.webp"},
  {title: "シシャモ", detail: "", image: "fishes-images2/ししゃも.webp", detailImage: "fishes-details2/sisyamo.webp"},
  {title: "ハマチ", detail: "", image: "fishes-images2/はまち.webp", detailImage: "fishes-details2/hamati.webp"},
  {title: "アンコウ", detail: "", image: "fishes-images2/アンコウ.webp", detailImage: "fishes-details2/annkou.webp"},
  {title: "キンメダイ", detail: "", image: "fishes-images2/キンメダイ.webp", detailImage: "fishes-details2/kinmedai.webp"},
  {title: "イセエビ", detail: "", image: "fishes-images2/伊勢海老.webp", detailImage: "fishes-details2/iseebi.webp"},
  {title: "サザエ", detail: "", image: "fishes-images2/さざえ.webp", detailImage: "fishes-details2/sazae.webp"},
  {title: "アワビ", detail: "", image: "fishes-images2/アワビ.webp", detailImage: "fishes-details2/awabi.webp"},
  {title: "イクラ", detail: "", image: "fishes-images2/いくら.webp", detailImage: "fishes-details2/ikura.webp"},
  {title: "ブラックタイガー", detail: "", image: "fishes-images2/ブラックタイガー.webp", detailImage: "fishes-details2/blacktiger.webp"},
  {title: "ヒラメ", detail: "掲載予定", image: "fishes-images2/ヒラメ.webp", detailImage: ""},
  {title: "アユ", detail: "掲載予定", image: "fishes-images2/あゆ.webp", detailImage: ""},
  {title: "サワラ", detail: "掲載予定", image: "fishes-images2/さわら.webp", detailImage: ""},
  {title: "ハマグリ", detail: "掲載予定", image: "fishes-images2/はまぐり.webp", detailImage: ""},
  {title: "アナゴ", detail: "掲載予定", image: "fishes-images2/アナゴ.webp", detailImage: ""},
  {title: "ワカサギ", detail: "掲載予定", image: "fishes-images2/わかさぎ.webp", detailImage: ""},
  {title: "キス", detail: "掲載予定", image: "fishes-images2/きす.webp", detailImage: ""},
  {title: "ノドグロ", detail: "掲載予定", image: "fishes-images2/のどぐろ.webp", detailImage: ""},
  {title: "フグ", detail: "掲載予定", image: "fishes-images2/ふぐ.webp", detailImage: ""},
];

const others = [
  {title: "しいたけ", detail: "", image: "veges-images2/シイタケ.webp", detailImage: "veges-details2/siitake.webp"},
  {title: "しめじ", detail: "", image: "veges-images2/しめじ.webp", detailImage: "veges-details2/simeji.webp"},
  {title: "えのき", detail: "", image: "veges-images2/えのき.webp", detailImage: "veges-details2/enoki.webp"},
  {title: "まいたけ", detail: "", image: "veges-images2/マイタケ.webp", detailImage: "veges-details2/maitake.webp"},
  {title: "エリンギ", detail: "", image: "veges-images2/エリンギ.webp", detailImage: "veges-details2/erinngi.webp"},
  {title: "なめこ", detail: "", image: "veges-images2/なめこ.webp", detailImage: "veges-details2/nameko.webp"},
  {title: "きくらげ", detail: "", image: "veges-images2/きくらげ.webp", detailImage: "veges-details2/kikurage.webp"},

  { title: "牛肉", detail: "掲載予定", image: "other-images2/牛肉.webp", detailImage: "" },
  { title: "豚肉", detail: "掲載予定", image: "other-images2/豚肉.webp", detailImage: "" },
  { title: "鶏肉", detail: "掲載予定", image: "other-images2/鶏肉.webp", detailImage: "" }
];

/*対応表*/
const foodsByCategory = {veges: veges, fruits: fruits, fishes: fishes, others: others};

foodsByCategory.all = [...veges, ...fruits, ...fishes, ...others];

// 読み仮名（必要なものから増やす）
const yomiMap = {
  "大根": "だいこん",
  "にんじん": "人参",
  "たまねぎ": "玉ねぎ",
  "きゅうり": "胡瓜",
  "なす": "茄子",
  "白菜": "はくさい",
  "ほうれん草": "ほうれんそう",
  "小松菜": "こまつな",
  "かぼちゃ": "南瓜",
  "里いも": "さといも",
  "ごぼう": "牛蒡",
  "れんこん": "蓮根",
  "たけのこ": "竹の子",
  "にら": "韮",
  "しょうが": "生姜",
  "チンゲン菜": "ちんげんさい",
  "水菜": "みずな",
  "春菊": "しゅんぎく",
  "枝豆": "えだまめ",
  "かぶ": "蕪",
  "ししとう": "獅子唐",
  "唐辛子": "とうがらし",
  "しそ": "紫蘇",
  "長芋": "ながいも",
  "三つ葉": "みつば",

  "みかん（オレンジ）": "おれんじ",
  "ぶどう（グレープ）": "ぐれーぷ",
  "りんご": "林檎",
  "いちご": "苺",
  "モモ": "桃",
  "レモン": "檸檬",
  "梨": "なし",
  "柿": "かき",
  "栗": "くり",
  "洋ナシ": "ようなし",
  "イチジク": "無花果",
  "びわ": "枇杷",
  "ゆず": "柚子",
  "すだち": "酢橘",

  "サケ": "しゃけ",
  "サバ": "鯖",
  "アジ": "鯵",
  "マグロ": "鮪",
  "ブリ": "鰤",
  "タイ": "鯛",
  "イワシ": "鰯",
  "サンマ": "秋刀魚",
  "タラ": "鱈",
  "カツオ": "鰹",
  "カレイ": "鰈",
  "イカ": "烏賊",
  "タコ": "蛸",
  "エビ": "海老",
  "カニ": "蟹",
  "ホタテ": "帆立",
  "アサリ": "浅蜊",
  "シジミ": "蜆",
  "カキ": "牡蠣",
  "ウナギ": "鰻",
  "キンメダイ": "金目鯛",
  "イセエビ": "伊勢海老",
  "アワビ": "鮑",
  "ブラックタイガー": "車海老",
  "ヒラメ": "平目",
  "アユ": "鮎",
  "サワラ": "鰆",
  "ハマグリ": "蛤",
  "アナゴ": "穴子",
  "キス": "鱚",

  "しいたけ": "椎茸",
  "まいたけ": "舞茸",
  "きくらげ": "木耳",
  "牛肉": "ぎゅうにく",
  "豚肉": "ぶたにく",
  "鶏肉": "とりにく",
};


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

const filteredFoods = foods.filter((food) => {
  const titleKata = toKatakana(food.title);
  const yomiKata = toKatakana(yomiMap[food.title] || "");
  return titleKata.startsWith(searchWord) || yomiKata.startsWith(searchWord);
});


  const favFoods = filteredFoods.filter((f) => favorites.has(f.title));
  const normalFoods = filteredFoods.filter((f) => !favorites.has(f.title));
  const orderedFoods = [...favFoods, ...normalFoods];

  const list = document.getElementById("list");

  let html = "";
  orderedFoods.forEach((food) => {
    html += `
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

  list.innerHTML = html;
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

    document.querySelector(".container").scrollTop = 0;
  });
});

// ===== ヘッダーの高さを測って、隠れないようにする =====
function updateHeaderOffset() {
  const header = document.querySelector(".header");
  if (!header) return;

  const h = Math.ceil(header.getBoundingClientRect().height);
  // 少し余白を足す（好みで 0〜16 くらい）
  document.documentElement.style.setProperty("--header-offset", (h + 8) + "px");
}

window.addEventListener("load", updateHeaderOffset);
window.addEventListener("resize", updateHeaderOffset);

// iOS対策（アドレスバーの出入りで高さが変わることがある）
if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", updateHeaderOffset);
}
