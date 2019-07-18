import React from "react";

import ModalComponent from "../../../../../UI/Modal";
import SelectWithOutOption from "../../../../../UI/SelectWithOutOption";
import RadioButton from "../../../../../UI/RadioButton";

class ListWithModal extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.state = {
      isModalOpen: false,
      selectedElementName: null
    };
  }
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }
  closeModal() {
    setTimeout(() => {
      this.setState({
        isModalOpen: false
      });
    }, 10)
  }
  handleListChange(e, selectedElementName) {
    const {getSelectedValue} = this.props;
    const value = e.target.value;
    this.setState({
      selectedElementName: selectedElementName
    })
    getSelectedValue(value)
  }


  render() {
    const { data, name } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div onClick={() => this.openModal()}>
        <p className="select-without-option-lable">نظام آموزشی</p>
        <SelectWithOutOption placeHolder={this.state.selectedElementName}/>
        {
          <ModalComponent
            title="نظام آموزشی"
            openModal={isModalOpen}
            onCloseClick={() => this.closeModal()}
          >
            {data[name].map((item, index) => {
              return (
                <RadioButton
                  key={index}
                  name="eductaionSystem"
                  value={item.id}
                  defaultChecked={index === 0}
                  onChange={(e,itemName) => this.handleListChange(e, itemName)}
                >
                  {item.name}
                </RadioButton>
              );
            })}
          </ModalComponent>
        }
      </div>
    );
  }
}

export default ListWithModal;
