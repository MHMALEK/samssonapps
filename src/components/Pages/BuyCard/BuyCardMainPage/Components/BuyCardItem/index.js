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
    this.selectCardToBuyAction = this.selectCardToBuyAction.bind(this);
  }

  selectCardToBuyAction(cardId) {
    const { selectCardToBuyAction, history } = this.props;
    const { eductaionSystem, teachingInstitution } = this.state;

    selectCardToBuyAction(
      cardId,
      Number(eductaionSystem),
      Number(teachingInstitution)
    );
    history.push("/card/user-info");
  }

  getSelectedValue(value,name) {
    this.setState({
      name: value
    })
  }

  render() {
    const { cardData } = this.props;
    return (
      <Card key={cardData.id} title={cardData.title}>
        <div className="text-center">
          <p> ثبت نام و انتخاب رشته دوره {cardData.title} </p>
          <p>({cardData.description})</p>
            <Price>{cardData.price}</Price>
          <div className="select-wrapper">
            {cardData.educationSystem &&
              cardData.educationSystem.length > 0 && (
                <ListWithModal
                  data={cardData}
                  name="educationSystem"
                  getSelectedValue={value =>
                    this.getSelectedValue(value, "educationSystem")
                  }
                />
              )}
          </div>
          <div className="select-wrapper">
            {cardData.teachingInstitution &&
              cardData.teachingInstitution.length > 0 && (
                <ListWithModal
                  data={cardData}
                  name="teachingInstitution"
                  getSelectedValue={value =>
                    this.getSelectedValue(value, "teachingInstitution")
                  }
                />
              )}
          </div>
          <div className="button-wrapper">
            <Button
              blueBg
              onClick={() => this.selectCardToBuyAction(cardData.id)}
            >
              خرید کارت
            </Button>
          </div>
        </div>
      </Card>
    );
  }
}

export default BuyCardItem;
