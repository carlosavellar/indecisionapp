const React = require("react");
import Modal from 'react-modal';
const OptionModal = (props) => (
    <Modal
         isOpen={!!props.selectedOption}
         contentLabel="Modal Serior"
         onRequestClose={props.closeModal}
         closeTimeoutMS={200}
         ariaHideApp={false}
         >
        <h3> Modal Copntent </h3>
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.closeModal}>Close</button>
    </Modal>
);

export default OptionModal;