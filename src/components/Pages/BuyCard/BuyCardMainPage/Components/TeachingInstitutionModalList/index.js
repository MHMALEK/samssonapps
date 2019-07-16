import React from "react";

import ModalComponent from "../../../../../UI/Modal";
import SelectWithOutOption from "../../../../../UI/SelectWithOutOption";
import RadioButton from "../../../../../UI/RadioButton";

class TeachingInstitutionModalList extends React.Component {
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
            {card.teachingInstitution.map((teachingInstitution, index) => {
              return (
                <RadioButton
                  key={index}
                  name="eductaionSystem"
                  value={teachingInstitution.id}
                  defaultChecked={teachingInstitution.id === 1}
                >
                  {teachingInstitution.name}
                </RadioButton>
              );
            })}
          </ModalComponent>
        }
      </div>
    );
  }
}

export default TeachingInstitutionModalList;
