import express from 'express'
import { Configuration, OpenAIApi } from 'openai'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

const openai = new OpenAIApi(
  new Configuration({ apiKey: process.env.OPENAI_API_KEY })
)

app.post('/evaluate', async (req, res) => {
  const { question, answer } = req.body

  const prompt = `Otázka: ${question}\nOdpověď uživatele: ${answer}\n\nOhodnoť odpověď číslem od 1 do 10 (kde 10 je perfektní), a dej krátké vysvětlení proč. Vrať odpověď ve formátu:\n{ "score": 7, "feedback": "Některé části chybí, ale základní princip je správně." }`

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
    })

    const json = completion.data.choices[0].message.content.trim()

    const parsed = JSON.parse(json)
    res.json(parsed)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Hodnocení selhalo' })
  }
})

app.listen(3000, () => console.log('Server běží na portu 3000'))
