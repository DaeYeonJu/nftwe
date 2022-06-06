import React, { FC } from "react";
import { Image } from "@chakra-ui/react";

interface AnimalCardProps {
    animalType: string;
}

const Vangogh: FC<AnimalCardProps> = ({ animalType }) => {
    return (

        <Image w={150} h={150} src={`images/vangogh/${animalType}.png`} alt="Vangogh" />
    );
};

export default Vangogh;