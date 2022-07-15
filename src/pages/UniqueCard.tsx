import React from "react";
import { useParams } from "react-router-dom";

export const Card: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <div>Card: {id}</div>
}