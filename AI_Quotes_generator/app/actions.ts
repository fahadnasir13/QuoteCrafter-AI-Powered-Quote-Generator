'use server'

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function getQuotes(topic: string, count = 5) {
  try {
    const model = genAI.getGenerativeModel({
      model: 'models/gemini-1.5-flash',
      safetySettings: [
        {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
        {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
        },
      ],
    })

    const prompt = `Give me ${count} short inspirational quotes about "${topic}". Only list quotes line by line.`

    const result = await model.generateContent(prompt)
    const response = result.response
    const text = await response.text()

    const quotes = text
      .split('\n')
      .map((line) => line.replace(/^\d+\.?\s*/, '').trim())
      .filter(Boolean)

    return { success: true, quotes }
  } catch (error: any) {
    console.error('Gemini error:', error)
    return { success: false, quotes: [], error: error.message }
  }
}
