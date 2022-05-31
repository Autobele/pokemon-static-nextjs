import React from 'react'
import { Container, Text, Image} from '@nextui-org/react'

export default function NoFavorites() {
  return (
    <Container css={{
      display: 'flex',
      height: 'calc(100vh - 100px)',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    }}>
      <Text h1>No hay favorites</Text>
      <Image 
      src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"} 
      width={250}
      height={250}
      css={{ opacity: '0.2'}}
      alt="pokemon"/>
    </Container>
  )
}
