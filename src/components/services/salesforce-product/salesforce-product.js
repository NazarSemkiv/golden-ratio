import React from "react"
import "./salesforce-product.scss";
import { graphql, useStaticQuery } from "gatsby";
import CustomApplication from './custom-application/custom-application';
import CpqApplications from './cpq-applications/cpq-applications';
import ManagedPackages from './managed-packages/managed-packages';
import FullStackDevelopment from './full-stack-development/full-stack-development';
import MobileAppDevelopment from './mobile-app-development/mobile-app-development';

const SalesforceProduct = () => {

  // when click on tabs
  function changeTab(tabName) {
    const tabs = ['custom', 'cpq', 'packages', 'fullstack', 'mobile'];
    let activeTab = tabs.indexOf(tabName);

    // add-remove class for active tab
    for(let j = 0; j < document.getElementsByName('tabs').length; j++) {
      document.getElementsByName('tabs')[j].classList.remove('active-tab');
      document.getElementsByName('tabTriangle')[j].classList.remove('active-triangle');
      document.getElementsByName('tabName')[j].classList.remove('justify-text');
    }
    document.getElementsByName('tabs')[activeTab].classList.add('active-tab');
    document.getElementsByName('tabTriangle')[activeTab].classList.add('active-triangle');
    document.getElementsByName('tabName')[activeTab].classList.add('justify-text');

    // hide-show tab content
    for(let i = 0; i < tabs.length; i++) {
      document.getElementsByName('tabContent')[i].style.display = 'none';
    }
    document.getElementsByName('tabContent')[activeTab].style.display = 'block';
  }

  const data = useStaticQuery(graphql`
    query {
      salesforceProductDevIcons: file(relativePath: { eq: "salesforce-product-dev-icons.png" }) {
        publicURL
      },
      customApplications: file(relativePath: { eq: "custom-applications-2.svg" }) {
        publicURL
      },
      cpqApplications: file(relativePath: { eq: "cpq-applications-2.svg" }) {
        publicURL
      },
      managedPackages: file(relativePath: { eq: "managed-packages.svg" }) {
        publicURL
      },
      fullStackDevelopmentIcon: file(relativePath: { eq: "full-stack-development-2.svg" }) {
        publicURL
      },
      mobileAppDevelopment: file(relativePath: { eq: "mobile-app-development-2.svg" }) {
        publicURL
      },
      fullStackDevelopmentDg: file(relativePath: { eq: "full-stack-development-bg.png" }) {
        publicURL
      },
      yellowBtnBg: file(relativePath: { eq: "yellow-btn-bg.svg" }) {
        publicURL
      },
      salesforceProductDevBg: file(relativePath: { eq: "salesforce-product-dev-bg.svg" }) {
        publicURL
      }
    }
  `);

    return (
      <div id="salesforce-product">
        <h2 className="salesforce-product-title">Salesforce product development</h2>

        <div className="salesforce-product-scroll">
        <div className='salesforce-product-tabs'>
          <div className='salesforce-product-tabs-circle' onClick={(event) => {changeTab('custom');}}>
            <div name="tabs" className='salesforce-product-tabs-circle-icon active-tab'>
              <img src={data.customApplications.publicURL}/>
              <div name="tabTriangle" className='salesforce-product-tabs-circle-icon-triangle active-triangle'>
                {/*triangle*/}
              </div>
              <p name="tabName" className='salesforce-product-tabs-circle-icon-text justify-text'>
                Custom Applications
              </p>
            </div>
          </div>

          <div className='salesforce-product-tabs-circle' onClick={() => {changeTab('cpq');}}>
            <div name="tabs" className='salesforce-product-tabs-circle-icon'>
              <img src={data.cpqApplications.publicURL}/>
              <div name="tabTriangle" className='salesforce-product-tabs-circle-icon-triangle'>
                {/*triangle*/}
              </div>
              <p name="tabName" className='salesforce-product-tabs-circle-icon-text'>
                Cpq Applications
              </p>
            </div>
          </div>

          <div className='salesforce-product-tabs-circle' onClick={() => {changeTab('packages');}}>
            <div name="tabs" className='salesforce-product-tabs-circle-icon'>
              <img src={data.managedPackages.publicURL}/>
              <div name="tabTriangle" className='salesforce-product-tabs-circle-icon-triangle'>
                {/*triangle*/}
              </div>
              <p name="tabName" className='salesforce-product-tabs-circle-icon-text'>
                Managed packages
              </p>
            </div>
          </div>

          <div className='salesforce-product-tabs-circle' onClick={() => {changeTab('fullstack');}}>
            <div name="tabs" className='salesforce-product-tabs-circle-icon'>
              <img src={data.fullStackDevelopmentIcon.publicURL}/>
              <div name="tabTriangle" className='salesforce-product-tabs-circle-icon-triangle'>
                {/*triangle*/}
              </div>
              <p name="tabName" className='salesforce-product-tabs-circle-icon-text'>
                Full stack development
              </p>
            </div>
          </div>

          <div className='salesforce-product-tabs-circle' onClick={() => {changeTab('mobile');}}>
            <div name="tabs" className='salesforce-product-tabs-circle-icon'>
              <img src={data.mobileAppDevelopment.publicURL}/>
              <div name="tabTriangle" className='salesforce-product-tabs-circle-icon-triangle'>
                {/*triangle*/}
              </div>
              <p name="tabName" className='salesforce-product-tabs-circle-icon-text'>
                mobile app development
              </p>
            </div>
          </div>
        </div>
        </div>

        <img className="salesforce-product-content-bg" src={data.salesforceProductDevBg.publicURL}/>

        <div name="tabContent" className="container" style={{display: 'block'}}>
          <CustomApplication/>
        </div>

        <div name="tabContent" className="container" style={{display: 'none'}}>
          <CpqApplications/>
        </div>

        <div name="tabContent" className="container" style={{display: 'none'}}>
          <ManagedPackages/>
        </div>

        <div name="tabContent" className="container" style={{display: 'none'}}>
          <FullStackDevelopment/>
        </div>

        <div name="tabContent" className="container" style={{display: 'none'}}>
          <MobileAppDevelopment/>
        </div>

      </div>
    )
};

export default SalesforceProduct
