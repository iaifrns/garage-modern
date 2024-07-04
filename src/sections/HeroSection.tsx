import TopMenu from "../components/TopMenu"
import { images } from "../constants/images"

const HeroSection = () => {
  return (
    <div className="h-screen w-full">
        <div className="absolute h-full w-full">
            <div className="flex flex-col h-full w-full p-2">
                <TopMenu/>
            </div>
        </div>
      <img src={images.HEROBG} className="object-cover h-full" />
    </div>
  )
}

export default HeroSection