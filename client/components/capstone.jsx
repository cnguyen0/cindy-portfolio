import React from 'react';
import { Card, Image, Modal, Header } from 'semantic-ui-react'

export default class Capstone extends React.Component {
  render() {
    return (
      <div>
        <Modal trigger={
					<Card link>
						<Image src='./client/img/ischool.png' />
						<Card.Content>
							<Card.Header>
								Capstone: Grandma's House
							</Card.Header>
							<Card.Meta>
								<span className='date'>
									Jan. 2018 - Present
								</span>
							</Card.Meta>
						</Card.Content>
					</Card>
          } style={{textAlign: 'left'}}>
          <Modal.Header>Union of North America Vietnamese Student Association</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <Header>Background Information</Header>
              <p>One thing that this organization struggle with every year is having a streamline solution that will ease conference registration management. The Union of North America Vietnamese Student Association hosts an annual conference that brings in 500 Vietnamese leaders from across America and Canada.</p>
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
