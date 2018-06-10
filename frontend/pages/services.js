import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import PageWrapper from "../components/PageWrapper.js";

class Services extends Component {
  render() {
    return (
      <div>
        <header className="hero">
          <div className="headline container">
            <div className="row">
              <div className="col-lg-12">
                <div className="intro-text">
                  <h1 className="name">Services</h1>
                  <h2 className="subheadline">Subheadline Services</h2>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main role="main">
          <div className="container pt-5">
            <div className="row mb-4">
              <div className="col-md-4">
                <h4 className="text-info">Package 1</h4>
                <h5 className="text-success">$1,000</h5>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <br />
                <a className="btn btn-success" href="#">Learn More</a>
              </div>
              <div className="col-md-4">
                <h4 className="text-info">Package 2</h4>
                <h5 className="text-success">$1,000</h5>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <br />
                <a className="btn btn-success" href="#">Learn More</a>
              </div>
              <div className="col-md-4">
                <h4 className="text-info">Package 3</h4>
                <h5 className="text-success">$1,000</h5>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <br />
                <a className="btn btn-success" href="#">Learn More</a>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-md-4">
                <h4 className="text-info">Flex Fund Retainer</h4>
                <h5 className="text-success">$2,795</h5>
                <div>
                  Sometimes you need a quick technology update or integration piece completed, and you may have ongoing improvements with your technology that keep piling up. We offer a Flex Fund. It’s a block of pre-paid time that can be used to handle any task related to improving your business (with no time minimum.)
                </div>
                <br />
                <a className="btn btn-success" href="#">Learn More</a>
              </div>
              <div className="col-md-4">
                <h4 className="text-info">Analytics Roadmap Report</h4>
                <h5 className="text-success">$2,895</h5>
                <div>
                  <p>Lets turn all your ideas in your head into a reality. Creating your software takes a first step forward. You'll get a visual blueprint of your future software that can be handed off to a designer and developer.</p>
                  <p>Save on cost by getting a full detailed plan with all the details written so that a developer can give you a clear accurate proposal without the fear of blown-out budgets.</p>
                </div>
                <br />
                <a className="btn btn-success" href="#">Learn More</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }
}

export default PageWrapper(Services);
