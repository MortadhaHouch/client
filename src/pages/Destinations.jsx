import { MahdiaImages,TataouineImages,TunisImages,NabeulImages } from "../../utils/images"
import { CiBookmark } from "react-icons/ci";
import {gsapAnimationHandler} from "../../utils/animation"
export const Destinations = () => {
    return (
        <main className="d-flex flex-column justify-content-center align-items-center bg-dark-subtle">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="Nabeul-tab" data-bs-toggle="tab" data-bs-target="#Nabeul" type="button" role="tab" aria-controls="Nabeul" aria-selected="true" onClick={()=>{
                        gsapAnimationHandler(".tab-pane.active .item",{opacity:0,y:100,stagger:.5,duration:.5},{opacity:1,y:0,stagger:.5,duration:.5},true)
                    }}>Nabeul</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="Tataouine-tab" data-bs-toggle="tab" data-bs-target="#Tataouine" type="button" role="tab" aria-controls="Tataouine" aria-selected="false" onClick={()=>{
                        gsapAnimationHandler(".tab-pane.active .item",{opacity:0,y:100,stagger:.5,duration:.5},{opacity:1,y:0,stagger:.5,duration:.5},true)
                    }}>Tataouine</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="Mahdia-tab" data-bs-toggle="tab" data-bs-target="#Mahdia" type="button" role="tab" aria-controls="Mahdia" aria-selected="false" onClick={()=>{
                        gsapAnimationHandler(".tab-pane.active .item",{opacity:0,y:100,stagger:.5,duration:.5},{opacity:1,y:0,stagger:.5,duration:.5},true)
                    }}>Mahdia</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="Tunis-tab" data-bs-toggle="tab" data-bs-target="#Tunis" type="button" role="tab" aria-controls="Tunis" aria-selected="false" onClick={()=>{
                        gsapAnimationHandler(".tab-pane.active .item",{opacity:0,y:100,stagger:.5,duration:.5},{opacity:1,y:0,stagger:.5,duration:.5},true)
                    }}>Tunis</button>
                </li>
            </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="Nabeul" role="tabpanel" aria-labelledby="Nabeul-tab" data-scroll-container>
                        {
                            NabeulImages.map((item,index)=>{
                                return(
                                    <div key={index} className="item" data-scroll-section>
                                        <img src={item} alt="" data-scroll/>
                                        <CiBookmark size={30} data-scroll/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="tab-pane fade" id="Tataouine" role="tabpanel" aria-labelledby="Tataouine-tab" data-scroll-container>
                        {
                            TataouineImages.map((item,index)=>{
                                return(
                                    <div key={index} className="item" data-scroll-section>
                                        <img src={item} alt="" data-scroll/>
                                        <CiBookmark size={30} data-scroll/>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="tab-pane fade" id="Mahdia" role="tabpanel"  aria-labelledby="Mahdia-tab" data-scroll-container>
                        {
                            MahdiaImages.map((item,index)=>{
                                return(
                                    <div key={index} className="item" data-scroll-section>
                                        <img src={item} alt="" data-scroll/>
                                        <CiBookmark size={30} data-scroll/>
                                    </div>
                                )
                            })
                        }
                </div>
                <div className="tab-pane fade" id="Tunis" role="tabpanel"  aria-labelledby="Tunis-tab" data-scroll-container>
                        {
                            TunisImages.map((item,index)=>{
                                return(
                                    <div key={index} className="item" data-scroll-section>
                                        <img src={item} alt="" data-scroll/>
                                        <CiBookmark size={30} data-scroll/>
                                    </div>
                                )
                            })
                        }
                </div>
                <div className="tab-pane fade" id="Mahdia" role="tabpanel"  aria-labelledby="Mahdia-tab" data-scroll-container>
                        {
                            TunisImages.map((item,index)=>{
                                return(
                                    <div key={index} className="item" data-scroll-section>
                                        <img src={item} alt="" data-scroll/>
                                        <CiBookmark size={30} data-scroll/>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </main>
    )
}