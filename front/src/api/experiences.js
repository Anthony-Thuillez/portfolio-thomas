import { API_ADDRESS } from './config.js'
import axios from 'axios'

/**
 * GET ..
 * @param setExperiences
 * @return {}
 */
export const getExperiences = async (setExperiences) => {
  try {
    const {
      request: { status }, 
      data
    } = await axios.get(`${API_ADDRESS}/experiences`)
      
    if (status !== 200) { return setExperiences({}) }

    return setExperiences(data)

  } catch (error) {
    /**
     * Should throw an error
     */
    return setExperiences({})
  }
}
