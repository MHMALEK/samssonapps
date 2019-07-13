import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    zIndex: 231231,
  }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

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
      this.setState({modalIsOpen: false});
    }
  
    render() {
      return (
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
              <>
                {
                    this.props.children
                }
                <button onClick={() => this.closeModal()} > close </button>
                </>
          </Modal>
        </div>
      );
    }
  }
  

  export default ModalComponent;