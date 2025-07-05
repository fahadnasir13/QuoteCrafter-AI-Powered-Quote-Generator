const API_KEY = 'AIzaSyC3ccUO0N_3aOBv_dexBmg3IesjmPAH1CI';  // 🔁 Replace this with your actual key
const MODEL = 'models/gemini-1.5-flash'; // You can also try 'models/gemini-pro'

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

const prompt = {
  contents: [
    {
      parts: [{ text: 'Say 3 inspirational quotes about technology.' }],
      role: 'user',
    },
  ],
};

const url = `https://generativelanguage.googleapis.com/v1beta/${MODEL}:generateContent?key=${API_KEY}`;

async function testGemini() {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prompt),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ ERROR:', data);
      return;
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log('✅ SUCCESS:\n', text);
  } catch (err) {
    console.error('💥 FETCH FAILED:', err.message);
  }
}

testGemini();
