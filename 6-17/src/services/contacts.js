import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
  try {
    const request = await axios.get(baseUrl)
    return request.data
  } catch (error) {
    console.log(error)
    return "error"
  }
}

const create = async (newContact) => {
  const person = await axios.post(baseUrl, newContact)
  return person.data
}

const deleteContact = async (id) => {
  const idAsString = id.toString()
  try {
    await axios.delete(`${baseUrl}/${idAsString}`)
    return "success"
  }
  catch (error) {
    return "error"
  }
}

const update = async (id, newNumber) => {
  const request = await axios.put(`${baseUrl}/${id}`, newNumber)
  return request.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, deleteContact, update }