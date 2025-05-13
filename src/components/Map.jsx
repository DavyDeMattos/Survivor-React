import { Cell } from './Cell'

export function Map({mapData, handleCell}){
    return (
        <div className={`grid max-h-lvh grid-cols-${mapData.length} gap-2`}>
            {mapData.map((row, index)=>
                row.map((field, index2)=>
                <div key={`${index}-${index2}`} className='bg-gray-400'>
                    <Cell  index={`${index}-${index2}`} type={field.type} handleCell={handleCell}/>
                </div>
                )
            )}
        </div>
    )
}