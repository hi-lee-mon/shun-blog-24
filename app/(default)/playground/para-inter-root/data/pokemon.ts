export const getAllPokemons = () => {
  const KANTO_POKEMONS = 151

  return Promise.all(
    [...Array(KANTO_POKEMONS)].map(
      async (_, i) =>
        await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`, {
          method: 'GET',
        }).then((res) => res.json()),
    ),
  )
}

export const getPokemon = (id: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    method: 'GET',
  }).then((res) => res.json())
}
