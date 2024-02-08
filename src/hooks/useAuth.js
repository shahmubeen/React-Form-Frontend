import { useContext } from 'react'
import {Data} from "../contexts/AuthContext"

const useAuth = () => {
  return useContext(Data)    
}


export default useAuth;