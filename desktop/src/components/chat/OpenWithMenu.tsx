import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

type Props = { url: string; onOpenInApp: (url: string) => void; onOpenSystem: (url: string) => void }

export function OpenWithMenu({ url, onOpenInApp, onOpenSystem }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <span className="relative inline-block">
      <button aria-label="打开方式" onClick={() => setOpen((v) => !v)} className="inline-flex items-center gap-0.5 text-xs">
        <ChevronDown size={12} />
      </button>
      {open && (
        <div className="absolute z-10 mt-1 rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] py-1 text-xs shadow">
          <button className="block w-full px-3 py-1 text-left hover:bg-[var(--color-surface-hover)]" onClick={() => { setOpen(false); onOpenInApp(url) }}>应用内浏览器</button>
          <button className="block w-full px-3 py-1 text-left hover:bg-[var(--color-surface-hover)]" onClick={() => { setOpen(false); onOpenSystem(url) }}>系统浏览器</button>
        </div>
      )}
    </span>
  )
}
