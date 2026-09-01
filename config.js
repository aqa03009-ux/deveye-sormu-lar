/* ============================================================
   SİTE AYARLARI — düzenlenecek tek dosya burası!
   Bir şeyi değiştirmek için ilgili satırı düzenleyip kaydet yeter.
   ============================================================ */
const config = {

  /* Kullanıcı adı (başlıktaki etiket) */
  username: "@user",

  /* Kısa tanıtım metni */
  bio: "Hi! Welcome to my little corner of the internet.",

  /* Profil resmi:
     - emoji kullanmak için: emoji alanını değiştir (🗿, 😎, 🦊 ...)
     - gerçek fotoğraf kullanmak için: fotoğrafı bu klasöre at
       ve image alanına dosya adını yaz, emoji'yi "" yap */
  avatar: {
    emoji: "🗿",
    image: ""            /* ör: "foto.jpg" */
  },

  /* Sosyal medya butonları — ekle/çıkar/sırala.
     Kullanılabilir ikonlar: instagram, tiktok, x, discord,
     pinterest, youtube, github, telegram, whatsapp, globe */
  socials: [
    { name: "Instagram", icon: "instagram", url: "https://instagram.com/kullanici" },
    { name: "TikTok",    icon: "tiktok",    url: "https://tiktok.com/@kullanici" },
    { name: "X",         icon: "x",         url: "https://x.com/kullanici" },
    { name: "Discord",   icon: "discord",   url: "https://discord.com/" },
    { name: "Pinterest", icon: "pinterest", url: "https://pinterest.com/kullanici" }
  ],

  /* Sözler — kutuya tıklayınca rastgele sıradaki gelir */
  mottos: [
    '"Earth without art is just ‘Eh’."'
  ],

  /* Alt bilgi */
  email: "example@email.com",
  location: "Istanbul, Türkiye",
  year: 2026,

  /* Sekme başlığı */
  pageTitle: "Profile"
};
