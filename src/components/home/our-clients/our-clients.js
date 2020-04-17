import React from "react";
import "./our-clients.scss";
import { graphql, useStaticQuery } from "gatsby";

const OurClients = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "home-ourclients-logo.png" }) {
        publicURL
      },
      background: file(relativePath: { eq: "home-ourclients-background.png" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="our-client">
      {/* <img src={data.logo.publicURL}/> */}
      <img src={data.background.publicURL}/>
      <div className="our-client-main"
           data-sal="fade"

           data-sal-easing="ease-in-back"
           data-sal-duration="1000"
      >
        <p>our</p>
        <p>Clients</p>
        <div><span>See All Customer</span></div>
      </div>
    </div>
  )
};

export default OurClients
