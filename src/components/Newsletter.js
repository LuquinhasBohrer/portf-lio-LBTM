import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Inscreva-se em nossa Newsletter<br></br> & E não perca os novos updates!</h3>
            </Col>
            <Col md={6} xl={7}>
            <form action="https://api.sheetmonkey.io/form/6sVMu3vYF8xKAtDwxy5xB6" required method="post">
                <div className="new-email-bx">
                <label> </label>
                <input type="hidden" name="Enviado em;" value="x-sheetmonkey-current-date-time" />
                  <input type="email" name="Newsletter" required placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  )
}
