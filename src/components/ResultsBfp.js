import ArrowDown from "../assets/img/arrow-down.svg";
import { getPx } from "../helpers/getPx";

export const ResultsBfp = ({ bfp, genere }) => {

    const px = getPx(bfp, genere)

    return (
        <div className='app__results-container' >
            <h2 className='app__results'>Tu resultado: {bfp}%</h2>
            {
                genere === "male"
                    ?
                    (
                        <div className="app__bar-main-content">
                            <div className="app__bar-arrow" style={{ width: `${px}px` }}>
                                <div className="app__bar-content">
                                    <p> {bfp}% </p>
                                    <img src={ArrowDown} alt="arrow" />
                                </div>
                            </div>
                            <div className="app__bar-graphic" >
                            </div>
                            <div className="app__bar-scale">
                                <div>
                                    <div className="blue"></div>
                                    <span>2-5%</span>
                                    <span>Esencial</span>
                                </div>
                                <div>
                                    <div className="green"></div>
                                    <span>6-13%</span>
                                    <span>Deportista</span>
                                </div>
                                <div>
                                    <div className="lime"></div>
                                    <span>14-17%</span>
                                    <span>Fitness</span>
                                </div>
                                <div>
                                    <div className="yellow"></div>
                                    <span>18-25%</span>
                                    <span>Aceptable</span>
                                </div>
                                <div>
                                    <div className="red"></div>
                                    <span>25% +</span>
                                    <span>Obeso</span>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="app__bar-main-content">
                            <div className="app__bar-arrow" style={{ width: `${px}px` }}>
                                <div className="app__bar-content">
                                    <p> {bfp}% </p>
                                    <img src={ArrowDown} alt="arrow" />
                                </div>
                            </div>
                            <div className="app__bar-graphic" >
                            </div>
                            <div className="app__bar-scale">
                                <div>
                                    <div className="blue"></div>
                                    <span>10-13%</span>
                                    <span>Esencial</span>
                                </div>
                                <div>
                                    <div className="green"></div>
                                    <span>14-20%</span>
                                    <span>Deportista</span>
                                </div>
                                <div>
                                    <div className="lime"></div>
                                    <span>21-24%</span>
                                    <span>Fitness</span>
                                </div>
                                <div>
                                    <div className="yellow"></div>
                                    <span>25-31%</span>
                                    <span>Aceptable</span>
                                </div>
                                <div>
                                    <div className="red"></div>
                                    <span>32% +</span>
                                    <span>Obeso</span>
                                </div>
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
