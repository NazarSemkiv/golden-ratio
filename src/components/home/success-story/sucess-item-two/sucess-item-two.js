import React from "react"
import "./sucess-item-two.scss";
import { StaticQuery } from 'gatsby';

class SuccessItemTwo extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                     logoTwo: file(relativePath: { eq: "home-page-success-story-logos-fake.png" }) {
            publicURL
          },
                }
              `}
        render={data => (
          <img className="img-width-two" src={data.logoTwo.publicURL}/>
        )}
      />
    );
  }
}

export default SuccessItemTwo

