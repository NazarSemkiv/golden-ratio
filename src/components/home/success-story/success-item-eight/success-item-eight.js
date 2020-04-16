import React from "react"
import "./success-item-eight.scss";
import { StaticQuery } from 'gatsby';

class SuccessItemEight extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                          userIconFour: file(relativePath: { eq: "home-page-success-section-user-logo.png" }) {
            publicURL
          }
                }
              `}
        render={data => (
          <img src={data.userIconFour.publicURL}/>
        )}
      />
    );
  }
}

export default SuccessItemEight

