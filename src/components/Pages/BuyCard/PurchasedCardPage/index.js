import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Container from "../../../UI/Container";
import Accordion from "../../../UI/Accordion";
import Input from "../../../UI/Input";
import Button from "../../../UI/Button";
import { inquryPurchasedCardAction } from "../../../../store/Modules/Cards/Actions";
import NavBarWithSteps from "../../../Layout/\u0654NavBarWithSteps";
import ReadOnlyInput from "../../../UI/ReadOnlyInput";

class PurchasedCardPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("sadasdasd");
  }
  componentDidMount() {
    console.log("sda");
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
            <ReadOnlyInput title="نام کاربری ">
              {userName ? userName : ""}
            </ReadOnlyInput>
            <ReadOnlyInput title="رمز عبور">
              {password ? password : ""}
            </ReadOnlyInput>
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
  console.log(state.Cards);
  return {
    userName: state.Cards.purchasedCardInfo.userName,
    password: state.Cards.purchasedCardInfo.password
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
