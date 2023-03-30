import React, { useState } from "react";

function BtnFav(props) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);

    // récupérer les favoris existants du local storage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // ajouter ou supprimer le film de la liste des favoris
    if (!isFavorite) {
      favorites.push(props.movie);
    } else {
      const index = favorites.findIndex(
        (favorite) => favorite.id === props.movie.id
      );
      favorites.splice(index, 1);
    }

    // enregistrer la nouvelle liste de favoris dans le local storage
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <button onClick={handleFavoriteClick}>
      {isFavorite ? "Retirer des favoris" : "Ajouter aux favoris"}
    </button>
  );
}

export default BtnFav;