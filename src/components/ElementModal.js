import React from 'react'

const ElementModal = ({ data, onClose }) => {
    return (
        <div className="modal-container">
            <div className="main-modal">
                <span className="close" onClick={onClose}>x</span>
                <div className="content">
                    <div className="block">
                        <label htmlFor="name">Element Name</label>
                        <div id="name">{ data.name }</div>
                    </div>
                    <div className="block">
                        <label htmlFor="symbol">Element Symbol</label>
                        <div id="symbol">{ data.symbol }</div>
                    </div>
                </div>
                <div className="content">
                    <div className="block">
                        <label htmlFor="number">Atomic Number</label>
                        <div id="number">{ data.number }</div>
                    </div>
                    <div className="block">
                        <label htmlFor="category">Category</label>
                        <div id="category">{ data.category }</div>
                    </div>
                </div>
                <div className="content">
                    <div className="block">
                        <label htmlFor="disco">Discovered By</label>
                        <div id="disco">{ data.discovered_by ? data.discovered_by : "-" }</div>
                    </div>
                    <div className="block">
                        <label htmlFor="phase">Phase</label>
                        <div id="phase">{ data.phase }</div>
                    </div>
                </div>
                <div className="content">
                    <div className="block">
                        <label htmlFor="summary">Summary</label>
                        <div id="summary">{ data.summary ? data.summary : "-" }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ElementModal
