import React from "react"
import "./success-item-five.scss";
import { StaticQuery } from 'gatsby';

class SuccessItemFive extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                          userIcon: file(relativePath: { eq: "home-page-success-section-user-logo.png" }) {
            publicURL
          }
                }
              `}
        render={data => (
          <img src={data.userIcon.publicURL}/>
        )}
      />
    );
  }
}

export default SuccessItemFive

