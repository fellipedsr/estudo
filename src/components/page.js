export async function Page() {
  const stores = await req()

  return <div>{JSON.stringify(stores)}</div>
}

export async function req() {

  let stores = await fetch('https://catfact.ninja/fact',{
    cache:'no-store'
  })
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return stores.json()

}