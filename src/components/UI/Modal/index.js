import React from "react";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class ModalComponent extends React.Component {
  constructor() {
    super();

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  afterOpenModal() {
    //   this.subtitle.style.color = '#f00';
  }

  closeModal() {
    // this.setState({ modalIsOpen: false });
  }

  render() {
    const { title, children, openModal, onCloseClick } = this.props;
    return (
      <div>
        <Modal
          isOpen={openModal}
          contentLabel={title}
          className="Modal"
          overlayClassName="Modal-overlay"
          shouldCloseOnOverlayClick={true}
        >
          <>
            <div className="modal-title">
              <span>{title}</span>
              <img
                src="/icons/ic_close_white.svg"
                alt="close icon"
                onClick={() => onCloseClick()}
              />
            </div>
            <div className="modal-content">{children}</div>
          </>
        </Modal>
      </div>
    );
  }
}

export default ModalComponent;
