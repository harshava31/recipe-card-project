import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  const recipes = [
    {
      title: "Spaghetti Carbonara",
      description: "Classic Italian pasta with creamy sauce and pancetta.",
      imageUrl: "/images/b1.jpg",
      ingredients: ["Spaghetti", "Pancetta", "Eggs", "Pecorino cheese", "Pepper"],
      steps: ["Cook pasta", "Fry pancetta", "Mix eggs and cheese", "Combine all"]
    },
    {
      title: "Margherita Pizza",
      description: "Traditional pizza with tomatoes, mozzarella, and basil.",
      imageUrl: "/images/b2.jpg",
      ingredients: ["Dough", "Tomato sauce", "Mozzarella", "Basil"],
      steps: ["Prepare dough", "Spread sauce", "Add mozzarella", "Bake"]
    },
    {
      title: "Caesar Salad",
      description: "A crunchy, refreshing salad with Caesar dressing.",
      imageUrl: "/images/b3.jpg",
      ingredients: ["Romaine lettuce", "Croutons", "Parmesan", "Caesar dressing"],
      steps: ["Chop lettuce", "Make dressing", "Toss with croutons and cheese"]
    },
    {
      title: "Beef Tacos",
      description: "Soft tortillas with seasoned beef and fresh toppings.",
      imageUrl: "/images/b4.jpg",
      ingredients: ["Tortillas", "Ground beef", "Cheese", "Lettuce", "Tomatoes"],
      steps: ["Cook beef", "Prepare toppings", "Assemble tacos"]
    }
  ];

  return (
    <div className="recipe-grid">
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}

      <style jsx>{`
        .recipe-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          padding: 20px;
        }

        @media (max-width: 768px) {
          .recipe-grid {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          }
        }
      `}</style>
    </div>
  );
}


