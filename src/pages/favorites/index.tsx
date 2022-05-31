import React, { useEffect, useState } from 'react'
import Layouts from 'src/components/layouts'
import NoFavorites from 'src/components/ui/NoFavorites'
import { localFavorites } from 'utils/*'
import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { FavoritesPokemons } from 'src/components/pokemon'

export default function FavoritesPage() {

  const route = useRouter()

  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    setFavorites(localFavorites.pokemon())
  }, [])

  return (
    <Layouts title="Pokemon | Favorites">
      { favorites && favorites.length === 0
        ? (<NoFavorites/>)
        : (
          <FavoritesPokemons pokemons={favorites}/>
        )
      }
    </Layouts>
  )
}


