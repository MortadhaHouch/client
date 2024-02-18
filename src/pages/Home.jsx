import SwiperElement from "./SwiperElement"
import VideoLink from "../assets/WhatsApp Video 2024-02-17 at 22.58.04_0ff061f6.mp4"
import {MahdiaImages,TataouineImages,TunisImages,NabeulImages} from "../../utils/images"
export const Home = () => {
    return (
        <main className="d-flex flex-column justify-content-center align-items-center bg-dark-subtle home">
            <section className="d-flex flex-column justify-content-center align-items-center">
                <video src={VideoLink} loop autoPlay muted></video>
                <div>
                    <button>get inspired</button>
                </div>
            </section>
            <section className="d-flex flex-column justify-content-center align-items-center">
                <SwiperElement images={TataouineImages}/>
            </section>
            <section className="d-flex flex-column justify-content-center align-items-center">
                <SwiperElement images={MahdiaImages}/>
            </section>
            <section className="d-flex flex-column justify-content-center align-items-center">
                <SwiperElement images={NabeulImages}/>
            </section>
            <section className="d-flex flex-column justify-content-center align-items-center">
                <SwiperElement images={TunisImages}/>
            </section>
        </main>
    )
}
