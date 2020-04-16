import React from "react"
import "./success-item-one.scss";
import { StaticQuery } from 'gatsby';

class SuccessItemOne extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                      logoOne: file(relativePath: { eq: "home-page-success-story-logos-fake.png" }) {
            publicURL
          },
                }
              `}
        render={data => (
          <img className="img-width-one" src={data.logoOne.publicURL}/>
        )}
      />
    );
  }
}

export default SuccessItemOne

