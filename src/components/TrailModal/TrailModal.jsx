import React, { useEffect, useRef, useCallback } from "react";
import isNil from "lodash/fp/isNil";
import './TrailModal.scss';

function TrailModal({icon, onCloseRequest}) {

    const modal = useRef(null);
  
    const handleKeyUp = useCallback(e => {
        const keys = {27: () => {
            e.preventDefault();
            onCloseRequest();
            window.removeEventListener("keyup", handleKeyUp, false);
          }
        };
  
        if (keys[e.keyCode]) {
          keys[e.keyCode]();
        }
    },[onCloseRequest]);
  
    const handleOutsideClick = useCallback(e => {
        if (!isNil(modal)) {
          if (!modal.current.contains(e.target)) {
            onCloseRequest();
            document.removeEventListener("click", handleOutsideClick, false);
          }
        }
    }, [onCloseRequest]);
  
    useEffect(() => {
      window.addEventListener("keyup", handleKeyUp, false);
      document.addEventListener("click", handleOutsideClick, false);
  
      return () => {
        window.removeEventListener("keyup", handleKeyUp, false);
        document.removeEventListener("click", handleOutsideClick, false);
      };
    }, [handleKeyUp, handleOutsideClick]);


    return (
        <div ref={modal} className={`trail__modal trail__modal-${icon.name}`}> 
        {/* <div ref={modal} className={`trail__modal`}>  */}
            <div className="trail__modal-experience">
                {!!icon.experience && 
                    icon.experience.map(item =>
                    <div className="trail__modal-experience__experience">
                            <div className="trail__modal-experience__place">
                                <div className="trail__modal-experience__place-circle">
                                    <img src={item.background} className="trail__modal-experience__place-img" alt={icon.alt}/>
                                </div>
                            </div>
                            <div className="trail__modal-experience__description">
                                <p className="trail__modal-experience__description-date">{item.date}</p>
                                <p className="trail__modal-experience__description-place">{item.place}</p>
                                <p className="trail__modal-experience__description-position">{item.position}</p>
                                {item.focus && <p className="trail__modal-experience__description-position"><span className="emphasize">Focus:</span> {item.focus}</p>}
                                {item.thesis && <p className="trail__modal-experience__description-position"><span className="emphasize">Thesis:</span> {item.thesis}</p>}
                            </div>
                        </div>
                )}
            </div>
            <p className="trail-icon__modal-experience-lesson">{icon.contentTitle}</p>
            <p className="trail-icon__modal-experience-content">{icon.content}</p>
        </div>
    )
}

export default TrailModal
