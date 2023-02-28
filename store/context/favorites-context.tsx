import { createContext, useState } from 'react';

interface Props {
    children: any;
}

export const FavoritesContext = createContext({
    ids: [] as string[],
    addFavorite: (id: string) => {},
    removeFavorite: (id: string) => {}
});

const FavoritesContextProvider = ({ children }: Props): JSX.Element => {
    const [favoriteMealIds, setfavoriteMealIds] = useState<string[]>([]);

    const addFavorite = (id: string) => {
        setfavoriteMealIds((currentFavIds) =>
            [...currentFavIds, id]);
    }

    const removeFavorite = (id: string) => {
        setfavoriteMealIds((currentFaveIds) =>
            currentFaveIds.filter((mealId) => mealId !== id));
    }

    const value = {
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (<FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>);
}

export default FavoritesContextProvider;