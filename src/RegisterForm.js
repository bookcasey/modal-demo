import React from 'react';
import Modal from 'react-modal';
import { Link } from "react-router-dom";

// Modal.setAppElement('#yourAppElement')


const RegisterForm = props => {
    return (
        <Modal isOpen={true}>
            <h2>Register</h2>
            <form>
                <input />
                <input />
                <button>Register</button>
            </form>
            <Link to='/'>Cancel</Link>
        </Modal>
    )
}

export default RegisterForm;