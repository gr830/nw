import { useState } from 'react';
import './calcPlit.css'

export const CalcPlit = () => {
    const [width, setWidth] = useState("")
    const [height, setHeight] = useState("")

    const [scale, setScale] = useState("")

    const [widthWorkpiece, setWorkpieceWidth] = useState("")
    const [heightWorkpiece, setWorkpieceHeightW] = useState("")

    const [quantityWorkpiece, setQuantityWorkpiece] = useState(0)

    const [indentation, setWorkIndentation] = useState("")

    const [calc, setCalc] = useState(0)

    const newArray = "1".repeat(quantityWorkpiece).split('')

    const calcWorkpieces = () => {
        const op1 = Math.floor((+height + +indentation) / (+heightWorkpiece + +indentation))
        const op2 = Math.floor((+width + +indentation) / (+widthWorkpiece + +indentation ))
        const s1 = op1 * op2 
    
        const op11 = Math.floor((+width + +indentation) / (+heightWorkpiece + +indentation))
        const op21 = Math.floor((+height + +indentation) / (+widthWorkpiece + +indentation ))
        const s11 = op11 * op21

        const result = s1 > s11 ? s1 : s11
        const h = s1 > s11 ? heightWorkpiece : widthWorkpiece
        const W = s1 > s11 ? widthWorkpiece : heightWorkpiece

        setWorkpieceWidth(W)
        setWorkpieceHeightW(h)
        setQuantityWorkpiece(+result)
        setCalc(result)
    }

    return (
        <div className='box-plit'>
            <fieldset>
                Масштаб 1/ <input name='scale' onChange={(e) => setScale(e.target.value)} />
            </fieldset>
            <fieldset>
                <legend>Габариты плиты</legend>
                Длина  <input name='width' onChange={(e) => setWidth(e.target.value)} />
                Высота  <input name='height' onChange={(e) => setHeight(e.target.value)} />
            </fieldset>

            <fieldset>
                <legend>Габариты заготовки</legend>
                Длина заготовки  <input value={widthWorkpiece} name='widthW' onChange={(e) => setWorkpieceWidth(e.target.value)} />
                Высота заготовки <input value={heightWorkpiece}  name='heightW' onChange={(e) => setWorkpieceHeightW(e.target.value)} />
            </fieldset>

            <fieldset>
                Количество деталей  <input value={quantityWorkpiece} name='indentation' onChange={(e) => setQuantityWorkpiece(+e.target.value)} />
            </fieldset>

            <fieldset>
                Ширина реза  <input name='widthW' onChange={(e) => setWorkIndentation(+e.target.value)} />
            </fieldset>

            <p>Количество деталей рассчетное {calc}</p>
            <button onClick={calcWorkpieces}>Рассчитать</button>

            <div className='plit' style={{ width: `${(+width / scale)+""}px`, height: `${(+height / +scale) + ""}px`,gap:`${(+indentation / +scale) + ""}px`  }}>
            {newArray.map( el => 
                <div className='workpiece' style={{ width: `${(+widthWorkpiece / +scale)+""}px`, height: `${(+heightWorkpiece / +scale) + ""}px`}}></div>
            )}
            </div>
        </div>
    )
}