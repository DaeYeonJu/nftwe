import React, { FC } from "react";
import { Image } from "@chakra-ui/react";

interface AnimalCardProps {
  animalType: string;
}

const AnimalCard: FC<AnimalCardProps> = ({ animalType }) => {
  return (
    <Image w={150} h={150} img src={`images/${animalType}.png`} alt="Card" />
  );
};

export default AnimalCard;
