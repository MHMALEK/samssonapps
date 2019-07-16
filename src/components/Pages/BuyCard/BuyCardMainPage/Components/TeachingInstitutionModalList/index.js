import React from "react";

import ModalComponent from "../../../../../UI/Modal";
import SelectWithOutOption from "../../../../../UI/SelectWithOutOption";
import RadioButton from "../../../../../UI/RadioButton";

class TeachingInstitutionModalList extends React.Component {
  constructor(props) {
    super(props);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleTeachingInstitutionChange = this.handleTeachingInstitutionChange.bind(this);
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
  handleTeachingInstitutionChange(e) {
    const {getTeachingInstitutionValue} = this.props;
    const value = e.target.value;
    getTeachingInstitutionValue(value)
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
            onCloseClick={this.closeModal}
          >
            {card.teachingInstitution.map((teachingInstitution, index) => {
              return (
                <RadioButton
                  key={index}
                  name="eductaionSystem"
                  value={teachingInstitution.id}
                  defaultChecked={teachingInstitution.id === 1}
                  onChange={value => this.handleTeachingInstitutionChange(value)}
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
