import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons"

import './SetError.scss';

export const SetError = (errorName, msg, hideErrorBox, setState, addClass) => {

    const onBttnCloseClick = (e) => {
        errorName === 'db-error' ?
            setState(true) :
            hideErrorBox(errorName, setState)
    }

    return (
        <div className="error-wrapper container-fluid">
            <div className={`error-el ${addClass ? addClass : ''}`} style={{
                display: msg ? 'flex' : 'none'
            }}>
                <div className="close-icon" onClick={onBttnCloseClick}>
                    <FontAwesomeIcon icon={faTimesCircle} />
                </div>
                <p>{msg}</p>
            </div>
        </div>
    )
}