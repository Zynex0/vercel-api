

import axios from "axios";

export default async function handler(req, res) {
  const { ad, soyad } = req.query;

  if (!tc) {
    return res.status(400).json({ hata: "Ad Soyad Bilgileri Gereklidir" });
  }

  try {
    const url = `https://dosya.alwaysdata.net/api/adsoyad.php?ad=${ad}&soyad=${soyad}&il=${il}&ilce=${ilce}`;
    const r = await axios.get(url);

    // Gelen veriyi kopyala
    const data = { ...r.data };

    // developer bölümünü değiştir
    data.developer = "Zynex00";

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ hata: "API çağrısı başarısız" });
  }
}
