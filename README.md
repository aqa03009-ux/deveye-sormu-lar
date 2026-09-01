# Profil Sitem

Çizimden yapılan, elle çizilmiş (sketch) tarzda kişisel profil/link sayfası.
GitHub Pages ile ücretsiz yayına alınabilir.

## Düzenleme — tek dosya: `config.js`

Siteyle ilgili her şey `config.js` içindedir. Kod bilgisi gerekmez,
sadece metinleri değiştirip kaydetmen yeterli:

| Ayar | Ne yapar |
|---|---|
| `username` | Üstteki isim etiketi |
| `bio` | Kısa tanıtım yazısı |
| `avatar.emoji` | Yuvarlak avatar emojisi (🗿, , 🦊...) |
| `avatar.image` | Emoji yerine fotoğraf istersen: dosyayı repoya at, adını yaz (`"foto.jpg"`), emoji'yi `""` yap |
| `socials` | Sosyal medya butonları; satır ekle/çıkar/sırala |
| `mottos` | Sözler — kutuya tıklayınca rastgele biri gelir; hepsini silersen kutu kaybolur |
| `email` / `location` / `year` | Alt bilgi |
| `pageTitle` | Sekme başlığı |

Kullanılabilir sosyal ikonlar: `instagram, tiktok, x, discord, pinterest,
youtube, github, telegram, whatsapp, globe` (bilinmeyen isim → dünya ikonu).

## GitHub Pages ile yayına alma

1. Bu klasörü kendi GitHub hesabında yeni bir repoya yükle
   (örn. `profil-sitesi`).
2. Repo sayfasında **Settings → Pages** yolunu izle.
3. **Source** olarak `Deploy from a branch`, **Branch** olarak `main`
   ve klasör olarak `/ (root)` seç, **Save**'e bas.
4. 1-2 dakika sonra siten şurada yayında olur:
   `https://KULLANICI-ADI.github.io/profil-sitesi/`

Başkası kendi versiyonunu yapmak istersen: **Fork**'la → `config.js`'i
kendi bilgilerinle düzenle → commit'le → Pages'i aç. Hepsi bu.
