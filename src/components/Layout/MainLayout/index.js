import React from "react";
import { connect } from "react-redux";

import Header from "../../UI/Header";
import Footer from "../../UI/Footer";
import Card from '../../UI/Card';
import Container from '../../UI/Container';
import Button from '../../UI/Button';
import NavBar from "../NavBar";
import Loading from "../../UI/Loading";

const MainLayout = props => {
  const { children, contactInformation, history, title, showLoading } = props;
  const  renderFooter = () => {
    return  (
      <>
        <h4>ارتباط با ما</h4>
        <div className="desc">
          <p>
            داوطلبان گرامی در صورتی که سوالات شما در ارتباط با مرکز سنجش و پذیرش
            دانشگاه آزاد اسلامی است، می‌توانید از روش‌های ذیل به منظور اخذ پاسخ
            سوالات خود اقدام نمایید:
          </p>
        </div>

        <div className="cards-wrapper">
          {contactInformation &&
            contactInformation.map(item => {
              return (
                showLoading ?
                <Loading />
                :
                (
                <Card
                  withOutShadow
                  key={item.id}
                  title={item.title}
                  footer={
                    item.link_url ? (
                      <Container>
                        <a href={item.link_url}>
                          <Button blueBorder>{item.link_text}</Button>
                        </a>
                      </Container>
                    ) : (
                      <Container>
                        <p className="c-blue bold">{item.link_text}</p>
                      </Container>
                    )
                  }
                >
                  <p>{item.description}</p>
                </Card>)
              );
            })}
        </div>
    </>)
  }
  return (
    <div className="main-app-layout">
      <Header />
      <NavBar title={title} history={history} />
      {children}
      <Footer content={renderFooter()} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contactInformation: state.App.contactUs,
    showLoading: state.App.getSettingsLoading,
  };
};
export default connect(
  mapStateToProps,
  null
)(MainLayout);
