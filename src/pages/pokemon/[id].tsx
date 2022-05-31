import { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { Button, Card, Grid, Text, Image, Container } from '@nextui-org/react'

import { pokeApi } from 'api/*'
import { Pokemon } from 'interface/*'
import Layout from 'src/components/layouts/Layout'
import { getPokemonInfo, localFavorites } from 'utils/*'
import confetti from 'canvas-confetti'

interface PokemonProps {
  pokemon: Pokemon
}
const PokemonPage = ({ pokemon }: PokemonProps) => {

  const [isInFavorite, setIsInFavorite] = useState(false)

  const onToggleFavorite = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setIsInFavorite(!isInFavorite)
    if ( isInFavorite ) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0
      }
    })

  }

  useEffect(() => {
    setIsInFavorite(localFavorites.existInLocal(pokemon.id))
  }, [pokemon.id])

  return (
    <Layout title={`${pokemon.name} - #${pokemon.id}`}>
      <Grid.Container css={{ marginTop: '5px'}} gap={2}>
        <Grid xs={ 12 } sm={ 4 }>
          <Card hoverable css={{ padding: '30px'}}>
            <Card.Body>
              <Card.Image
                src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'}
                alt={pokemon.name}
                width="100%"
                height={200}
              >
              </Card.Image>
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text h1 transform='capitalize'>{ pokemon.name }</Text>
              <Button
                color="gradient"
                ghost
                onClick={ onToggleFavorite }
              >
                { !isInFavorite ? 'Guardar en favoritos' : 'En Favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Container>
                <Text h3></Text>
              </Container>
              <Text h3>Sprites</Text>
              <Container css={{ display: 'flex'}} direction={'row'} gap={0}>
                <Image 
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
                <Image 
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map( ( value, index ) => `${ index + 1 }` );

  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  
  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id)

  if(!pokemon) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      }
    }
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400
  }
}

export default PokemonPage