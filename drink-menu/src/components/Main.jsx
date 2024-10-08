const Main = () => {
  const drinks = [
    {
      title: "The Weatogue",
      description:
        "A few short hours north of a Manhattan, with bitters made by Ellen",
    },

    {
      title: "Gin Max-tini",
      description: "We keep our house clean so we can keep our Martinis dirty",
    },

    { title: "Papa's Old Fashioned", description: "Don’t mess with the classic! Alyssa hates the name, Jeremy loves the drink." },
    {
      title: "Delray Cooler",
      description: "Bourbon, Aperol, Passionfruit Syrup, Lime and & Mint. The best thing to come out of Delray Beach",
    },
    {
      title: "Parisian Margarita",
      description: "Tequila blanco with St. Germain and lime juice. Très bien!",
    },
    {
      title: "The Baby Maker",
      description: "Tequila Anejo, Jamaican Rum, Passion Fruit Syrup, Vanilla",
    },

    {
      title: "Blue Dream",
      description: "No, not that kind... Tequila Blanco, Blue Curacao, fresh lime juice",
    },
    {
      title: "Long Beach Iced Tea",
      description:
        "Like a Long Island Iced Tea, but it wears sandals and listens to reggae",
    },

    {
      title: "The Dad Joke",
      description:
        "A shot of bourbon, a dash of updog, and a good quality butfor",
        
    },
    {title: "Rhode Island Duderino",
      description:
        "Coffee milk and vodka, if you're not into the whole brevity thing",
        },
    {
      title: "Holy Grail",
      description:
        "Elderberry liqueur, gin, and lime juice and fresh lavender from our garden",
    },
    {
      title: "Farmington River Rum Punch",
      description:
        "Almost as sweet as Max’s smiles. Not recommended for diabetics",
    },
    {
      title: "Aperol Spritzer",
      description: "A summer delight; bright, sweet, and delicious",
    },
    {
      title: 'Sky Blue Sky',
    description: 'St Germain, Blue Curacao, Seltzer'
  },
    {
      title: "Simsbury Float",
      description: "Coca cola and chocolate Liquer with Ice cream on top",
    },
    {
      title: "Kingston Libre",
      description: "Coca Cola, Jamaican rum, fresh lime juice",
    },
    {
      title: "Sambuca, neat",
      description:
        "Delicious! So good! Really! Why would we lie to you? Please drink our Sambuca!",
    },
  ];

  return (
    <div className="drink-list">
     {drinks.map((drink)=> (
        <div className="drink-card" key={drink.title}>
            <h2 id="drink-title">{drink.title}</h2>
            <h3 id="drink-description"> {drink.description}</h3>
        </div>    
     ))}
    </div>
  );
};

export default Main
