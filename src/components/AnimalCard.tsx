import React, { FC } from "react";
import { Image } from "@chakra-ui/react";

interface AnimalCardProps {
  animalType: string;
}

const AnimalCard: FC<AnimalCardProps> = ({ animalType }) => {
  return (
    <Image w={330} h={330} src={`images/abc/${animalType}.png`} alt="Card" />
  );
};

export default AnimalCard;
