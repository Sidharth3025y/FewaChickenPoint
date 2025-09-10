import React, { useEffect, useState } from "react";

const Home = () => {
  const [food, setFood] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          // Add a random price in NPR for each meal item (equivalent to $5-$20 at 1 USD = 130 NPR)
          const mealsWithPrice = data.meals.map(meal => ({
            ...meal,
            price: ((Math.random() * 15 + 5) * 130).toFixed(2) // Random price between Rs 650 and Rs 2600
          }));
          setFood(mealsWithPrice);
        }
      })
      .catch((error) => console.log("Error API LOADING...", error));
  }, []);

  // Get unique categories from food items
  const categories = ['All', ...new Set(food.map(item => item.strCategory))];

  // Filter food items based on selected category
  const filteredFood = selectedCategory === 'All' 
    ? food 
    : food.filter(item => item.strCategory === selectedCategory);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-white bg-amber-800 py-4 rounded-lg shadow-md">
        Menu
      </h1>
      
      {/* Category Filter Dropdown */}
      <div className="flex justify-center mt-6 mb-4">
        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-white text-gray-800 text-lg font-medium border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-600 transition duration-200"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {filteredFood.length === 0 ? (
        <p className="text-center mt-8 text-gray-600 text-lg animate-pulse">
          Please wait...
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {filteredFood.map((item) => (
            <li
              key={item.idMeal}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.strMealThumb}
                alt={item.strMeal}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.strMeal}
                </h2>
                <div className="flex gap-2 mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {item.strCategory}
                  </span>
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {item.strArea}
                  </span>
                </div>
              
                <p className="text-lg font-bold text-amber-700 mb-3 text-right ">
                  Rs 500
                </p>
                <a
                  href={item.strYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-white bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md transition duration-200"
                >
                  Watch on YouTube
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;