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
      educationSystem: null,
      teachingInstitution: null
    };
    this.selectCardToBuy = this.selectCardToBuy.bind(this);
    this.getSelectedValue = this.getSelectedValue.bind(this);
  }

  selectCardToBuy(cardId) {
    const { selectCardToBuy, history, onErrorCallBack } = this.props;
    const { eductaionSystem, teachingInstitution } = this.state;
    if (eductaionSystem && teachingInstitution) {
      selectCardToBuy(cardId, eductaionSystem, teachingInstitution);
      history.push("/card/user-info");
    } else {
      onErrorCallBack("malekkkk");
    }
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
            {cardData.price && <Price>{cardData.price}</Price>}
          </div>
          <div className="select-wrapper">
            {cardData.educationSystem &&
              cardData.educationSystem.length > 0 && (
                <ListWithModal
                  systemName="eductaionSystem"
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
                  systemName="teachingInstitution"
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
