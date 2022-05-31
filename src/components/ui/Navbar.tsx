import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {

  const { theme } = useTheme() 

  return (
    <nav style={{
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px'
    }}>
      <Image 
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg" 
      alt="PokemonDex Logo"
      width={70}
      height={70}/>

      
      <Link href="/" passHref>
        <a style={{ display: 'flex'}}>
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </a>
      </Link>

      <Spacer css={{ flex: 1 }} />

      <Link href="/favorites" passHref>
        <a>
          <Text color='white' h4>Favorites</Text>
        </a>
      </Link>

    </nav>
  )
}

export default Navbar