import React from "react";

import ModalComponent from "../../../../../UI/Modal";
import SelectWithOutOption from "../../../../../UI/SelectWithOutOption";
import RadioButton from "../../../../../UI/RadioButton";

class EducationalModalList extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleEductaionSystemChange = this.handleEductaionSystemChange.bind(this);
    this.state = {
      isModalOpen: false
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
  handleEductaionSystemChange(e) {
    const {getEductaionSystemValue} = this.props;
    const value = e.target.value;
    getEductaionSystemValue(value)
  }

  render() {
    const { card } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div onClick={() => this.openModal()}>
        <p className="select-without-option-lable">نظام آموزشی</p>
        <SelectWithOutOption />
        {
          <ModalComponent
            title="نظام آموزشی"
            openModal={isModalOpen}
            onCloseClick={() => this.closeModal()}
          >
            {card.educationSystem.map((educationSystem, index) => {
              return (
                <RadioButton
                  key={index}
                  name="eductaionSystem"
                  value={educationSystem.id}
                  defaultChecked={educationSystem.id === 1}
                  onChange={(e) => this.handleEductaionSystemChange(e)}
                >
                  {educationSystem.name}
                </RadioButton>
              );
            })}
          </ModalComponent>
        }
      </div>
    );
  }
}

export default EducationalModalList;
