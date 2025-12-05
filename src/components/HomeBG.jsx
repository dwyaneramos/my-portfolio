import fishBodyImg from "../assets/fish-body.png" 
import fishTailImg from "../assets/fish-tail.png" 

export const HomeBG = () => {
  return ( 
    <div className="absolute z-60 h-screen w-screen text-4xl overflow-hidden">
    <Fish/>
    </div>

  )
}


const Fish = () => {

  const fish = Array.from({length : 15}).map((_, index) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const width = Math.round(Math.random() * (12 - 5)) + 5;
      const height = Math.round(width / 3 * 2);
      const isSlow = Math.round(Math.random());
      console.log(isSlow)

      return (
      <div key = {index}
          className="absolute w-screen h-screen z-60"
          style = {{
            top: `${top}%`,
            left: `${left}%`,
          }}>
    
        <img src={fishBodyImg} alt="fish body" 
             className="absolute w-50 h-45 animate-fish-movement"
             style ={{
              width: `${width}rem`,
              height: `${height}rem`,
              "--duration": isSlow ? "12s" : "6s" 
          }}
        ></img>
        <img src={fishTailImg} alt="fish Tail"
             className="absolute w-50 h-45 animate-fish-tail-movement"
            style ={{
              width: `${width}rem`,
              height: `${height}rem`,
              "--duration": isSlow ? "12s" : "6s" 
          }}
        ></img>
      </div>
      )
    }); 

  return <div className ="relative w-full h-full">{fish}</div>;
}
