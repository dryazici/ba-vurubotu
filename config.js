const config = {
  TOKEN: "MTA0NTQzMTY4MDY0MDQ4MzQzOA.Gis1Om.MQZCAfMtlsKAA9z0DSRHOraQbkxW_kpvtQ0hQs", //Glitchde Kullanacak iseniz .env Dosyasına Tokeni Yazın!

  prefix: "/",
  guild: "1045077611858112512", //Sunucu ID Yazın
  channel: "1045078215208738837", //Başvuru Yap Mesajının Atılacağı Kanal ID Yazın

  log: {
    staff: "1046417853236138055", //Başvuru Onaylayıp-Reddedecek Yetkili Rol ID Yazın!
    channel: "1045078215208738837" //Başvuruların Loglanacağı Kanal ID Yazın
  },

  sonuc: {
    staffRole: ["1046417853236138055"], //Sunucunuzdaki Başlangıç Yetkili Rolü veya Rolleri, Birden Fazla Rol Eklemek İçin ["rol id 1", "rol id2"] Başvuru Onaylanınca Buraya Yazılan Rol veya Roller Kullanıcıya Verilecek
    sRole: "1046417853236138055", //Verilecek En Düşük Yetkili Rol ID Yazın
    successMessage: "Selam, İdlewood Roleplay Whitelist Başvurun Onaylandı İyi Roller.", //Başvuru Onaylanınca Kullanıcıya Atılacak Mesajı Yazın
    deleteMessage: "Selam, İdlewood Roleplay  Whitelist Başvurun Onaylanamadı Tekrar Dene.", //Başvuru Reddedilince Kullanıcıya Atılacak Mesajı Yazın
    timeout: 20000 //Başvurusu Reddedilen Birisi Nekadar Süre Sonra Başvuru Yapa Bilsin? 1000=1 Saniye (Milisaniye Türünden Yazın)
  },

  embed: {
    title: "İdlewood Roleplay", //Başvuru Mesajı Başlık Kısmında Yazmasını İstediğiniz Şey
    color: "RED", //Embed Rengi, Örnek: BLUE,RED,YELLOW,GREEN Olarak veya Direkt #ff00ff Gibi Renk Kodu Yazın
    description: "``Whitelist Başvuruları Aktif Başvurmak İçin Butona Tıkla.``"  //Başvuru Mesajı Açıklama Kısmında Yazmasını İstediğiniz Şey
  },

  sorular: ["İc İsminiz.", "İc Ve Ooc Nedir?", "Mixing Nedir?", "Karakter Hikayen.", "Admin Power Nedir?", "Kuralları Kabul Ediyormusun? [Ediyorum/Etmiyorum]"] //Sorulacak Sorular
};

module.exports = config;
