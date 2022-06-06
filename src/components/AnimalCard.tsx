import React, { FC } from "react";
import { Image } from "@chakra-ui/react";

interface AnimalCardProps {
  animalType: string;
}

const AnimalCard: FC<AnimalCardProps> = ({ animalType }) => {
  return (
    <img src={process.env.PUBLIC_URL +`${animalType}.png`} alt="copy url" />
  );
};
export default AnimalCard;
