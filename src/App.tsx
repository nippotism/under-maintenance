import TextPressure from "./TextPressure/TextPressure"
import Silk from "./Silk/Silk"

function App() {

  return (
    <>
      <div className="w-full h-screen relative items-center justify-center bg-black">
        <Silk
          speed={5}
          scale={1}
          color="#1C2D35"
          noiseIntensity={1.5}
          rotation={0}
        />
        <div className="z-10 absolute ml-14 top-1/2 flex items-center justify-center">
          <TextPressure
          text="Under  Maintenance."
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={98}
          />
        </div>
        
      </div>
    </>
  )
}

export default App
