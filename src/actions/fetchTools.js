export const fetchHobbits = () => {

  return (dispatch) => {
    dispatch({
      type: "LOADING"
    })
    return fetch('http://localhost:3000/hobbits')
    .then(resp => resp.json())
    .then(result => {

      let payload = {hobbits: result, jobs: ["EXAMPLE JOB", "EXAMPLE JOB"]}
      dispatch({
      type: 'LOAD_RESOURCES',
      payload
      })
    }
  )
  }
}

export const patchHobbit = (hobbit) => {
  return (dispatch) => {
    return fetch(`http://localhost:3000/hobbits/${hobbit.id}`, {
      method: "PATCH",
      headers: {Accept: 'application/json',
      'Content-Type': 'application/json'
    },
      body: JSON.stringify({
        title: hobbit.title,
        key_skill: hobbit.key_skill
      })
    })
    .then(resp => resp.json())
    .then(result => {
      dispatch({
      type: 'UPDATE_HOBBIT',
      payload: result
      })
    }
  )
  }
}
