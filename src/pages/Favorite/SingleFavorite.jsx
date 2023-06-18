import { Rating, Typography } from "@mui/material";
import React from "react";
import { removeFromDb } from "../../utilities/localStoragesSave/localStorageSave";
import { toast } from "react-hot-toast";

const SingleFavorite = ({ favorite, favorites, setFavorites }) => {
  const { name, id, chef, chef_img_url, ingredients, rating, recipe_img } =
    favorite;

  const handleRemoveProduct = (selectedId) => {
    const rest = favorites.filter((item) => item.id != selectedId);
    let newCart = [...rest];
    setFavorites(newCart);
    removeFromDb(selectedId);
    toast.success(`"${name}" is removed`);
  };

  return (
    <div className="">
      <div className="max-w-6xl mx-auto">
        <div className=" rounded-lg my-6 grid grid-cols-3 justify-between gap-10 shadow-lg relative py-6">
          <div className="flex">
            <div className="p-4">
              <div className="relative">
                <div className="avatar">
                  <div className="w-36 rounded">
                    <img src={recipe_img} />
                  </div>
                </div>
                <p className="text-xl badge badge-primary absolute -right-2 -top-2">
                  new
                </p>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{name}</h2>
              <div>
                {ingredients.map((ingredient) => ingredient).join(", ")}
              </div>
            </div>
          </div>
          <div className="self-center">
            <div className="flex">
              <Typography component="legend">Rating:</Typography>
              <Rating
                name="read-only"
                value={rating}
                precision={0.5}
                readOnly
              />
            </div>
          </div>
          <div className="">
            <div className="avatar">
              <div className="w-36 rounded-full">
                <img src={chef_img_url} />
              </div>
            </div>
            <h3 className="text-xl font-semibold ml-8">{chef}</h3>
          </div>

          <button
            className="btn btn-circle btn-outline absolute -right-4 -top-4 hover:bg-red-600 hover:border-none"
            onClick={() => handleRemoveProduct(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFavorite;
