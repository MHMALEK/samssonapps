import React from "react";
import Accordion from "../Accordion";
class AccordionList extends React.Component {
  constructor(props) {
    super(props);
    this.hideElement = this.hideElement.bind(this);
    this.state = {
      hideElement: false,
      clickedElementIndex: null,
      hasBeenExpanded: false
    };
  }
  hideElement(index, hasBeenExpanded) {
    //   if has been expanded now set status of expanded true so element will be hide by click
    this.setState({
      hideElement: !this.state.hideElement,
      clickedElementIndex: index,
      hasBeenExpanded
    });
  }
  render() {
    const { children } = this.props;
    const { clickedElementIndex, hasBeenExpanded } = this.state;

    return children.length > 1 ? (
      <div className="accordion-list">
        {children.map((child, index) => {
          return React.cloneElement(child, {
            key: index,
            onClick: this.hideElement,
            elementIndex: index,
            hide: clickedElementIndex !== index || hasBeenExpanded, // should hide if element has been expanded right now or it's not the clicked element
            expandable: true
          });
        })}
      </div>
    ) : (
      children
    );
  }
}

export default AccordionList;
