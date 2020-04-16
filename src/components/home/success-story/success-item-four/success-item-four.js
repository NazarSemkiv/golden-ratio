import React from "react"
import "./success-item-four.scss";
import { StaticQuery } from 'gatsby';

class SuccessItemFour extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                leftImg2: file(relativePath: { eq: "home-page-success-story-left-img2.png" }) {
                publicURL
          },
                }
              `}
        render={data => (
          <img className="success-story-left-img2" src={data.leftImg2.publicURL}/>
        )}
      />
    );
  }
}

export default SuccessItemFour

