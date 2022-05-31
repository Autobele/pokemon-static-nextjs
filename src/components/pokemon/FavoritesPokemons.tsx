import { Grid } from '@nextui-org/react'
import React from 'react'
import FavoriteCardPokemons from './FavoriteCardPokemon'

interface Props {
  pokemons: number[]
}

export const FavoritesPokemons = ({ pokemons }: Props) => {
  return (
    <Grid.Container gap={2} direction="row" justify='flex-start'>
      {pokemons.map(id => (
        <FavoriteCardPokemons key={id} pokemonId={id}/>
      ))}
    </Grid.Container>
  )
}
