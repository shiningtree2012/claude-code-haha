import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { OpenWithMenu } from './OpenWithMenu'

describe('OpenWithMenu', () => {
  it('offers in-app and system browser choices', () => {
    const onInApp = vi.fn(); const onSystem = vi.fn()
    render(<OpenWithMenu url="https://example.com" onOpenInApp={onInApp} onOpenSystem={onSystem} />)
    fireEvent.click(screen.getByLabelText('打开方式'))
    fireEvent.click(screen.getByText('应用内浏览器'))
    expect(onInApp).toHaveBeenCalledWith('https://example.com')
    fireEvent.click(screen.getByLabelText('打开方式'))
    fireEvent.click(screen.getByText('系统浏览器'))
    expect(onSystem).toHaveBeenCalledWith('https://example.com')
  })
})
