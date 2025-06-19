import { Navbar } from "../components/Navbar"

export const AboutPage = () => {



  return (
    <>
      <Navbar />
      <section className="px-[10%] pt-[10rem] max-w-4xl mx-auto flex flex-col  text-white ">
        <h2 className="text-3xl font-bold mb-6 ">Sobre o <span className="text-cyan-400">Systema</span></h2>
        <p className="pb-[3rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore blanditiis et adipisci velit nihil. Dolor iusto fuga quam asperiores, in vel illo amet voluptatum suscipit quisquam nesciunt, blanditiis, distinctio iste?</p>
      </section>
    </>
  )
}
