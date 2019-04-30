const sortSourcesByNames = (sourcesList) => {
    let [currentLetter] = sourcesList[0].name;
    const sortedList = [
        {
            letter: currentLetter,
            entities: [],
        },
    ];
    sourcesList.forEach((item) => {
        if (currentLetter === item.name[0]) {
            sortedList[sortedList.length - 1].entities.push(item);
        } else {
            [currentLetter] = item.name;
            sortedList.push({
                letter: currentLetter,
                entities: [item],
            });
        }
    });
    return sortedList;
};

export default sortSourcesByNames;
