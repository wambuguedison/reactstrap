import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="social">
              <iframe src="https://ghbtns.com/github-btn.html?user=reactstrap&repo=reactstrap&type=star&count=true" frameBorder="0" scrolling="0" width="100" height="20px" />
              <iframe src="https://ghbtns.com/github-btn.html?user=reactstrap&repo=reactstrap&type=fork&count=true" frameBorder="0" scrolling="0" width="100" height="20px" />
            </p>
            <a href="https://www.netlify.com">
              <img src="https://www.netlify.com/img/global/badges/netlify-light.svg" alt="Deploys by Netlify" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
