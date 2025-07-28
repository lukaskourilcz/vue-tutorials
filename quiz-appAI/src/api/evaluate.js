import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const app = express();

app.use(cors());
app.use(express.json());

app.post("/evaluate", async (req, res) => {
  const { question, answer } = req.body;

  const prompt = `
Bodově vyhodnoť odpověď studenta k níže uvedené otázce a napiš správnou odpověď.

Otázka: ${question}

Odpověď studenta: ${answer}

Zhodnoť odpověď známkou od 1 do 10 (1 = špatná, 10 = výborná). Napiš zároveň správnou odpověd — vše dohromady maximálně 250 znaků.

Vrať výsledek **pouze** jako validní JSON objekt, bez jakéhokoli úvodu nebo komentáře.

Příklad výstupu:
{
  "score": 7,
  "feedback": "Promise nejsou funkce, které čekají na zavolání, ale objekty reprezentující výsledek (nebo chybu) asynchronní operace. Syntaktický cukr async/await umožňuje pracovat s Promisy přehlednějším způsobem – zápis pak vypadá jako synchronní kód."
}
`;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;

    if (!response) {
      throw new Error("Gemini nevrátil žádnou odpověď (response je null).");
    }

    const text = await response.text();

    if (!text || typeof text !== "string") {
      throw new Error(
        "Gemini neposlal žádný text nebo byl ve špatném formátu."
      );
    }

    console.log("🔍 Gemini raw response:", text);

    const match = text.match(
      /```json\n([\s\S]*?)\n```|```([\s\S]*?)```|\{[\s\S]*?\}/
    );

    if (!match || (!match[1] && !match[2] && !match[0])) {
      throw new Error(
        "Gemini odpověď nebyla ve formátu JSON nebo ho nelze extrahovat."
      );
    }

    let jsonString = match[1] || match[2] || match[0];
    jsonString = jsonString.replace(/^`{1,3}(json)?\s*|`{1,3}$/g, "").trim();

    const parsed = JSON.parse(jsonString);
    res.json(parsed);
  } catch (err) {
    console.error("❌ Chyba:", err);
    res.status(500).json({
      score: 0,
      feedback:
        "❌ Chyba při získávání hodnocení z AI. Zkus jinou odpověď nebo použij offline verzi.",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Backend běží na http://localhost:${PORT}`);
});
