import React from "react"
import "./success-item-three.scss";
import { StaticQuery } from 'gatsby';

class SuccessItemThree extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    return (
      <StaticQuery
        query={graphql`
                query {
                leftImg1: file(relativePath: { eq: "home-page-success-story-left-img1.png" }) {
                publicURL
                  }
                }
              `}
        render={data => (
          <img className="success-story-left-img1" src={data.leftImg1.publicURL}/>
        )}
      />
    );
  }
}

export default SuccessItemThree

