/* eslint-disable no-unused-vars */
import React from "react";
import { FcLike } from "react-icons/fc";
import { GiHamburger } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import LazyLoad from "react-lazy-load";
import { useLoaderData } from "react-router-dom";
import Recipes from "../Recipes/Recipes";

const ChefDetail = () => {
  const chefDetails = useLoaderData();
  const {
    id,
    name,
    likes,
    years_of_experience,
    image_url,
    recipes,
    short_bio,
    total_recipes,
  } = chefDetails;

  return (
    <div className="chef_detail">
      <div className="max-w-7xl mx-auto px-10 py-28 grid grid-cols-chef-recipes">
        <div className="card glass py-12 px-4 gap-10">
          <div className="avatar">
            <div className="mask mask-squircle">
              <img src={image_url} />
            </div>
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold my-4">{name}</h2>
            <p>
              <SiCodechef className="inline text-2xl mr-2" />
              {years_of_experience} years of experience
            </p>
            <p>
              <GiHamburger className="inline text-2xl mr-2" />
              {total_recipes}+ recipes
            </p>
            <p>
              <FcLike className="inline text-2xl mr-2 align-top" />
              {likes} likes
            </p>

            <div className="mt-6">
              <p>{short_bio}</p>
            </div>
          </div>
        </div>
        <div className="mx-10">
          {recipes.map((recipe, index) => (
            <Recipes key={index} recipe={recipe}></Recipes>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefDetail;
