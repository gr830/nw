import { useState } from 'react';

export const Converter = () => {
    const [input, setInput] = useState("")
    const [text, setText] = useState("")

    const changeText = () => {
        const wr = input.split("\t")
        const finalText = input.length <= 16 ? "Некорректные данные" : `${wr[0]} ${wr[1]} ${wr[2]} ${wr[3]}${wr[4]} ${wr[7]}${wr[9]} ${wr[16]}${wr[18]} вместо ${wr[7]}   ${wr[16]}`
        setInput('')
        setText(finalText)
    }

    return (
        <div className={"box-converter"}>
            <input placeholder="введите значение" className={"input"} value={input} onChange={(e) => setInput(e.target.value)}></input>
            <button className={"btn"} onClick={changeText}>Click</button>
            <p className={"text"}>{text}</p>
        </div>
    )
}