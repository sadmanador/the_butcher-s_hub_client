/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FcLike } from "react-icons/fc";
import { GiHamburger } from "react-icons/gi";
import { SiCodechef } from "react-icons/si";
import LazyLoad from "react-lazy-load";
import { Link } from "react-router-dom";

const SingleChefCard = ({ chef }) => {
  const { id, name, likes, years_of_experience, image_url, recipes, total_recipes } = chef;

  return (
    <div className="mb-4 lg:mb-0">
      <div className="card glass lg:w-96 shadow-xl mx-2 lg:mx-0">
        <div className="avatar">
          <LazyLoad
            className="rounded-xl"
            width={600}
            height={400}
            offset={100}
            once={true}
          >
            <img src={image_url} alt="chefs" />
          </LazyLoad>
        </div>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
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
          <div className="card-actions justify-end">
            <Link to={`/chef/${id}`} className="btn btn-warning">
              View Recipes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChefCard;
