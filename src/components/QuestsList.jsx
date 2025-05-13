export function QuestsList({quests, onValidateQuest}){ 

    const maxDisplayedQuests = 3;
    // Gestion de l'affichage des quêtes
    // Si aucune quêtes n'est cochées, on affiche les 3 premières quêtes
    // Si une seule quête est coché elle reste affiché
    // Si deux quêtes sont cochées, on affiche la dernière
    //NOTE - Seul le premier élément de la liste peut être coché
    let listCount = 0;

    const lastFinishedQuestIndex = quests.findLastIndex((quest) => quest.isFinished === "completed");

    const displayQuests = quests.filter((quest) =>{
        if (listCount >= maxDisplayedQuests) return false; // Limite d'affichage
        
        const shouldDisplay = lastFinishedQuestIndex === -1 || quest.id > lastFinishedQuestIndex;
        
        if (shouldDisplay) {
            listCount++;
            return true;
        }

        return false;
    });

    function displayColor(quest) {
        switch (quest.isFinished) {
            case 'completed':
                return 'bg-blue-100 dark:bg-blue-600 dark:border-blue-500';
            case 'in-progress':
                return 'bg-yellow-100 dark:bg-yellow-600 dark:border-yellow-500';
            case 'not-started':
                return 'bg-gray-100 dark:bg-gray-600 dark:border-gray-500';      
            default:
                break;
        }
    }
    return (
        // <div id="sticky-banner" tabIndex="-1" className="fixed top-20 w-2xs start-0 z-50 flex justify-between w-1xl p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <ul className="bg-sky-800 flex flex-col rounded-xl border-1 border-sky-900 w-72">
                {displayQuests.map((quest) => (
                    <li key={quest.id}>
                        <div className="flex p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                            <div className="flex items-center h-5">
                                <input id={`helper-checkbox-${quest.id}`} name="helper-checkbox" type="checkbox" 
                                checked={quest.isFinished === "completed"} onChange={()=>onValidateQuest(quest.id)}
                                className={`w-4 h-4  ${displayColor(quest)} `}/>
                            </div>
                            <div className="ms-2 text-sm">
                                <label htmlFor={`helper-checkbox-${quest.id}`} className="font-medium text-gray-900 dark:text-gray-300">
                                    <div>{quest.title}</div>
                                    <p id={`helper-checkbox-text-${quest.id}`} className="text-xs font-normal text-gray-500 dark:text-gray-300">{quest.description}</p>
                                </label>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        // </div>
    )
}