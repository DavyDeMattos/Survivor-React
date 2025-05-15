import { Cell } from "./Cell";
import { useGameState } from "@/stores/GameState";
export function Map() {

    const { cells, updateCellType } = useGameState((state) => state);

    function handleClick(position) {
        // Try create house
        updateCellType('house', position);
    }

    return (
        <div className="bg-blue-100 grid grid-cols-5 grid-rows-5 min-w-90 h-90 border-collapse border-b-6 rounded-b-lg border-blue-300 ">
            {
                cells.map((row, rowIndex) => {
                    return row.map((cell, colIndex) => {
                        return <Cell 
                            type={cell.type} 
                            onClick={()=>handleClick({ x: colIndex, y: rowIndex })}
                            key={`${colIndex}-${rowIndex}`}
                        />;
                    });
                })
            }
        </div>
    );
}