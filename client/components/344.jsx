import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react'

export default class Info344 extends React.Component {
  render() {
    return (
      <div>
        <Modal trigger={
					<Card link>
						<Image src='./client/img/gopherkey.png' />
						<Card.Content>
							<Card.Header>
								INFO 344: Sever-Side Final Project
							</Card.Header>
							<Card.Meta>
								<span className='date'>
									Nov. 2017 - Dec. 2017
								</span>
							</Card.Meta>
						</Card.Content>
					</Card>
          } style={{textAlign: 'left'}}>
          <Modal.Header>Final Project: Key Management Database</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Background Information</Header>
              <p>I took this class back in Autumn and it was the most challenging, yet rewarding, class I have ever taken. I learned how to program a web server in the language Go.</p>
              <hr />
              <Header>Technical Details</Header>
							<Header>Current Process</Header>
              <Header>Highlighted Features</Header>
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}
