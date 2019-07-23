import React from "react";

import Card from "../../../../../UI/Card";
import Price from "../../../../../UI/Price";
import Button from "../../../../../UI/Button";
import ListWithModal from "../ListWithModal";

class BuyCardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      education_system_id: null,
      teaching_institution_id: null
    };
    this.selectCardToBuy = this.selectCardToBuy.bind(this);
    this.getSelectedValue = this.getSelectedValue.bind(this);
  }

  selectCardToBuy(card_id) {
    const { selectCardToBuy } = this.props;
    const { education_system_id, teaching_institution_id } = this.state;
    selectCardToBuy(card_id, education_system_id, teaching_institution_id);
  }

  getSelectedValue(value, name) {
    this.setState({
      [name]: value
    });
  }

  render() {
    const { cardData } = this.props;
    return (
      <Card key={cardData.id} title={cardData.title}>
        <div className="text-center">
          <p> ثبت نام و انتخاب رشته دوره {cardData.title} </p>
          <p>({cardData.description})</p>
          <div className="text-bold">
            {cardData.price && (
              <Price className="card-price">{cardData.price}</Price>
            )}
          </div>
          <div className="select-wrapper">
            {cardData.educationSystem &&
              cardData.educationSystem.length > 0 && (
                <ListWithModal
                  systemName="education_system_id"
                  name="نظام آموزشی"
                  data={cardData.educationSystem}
                  getSelectedValue={this.getSelectedValue}
                />
              )}
          </div>
          <div className="select-wrapper">
            {cardData.teachingInstitution &&
              cardData.teachingInstitution.length > 0 && (
                <ListWithModal
                  systemName="teaching_institution_id"
                  name="مجموعه آزمایشی"
                  data={cardData.teachingInstitution}
                  getSelectedValue={this.getSelectedValue}
                />
              )}
          </div>
          <div className="button-wrapper">
            <Button blueBg onClick={() => this.selectCardToBuy(cardData.id)}>
              خرید کارت
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

export default BuyCardItem;
