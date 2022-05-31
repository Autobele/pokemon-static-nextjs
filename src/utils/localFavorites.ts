const toggleFavorites = ( pokeId: number ): void => {
  let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')
  
  if( favorites.includes(pokeId) ){
    favorites = favorites.filter(id => pokeId !== id);
  } else {
    favorites.push(pokeId);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}

const existInLocal = ( pokeId: number ): boolean => {

  if( typeof window === 'undefined') return false

  const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]')

  return favorites.includes(pokeId)
}

const pokemon = (): number[] => {
  return JSON.parse( localStorage.getItem('favorites') || '[]')
}


export default { toggleFavorites, existInLocal, pokemon }