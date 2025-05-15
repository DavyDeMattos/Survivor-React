import { Cell } from './Cell'
import { useStore } from '../store/store';

export function Map({handleCell}){
    const { mapData } = useStore();
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