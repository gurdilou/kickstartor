import {useCallback} from "react";

const ENDPOINT_URL = "/pets";

export const usePets = () => {
    const getPets = useCallback(() => {
        return fetch(ENDPOINT_URL);
    }, []);

    const getPet = useCallback((petId: number) => {
        return fetch(ENDPOINT_URL+"/"+petId);
    }, []);

    return {getPets, getPet};
}