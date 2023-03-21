import React, {memo, useCallback, useState} from "react";
import { Pet } from "../../../server/types/pets";
import {usePets} from "./apit";

export const PetsAPI = memo(() => {
    const [pets, setPets] = useState<Pet[]>([]);

    const {getPets} = usePets();
    const handleGetPets = useCallback(() => {
        getPets().then((response) => {
            response.json().then((pets: Pet[]) => {
                setPets(pets);
            })
        })
    }, [getPets]);

    return (
        <div style={{border: "1px solid #CCC", margin: "2em"}}>
            <h3>Test rest api</h3>
            <button type="button" onClick={handleGetPets}>Click me to list all pets</button>
            <p>
                Loaded pets:
                {pets.map(pet => pet.name).join(", ")}
            </p>
        </div>
    )
});
PetsAPI.displayName = "PetsAPI";