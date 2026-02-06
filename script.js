//
const veges = [
  {title: "トマト", detail: "", image: "veges-images/トマト.png", detailImage: "veges-details/tomato.png"},
  {title: "きゅうり", detail: "", image: "veges-images/きゅうり.png", detailImage: "veges-details/kyuuri.png"},
  {title: "なす", detail: "", image: "veges-images/なす.png", detailImage: "veges-details/nasu.png"},
  {title: "じゃがいも", detail: "", image: "veges-images/じゃがいも.png", detailImage: "veges-details/potato.png"},
  {title: "たまねぎ", detail: "", image: "veges-images/たまねぎ.png", detailImage: "veges-details/onion.png"},
  {title: "にんじん", detail: "", image: "veges-images/にんじん.png", detailImage: "veges-details/carrot.png"},
  {title: "キャベツ", detail: "", image: "veges-images/キャベツ.png", detailImage: "veges-details/kyabetu.png"},
  {title: "レタス", detail: "", image: "veges-images/レタス.png", detailImage: "veges-details/lettuce.png"},
  {title: "ねぎ", detail: "", image: "veges-images/ネギ.png", detailImage: "veges-details/negi.png"},
  {title: "大根", detail: "", image: "veges-images/大根.png", detailImage: "veges-details/daikon.png"},
  {title: "白菜", detail: "", image: "veges-images/白菜.png", detailImage: "veges-details/hakusai.png"},
  {title: "もやし", detail: "", image: "veges-images/もやし.png", detailImage: "veges-details/moyashi.png"},

  {title: "ほうれん草", detail: "", image: "veges-images/ほうれん草.png", detailImage: "veges-details/horensou.png"},
  {title: "小松菜", detail: "", image: "veges-images/小松菜.png", detailImage: "veges-details/komatsuna.png"},
  {title: "ピーマン", detail: "", image: "veges-images/ピーマン.png", detailImage: "veges-details/piman.png"},
  {title: "ブロッコリー", detail: "", image: "veges-images/ブロッコリー.png", detailImage: "veges-details/burokokori.png"},
  {title: "パプリカ", detail: "", image: "veges-images/パプリカ.png", detailImage: "veges-details/papurika.png"},
  {title: "かぼちゃ", detail: "", image: "veges-images/かぼちゃ.png", detailImage: "veges-details/kabocya.png"},
  {title: "さつまいも", detail: "", image: "veges-images/さつまいも.png", detailImage: "veges-details/satsumaimo.png"},
  {title: "里いも", detail: "", image: "veges-images/里芋.png", detailImage: "veges-details/satoimo.png"},
  {title: "ごぼう", detail: "", image: "veges-images/ごぼう.png", detailImage: "veges-details/gobou.png"},
  {title: "れんこん", detail: "", image: "veges-images/れんこん.png", detailImage: "veges-details/rennkon.png"},
  {title: "たけのこ", detail: "", image: "veges-images/たけのこ.png", detailImage: "veges-details/takenoko.png"},
  {title: "にら", detail: "", image: "veges-images/ニラ.png", detailImage: "veges-details/nira.png"},
  {title: "しょうが", detail: "", image: "veges-images/ショウガ.png", detailImage: ""},
  {title: "にんにく", detail: "", image: "veges-images/ニンニク.png", detailImage: "veges-details/ninniku.png"},
  {title: "チンゲン菜", detail: "", image: "veges-images/チンゲン菜.png", detailImage: "veges-details/tinngensai.png"},
  {title: "水菜", detail: "", image: "veges-images/水菜.png", detailImage: "veges-details/mizuna.png"},
  {title: "春菊", detail: "", image: "veges-images/春菊.png", detailImage: "veges-details/syunngiku.png"},
  {title: "セロリ", detail: "", image: "veges-images/セロリ.png", detailImage: "veges-details/serori.png"},
  {title: "ズッキーニ", detail: "", image: "veges-images/ズッキーニ.png", detailImage: "veges-details/zukini.png"},
  {title: "オクラ", detail: "", image: "veges-images/オクラ.png", detailImage: "veges-details/okura.png"},
  {title: "いんげん", detail: "", image: "veges-images/インゲン.png", detailImage: "veges-details/inngenn.png"},
  {title: "枝豆", detail: "", image: "veges-images/枝豆.png", detailImage: "veges-details/edamame.png"},
  {title: "とうもろこし", detail: "", image: "veges-images/とうもろこし.png", detailImage: "veges-details/toumorokosi.png"},
  {title: "アスパラガス", detail: "", image: "veges-images/アスパラガス.png", detailImage: "veges-details/asuparagasupng"},
  {title: "カリフラワー", detail: "", image: "veges-images/カリフラワー.png", detailImage: "veges-details/karifurawa.png"},
  {title: "かぶ", detail: "", image: "veges-images/かぶ.png", detailImage: "veges-details/kabu.png"},
  {title: "ししとう", detail: "", image: "veges-images/ししとう.png", detailImage: "veges-details/sisitou.png"},
  {title: "唐辛子", detail: "", image: "veges-images/唐辛子.png", detailImage: "veges-details/tougarasi.png"},
  {title: "ゴーヤ", detail: "", image: "veges-images/ゴーヤ.png", detailImage: "veges-details/goya.png"},
  {title: "しそ", detail: "", image: "veges-images/しそ.png", detailImage: "veges-details/siso.png"},
  {title: "みょうが", detail: "", image: "veges-images/ミョウガ.png", detailImage: "veges-details/myouga.png"},
  {title: "長芋", detail: "", image: "veges-images/長芋.png", detailImage: "veges-details/nagaimo.png"},

  {title: "ルッコラ", detail: "", image: "veges-images/ルッコラ.png", detailImage: "veges-details/rukkora.png"},
  {title: "パクチー", detail: "", image: "veges-images/パクチー.png", detailImage: "veges-details/pakuti.png"},
  {title: "三つ葉", detail: "", image: "veges-images/三つ葉.png", detailImage: "veges-details/mituba.png"},
  {title: "パセリ", detail: "", image: "veges-images/パセリ.png", detailImage: "veges-details/paseri.png"},
  {title: "バジル", detail: "", image: "veges-images/バジル.png", detailImage: "veges-details/baziru.png"},
  {title: "ラディッシュ", detail: "", image: "veges-images/ラディッシュ.png", detailImage: "veges-details/raddish.png"},
];


const fruits = [
  {title: "りんご", detail: "", image: "fruits-images/りんご.png", detailImage: "fruits-details/apple.png"},
  {title: "バナナ", detail: "", image: "fruits-images/バナナ.png", detailImage: "fruits-details/banana.png"},
  {title: "みかん(オレンジ）", detail: "", image: "fruits-images/みかん.png", detailImage: "fruits-details/mikan.png"},
  {title: "いちご", detail: "", image: "fruits-images/いちご.jpg", detailImage: "fruits-details/ichigo.png"},
  {title: "ぶどう(グレープ）", detail: "", image: "fruits-images/ぶどう.png", detailImage: "fruits-details/grape.png"},
  {title: "マスカット", detail: "", image: "", detailImage: ""},
  {title: "キウイ", detail: "", image: "fruits-images/キウイ.png", detailImage: "fruits-details/kiwi.png"},
  {title: "グレープフルーツ", detail: "", image: "fruits-images/グレープフルーツ.jpg", detailImage: "fruits-details/grapefruits.png"},
  {title: "モモ", detail: "", image: "fruits-images/もも.jpg", detailImage: "fruits-details/peach.png"},
  {title: "梨", detail: "", image: "fruits-images/なし.png", detailImage: "fruits-details/nashi.png"},
  {title: "パイナップル", detail: "", image: "fruits-images/パイナップル.jpg", detailImage: "fruits-details/pineapple.png"},
  {title: "スイカ", detail: "", image: "fruits-images/スイカ.jpg", detailImage: "fruits-details/suika.png"},
  {title: "メロン", detail: "", image: "fruits-images/メロン.jpg", detailImage: "fruits-details/melon.png"},
  {title: "さくらんぼ", detail: "", image: "fruits-images/さくらんぼ.png", detailImage: "fruits-details/cherry.png"},
  {title: "柿", detail: "", image: "fruits-images/かき.png", detailImage: "fruits-details/kaki.png"},
  {title: "ブルーベリー", detail: "", image: "fruits-images/ブルーベリー.png", detailImage: "fruits-details/blueberry.png"},
  {title: "マンゴー", detail: "", image: "fruits-images/マンゴー.png", detailImage: "fruits-details/mango.png"},
  {title: "レモン", detail: "", image: "fruits-images/レモン.png", detailImage: "fruits-details/lemon.png"},
  {title: "いちじく", detail: "", image: "fruits-images/イチジク.png", detailImage: "fruits-details/ichijiku.png"},
  {title: "洋なし", detail: "", image: "fruits-images/洋ナシ.png", detailImage: "fruits-details/younashi.png"},
  {title: "栗", detail: "", image: "fruits-images/栗.png", detailImage: "fruits-details/kuri.png"},
  {title: "かぼす", detail: "", image: "fruits-images/かぼす.png", detailImage: "fruits-details/kabosu.png"},
  
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
  {title: "ライム", detail: "", image: "", detailImage: ""},

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
  {title: "サケ", detail: "", image: "fishes-images/シャケ.png", detailImage: "fishes-details/syake.png"},
  {title: "サバ", detail: "", image: "fishes-images/鯖.png", detailImage: "fishes-details/saba.png"},
  {title: "アジ", detail: "", image: "fishes-images/アジ.png", detailImage: "fishes-details/aji.png"},
  {title: "マグロ", detail: "", image: "fishes-images/マグロ.png", detailImage: "fishes-details/maguro.png"},
  {title: "ブリ", detail: "", image: "fishes-images/ぶり.png", detailImage: "fishes-details/buri.png"},
  {title: "タイ", detail: "", image: "fishes-images/たい.png", detailImage: "fishes-details/tai.png"},
  {title: "イワシ", detail: "", image: "fishes-images/いわし.png", detailImage: "fishes-details/iwasi.png"},
  {title: "サンマ", detail: "", image: "fishes-images/さんま.png", detailImage: "fishes-details/sanma.png"},
  {title: "タラ", detail: "", image: "fishes-images/タラ.png", detailImage: "fishes-details/tara.png"},
  {title: "カツオ", detail: "", image: "fishes-images/かつお.png", detailImage: "fishes-details/katuo.png"},
  {title: "ヒラメ", detail: "", image: "", detailImage: ""},
  {title: "カレイ", detail: "", image: "fishes-images/かれい.png", detailImage: "fishes-details/karei.png"},
  {title: "アユ", detail: "", image: "", detailImage: ""},
  {title: "サワラ", detail: "", image: "", detailImage: ""},
  {title: "イカ", detail: "", image: "fishes-images/いか.png", detailImage: "fishes-details/ika.png"},
  {title: "タコ", detail: "", image: "fishes-images/たこ.png", detailImage: "fishes-details/tako.png"},
  {title: "エビ", detail: "", image: "fishes-images/えび.png", detailImage: "fishes-details/ebi.png"},
  {title: "カニ", detail: "", image: "fishes-images/カニ.png", detailImage: "fishes-details/kani.png"},
  {title: "ホタテ", detail: "", image: "fishes-images/ほたて.png", detailImage: "fishes-details/hotate.png"},
  {title: "アサリ", detail: "", image: "fishes-images/あさり.png", detailImage: "fishes-details/asari.png"},
  {title: "シジミ", detail: "", image: "fishes-images/しじみ.png", detailImage: "fishes-details/sijimi.png"},
  {title: "ハマグリ", detail: "", image: "", detailImage: ""},
  {title: "カキ", detail: "", image: "fishes-images/かき.png", detailImage: "fishes-details/kaki.png"},
  {title: "ウナギ", detail: "", image: "fishes-images/うなぎ.png", detailImage: "fishes-details/unagi.png"},
  {title: "アナゴ", detail: "", image: "", detailImage: ""},
  {title: "メカジキ", detail: "", image: "", detailImage: ""},
  {title: "カジキ", detail: "", image: "", detailImage: ""},
  {title: "ホッケ", detail: "", image: "fishes-images/ほっけ.png", detailImage: "fishes-details/hokke.png"},
  {title: "ニシン", detail: "", image: "", detailImage: ""},
  {title: "シシャモ", detail: "", image: "fishes-images/ししゃも.png", detailImage: "fishes-details/sisyamo.png"},
  {title: "コハダ", detail: "", image: "", detailImage: ""},
  {title: "イナダ", detail: "", image: "", detailImage: ""},
  {title: "ハマチ", detail: "", image: "fishes-images/はまち.png", detailImage: "fishes-details/hamati.png"},
  {title: "コイ", detail: "", image: "", detailImage: ""},
  {title: "フナ", detail: "", image: "", detailImage: ""},
  {title: "ワカサギ", detail: "", image: "", detailImage: ""},
  {title: "キス", detail: "", image: "", detailImage: ""},
  {title: "ハゼ", detail: "", image: "", detailImage: ""},
  {title: "メバル", detail: "", image: "", detailImage: ""},
  {title: "カサゴ", detail: "", image: "", detailImage: ""},
  {title: "アンコウ", detail: "", image: "fishes-images/アンコウ.png", detailImage: "fishes-details/annkou.png"},
  {title: "キンメダイ", detail: "", image: "fishes-images/キンメダイ.png", detailImage: "fishes-details/kinmedai.png"},
  {title: "ノドグロ", detail: "", image: "", detailImage: ""},
  {title: "フグ", detail: "", image: "", detailImage: ""},
  {title: "ハタハタ", detail: "", image: "", detailImage: ""},
  {title: "コマイ", detail: "", image: "", detailImage: ""},
  {title: "ボラ", detail: "", image: "", detailImage: ""},
  {title: "トビウオ", detail: "", image: "", detailImage: ""},
  {title: "アマエビ", detail: "", image: "", detailImage: ""},
  {title: "ブラックタイガー", detail: "", image: "", detailImage: "fishes-details/blacktiger.png"},
  {title: "イセエビ", detail: "", image: "fishes-images/イセエビ.png", detailImage: "fishes-details/iseebi.png"},
  {title: "サザエ", detail: "", image: "fishes-images/さざえ.png", detailImage: "fishes-details/sazae.png"},
  {title: "アワビ", detail: "", image: "fishes-images/アワビ.png", detailImage: "fishes-details/awabi.png"},
  {title: "イクラ", detail: "", image: "fishes-images/いくら.png", detailImage: "fishes-details/ikura.png"},
  {title: "タラコ", detail: "", image: "", detailImage: ""}
];

const others = [
  {title: "しいたけ", detail: "", image: "veges-images/シイタケ.png", detailImage: "veges-details/siitake.png"},
  {title: "しめじ", detail: "", image: "veges-images/しめじ.png", detailImage: "veges-details/simeji.png"},
  {title: "えのき", detail: "", image: "veges-images/えのき.png", detailImage: "veges-details/enoki.png"},
  {title: "まいたけ", detail: "", image: "veges-images/マイタケ.png", detailImage: "veges-details/maitake.png"},
  {title: "エリンギ", detail: "", image: "veges-images/エリンギ.png", detailImage: "veges-details/erinngi.png"},
  {title: "なめこ", detail: "", image: "veges-images/なめこ.png", detailImage: "veges-details/nameko.png"},
  {title: "きくらげ", detail: "", image: "veges-images/きくらげ.png", detailImage: "veges-details/kikurage.png"},

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

// 読み仮名（必要なものから増やす）
const yomiMap = {
  "大根": "だいこん",
  "にんじん": "人参",
  "たまねぎ": "玉ねぎ"
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
