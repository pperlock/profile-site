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
        <div ref={modal} className={`trail-modal trail-modal-${icon.name}`}> 
            <div className="trail-modal__container">
                {!!icon.experience && 
                    icon.experience.map(item =>
                    <div key={icon.id} className="trail-modal__experience">
                      <div className="trail-modal__place">
                          <div className="trail-modal__place-circle">
                              <img src={item.background} className="trail-modal__place-img" alt={icon.alt}/>
                          </div>
													<div className = "trail-modal__place-text">
														<p className="trail-modal__place-date">{item.date}</p>
                          	<p className="trail-modal__place-place">{item.place}</p>
														<p className="trail-modal__place-position">{item.position}</p>
													</div>
                      </div>
                      <div className="trail-modal__description">
                          {item.focus && <p className="trail-modal__description-position"><span className="emphasize">Focus:</span> {item.focus}</p>}
                          {item.thesis && <p className="trail-modal__description-position"><span className="emphasize">Thesis:</span> {item.thesis}</p>}
                      </div>
                    </div>
                )}
            </div>
            <p className="trail-modal-lesson">{icon.contentTitle}</p>
            <p className="trail-modal-content">{icon.content}</p>
        </div>
    )
}

export default TrailModal
