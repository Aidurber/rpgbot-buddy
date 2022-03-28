import { getBucket } from "@extend-chrome/storage"

type Settings = {
  isPanelHidden: boolean
}
export const settingsStore = getBucket<Settings>("settings", "local")
