import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: 231231
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class ModalComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: true
    };

    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // componentWillReceiveProps(props) {
  //     if(props.openModal && props.openModal !== undefined) {
  //         this.setState({
  //             modalIsOpen: true
  //         })
  //     }
  // }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //   this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { title, children } = this.props;
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel={title}
          shouldCloseOnOverlayClick={true}
          className="Modal"
          overlayClassName="Modal-overlay"
        >
          <>
            <div className="modal-title">
              <span>{title}</span>
              <img
                src="/icons/ic_close_white.svg"
                alt="close icon"
                onClick={() => this.closeModal()}
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
