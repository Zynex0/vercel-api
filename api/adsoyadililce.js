import axios from "axios";

export default async function handler(req, res) {
  const { ad, soyad, il, ilce } = req.query;

  // Zorunlu parametreler kontrolü
  if (!ad || !soyad || !il || !ilce) {
    return res.status(400).json({
      hata: "ad, soyad, il ve ilce parametreleri zorunludur"
    });
  }

  try {
    // Uzak API URL'si
    const url = `https://dosya.alwaysdata.net/api/adsoyad.php?ad=${ad}&soyad=${soyad}&il=${il}&ilce=${ilce}`;

    // API çağrısı
    const r = await axios.get(url);

    // Gelen veriyi kopyala
    const data = { ...r.data };

    // Developer adını değiştir
    data.developer = "Zynex00";

    return res.status(200).json(data);

  } catch (err) {
    return res.status(500).json({ hata: "API çağrısı başarısız" });
  }
}
