import React, { FC, useState } from "react";
import { Box, Text, Flex, Button, Image } from "@chakra-ui/react";
import { mintAnimalTokenContract } from "../web3Config";
import AnimalCard from "../components/AnimalCard";

interface MainProps {
  account: string;
}

const Main: FC<MainProps> = ({ account }) => {
    const [newAnimalType, setNewAnimalType] = useState<string>();

    const onClickMint_org = async () => {
        try {
            if (!account) return;         
            const response = await mintAnimalTokenContract.methods
                .mintAnimalToken()
                .send({ from: account });
            if (response.status){
                const balanceLength = await mintAnimalTokenContract.methods
                    .balanceOf(account)
                    .call();
                console.log(balanceLength);

                const animalTokenId = Math.floor(parseInt(await mintAnimalTokenContract.methods
                    .tokenOfOwnerByIndex(account, parseInt(balanceLength, 10) - 1)
                    .call(),10)/5)*5;

                const animalType = String(Math.floor(parseInt(await mintAnimalTokenContract.methods
                    .animalTypes(animalTokenId)
                    .call(), 10) / 5) * 5)
                    ;
                console.log(animalTokenId);
                console.log(animalType);

                setNewAnimalType(animalType);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const onClickMint_cezanne = async () => {
        try {
            if (!account) return;

            const response = await mintAnimalTokenContract.methods
                .mintAnimalToken()
                .send({ from: account });
            if (response.status)
             {
                const balanceLength = await mintAnimalTokenContract.methods
                    .balanceOf(account)
                    .call();
                console.log(balanceLength);

                const animalTokenId = Math.floor(parseInt(await mintAnimalTokenContract.methods
                    .tokenOfOwnerByIndex(account, parseInt(balanceLength, 10) - 1)
                    .call(),10)/5)*5+1;

                const animalType = String(Math.floor(parseInt(await mintAnimalTokenContract.methods
                    .animalTypes(animalTokenId)
                    .call(),10)/5)*5+1);
                console.log(animalTokenId);
                console.log(animalType);

                setNewAnimalType(animalType);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const onClickMint_monet = async () => {
        try {
            if (!account) return;

            const response = await mintAnimalTokenContract.methods
                .mintAnimalToken()
                .send({ from: account });

            if (response.status)
            {
                const balanceLength = await mintAnimalTokenContract.methods
                    .balanceOf(account)
                    .call();
                console.log(balanceLength);

                const animalTokenId = Math.floor(parseInt(await mintAnimalTokenContract.methods
                    .tokenOfOwnerByIndex(account, parseInt(balanceLength, 10) - 1)
                    .call(),10)/5)*5+2;

                const animalType = String(Math.floor(parseInt(await mintAnimalTokenContract.methods
                    .animalTypes(animalTokenId)
                    .call(), 10)/5)*5 + 2);
                console.log(animalTokenId);
                console.log(animalType);

                setNewAnimalType(animalType);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const onClickMint_ukiyo = async () => {
        try {
            if (!account) return;

            const response = await mintAnimalTokenContract.methods
                .mintAnimalToken()
                .send({ from: account });

            if (response.status)
            {
                const balanceLength = await mintAnimalTokenContract.methods
                    .balanceOf(account)
                    .call();
                console.log(balanceLength);

                const animalTokenId = Math.floor(parseInt(await mintAnimalTokenContract.methods
                    .tokenOfOwnerByIndex(account, parseInt(balanceLength, 10) - 1)
                    .call(),10)/5)*5+3;

                const animalType = String(Math.floor(parseInt(await mintAnimalTokenContract.methods.animalTypes(animalTokenId).call(),10)/5)*5+3);
                console.log(animalTokenId);
                console.log(animalType);

                setNewAnimalType(animalType);
            }
        } catch (error) {
            console.error(error);
        }
    };
    const onClickMint_vangogh = async () => {
        try {
            if (!account) return;
            const response = await mintAnimalTokenContract.methods
                .mintAnimalToken()
                .send({ from: account });

            if (response.status)
            {
                const balanceLength = await mintAnimalTokenContract.methods
                    .balanceOf(account)
                    .call();
                console.log(balanceLength);

                const animalTokenId = Math.floor(parseInt(await mintAnimalTokenContract.methods.tokenOfOwnerByIndex(account, parseInt(balanceLength, 10) - 1).call(),10)/5)*5+4;
                const animalType = String(Math.floor(parseInt(await mintAnimalTokenContract.methods.animalTypes(animalTokenId).call(), 10) / 5) * 5 + 4);
            
                console.log(animalTokenId);
                console.log(animalType);

                setNewAnimalType(animalType);
            }
        } catch (error) {
            console.error(error);
        }
    };
            return (
                <Flex
                    w="90vh"
                    h="20vh"
                    justifyContent="space-around"
                    alignItems="center"
                    direction="row"
                >
                    <Image w={330} h={330} src={`images/${1}.png`} alt="Card" />
                    <Box>
                        {newAnimalType ? (
                            <AnimalCard animalType={newAnimalType} />
                        ) : (
                            <Text></Text>
                        )}
                    </Box>
                    <Button mt={4} size="sm" colorScheme="blue" onClick={onClickMint_org}>
                        org
                    </Button>
                    <Button mt={4} size="sm" colorScheme="blue" onClick={onClickMint_cezanne}>
                        cezanne
                    </Button>
                    <Button mt={4} size="sm" colorScheme="blue" onClick={onClickMint_monet}>
                        monet
                    </Button>
                    <Button mt={4} size="sm" colorScheme="blue" onClick={onClickMint_ukiyo}>
                        ukiyo
                    </Button>
                    <Button mt={4} size="sm" colorScheme="blue" onClick={onClickMint_vangogh}>
                        vangogh
                    </Button>
                </Flex>
         );
};
export default Main;