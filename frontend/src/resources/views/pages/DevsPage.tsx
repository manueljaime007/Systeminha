import { useEffect, useState} from "react"
import axios from "axios"
import { DevCard } from "../components/DevCard"
import { Navbar } from "../components/Navbar"

interface Dev {
  id: number;
  nome: string;
  bio: string;
  tecnologias: string;
  github: string;
}
export const DevsPage = () => {
  const [devs, setDevs] = useState<Dev[]>([]);


  useEffect(()=>{
    axios.get("http://localhost:3001/api/devs")
      .then(res => setDevs(res.data))
      .catch(err => console.error("Erro ao buscar devs: ", err))
  }, [])

  return (
    <>
      <Navbar/>
      <div className="px-6 pt-[5rem] max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-white">💻 Devs da Comunidade</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {devs.map((dev: Dev) => (
            <DevCard key={dev.id} dev={dev} />
          ))}
        </div>
      </div>
    </>
  )
}
