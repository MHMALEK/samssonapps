import React from "react";

import ModalComponent from "../../../../../UI/Modal";
import SelectWithOutOption from "../../../../../UI/SelectWithOutOption";
import RadioButton from "../../../../../UI/RadioButton";
import Button from "../../../../../UI/Button";

class ListWithModal extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleListChange = this.handleListChange.bind(this);
    this.defaultCheckOption = this.defaultCheckOption.bind(this);
    this.submitAndCloseModal = this.submitAndCloseModal.bind(this);
    this.anyItemHasSelected = this.anyItemHasSelected.bind(this);
    this.state = {
      isModalOpen: false,
      selectedServiceName: null,
      selectedItemValue: null,
      selectedElementPlaceHolder: null
    };
  }
  openModal() {
    this.setState({
      isModalOpen: true
    });
  }
  closeModal(nullEveryThing = false) {
    if (nullEveryThing && !this.state.selectedItemValue) {
      setTimeout(() => {
        this.setState({
          isModalOpen: false,
          selectedServiceName: null,
          selectedItemValue: null,
          selectedElementPlaceHolder: null
        });
      }, 10);
    } else {
      setTimeout(() => {
        this.setState({
          isModalOpen: false
        });
      }, 10);
    }
  }
  handleListChange(e, selectedServiceName, selectedElementPlaceHolder) {
    const { getSelectedValue } = this.props;
    const value = e.target.value;
    this.setState(
      {
        selectedServiceName: selectedServiceName,
        selectedItemValue: value,
        selectedElementPlaceHolder: selectedElementPlaceHolder
      },
      () => {
        getSelectedValue(
          this.state.selectedItemValue,
          this.state.selectedServiceName
        );
      }
    );
  }

  defaultCheckOption(item) {
    if (this.state.selectedItemValue) {
      return this.state.selectedItemValue == item.id ? true : false;
    }
    return false;
  }

  submitAndCloseModal() {
    const { getSelectedValue } = this.props;
    getSelectedValue(
      this.state.selectedItemValue,
      this.state.selectedServiceName
    );
    this.closeModal();
  }

  anyItemHasSelected() {
    const { selectedItemValue } = this.state;
    if (selectedItemValue) {
      return true;
    }
    return false;
  }

  render() {
    const { data, systemName, name } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div onClick={() => this.openModal()}>
        <p className="select-without-option-lable">{name}</p>
        <SelectWithOutOption
          placeHolder={this.state.selectedElementPlaceHolder}
        />
        {
          <ModalComponent
            title={name}
            openModal={isModalOpen}
            onCloseClick={() => this.closeModal("emptyAllItems")}
            footer={
              <Button
                disabled={!this.anyItemHasSelected()}
                onClick={() => this.submitAndCloseModal()}
                blueBg
              >
                ثبت
              </Button>
            }
          >
            {data.map((item, index) => {
              return (
                <RadioButton
                  key={index}
                  name={systemName}
                  value={item.id}
                  defaultChecked={this.defaultCheckOption(item)}
                  onChange={e =>
                    this.handleListChange(e, systemName, item.name)
                  }
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
