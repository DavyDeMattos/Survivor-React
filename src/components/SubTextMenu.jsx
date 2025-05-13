export function SubTextMenu() {
    const text = [
        'Vous pensez pouvoir battre le jeu ?',
        'Mangez 5 fruits et légumes !',
        'The cake is a lie',
        'Une petite pause ?',
        'Bonne chance !',
    ]

    const subtitle = text[Math.floor(Math.random() * text.length)];

    // function getRandomText() {
    //   return text[Math.floor(Math.random() * text.length)];
    // }
  return (
    <div className="sub-text-menu">
      {/* <p>{getRandomText()}</p> */}
      <p>{subtitle}</p>
    </div>
  );
}