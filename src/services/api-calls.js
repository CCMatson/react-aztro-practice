const baseUrl ="https://api.disneyapi.dev"

export async function getCharacters() {
  const res = await fetch (`${baseUrl}/characters`)
  return res.json()
}

export async function getDetails(apiUrl){
  const res = await fetch(`${apiUrl}`)
  return res.json()
}
