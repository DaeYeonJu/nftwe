import React, { FC } from "react";
import { Image } from "@chakra-ui/react";

interface AnimalCardProps {
  animalType: string;
}

const AnimalCard: FC<AnimalCardProps> = ({ animalType }) => {
  return (
    <img src={`${animalType}.png`} alt="Card" />
  );
};

export default AnimalCard;
