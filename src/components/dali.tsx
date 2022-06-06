import React, { FC } from "react";
import { Image } from "@chakra-ui/react";

interface AnimalCardProps {
    animalType: string;
}

const Dali: FC<AnimalCardProps> = ({ animalType }) => {
    return (

        <Image w={150} h={150} src={`images/dali/${animalType}+"Dali".png`} alt="Card" />
    );
};

export default Dali;