import React from "react";

const Card = ({title, content}) => {
  return (
    <div className="space-y-2 p-4 border-2 border-black max-w-sm rounded-2xl shadow-md">
      <h3 className="font-semibold text-lg text-blue-700">{title}</h3>
      <p className="text-slate-700 ">
        {`Content: ${content}`}
      </p>
    </div>
  );
};

export default Card;
