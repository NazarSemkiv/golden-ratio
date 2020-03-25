import React from "react"
import "./leadership.scss";
import { graphql, useStaticQuery } from "gatsby";

const Leadership = () => {

  const data = useStaticQuery(graphql`
    query {
      arrowPrev: file(relativePath: { eq: "arrow-prev.svg" }) {
        publicURL
      },
      johndoeLawrence: file(relativePath: { eq: "johndoe-lawrence.png" }) {
        publicURL
      },
      johndoeLawrenceTwo: file(relativePath: { eq: "johndoe-lawrence-two.svg" }) {
        publicURL
      },
      johndoeLawrenceThree: file(relativePath: { eq: "johndoe-lawrence-three.svg" }) {
        publicURL
      },
      johndoeLawrenceFour: file(relativePath: { eq: "johndoe-lawrence-four.svg" }) {
        publicURL
      },
      johndoeLawrenceFive: file(relativePath: { eq: "johndoe-lawrence-five.svg" }) {
        publicURL
      },
      arrowNext: file(relativePath: { eq: "arrow-next.svg" }) {
        publicURL
      },
      johndoeLawrenceBigImg: file(relativePath: { eq: "johndoe-lawrence-big-img.png" }) {
        publicURL
      },
      linkedIn: file(relativePath: { eq: "linked-in.png" }) {
        publicURL
      }
    }
  `)

    return (
      <div id="leadership-content">
        <h5 className="leadership-pre-title container">the team</h5>
        <h2 className="leadership-title container">Our leadership</h2>
        <div className="leadership-content-top container">
          <img className="leadership-arrow arrow-left" src={data.arrowPrev.publicURL}/>
          <img src={data.johndoeLawrence.publicURL}/>
          <img src={data.johndoeLawrenceTwo.publicURL}/>
          <img src={data.johndoeLawrenceThree.publicURL}/>
          <img src={data.johndoeLawrenceFour.publicURL}/>
          <img src={data.johndoeLawrenceFive.publicURL}/>
          <img className="leadership-arrow arrow-right" src={data.arrowNext.publicURL}/>
        </div>
        <div className="leadership-content-bottom container">
          <img className="johndoe-lawrence-big-img" src={data.johndoeLawrenceBigImg.publicURL}/>
          <div className="leadership-content-bottom-inner">
            <h4 className="leadership-bottom-title">Johndoe Lawrence</h4>
            <p className="leadership-bottom-text text-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tellus massa. Nullam nec vulputate ex. Sed at consequat tortor. Donec vitae commodo augue, non imperdiet ex. Vivamus mollis at purus ac congue. Proin nec nibh quis tortor venenatis euismod et sed tortor. Mauris lobortis mattis commodo.</p>
            <p className="leadership-bottom-text">Etiam sem lectus, pellentesque eget consectetur vitae, sodales tempus augue. In non tincidunt augue. Phasellus mattis nunc dui, a dapibus mi pulvinar nec. Fusce luctus mauris a elementum posuere. Aenean eu consequat nibh, ac ulla- mcorper quam. In sodales tincidunt bibendum. Proin fringilla cursus nunc. Ut neque est, pellentesque a ligula eget, sagittis molestie erat. Vestibulum sed tellus sem. Fusce malesuada ullamcorper fringilla. Donec eget faucibus massa, vel laoreet quam. Nulla nec condimentum orci, ut efficitur ante. Quisque lobor- tis hendrerit tellus, et placerat erat volutpat sit amet. Integer ultricies tempor elit vitae congue. Ut porta et lectus et dictum.</p>
            <img className="linked-in-img" src={data.linkedIn.publicURL}/>
          </div>
        </div>
      </div>
    )
};

export default Leadership
