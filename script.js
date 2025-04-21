const yorumlar = {
    "koç": "Bugün enerjin tavan! Yeni başlangıçlar için harika bir gün 💥",
    "boğa": "Sakinliğinle parlıyorsun, huzur seninle 🌿",
    "ikizler": "Zekân ve esprilerinle bugün dikkat çekeceksin 😄",
    "yengeç": "Duygularını dinle, iç sesin sana yol gösterecek 🐚",
    "aslan": "Sahne senin! Işıltınla herkes büyülenecek 🦁",
    "başak": "Detaylara gösterdiğin özen seni zirveye taşıyacak 📚",
    "terazi": "Estetik zevkin bugün harikalar yaratacak 🎨",
    "akrep": "Gizemli halinle merak uyandırıyorsun 🦂",
    "yay": "Maceraya atıl! Ruhun özgürlüğü çağırıyor 🏹",
    "oğlak": "Azminle dağları bile oynatırsın 🏔️",
    "kova": "Farklı fikirlerin bugün ilham olacak 💡",
    "balık": "Hayal gücünle etrafındakileri büyüle 🌊"
  };
  
  function yorumGoster() {
    const burc = document.getElementById("burcSec").value;
    const sonuc = document.getElementById("sonuc");
  
    if (burc === "") {
      sonuc.textContent = "Lütfen bir burç seç 😅";
    } else {
      sonuc.textContent = yorumlar[burc];
    }
  }
  