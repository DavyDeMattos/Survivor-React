import { Cell } from './Cell'

export function Map({mapData, handleCell}){
    return (
        <div className={`grid max-h-lvh grid-cols-5 gap-2`}>
            {mapData.map((row, indexRow)=>
                row.map((field, indexCell)=>
                <div key={`${indexRow}-${indexCell}`} className='bg-gray-400'>
                    <Cell  index={{'y' : indexRow, 'x' : indexCell}} type={field.type} handleCell={handleCell}/>
                </div>
                )
            )}
        </div>
    )
}