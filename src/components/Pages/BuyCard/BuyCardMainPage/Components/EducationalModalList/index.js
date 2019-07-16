import React from "react";

import ModalComponent from "../../../../../UI/Modal";
import SelectWithOutOption from "../../../../../UI/SelectWithOutOption";
import RadioButton from "../../../../../UI/RadioButton";

class EducationalModalList extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.state = {
      isModalOpen: false
    };
  }
  openModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
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
            showModal={isModalOpen}
            onCloseClick={this.openModal}
          >
            {card.educationSystem.map((educationSystem, index) => {
              return (
                <RadioButton
                  key={index}
                  name="eductaionSystem"
                  value={educationSystem.id}
                  defaultChecked={educationSystem.id === 1}
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
