

  const data = [
    { id: 1, pic:"buffSand", title: "The Buffalo Chicken Sandwich", content: "Best ordered at a deli counter on a <a href='/6'>wedge</a> with light red <a href='/13'> onion,</a> and <a href='/5'>blue cheese</a> crumble.</h2>", Ingredients: "<a href='/6'>Bread</a, <a href='/8'>Chicken</a>, <a href='/5'>Blue Cheese</a><a href='/9'>Lettuce</a>, <a href='/14'>Tomato</a>, <a href='/13'>Onion</a>,  <a href='/7'>Buffalo Sauce</a>" },
    { id: 2, pic:"liverSand", title: "The Liverwurst Sandwich", content: "Saucisse de foie de porc. Find it at McSorley's or Schaller & Weber. For sophisticated palates only. I think.</h2>", Ingredients: "<a href='/6'>Bread</a>, <a href='/10'>Liverwurst</a>, <a href='/13'>Onion</a>, <a href='/12'>Mustard</a>" },
    { id: 3, pic:"clubSand", title: "The Turkey Club", content: "Some people opine that Club is an acronym for <a href='/8'>Chicken</a>, <a href='/9'>Lettuce</a> Under <a href='/6'>Bread</a>", Ingredients: "<a href='/6'>Bread</a>, <a href='/15'>Turkey</a>, <a href='/4'>Bacon</a>, <a href='/9'>Lettuce</a>, <a href='/14'>Tomato</a>, <a href='/11'>Mayonnaise</a>" },
    { id: 4, pic:"baco", title: "Bacon", content: "One of the many delicious uses of pig. ", Ingredients: "Sometimes found in <a href='/3'>Club Sandwiches</a>" },
    { id: 5, pic:"blue", title: "Blue Cheese", content: "Moldy and delicious. Blue Cheese crumbles or dressing acceptable. ", Ingredients: "Essential to the <a href='/1'>Buffalo Chicken Sandwich</a>" },
    { id: 6, pic:"brea", title: "Bread", content: "Carbs! ", Ingredients: "Found in all <a href='/'>sandwiches</a>" },
    { id: 7, pic:"sauc", title: "Buffalo Sauces", content: "Should be cayenne pepper based. Preferrably Frank's Red Hot ", Ingredients: "Essential to the <a href='/1'>Buffalo Chicken Sandwich</a>" },
    { id: 8, pic:"chic", title: "Chicken", content: "Breaded, Grilled or People who scare easily.",  Ingredients: "Essential to the <a href='/1'>Buffalo Chicken Sandwich</a> and sometimes found in <a href='/2'>Club Sandwiches</a>" },
    { id: 9, pic:"lett", title: "Lettuce", content: "Get some greens on your sandwich! ", Ingredients:"Found in <a href='/1'>Buffalo Chicken Sandwiches</a> and <a href='/club'>Club Sandwiches</a>" },
    { id: 10, pic:"live", title: "Liverwurst", content: "An acquired taste. High in sodium.", Ingredients:"Cannot have a <a href='/2'>Liverwust Sandwich</a> without it" },
    { id: 11, pic:"mayo", title: "Mayo", content: "Honestly have no clue what this one is. I think egg yokes are involved? ", Ingredients: "Found in the <a href='/2'>Liverwurst Sandwich</a>" },
    { id: 12, pic:"must", title: "Mustard", content: "Yellow, Grainey, or maybe even Dijon. ", Ingredients: "Found in <a href='/2'>Club Sandwiches</a> " },
    { id: 13, pic:"onio", title: "Onion", content: "Despite them tasting and looking nothing alike, onions are sometimes confused with ogres.", Ingredients: "Found in <a href='/1'>Liverwurst Sandwiches</a> and sometimes <a href='/buff'>Buffalo Chicken Sandwiches</a>" },
    { id: 14, pic:"toma", title: "Tomato", content: "I think its a fruit.", Ingredients: "Found in <a href='/1'>Buffalo Chicken</a> and <a href='/2'>Club Sandwiches</a>" },
    { id: 15, pic:"turk", title: "Turkey", content: "Your yearly dose of tryptophan.", Ingredients: "Found in the <a href='/2'>Club Sandwich</a>" }
  
  ];
  
  

  const list = () => {
    return [...data] // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
  }; 
  
  const find = (id) => {
    const post = data.find(post => post.id === +id);
    return {...post}; // Again, we copy the post data before returning so the original information is safe.
  }
  
  module.exports = { list: list, find: find };