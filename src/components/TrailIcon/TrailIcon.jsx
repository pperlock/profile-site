import React, {useState} from 'react'
import './TrailIcon.scss';

/**
 * Props Passed in from Experience
 * @param {Object} icon
*/

function TrailIcon({icon}) {

    //use state to determine if the modal is visibile or not
    const [showModal, setShowModal] = useState(false);

    //hide or show the modal based on state
    const toggleModal = (action) => {
        setShowModal(action);
    }
    return(
        <>
            <div className={`trail__div trail__div-${icon.name}`} >
                <img onMouseEnter={()=>toggleModal(true)} onMouseLeave={()=>{toggleModal(false)}} className= "trail-icon" id={icon.id} src={icon.image} alt={icon.alt} />
                <p className="trail-title">{icon.title}</p>
            </div>
            {showModal && 
                <div className={`trail-icon__modal-${icon.modal}`}> 
                    <div className="trail-icon__modal-experience">
                        {!!icon.experience && 
                            icon.experience.map(item =>
                            <div className="trail-icon__modal-experience__experience">
                                    <div className="trail-icon__modal-experience__place">
                                        <div className="trail-icon__modal-experience__place-circle">
                                            <img src={item.background} className="trail-icon__modal-experience__place-img" alt={icon.alt}/>
                                        </div>
                                    </div>
                                    <div className="trail-icon__modal-experience__description">
                                        <p className="trail-icon__modal-experience__description-date">{item.date}</p>
                                        <p className="trail-icon__modal-experience__description-place">{item.place}</p>
                                        <p className="trail-icon__modal-experience__description-position">{item.position}</p>
                                        {item.focus && <p className="trail-icon__modal-experience__description-position"><span className="emphasize">Focus:</span> {item.focus}</p>}
                                        {item.thesis && <p className="trail-icon__modal-experience__description-position"><span className="emphasize">Thesis:</span> {item.thesis}</p>}
                                    </div>
                                </div>
                        )}
                    </div>
                    <p className="trail-icon__modal-experience-lesson">{icon.contentTitle}</p>
                    <p className="trail-icon__modal-experience-content">{icon.content}</p>
                </div>
            }
        </>
    )
}
export default TrailIcon
