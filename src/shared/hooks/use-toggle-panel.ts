import { useState, useEffect } from "react"
import { settingsStore } from "../settings"

export function useTogglePanel(): {
  isHidden: boolean
  toggle: () => void
  isLoading: boolean
} {
  const [isHidden, setIsHidden] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    settingsStore.get({ isPanelHidden: false }).then(({ isPanelHidden }) => {
      setIsHidden(
        typeof isPanelHidden === "undefined" ? false : !!isPanelHidden,
      )
      setIsLoading(false)
    })
  }, [])
  const toggle = () => {
    const nextValue = !isHidden
    setIsHidden(nextValue)
    settingsStore.set({ isPanelHidden: nextValue })
  }
  return {
    isHidden,
    toggle,
    isLoading,
  }
}
