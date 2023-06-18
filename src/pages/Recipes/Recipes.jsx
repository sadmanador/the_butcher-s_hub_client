/* eslint-disable no-unused-vars */
import { Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { GiChiliPepper } from "react-icons/gi";
import { addToLocalStorage } from "../../utilities/localStoragesSave/localStorageSave";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Recipes = ({ recipe }) => {
  // eslint-disable-next-line react/prop-types
  const { id, ingredients, recipe_img, name, rating, cooking_method, spice } =
    recipe;
  const [seeMore, setSeeMore] = useState(200);
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = (event) => {
    event.target.classList.add("btn-disabled");
    toast.success(`"${name}" added to you favorite list`);
    addToLocalStorage(id);
    setFavorite(true);
  };

  const toggleSeeMore = (more) => {
    let len = cooking_method.length;
    if (more) {
      setSeeMore(len);
    } else {
      setSeeMore(200);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-5 mb-4 p-4 rounded-xl shadow-xl card glass">
      <div className="avatar">
        <div className="mask mask-hexagon">
          <img src={recipe_img} />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>
          {cooking_method.slice(0, seeMore)}...{" "}
          {seeMore < 201 ? (
            <button
              onClick={() => toggleSeeMore(true)}
              className="font-semibold"
            >
              {" "}
              See more.
            </button>
          ) : (
            <button
              onClick={() => toggleSeeMore(false)}
              className="font-semibold"
            >
              {" "}
              See less.
            </button>
          )}
        </p>
      </div>
      <div>
        <p>
          <span className="font-semibold">Ingredients:</span>{" "}
          {ingredients.map((ingredient) => ingredient).join(", ")}.
        </p>

        <div className="mt-8">
          <div className="flex justify-center">
            <Typography component="legend">Rating:</Typography>
            <Rating name="read-only" value={rating} precision={0.5} readOnly />
          </div>
          <div className="flex justify-center">
            <Typography component="legend">Spice rating:</Typography>
            <Rating
              name="customized-color"
              readOnly
              defaultValue={spice}
              precision={1}
              icon={
                <GiChiliPepper className="text-red-600" fontSize="inherit" />
              }
              emptyIcon={<GiChiliPepper fontSize="inherit" />}
            />
          </div>
        </div>
        <div className="text-center text-3xl mt-20">
          <button onClick={handleFavorite} className="tooltip tooltip-bottom" data-tip="Add to favorite">
            {!favorite ? (
              <AiOutlineHeart />
            ) : (
              <AiFillHeart className="text-red-600" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
