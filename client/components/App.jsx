import React from 'react';
import {SectionsContainer, Section} from 'react-fullpage';

export default class App extends React.Component {
  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['intro', 'displays', 'contactme'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        true,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true
    };

    return (
    	<div style={{textAlign: 'center'}}>
	      <SectionsContainer className="container" {...options}>
          <Section color="#69D2E7">
            <h1>Hi, I'm Cindy and I code things.</h1>
            <p>I am from Seattle, Washington, studying Informatics at the University of Washington.</p>
          </Section>
          <Section color="#A7DBD8">
          	<h1>I want to die</h1>
          </Section>
          <Section color="#E0E4CC">
          	<h1>Contact Information</h1>
          	<p>Feel free to email me any inquiries at <a href="mailto:nguyen.k.cindy@gmail.com">nguyen.k.cindy@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/nguyenkcindy/">LinkedIn</a></p>
          	<p></p>
          </Section>
	      </SectionsContainer>
    	</div>
    );
  }
}