import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Container from "../../../UI/Container";
import Accordion from "../../../UI/Accordion";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import { inquryPurchasedCardAction } from "../../../../store/Modules/Cards/Actions";
import NavBarWithSteps from "../../../Layout/\u0654NavBarWithSteps";

class PurchasedCardPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("sadasdasd");
  }
  componentDidMount() {
    const { inquryPurchasedCard, match } = this.props;
    const transActionId = match.params.transaction_id;
    inquryPurchasedCard(transActionId);
  }

  render() {
    const { userName, password } = this.props;
    return (
      <div className="layout-wrapper">
        <NavBarWithSteps />
        <Container>
          <Accordion title="کارت اعتباری">
            <p className="c-red">
              ثبت‌نام و انتخاب رشته دوره دکتری تخصصی بدون آزمون (ویژه
              استعداد‌های درخشان) سال ۱۳۹۸
            </p>
            <div className="inputs-wrapper">
              <Input
                bgGray
                title="نام کاربری "
                value={userName ? userName : ""}
                disabled
              />
              <Input
                bgGray
                title="رمز عبور"
                value={password ? password : ""}
                disabled
              />
            </div>
          </Accordion>
          <div className="call-to-actions">
            <Button blueBg>دریافت کارت اعتباری</Button>
          </div>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    userName: state.Cards.purchasedCardData.userName,
    password: state.Cards.purchasedCardData.password
  };
};
const mapDipatchToProps = dispatch => {
  return {
    inquryPurchasedCard: transActionId => {
      dispatch(inquryPurchasedCardAction(transActionId));
    }
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDipatchToProps
  )(PurchasedCardPage)
);
