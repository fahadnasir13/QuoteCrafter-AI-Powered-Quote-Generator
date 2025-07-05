import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    const result = await model.generateContent("Say Hello")
    const text = result.response.text()
    return NextResponse.json({ success: true, text })
  } catch (e) {
    return NextResponse.json({ success: false, error: String(e) })
  }
}
