import React, { FC } from "react";
import { Image } from "@chakra-ui/react";

interface AnimalCardProps {
    animalType: string;
}

const Monet: FC<AnimalCardProps> = ({ animalType }) => {
    return (

        <Image w={150} h={150} src={`images/monet/${animalType}.png`} alt="Card" />
    );
};

export default Monet;
