

import axios from "axios";

export default async function handler(req, res) {
  const { site } = req.query;

  if (!site) {
    return res.status(400).json({ hata: "tc parametresi eksik" });
  }

  try {
    const url = `https://dosya.alwaysdata.net/api/aile.php?site=${site}`;
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
