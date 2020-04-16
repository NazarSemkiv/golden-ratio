import React from "react"
import "./success-item-nine.scss";
import { StaticQuery } from 'gatsby';

class SuccessItemNine extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                     logoThree: file(relativePath: { eq: "home-page-success-story-logos-fake.png" }) {
            publicURL
          },
                }
              `}
        render={data => (
          <img className="img-width-two" src={data.logoThree.publicURL}/>
        )}
      />
    );
  }
}

export default SuccessItemNine

