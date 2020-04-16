import React from "react"
import "./success-item-six.scss";
import { StaticQuery } from 'gatsby';

class SuccessItemSix extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                          userIconTwo: file(relativePath: { eq: "home-page-success-section-user-logo.png" }) {
            publicURL
          }
                }
              `}
        render={data => (
          <img src={data.userIconTwo.publicURL}/>
        )}
      />
    );
  }
}

export default SuccessItemSix

