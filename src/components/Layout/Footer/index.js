import React from "react";
import Card from "../../UI/Card";
import Button from "../../UI/Button";
import Container from "../../UI/Container";

const Footer = props => {
  const { content } = props;
  return (
    <div className="layout footer">
      <div className="container">
        <h4>ارتباط با ما</h4>
        <div className="desc">
          <p>
            داوطلبان گرامی در صورتی که سوالات شما در ارتباط با مرکز سنجش و پذیرش
            دانشگاه آزاد اسلامی است، می‌توانید از روش‌های ذیل به منظور اخذ پاسخ
            سوالات خود اقدام نمایید:
          </p>
        </div>

        <div className="cards-wrapper">
          {content &&
            content.map(item => {
              return (
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
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
