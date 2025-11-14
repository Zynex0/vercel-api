import axios from "axios";

export default async function handler(req, res) {
  const { tc } = req.query;

  if (!tc) {
    return res.status(400).json({ hata: "tc parametresi eksik" });
  }

  try {
    const url = `https://dosya.alwaysdata.net/api/adres.php?tc=${tc}`;
    const r = await axios.get(url);

    res.status(200).json(r.data);
  } catch (err) {
    res.status(500).json({ hata: "API çağrısı başarısız" });
  }
}
