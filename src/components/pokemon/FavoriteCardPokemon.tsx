import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

interface Props {
  pokemonId: number,
}

export const FavoriteCardPokemons = ({ pokemonId }: Props) => {

  const router = useRouter()

  const onFavoriteClicked = () => {
    router.push(`/pokemon/${pokemonId}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
        <Card hoverable css={{ padding: '10'}} clickable onClick={onFavoriteClicked}>
          <Card.Body>
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
              width="100%"
              height={140}
            >
            </Card.Image>
          </Card.Body>
        </Card>
      </Grid>
  )
}

export default FavoriteCardPokemons