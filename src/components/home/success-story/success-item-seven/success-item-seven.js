import React from "react"
import "./success-item-seven.scss";
import { StaticQuery } from 'gatsby';

class SuccessItemSeven extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                          userIconThree: file(relativePath: { eq: "home-page-success-section-user-logo.png" }) {
            publicURL
          }
                }
              `}
        render={data => (
          <img src={data.userIconThree.publicURL}/>
        )}
      />
    );
  }
}

export default SuccessItemSeven

