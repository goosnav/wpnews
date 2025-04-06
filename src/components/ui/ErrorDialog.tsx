import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface ErrorDialogProps {
  isOpen: boolean
  onClose: () => void
  title: string
  message: string
}

export function ErrorDialog({ isOpen, onClose, title, message }: ErrorDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white rounded-lg shadow-xp border border-xp-gray max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xp-red">
            <span className="text-2xl mr-2">⚠️</span>
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4 text-xp-darker-gray">
          {message}
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-xp-blue text-white hover:bg-xp-light-blue"
          >
            OK
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
} 