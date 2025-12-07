import DeadlyFightSS from "../../assets/project1.png" 
import GitHubLogo from "../../assets/github-mark.png"


const proj1Stack = ["Python", "PyGame"]


export const Projects = () => {
  return (
  <section id="projects" className = "min-h-screen relative flex justify-center items-center">

    <div className = "max-w-6xl">
      <h2 className = "text-5xl font-mono text-center font-bold text-white">Projects</h2> 

      <div className = "rounded-xl border-white/10 border-1 grid max-w-7xl py-5 px-2 grid-cols-1 md:grid-cols-2 gap-6 "> 
        <img src={DeadlyFightSS} alt="Screenshot of Deadly Fight" className = "rounded-xl w-full max-w-lg mx-auto mx-5"/>
          <div className = "relative">
            <h3 className = "text-3xl  font-mono font-bold underline">Deadly Fight</h3>
            <h4 className = "text-2xl font-mono font-bold ">2D Fighting Game </h4>
            <p>Inspired by the new upcoming Mortal Kombat 1, I decided to make my own version. Improved my understanding of OOP and the process behind game development</p>
        


            <a href="https://github.com/riz3ndrr/cubing-comp-round-sim" target = "_blank">
              <img className = "w-12 hover:-translate-y-1 absolute top-2 right-5 linear transition" src = {GitHubLogo} alt = "Github link"/>
            </a>

            <h4 className = "text-2xl mt-5 font-mono font-bold">Tech Stack</h4>
            <div className = "flex flex-wrap gap-2 ">
              {proj1Stack.map((tech, key) => (
                <span key ={key} className = "bg-blue-500/10 text-blue-200 py-1 px-2 rounded-full text-sm hover:-bg-blue-500/20
                                              hover:shadow-[0_2px-8px_rgba(59,130,2246,0.2)] transition">{tech}</span>
              ))}
              
            </div>
          </div>
      </div> 

    </div>

  </section>

  )
}
