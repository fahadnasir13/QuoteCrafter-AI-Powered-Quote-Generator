'use client'

import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { getQuotes } from './actions'

export default function Home() {
  const [topic, setTopic] = useState('')
  const [quotes, setQuotes] = useState<string[]>([])
  const [loading, setLoading] = useState(false)

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast.error('Please enter a topic first.')
      return
    }

    setLoading(true)
    const res = await getQuotes(topic)
    if (res.success) {
      setQuotes(res.quotes)
    } else {
      toast.error('Failed to generate quotes.')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-xl space-y-6 bg-card shadow-md rounded-lg p-6 border">
<h1 className="text-4xl font-extrabold tracking-tight text-center text-primary mb-6">
  🚀 AI Quote Generator
</h1>

        <div className="space-y-2">
          <Label htmlFor="topic">Enter a topic:</Label>
          <Textarea
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. love, technology, success"
            className="resize-none min-h-[80px]"
          />
        </div>

        <Button onClick={handleGenerate} disabled={loading} className="w-full">
          {loading ? 'Generating...' : 'Generate Quotes'}
        </Button>

        {quotes.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">💡 Quotes:</h2>
            <ul className="list-disc list-inside space-y-2">
              {quotes.map((quote, idx) => (
                <li key={idx} className="bg-muted p-3 rounded-md text-sm">
                  {quote}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </main>
  )
}
