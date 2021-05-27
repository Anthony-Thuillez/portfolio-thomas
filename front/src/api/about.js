import { API_ADDRESS } from './config.js'
import axios from 'axios'

/**
 * GET ..
 * @param setAbout
 * @return {}
 */
export const getPersonalInformations = async (setAbout) => {
  try {
    const {
      request: { status }, 
      data
    } = await axios.get(`${API_ADDRESS}/about`)
      
    if (status !== 200) { return setAbout({}) }

    return setAbout(data)

  } catch (error) {
    /**
     * Should throw an error
     */
    return setAbout({})
  }
}
