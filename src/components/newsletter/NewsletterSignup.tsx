import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ErrorDialog } from '@/components/ui/ErrorDialog'
import { supabase } from '@/lib/supabase/client'

export function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<{ title: string; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }])

      if (error) throw error

      setEmail('')
      setError({
        title: 'Success!',
        message: 'Thank you for subscribing to our newsletter!'
      })
    } catch (err) {
      setError({
        title: 'Error',
        message: 'Failed to subscribe. Please try again later.'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="glass-panel p-6">
      <h3 className="text-xl font-semibold text-xp-blue mb-4">
        Subscribe to Our Newsletter
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-2 rounded-lg border border-xp-gray focus:outline-none focus:ring-2 focus:ring-xp-blue"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? 'Subscribing...' : 'Subscribe'}
        </Button>
      </form>

      <ErrorDialog
        isOpen={!!error}
        onClose={() => setError(null)}
        title={error?.title || ''}
        message={error?.message || ''}
      />
    </div>
  )
} 