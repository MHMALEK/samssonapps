import React from "react";

import Card from "../../../../../UI/Card";
import Price from "../../../../../UI/Price";
import Button from "../../../../../UI/Button";

import EducationalModalList from "../../Components/EducationalModalList";
import TeachingInstitutionModalList from "../../Components/TeachingInstitutionModalList";

class BuyCardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      eductaionSystem: null,
      teachingInstitution: null
    };
    this.selectCardToBuyAction = this.selectCardToBuyAction.bind(this);
    this.getEductaionSystemValue = this.getEductaionSystemValue.bind(this);
    this.getTeachingInstitutionValue = this.getTeachingInstitutionValue.bind(
      this
    );
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
  getEductaionSystemValue(value) {
    this.setState({
      eductaionSystem: value
    });
  }
  getTeachingInstitutionValue(value) {
    this.setState({
      teachingInstitution: value
    });
  }

  render() {
    const { cardData } = this.props;
    return (
      <Card key={cardData.id} title={cardData.title}>
        <div className="text-center">
          <p> ثبت نام و انتخاب رشته دوره {cardData.title} </p>
          <p>({cardData.description})</p>
          <div className="price-wrapper">
            <Price>{cardData.price}</Price>
          </div>
          <div className="select-wrapper">
            {cardData.educationSystem &&
              cardData.educationSystem.length > 0 && (
                <EducationalModalList
                  card={cardData}
                  getEductaionSystemValue={value =>
                    this.getEductaionSystemValue(value)
                  }
                />
              )}
          </div>
          <div className="select-wrapper">
            {cardData.teachingInstitution &&
              cardData.teachingInstitution.length > 0 && (
                <TeachingInstitutionModalList
                  card={cardData}
                  getTeachingInstitutionValue={value =>
                    this.getTeachingInstitutionValue(value)
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
