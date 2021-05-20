export const sortArray = arr => arr.sort(() => Math.random() - 0.5)

export const getSessionId = async () => {
  try {
    const response = await fetch(
      `https://opentdb.com/api_token.php?command=request`
    )
    const { token } = await response.json()
    return token
  } catch (error) {
    console.log("fetching token failed")
  }
}
