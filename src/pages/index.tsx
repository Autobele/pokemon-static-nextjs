import { GetStaticProps } from 'next'
import type { NextPage } from 'next'

import { Grid } from '@nextui-org/react'

import Layout from 'src/components/layouts/Layout'

import '../styles/Home.module.css'
import { pokeApi } from 'api/*'
import { SmallPokemon } from 'interface/*'
import PokemonCard from 'src/components/pokemon/PokemonCard'

const Home: NextPage<any> = ({ pokemons }) => {
  return (
    <Layout>
      <Grid.Container justify='flex-start'>
      { pokemons && pokemons.map((pokemon: SmallPokemon, i: string) => (
        <PokemonCard key={i} pokemon={pokemon}/>
      ))}
      </Grid.Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await  pokeApi.get('/pokemon?limit=151')
  
  const pokemons: SmallPokemon[] = data.results.map((pokemon: any, i: string) => ({
    ...pokemon,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ i + 1 }.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default Home
