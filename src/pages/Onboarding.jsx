import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../css/Onboarding.module.css';
/*page*/
import Login from './Login';
/*components*/
import { LargeButton, BackButton } from '../components/button';
/*illustrations*/
import illustration_1 from '../assets/onboarding/illustrations/illustration_1.png';
import illustration_2 from '../assets/onboarding/illustrations/illustration_2.png';
import illustration_3 from '../assets/onboarding/illustrations/illustration_3.png';
import illustration_4 from '../assets/onboarding/illustrations/illustration_4.png';
import illustration_5 from '../assets/onboarding/illustrations/illustration_5.png';
/*progressBar*/
import progressBar_1 from '../assets/onboarding/progressBar/progressBar_1.svg';
import progressBar_2 from '../assets/onboarding/progressBar/progressBar_2.svg';
import progressBar_3 from '../assets/onboarding/progressBar/progressBar_3.svg';
import progressBar_4 from '../assets/onboarding/progressBar/progressBar_4.svg';
import progressBar_5 from '../assets/onboarding/progressBar/progressBar_5.svg';


function Onboarding() {

    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate();



    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const skip = () => {
        navigate('/login');
    };

    const back = () => {
        setCurrentStep(currentStep-1);
    }

   
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div className={styles["onboarding-container"]}>
                        <div>
                            <img src={progressBar_1} alt="first-progress-bar"/>
                        </div>
                        <h1 className={styles["bold-header"]}>Grow your Closet</h1>
                        <p className={styles["body-text"]}>Import your clothes with existing photos <br/>
                        or by taking a picture</p>
                        <div>
                            <img src={illustration_1} alt="illustration_taking-picture" className={styles["illustration"]}/>  
                        </div>
                        <div>
                            <LargeButton text="Next" type="primary" onClick={nextStep}/>
                            <LargeButton text="Skip" type="secondary" onClick={skip}/>
                        </div>
                    </div>
                );

            case 2:
                return (
                    <div className={styles["onboarding-container"]}>
                        <div className={styles["backbutton-container"]}>
                            <BackButton onClick={back} type="primary"/>
                        </div>
                        <div>
                            <img src={progressBar_2} alt="second-progress-bar"/>
                        </div>
                        <h1 className={styles["bold-header"]}>Create a LookBook</h1>
                        <p className={styles["body-text"]}>Combine clothing pieces to create an <br/>
                        outfit and save them to your LookBook</p>
                        <div>
                            <img src={illustration_2} alt="illustration_clothing-pieces" className={styles["illustration"]}/>  
                        </div>
                        <div>
                            <LargeButton text="Next" type="primary" onClick={nextStep}/>
                            <LargeButton text="Skip" type="secondary" onClick={skip}/>
                        </div>
                    </div>
                );

                case 3:
                    return (
                        <div className={styles["onboarding-container"]}>
                             <div className={styles["backbutton-container"]}>
                            <BackButton onClick={back} type="primary"/>
                        </div>
                            <div>
                                <img src={progressBar_3} alt="third-progress-bar"/>
                            </div>
                            <h1 className={styles["bold-header"]}>Show off Your Style</h1>
                            <p className={styles["body-text"]}>Share your outfit creations <br/>
                            with your friends</p>
                            <div>
                                <img src={illustration_3} alt="illustration_post-and-comment" className={styles["illustration"]}/>  
                            </div>
                            <div>
                            <LargeButton text="Next" type="primary" onClick={nextStep}/>
                            <LargeButton text="Skip" type="secondary" onClick={skip}/>
                            </div>
                        </div>
                    );
                
                    case 4:
                        return (
                            <div className={styles["onboarding-container"]}>
                                 <div className={styles["backbutton-container"]}>
                            <BackButton onClick={back} type="primary"/>
                        </div>
                                <div>
                                    <img src={progressBar_4} alt="fourth-progress-bar"/>
                                </div>
                                <h1 className={styles["bold-header"]}>Explore Your Community</h1>
                                <p className={styles["body-text"]}>Get inspired by checking out<br/>
                                other outfit ideas</p>
                                <div>
                                    <img src={illustration_4} alt="illustration_user-profiles" className={styles["illustration"]}/>  
                                </div>
                                <div>
                                     <LargeButton text="Next" type="primary" onClick={nextStep}/>
                                     <LargeButton text="Skip" type="secondary" onClick={skip}/>
                                </div>
                            </div>
                        );
                    
                        case 5:
                            return (
                                <div className={styles["onboarding-container"]}>
                                   <div className={styles["backbutton-container"]}>
                            <BackButton onClick={back} type="primary"/>
                        </div>
                                    <div>
                                        <img src={progressBar_5} alt="fifth-progress-bar"/>
                                    </div>
                                    <h1 className={styles["bold-header"]}>Be More Eco-Friendly</h1>
                                    <p className={styles["body-text"]}>Explore our educational page <br/>
                                    where users share their tips and tricks <br/>
                                    to support slow fashion</p>
                                    <div>
                                        <img src={illustration_5} alt="illustration_altered-jeans" className={styles["illustration"]}/>  
                                    </div>
                                    <div>
                                     <LargeButton text="Get Started" type="primary" onClick={skip}/>
                                    </div>
                                </div>
                            );
                    
            default:
                return (
                    <div>
                        <h1>Error loading the page.</h1>
                    </div>
                );
        }
    };

    return renderStep();

};

export default Onboarding;
