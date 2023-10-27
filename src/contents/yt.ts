import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["https://*.youtube.com/*"]
}

const ytSkipAdSelector = ".ytp-ad-skip-button.ytp-button"

window.addEventListener("load", () => {
  console.log("content script loaded")

  const vaaInterval = setInterval(() => {
    document.querySelectorAll(".ytp-ad-player-overlay").length > 0 &&
      (document.querySelector("video").playbackRate = 16)

    if (document.querySelectorAll(ytSkipAdSelector).length > 0) {
      const skipAdElement = document.querySelector(
        ytSkipAdSelector
      ) as HTMLButtonElement
      skipAdElement.click()
    }
  }, 250)
})
