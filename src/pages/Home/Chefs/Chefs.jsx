import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleChefCard from "../SingleChefCard/SingleChefCard";

const Chefs = () => {
  const chefs = useLoaderData();

  return (
    <div className="chef_detail">
      <div className="lg:grid grid-cols-3 gap-6 max-w-7xl mx-auto py-32">
        {chefs.map((chef) => (
          <SingleChefCard key={chef.id} chef={chef}></SingleChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chefs;
