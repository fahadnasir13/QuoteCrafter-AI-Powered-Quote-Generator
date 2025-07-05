QuoteCrafter – AI-Powered Quote Generator
Craft words that spark souls, powered by Gemini.

🔗 Live App: https://quote-crafter.vercel.app 

🌟 Overview
QuoteCrafter is an elegant and modern AI-powered quote generator web app built with Gemini Pro API. It offers unique, expressive, and inspiring quotes on demand — styled for shareability, introspection, and aesthetic clarity.

Whether you're a content creator, writer, or someone seeking a spark of daily wisdom — QuoteCrafter is your creative companion.

🎯 Use Cases
🎨 Daily inspiration & creative prompts

📣 Social media quote posts

✍️ Writing or journaling assistance

🎁 Gift message or card generation

🧠 Mood-based wisdom

💎 Features
🎭 Random AI-Generated Quotes
Powered by Gemini API for expressive & varied quotes.

🌓 Theme Switch
Toggle between light & dark modes for mood-based reading.

🔄 Regenerate Button
Get fresh inspiration with a single click.

🕊️ Tweet This Quote
One-click share to Twitter/X with built-in formatting.

📦 Quote History (localStorage)
View your previously generated quotes.

🖼️ Hero Header with Image
Modern & responsive header with visual appeal.

🛠️ Tech Stack
Area	Tools Used
Framework	Next.js 15
Styling	Tailwind CSS, ShadCN UI
UI Tools	Sonner (toasts), Lucide Icons
AI API	Gemini Pro (Google Generative AI)
State Mgmt	React Context + localStorage
Hosting	Vercel

🧩 Suggested Folder Structure
txt
Copy
Edit
quote-crafter/
├── app/                    # Next.js 15 App Directory
│   ├── page.tsx           # Main quote page
│   └── layout.tsx         # Global layout
├── components/            # Reusable UI components
│   ├── QuoteBox.tsx
│   ├── ThemeToggle.tsx
│   ├── TweetButton.tsx
│   └── Header.tsx
├── lib/                   # Helpers & utils
│   └── quote.ts           # Gemini quote generation logic
├── public/                # Static assets
│   └── header-bg.jpg
├── styles/
│   └── globals.css
├── .env.example           # API key placeholder
├── tsconfig.json
├── package.json
└── README.md

🧪 Running Locally


# 1. Clone the repo
git clone https://github.com/fahadnasir13/quote-crafter.git
cd quote-crafter

# 2. Install dependencies
npm install

# 3. Create .env file with Gemini API key
cp .env.example .env
# Add: GEMINI_API_KEY=your_key_here

# 4. Start the app
npm run dev
🔮 Upcoming Features
🗣️ Voice Quote Playback

🖌️ Quote Styling Themes (Minimal, Retro, Bold)

🧠 Sentiment-Based Quote Generation

📊 Quote Analytics Dashboard

🌍 Multilingual Quote Support

🏆 Project Info
🛠️ Built as part of Fahad Nasir’s AI Tools Series
🔬 Experiment in creativity, emotion, and prompt-based content
🧠 Part of AI-powered micro-tools ecosystem

👤 Creator
Fahad Nasir
AI Engineer & Full Stack Innovator

🔗 GitHub: @fahadnasir13
🔗 LinkedIn: fahadnasir15
🌐 Portfolio: fahadnasir.macaly-app.com

📄 License
MIT License — Free to use, remix, and contribute. Credit appreciated!

💬 Feedback or Collaborations?
Open to feedback, collabs, or forks! Drop an issue or connect via LinkedIn.
