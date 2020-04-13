import React from "react"
import "./third-item.scss";
import { graphql, useStaticQuery } from "gatsby";

const ThirdItem = () => {

  const data = useStaticQuery(graphql`
    query {
      leadershipContentBottomImg: file(relativePath: { eq: "leadership-content-bottom-img.png" }) {
        publicURL
      },
      linkedIn: file(relativePath: { eq: "linked-in.png" }) {
        publicURL
      }
    }
  `);

  return (
    <div className="leadership-content-bottom container">
      <div className="circle"></div>
      <div className="up-triangle"></div>
      <div className="down-triangle"></div>
      <div className="leadership-content-bottom-left">
        <img className="johndoe-lawrence-big-img" src={data.leadershipContentBottomImg.publicURL}/>
      </div>
      <div className="leadership-content-bottom-right">
        <h4 className="leadership-bottom-title">Third Item</h4>
        <p className="leadership-bottom-text text-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tellus massa. Nullam nec vulputate ex. Sed at consequat tortor. Donec vitae commodo augue, non imperdiet ex. Vivamus mollis at purus ac congue. Proin nec nibh quis tortor venenatis euismod et sed tortor. Mauris lobortis mattis commodo.</p>
        <p className="leadership-bottom-text">Etiam sem lectus, pellentesque eget consectetur vitae, sodales tempus augue. In non tincidunt augue. Phasellus mattis nunc dui, a dapibus mi pulvinar nec. Fusce luctus mauris a elementum posuere. Aenean eu consequat nibh, ac ulla- mcorper quam. In sodales tincidunt bibendum. Proin fringilla cursus nunc. Ut neque est, pellentesque a ligula eget, sagittis molestie erat. Vestibulum sed tellus sem. Fusce malesuada ullamcorper fringilla. Donec eget faucibus massa, vel laoreet quam. Nulla nec condimentum orci, ut efficitur ante. Quisque lobor- tis hendrerit tellus, et placerat erat volutpat sit amet. Integer ultricies tempor elit vitae congue. Ut porta et lectus et dictum.</p>
        <img className="linked-in-img" src={data.linkedIn.publicURL}/>
      </div>
    </div>
  )
};

export default ThirdItem
