import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const BASE_URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/andressa-darze-alves`

export const useProtectedPage = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")
    
        if(token === null) {
          alert("Não está logado!")
          navigate('/login')
        }
      }, [])
}
