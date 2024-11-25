import React from "react";
import { useParams } from "react-router-dom";

const ListDetails = () => {
  const { id } = useParams();
  return <div>Here are the details from - {id}</div>;
};

export default ListDetails;
