import React from 'react';

export default ( props ) => {
    const {
        loading,
        showPrevLink,
        showNextLink,
        handlePrevClick,
        handleNextClick,
        hasQuery
    } = props;
    return (
        <div className={`nav-link-container btn-group btn-group-sm  ${ (showPrevLink || showNextLink) && !hasQuery ? 'show':'hide'}`}>
            <a
                href="#"
                className={
                    ` btn btn-secondary 
					${ showPrevLink ? '' : 'disabled'}
					${ loading ? 'greyed-out' : ''
                    }`
                }
                onClick={ handlePrevClick }
            >
                Prev
            </a>
            <a
                href="#"
                className={
                    ` btn btn-secondary
					${ showNextLink ? '' : 'disabled'}
					${ loading ? 'greyed-out' : '' }
					`}
                onClick={ handleNextClick }
            >
                Next
            </a>
        </div>
    )
}