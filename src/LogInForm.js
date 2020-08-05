import React from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";


// Modal.setAppElement('#yourAppElement')

const LogInForm = props => {
    return (
        <Modal isOpen={true}>
            <h2>Log in</h2>
            <form>
                <input />
                <input />
                <button>Log in</button>
            </form>
            <Link to='/'>Cancel</Link>
        </Modal>
    )
}

export default LogInForm;