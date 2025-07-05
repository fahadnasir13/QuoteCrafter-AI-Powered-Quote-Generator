// lib/gemini.ts
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

export async function generateQuotes(topic: string): Promise<string[]> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    const prompt = `Give me 3 motivational quotes about ${topic}. Return them as a numbered list.`
    const result = await model.generateContent(prompt)
    const response = await result.response.text()

    // Split quotes from text output
    const quotes = response
      .split('\n')
      .filter(line => line.trim() && /^\d+/.test(line)) // lines starting with 1. 2. etc.
      .map(line => line.replace(/^\d+\.?\s*/, '')) // remove numbering

    return quotes
  } catch (error) {
    console.error('Gemini API Error:', error)
    return []
  }
}

if (!process.env.GEMINI_API_KEY) {
  console.error('❌ GEMINI_API_KEY is undefined')
}
