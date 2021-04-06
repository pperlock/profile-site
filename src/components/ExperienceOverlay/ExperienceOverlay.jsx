import React from 'react';
import './ExperienceOverlay.scss';

/**
 * Props Passed in from Overlay
 * @param {Boolean} showOverlay
 */

function ExperienceOverlay({showOverlay}) {

    // const experience=[
    //     {id:'0', date: "2005-2010", background:"/icons/uwo.png", place: "University of Western Ontario", position: "MSc.Geophysics", focus: "programming & statistical physics", thesis: "Imaging Faults in 3D Using Pattern Informatics"},
    //     {id:'1', date: "2000-2005", background:"/icons/uwo.png", place: "University of Western Ontario", position: "BSc.Geophysics", focus: "programming & optimization algorithms", thesis: "Modeling of the July 1998 Northridge Aftershock Using a Linear Inversion and Genetic Algorithm"},
    //     {id:'2', date: "2017-2020", background:"/icons/klg.png", place: "Kirkland Lake Gold", position: "Senior Database Administrator"},
    //     {id:'3', date: "2015-2017", background:"/icons/sas.png", place: "St. Andrew's Goldfields", position: "Database Administrator"},
    //     {id:'4', date: "2010-2015", background:"/icons/dogs-north.png", place: "Dog's North", position: "Owner, Lead Trainer"},
    //     {id:'5', date: "Present", background:"/icons/brainstation3.png", place: "BrainStation", position:"Teaching Assistant"},
    //     {id:'6', date: "2020-2021", background:"/icons/brainstation3.png", place: "BrainStation", position: "Student: Full Stack Development"},
    // ];
    
    return (
        <>
            <div className="education"> 
                <h2 className= "education__title">EDUCATION</h2>
                <div className="education__list">
                    <ul className={showOverlay ? "education__list-item education__list-item--animate" : "education__list-item"}>
                        <li className="education__list-title"> Web Development </li>
                        <div className="education__list__place">
                            <img className="education__list__place-image" src="/icons/brainstation3.png" alt="brainstation logo"/>
                            <li className="education__list__place-title">Brainstation</li>
                        </div>
                        <li className="education__list-focus"> <span className="emphasize">Focus:</span> full-stack development</li>
                        <li className="education__list-description"> Brainstation </li>
                    </ul>
                    <ul className={showOverlay ? "education__list-item education__list-item--animate2" : "education__list-item"}>
                        <li className="education__list-title"> MSc. Geophysics</li>
                        <div className="education__list__place">
                            <img className="education__list__place-image" src="/icons/uwo.png" alt="university of western ontario logo"/>
                            <li className="education__list__place-title">  University of Western Ontario</li>
                        </div>
                        <li className="education__list-focus"> <span className="emphasize">Focus:</span> computer programming, statistical physics</li>
                        <li className="education__list-description"><span className="emphasize">Thesis:</span> Imaging Faults in 3D Using the Pattern
Informatics Technique </li>
                    </ul>
                    <ul  className={showOverlay ? "education__list-item education__list-item--animate3" : "education__list-item"}>
                        <li className="education__list-title"> BSc. Geophysics</li>
                        <div className="education__list__place">
                            <img className="education__list__place-image" src="/icons/uwo.png" alt="university of western ontario logo"/>
                            <li className="education__list__place-title">  University of Western Ontario</li>
                        </div>
                        <li className="education__list-focus"> <span className="emphasize">Focus:</span> computer programming, optimization algorithms</li>
                        <li className="education__list-description"><span className="emphasize"> Thesis:</span>  "Modeling of the July 1998 Northridge Aftershock
Using a Linear Inversion and Genetic Algorithm" </li>
                    </ul>
                </div>
            </div>
            
            <div className="education"> 
                <h2 className= "education__title">PROFESSIONAL</h2>
                <div className="education__list">
                    <ul className={showOverlay ? "education__list-item--professional education__list-item--animate4" : "education__list-item"}>
                        <li className="education__list-title"> Senior Database Administrator </li>
                        <div className="education__list__place">
                            <img className="education__list__place-image" src="/icons/klg.png" alt="Kirkland Lake Gold logo"/>
                            <li className="education__list__place-title">Kirkland Lake Gold</li>
                        </div>
                        <li className="education__list-description"> Spearheaded the development and execution of a SQL server database focusing on the balance between creating a user- friendly experience and data quality.  Designed and regulated a detailed QAQC monitoring program that reports the precision and accuracy of assay data, improving data reliability. Collaborated with end users and software developers remotely to ensure functionality requirements were met while simultaneously providing training and support. </li>
                    </ul>
                    <ul className={showOverlay ? "education__list-item--professional education__list-item--animate5" : "education__list-item"}>
                        <li className="education__list-title">Database Administrator </li>
                        <div className="education__list__place">
                            <img className="education__list__place-image" src="/icons/sas.png" alt="St Andrews Goldfields logo"/>
                            <li className="education__list__place-title">St. Andrews Goldfields</li>
                        </div>
                        <li className="education__list-description education__list-description--last"> Orchestrated a validation program on an unstandardized, undocumented database to increase the accuracy of data used for making profitable business decisions. </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ExperienceOverlay
