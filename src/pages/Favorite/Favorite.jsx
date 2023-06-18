import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getShoppingCart } from "../../utilities/localStoragesSave/localStorageSave";
import SingleFavorite from "./SingleFavorite";

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const recipes = useLoaderData();

  useEffect(() => {
    const storedFavorites = getShoppingCart();
    const savedFavorite = [];
    for (const id in storedFavorites) {
      const addedFavorites = recipes.find((recipe) => recipe.id == id);
      savedFavorite.push(addedFavorites);
    }
    setFavorites(savedFavorite);
  }, [recipes]);

  return (
    <div className="min-h-screen">
      {favorites.map((favorite) => (
        <SingleFavorite key={favorite.id} favorite={favorite} favorites={favorites} setFavorites={setFavorites}></SingleFavorite>
      ))}
    </div>
  );
};

export default Favorite;
