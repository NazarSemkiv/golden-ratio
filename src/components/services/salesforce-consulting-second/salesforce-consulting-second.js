import React from "react"
import "./salesforce-consulting-second.scss";
import { graphql, useStaticQuery } from "gatsby";
import DesignAndArchitecture from './design-and-architecture/design-and-architecture';
import Сustomization from './customization/customization';
import Integrations from './integrations/integrations';
import CommunityImplementations from './community-implementations/community-implementations';
import SecurityAssessments from './security-assessments/security-assessments';
import SalesforceCpqImplementations
  from './salesforce-cpq-implementations/salesforce-cpq-implementations';

const SalesforceConsultingSecond = () => {

  // when click on tabs
  function changeTab(tabName) {
    const tabs = ['design', 'customization', 'integrations', 'community', 'security', 'cpq'];
    let activeTab = tabs.indexOf(tabName);

    // add-remove class for active tab
    for(let j = 0; j < document.getElementsByName('tabsTwo').length; j++) {
      document.getElementsByName('tabsTwo')[j].classList.remove('active-tab');
      document.getElementsByName('tabTriangleTwo')[j].classList.remove('active-triangle');
      document.getElementsByName('tabNameTwo')[j].classList.remove('justify-text');
    }
    document.getElementsByName('tabsTwo')[activeTab].classList.add('active-tab');
    document.getElementsByName('tabTriangleTwo')[activeTab].classList.add('active-triangle');
    document.getElementsByName('tabNameTwo')[activeTab].classList.add('justify-text');

    // hide-show tab content
    for(let i = 0; i < tabs.length; i++) {
      document.getElementsByName('tabContentTwo')[i].style.display = 'none';
    }
    document.getElementsByName('tabContentTwo')[activeTab].style.display = 'block';
  }

  const data = useStaticQuery(graphql`
    query {
      salesforceConsultingSecondImg: file(relativePath: { eq: "salesforce-consulting-second-img.png" }) {
        publicURL
      },
      designAndArchitecture: file(relativePath: { eq: "design-and-architecture.svg" }) {
        publicURL
      },
      customization: file(relativePath: { eq: "customization-2.svg" }) {
        publicURL
      },
      integrations: file(relativePath: { eq: "integrations-2.svg" }) {
        publicURL
      },
      communityImplementations: file(relativePath: { eq: "community-implementations-2.svg" }) {
        publicURL
      },
      securityAssessments: file(relativePath: { eq: "security-assessments-2.svg" }) {
        publicURL
      },
      salesforceCpqImplementations: file(relativePath: { eq: "salesforce-cpq-implementations-2.svg" }) {
        publicURL
      },
      designAndArchitectureImg: file(relativePath: { eq: "design-and-architecture-img.png" }) {
        publicURL
      }
    }
  `);

    return (
      <div id="salesforce-consulting-second">
        <h2 className="salesforce-consulting-second-title">Salesforce consulting</h2>


        <div className="salesforce-consulting-scroll">
          <div className='salesforce-consulting-second-tabs'>
            <div className='salesforce-consulting-second-tabs-circle' onClick={(event) => {changeTab('design');}}>
              <div name="tabsTwo" className='salesforce-consulting-second-tabs-circle-icon active-tab'>
                <img src={data.designAndArchitecture.publicURL}/>
                <div name="tabTriangleTwo" className='salesforce-consulting-second-tabs-circle-icon-triangle active-triangle'>
                  {/*triangle*/}
                </div>
                <p name="tabNameTwo" className='salesforce-consulting-second-tabs-circle-icon-text justify-text'>
                  Design and architecture
                </p>
              </div>
            </div>

            <div className='salesforce-consulting-second-tabs-circle' onClick={() => {changeTab('customization');}}>
              <div name="tabsTwo" className='salesforce-consulting-second-tabs-circle-icon'>
                <img src={data.customization.publicURL}/>
                <div name="tabTriangleTwo" className='salesforce-consulting-second-tabs-circle-icon-triangle'>
                  {/*triangle*/}
                </div>
                <p name="tabNameTwo" className='salesforce-consulting-second-tabs-circle-icon-text'>
                  Customization
                </p>
              </div>
            </div>

            <div className='salesforce-consulting-second-tabs-circle' onClick={() => {changeTab('integrations');}}>
              <div name="tabsTwo" className='salesforce-consulting-second-tabs-circle-icon'>
                <img src={data.integrations.publicURL}/>
                <div name="tabTriangleTwo" className='salesforce-consulting-second-tabs-circle-icon-triangle'>
                  {/*triangle*/}
                </div>
                <p name="tabNameTwo" className='salesforce-consulting-second-tabs-circle-icon-text'>
                  Integrations
                </p>
              </div>
            </div>

            <div className='salesforce-consulting-second-tabs-circle' onClick={() => {changeTab('community');}}>
              <div name="tabsTwo" className='salesforce-consulting-second-tabs-circle-icon'>
                <img src={data.communityImplementations.publicURL}/>
                <div name="tabTriangleTwo" className='salesforce-consulting-second-tabs-circle-icon-triangle'>
                  {/*triangle*/}
                </div>
                <p name="tabNameTwo" className='salesforce-consulting-second-tabs-circle-icon-text'>
                  Community implementations
                </p>
              </div>
            </div>

            <div className='salesforce-consulting-second-tabs-circle' onClick={() => {changeTab('security');}}>
              <div name="tabsTwo" className='salesforce-consulting-second-tabs-circle-icon'>
                <img src={data.securityAssessments.publicURL}/>
                <div name="tabTriangleTwo" className='salesforce-consulting-second-tabs-circle-icon-triangle'>
                  {/*triangle*/}
                </div>
                <p name="tabNameTwo" className='salesforce-consulting-second-tabs-circle-icon-text'>
                  Security assessments
                </p>
              </div>
            </div>

            <div className='salesforce-consulting-second-tabs-circle' onClick={() => {changeTab('cpq');}}>
              <div name="tabsTwo" className='salesforce-consulting-second-tabs-circle-icon'>
                <img src={data.salesforceCpqImplementations.publicURL}/>
                <div name="tabTriangleTwo" className='salesforce-consulting-second-tabs-circle-icon-triangle'>
                  {/*triangle*/}
                </div>
                <p name="tabNameTwo" className='salesforce-consulting-second-tabs-circle-icon-text'>
                  Salesforce cpq implementations
                </p>
              </div>
            </div>
          </div>
        </div>

        <div name="tabContentTwo" className="container" style={{display: 'block'}}>
          <DesignAndArchitecture/>
        </div>

        <div name="tabContentTwo" className="container" style={{display: 'none'}}>
          <Сustomization/>
        </div>

        <div name="tabContentTwo" className="container" style={{display: 'none'}}>
          <Integrations/>
        </div>

        <div name="tabContentTwo" className="container" style={{display: 'none'}}>
          <CommunityImplementations/>
        </div>

        <div name="tabContentTwo" className="container" style={{display: 'none'}}>
          <SecurityAssessments/>
        </div>

        <div name="tabContentTwo" className="container" style={{display: 'none'}}>
          <SalesforceCpqImplementations/>
        </div>
      </div>
    )
};

export default SalesforceConsultingSecond
