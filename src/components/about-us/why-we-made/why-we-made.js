import React from "react"
import "./why-we-made.scss";
import { graphql, useStaticQuery } from "gatsby";

const WhyWeMade = () => {

  const data = useStaticQuery(graphql`
    query {
      whyWeMadeGoldenRatio: file(relativePath: { eq: "why-we-made-golden-ratio.png" }) {
        publicURL
      },
      whyWeMadeYellowBg: file(relativePath: { eq: "why-we-made-yellow-bg.png" }) {
        publicURL
      },
      teamMembers: file(relativePath: { eq: "team-members.svg" }) {
        publicURL
      },
      monthlyInteraction: file(relativePath: { eq: "monthly-interaction.svg" }) {
        publicURL
      },
      countriesServved: file(relativePath: { eq: "countries-servved.svg" }) {
        publicURL
      }
    }
  `)

    return (
      <div id="why-we-made-content">
        <div className="why-we-made-main-img-wrapper">
          <img className="why-we-made-main-img" src={data.whyWeMadeGoldenRatio.publicURL}/>
        </div>
        <div className="why-we-made-top container">
          <h5 className="why-we-made-pre-title"
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
          >the reason</h5>
          <h2 className="why-we-made-title">
            <p
              data-sal="slide-right"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >Why we made</p>
            <p
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
            >Golden Ratio System?</p>
          </h2>
          <p className="why-we-made-text"
             data-sal="slide-right"
             data-sal-delay="300"
             data-sal-easing="ease"
             data-sal-duration="1000"
          > Golden info created lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Duis dignissim tempor diam, fermentum pulvinar odio commodo at. Cras et magna quis enim iaculis elementum non quis ligula. Nunc lobortis at metus vitae imperdiet. Proin ac urna id erat rutrum vestibulum. Etiam sodales elit eu risus pellentesque 
            sagittis. Proin at tristique dui, eget elementum elit. 
          </p>
          <h3 className="why-we-made-quotes"
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
          >"What if we could do something different?"</h3>
          <p className="why-we-made-text"
             data-sal="slide-right"
             data-sal-delay="300"
             data-sal-easing="ease"
             data-sal-duration="1000"
          >And so, they built Golden Ratio Systems.</p>
        </div>
        <img className="why-we-made-yellow-bg" src={data.whyWeMadeYellowBg.publicURL}/>
        <div className="why-we-made-bottom container">
          <div className="why-we-made-bottom-content"
               data-sal="slide-right"
               data-sal-delay="300"
               data-sal-easing="ease"
               data-sal-duration="1000"
          >
            <img className="why-we-made-bottom-imgs" src={data.teamMembers.publicURL}/>
            <p className="why-we-made-bottom-bold-text">45+</p>
            <p className="why-we-made-bottom-text">Team Members</p>
          </div>
          <div className="why-we-made-bottom-content"
               data-sal="slide-right"
               data-sal-delay="300"
               data-sal-easing="ease"
               data-sal-duration="1000"
          >
            <img className="why-we-made-bottom-imgs" src={data.monthlyInteraction.publicURL}/>
            <p className="why-we-made-bottom-bold-text">3m+</p>
            <p className="why-we-made-bottom-text">Monthly Interaction</p>
          </div>
          <div className="why-we-made-bottom-content"
               data-sal="slide-right"
               data-sal-delay="300"
               data-sal-easing="ease"
               data-sal-duration="1000"
          >
            <img className="why-we-made-bottom-imgs" src={data.countriesServved.publicURL}/>
            <p className="why-we-made-bottom-bold-text">25+</p>
            <p className="why-we-made-bottom-text">Countries Servved</p>
          </div>
        </div>
      </div>
    )
};

export default WhyWeMade
