import axios from "axios";

export default async function handler(req, res) {
    try {
        const r = await axios.get("https://diger-api.com/veri");
        res.status(200).json(r.data);
    } catch (err) {
        res.status(500).json({ hata: "Dış API çağrısı başarısız" });
    }
}
