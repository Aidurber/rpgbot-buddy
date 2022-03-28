import React from "react"
import { render } from "react-dom"
import { Panel } from "./Panel"

const ROOT_ID = "rpgbuddy-ext"
async function createExtensionRoot() {
  if (document.getElementById(ROOT_ID)) return
  const container = document.createElement("div")
  container.id = ROOT_ID
  container.classList.add("widget")
  const hostContainer = document.querySelector("aside#sidebar")

  if (!hostContainer) {
    return
  }
  hostContainer.appendChild(container)

  render(<Panel />, container)
}
createExtensionRoot()
