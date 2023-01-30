const baseUrl ="https://api.disneyapi.dev"

export async function getCharacters() {
  const res = await fetch (`${baseUrl}/characters`)
  return res.json()
}