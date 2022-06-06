import React, { FC } from "react";
import { Image } from "@chakra-ui/react";

interface AnimalCardProps {
    animalType: string;
}

const Ukiyo: FC<AnimalCardProps> = ({ animalType }) => {
    return (

        <Image w={150} h={150} src={`images/ukiyo/${animalType}.png`} alt="Card" />
    );
};

export default Ukiyo;