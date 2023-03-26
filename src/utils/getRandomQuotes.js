export const getRandomQuotes = (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length);
    return listItems[randomIndex];
  };