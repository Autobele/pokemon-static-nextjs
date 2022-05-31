import { useRouter } from 'next/router'
import { Card, Grid, Row, Text } from "@nextui-org/react"
import { SmallPokemon } from "interface/*"

interface Props {
  pokemon: SmallPokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  const router = useRouter()

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1}>
      <Card hoverable clickable onClick={ onClick }>
      <Card.Body>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
          height={140}
          width="100%"
        >
        </Card.Image>
      </Card.Body>
      <Card.Footer> 
        <Row wrap="wrap" justify='space-between'>
          <Text b style={{ textTransform: 'capitalize'}}>{pokemon.name}</Text>
          <Text b>#{pokemon.id}</Text>
        </Row>
      </Card.Footer>
    </Card>
    </Grid>
  )
}

export default PokemonCard