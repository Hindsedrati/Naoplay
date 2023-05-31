import React from 'react';
import { Frame, Row, Col, Space, Hero, Divider, Select, Checkbox, Input, Button } from 'cirrus-ui';

function ContactForm () {
  return (
    <Hero className="fullscreen">
      <div className="hero-body">
        <div style={{ margin: 'auto' }}>
          <Frame className="p-0" method="post">
            <div className="frame__body p-0">
              <Row className="p-0 level fill-height">
                <Col>
                  <Space className="xlarge" />
                  <div className="padded">
                    <h1 className="u-text-center u-font-alt">Contact Us</h1>
                    <Divider />
                    <p className="u-text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Divider />
                    <div className="form-group">
                      <label className="form-group-label">
                        <span className="icon">
                          <i className="fa-wrapper far fa-user"></i>
                        </span>
                      </label>
                      <Input type="text" className="form-group-input" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                      <label className="form-group-label">
                        <span className="icon">
                          <i className="fa-wrapper far fa-envelope"></i>
                        </span>
                      </label>
                      <Input type="email" className="form-group-input" placeholder="Enter your email" />
                    </div>
                    <div className="form-section section-inline">
                      <div className="section-body row">
                        <Col size="6" className="pl-0">
                          <label className="form-group-label">
                            <span className="icon">
                              <i className="fa-wrapper far fa-calendar"></i>
                            </span>
                          </label>
                          <Input type="date" className="form-group-input" placeholder="Enter your birthday (or not)" />
                        </Col>
                        <Col size="6" className="pr-0">
                          <label className="form-group-label">
                            <span className="icon">
                              <i className="fa-wrapper fas fa-list"></i>
                            </span>
                          </label>
                          <Select className="form-group-input" placeholder="Choose one">
                            <option>Bug Report</option>
                            <option>Feature Request</option>
                            <option>Other</option>
                          </Select>
                        </Col>
                      </div>
                    </div>
                    <textarea placeholder="Tell us what's wrong"></textarea>
                    <Checkbox id="check1" className="form-ext-input">
                      <label htmlFor="check1" className="form-ext-label">Send me a copy.</label>
                    </Checkbox>
                    <Space />
                    <div className="btn-group u-pull-right">
                      <Button color="info">Send</Button>
                    </div>
                  </div>
                  <Space className="xlarge" />
                </Col>
              </Row>
            </div>
          </Frame>
        </div>
      </div>
    </Hero>
  );
};

export default ContactForm;
