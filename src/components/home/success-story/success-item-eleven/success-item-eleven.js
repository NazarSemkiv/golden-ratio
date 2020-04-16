import React from "react"
import "./success-item-eleven.scss";
import { StaticQuery } from 'gatsby';

class SuccessItemEleven extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                     logoFour: file(relativePath: { eq: "home-page-success-story-logos-fake.png" }) {
            publicURL
          },
                }
              `}
        render={data => (
          <img className="img-width-two" src={data.logoFour.publicURL}/>
        )}
      />
    );
  }
}

export default SuccessItemEleven

