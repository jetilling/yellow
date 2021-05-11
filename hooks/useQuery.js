

export default function useQuery(query) {

  execute(query.url, query.body)

  return []
}

export async function executeQuery({options, url}) {
  try {
    let token = getItem('token')
    if (token) {
      options["Authorization"] = `bearer ${token}`
    }
    const response = await fetch(url, {
      ...options
    })

    return response.json()
  } catch (exception) {
    return exception
  }
}