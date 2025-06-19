import { Link } from "react-router-dom"
import { Navbar } from "../components/Navbar"

export const HomePage = () => {



  return (
    <>
      <Navbar />
      <main>
        <section className="px-[10%] pt-[10rem] max-w-4xl mx-auto flex flex-col items-center text-white text-center">
          <h2 className="text-3xl font-bold mb-6 ">Bem vindo, amigo!</h2>
          <p className="pb-[3rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis et adipisci velit nihil. Dolor iusto fuga quam asperiores, in vel illo amet voluptatum suscipit quisquam nesciunt, blanditiis, distinctio iste?</p>
          <div>
            <Link to="/"
              className="
                  block
                  transitio duration-300
                  rounded-sm
                  px-4 py-2 bg-gradient-to-br
                  from-[#1084ff] to-[#01373b]
                    hover:text-shadow-2xs
                    w-[fit-content]
            ">Explorar mais</Link>
          </div>
        </section>
      </main>
    </>
  )
}
