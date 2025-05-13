export function QuestsList({quests, onValidateQuest}){ 

    const maxDisplayedQuests = 3;
    // Gestion de l'affichage des quêtes
    // Si aucune quêtes n'est cochées, on affiche les 3 premières quêtes
    // Si une seule quête est coché elle reste affiché
    // Si deux quêtes sont cochées, on affiche la dernière
    //NOTE - Seul le premier élément de la liste peut être coché
    let listCount = 0;

    const lastFinishedQuestIndex = quests.findLastIndex((quest) => quest.isFinished);

    const displayQuests = quests.filter((quest) =>{
        if (listCount >= maxDisplayedQuests) return false; // Limite d'affichage
        
        const shouldDisplay = lastFinishedQuestIndex === -1 || quest.id > lastFinishedQuestIndex;
        
        if (shouldDisplay) {
            listCount++;
            return true;
        }

        return false;
    });

    return (
        <div id="sticky-banner" tabIndex="-1" className="fixed top-20 start-0 z-50 flex justify-between w-1xl p-4 border-b border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHelperRadioButton">
                {displayQuests.map((quest) => (
                    <li key={quest.id}>
                        <div className="flex p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                            <div className="flex items-center h-5">
                                <input id={`helper-checkbox-${quest.id}`} name="helper-checkbox" type="checkbox" 
                                checked={quest.isFinished} onChange={()=>onValidateQuest(quest.id)}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
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
        </div>
    )
}