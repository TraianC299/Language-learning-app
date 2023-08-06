import { useState } from "react"

const useTextToSpeech = ({lang}:{lang:string}) => {
    const speak = (text: string) => {
        const synth = window.speechSynthesis

        const utterThis = new SpeechSynthesisUtterance(text)
        utterThis.lang = lang
        synth.speak(utterThis)
    }

    const cancel = () => {
        const synth = window.speechSynthesis
        synth.cancel()
    }

    return { speak, cancel }

}

export default useTextToSpeech
