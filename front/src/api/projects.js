import { API_ADDRESS } from './config.js'
import axios from 'axios'

/**
 * GET ..
 * @param setProjects
 * @return {}
 */
export const getProjects = async (setProjects) => {
  try {
    const {
      request: { status }, 
      data
    } = await axios.get(`${API_ADDRESS}/projects`)
      
    if (status !== 200) { return setProjects({}) }

    return setProjects(data)

  } catch (error) {
    /**
     * Should throw an error
     */
    return setProjects({})
  }
}
