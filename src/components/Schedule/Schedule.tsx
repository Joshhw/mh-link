import React from "react";
import { Table, Container, Row } from "react-bootstrap";
import styled from "styled-components";

const RugglesRow = styled.tr`
  background-color: #e6c6c6;
  border-color: black;
`;

const RoxburyCrossing = styled.tr`
  background-color: #d3e1f1;
  border-color: black;
`;
const Padh4 = styled.h4`
  padding: 1rem 0;
`;

function Schedule() {
  return (
    <React.Fragment>
      <Container fluid>
        <Row>
          <Padh4>Ruggles Schedule</Padh4>
          <h5>Cost:</h5>
          <h6>Adults/Children: $1:50</h6>
          <h6>Seniors/Disabled: 50¢</h6>
          <Table responsive bordered size="sm">
            <thead>
              <tr>
                <th>Stop</th>
                <th colSpan={9}>Departing Times</th>
              </tr>
            </thead>
            <tbody>
              <RugglesRow>
                <td>Stop & Shop</td>
                <td>10:30am</td>
                <td>11:30am</td>
                <td>12:30pm</td>
                <td>1:30pm</td>
                <td>-</td>
                <td>2:30pm</td>
                <td>3:30pm</td>
                <td>4:30pm</td>
                <td>5:30pm</td>
              </RugglesRow>
              <RugglesRow>
                <td>Calumet Square</td>
                <td>10:32am</td>
                <td>11:32am</td>
                <td>12:32pm</td>
                <td>1:32pm</td>
                <td>-</td>
                <td>2:32pm</td>
                <td>3:32pm</td>
                <td>4:32pm</td>
                <td>5:32pm</td>
              </RugglesRow>
              <RugglesRow>
                <td>Saint Alphonous St @ Smith St</td>
                <td>10:35am</td>
                <td>11:35am</td>
                <td>12:35pm</td>
                <td>1:35pm</td>
                <td>-</td>
                <td>2:35pm</td>
                <td>3:35pm</td>
                <td>4:35pm</td>
                <td>5:35pm</td>
              </RugglesRow>
              <RugglesRow>
                <td>69 McGreevy St</td>
                <td>10:37am</td>
                <td>11:37am</td>
                <td>12:37pm</td>
                <td>1:37pm</td>
                <td>-</td>
                <td>2:37pm</td>
                <td>3:37pm</td>
                <td>4:37pm</td>
                <td>5:37pm</td>
              </RugglesRow>
              <RugglesRow>
                <td>McGreevy St @ Parker St</td>
                <td>10:39am</td>
                <td>11:39am</td>
                <td>12:39pm</td>
                <td>1:39pm</td>
                <td>-</td>
                <td>2:39pm</td>
                <td>3:39pm</td>
                <td>4:39pm</td>
                <td>5:39pm</td>
              </RugglesRow>
              <RugglesRow>
                <td>30 Annunciation Rd</td>
                <td>10:46am</td>
                <td>11:46am</td>
                <td>12:46pm</td>
                <td>1:46pm</td>
                <td>-</td>
                <td>2:46pm</td>
                <td>3:46pm</td>
                <td>4:46pm</td>
                <td>5:46pm</td>
              </RugglesRow>
              <RugglesRow>
                <td>Annunciation Rd @ Albert St</td>
                <td>10:47am</td>
                <td>11:47am</td>
                <td>12:47pm</td>
                <td>1:47pm</td>
                <td>-</td>
                <td>2:47pm</td>
                <td>3:47pm</td>
                <td>4:47pm</td>
                <td>5:47pm</td>
              </RugglesRow>
              <RugglesRow>
                <td>Ruggles Station</td>
                <td>10:49am</td>
                <td>11:49am</td>
                <td>12:49pm</td>
                <td>1:49pm</td>
                <td>-</td>
                <td>2:49pm</td>
                <td>3:49pm</td>
                <td>4:49pm</td>
                <td>5:49pm</td>
              </RugglesRow>
              <RugglesRow>
                <td>69 Annunciation Rd</td>
                <td>10:51am</td>
                <td>11:51am</td>
                <td>12:51pm</td>
                <td>1:51pm</td>
                <td>-</td>
                <td>2:51pm</td>
                <td>3:51pm</td>
                <td>4:51pm</td>
                <td>5:51pm</td>
              </RugglesRow>
              <RugglesRow>
                <td>Saint Alphonous St</td>
                <td>10:53am</td>
                <td>11:53am</td>
                <td>12:53pm</td>
                <td>1:53pm</td>
                <td>-</td>
                <td>2:53pm</td>
                <td>3:53pm</td>
                <td>4:53pm</td>
                <td>5:53pm</td>
              </RugglesRow>
            </tbody>
          </Table>
        </Row>
        <Row>
          <Padh4>Roxbury Crossing Schedule</Padh4>
          <Table responsive bordered size="sm">
            <thead>
              <tr>
                <th>Stop</th>
                <th colSpan={9}>Departing Times</th>
              </tr>
            </thead>
            <tbody>
              <RoxburyCrossing>
                <td>Stop & Shop (on bus transfer)</td>
                <td>11:00am</td>
                <td>12:00pm</td>
                <td>1:00pm</td>
                <td>-</td>
                <td>3:00pm</td>
                <td>4:00pm</td>
                <td>5:00pm</td>
                <td>6:00pm</td>
              </RoxburyCrossing>
              <RoxburyCrossing>
                <td>Landmark @ Longwood</td>
                <td>11:03am</td>
                <td>12:03pm</td>
                <td>1:03pm</td>
                <td>-</td>
                <td>3:03pm</td>
                <td>4:03pm</td>
                <td>5:03pm</td>
                <td>6:03pm</td>
              </RoxburyCrossing>
              <RoxburyCrossing>
                <td>New England Baptist Hospital</td>
                <td>11:08am</td>
                <td>12:08pm</td>
                <td>1:08pm</td>
                <td>-</td>
                <td>3:08pm</td>
                <td>4:08pm</td>
                <td>5:08pm</td>
                <td>6:08pm</td>
              </RoxburyCrossing>
              <RoxburyCrossing>
                <td>Fisher Ave @ Estey St</td>
                <td>11:10am</td>
                <td>12:10pm</td>
                <td>1:10pm</td>
                <td>-</td>
                <td>3:10pm</td>
                <td>4:10pm</td>
                <td>5:10pm</td>
                <td>6:10pm</td>
              </RoxburyCrossing>
              <RoxburyCrossing>
                <td>Fisher Ave @ Bucknam St</td>
                <td>11:11am</td>
                <td>12:11pm</td>
                <td>1:11pm</td>
                <td>-</td>
                <td>3:11pm</td>
                <td>4:11pm</td>
                <td>5:11pm</td>
                <td>6:11pm</td>
              </RoxburyCrossing>
              <RoxburyCrossing>
                <td>Oliver Lofts</td>
                <td>11:13am</td>
                <td>12:13pm</td>
                <td>1:13pm</td>
                <td>-</td>
                <td>3:13pm</td>
                <td>4:13pm</td>
                <td>5:13pm</td>
                <td>6:13pm</td>
              </RoxburyCrossing>
              <RoxburyCrossing>
                <td>Roxbury Crossing Station (Parker)</td>
                <td>11:15am</td>
                <td>12:15pm</td>
                <td>1:15pm</td>
                <td>-</td>
                <td>3:15pm</td>
                <td>4:15pm</td>
                <td>5:15pm</td>
                <td>6:15pm</td>
              </RoxburyCrossing>
              <RoxburyCrossing>
                <td>Gurney St @ Gurney St</td>
                <td>11:20am</td>
                <td>12:20pm</td>
                <td>1:20pm</td>
                <td>-</td>
                <td>3:20pm</td>
                <td>4:20pm</td>
                <td>5:20pm</td>
                <td>6:20pm</td>
              </RoxburyCrossing>
              <RoxburyCrossing>
                <td>Parker St @ Delle Ave</td>
                <td>11:23am</td>
                <td>12:23pm</td>
                <td>1:23pm</td>
                <td>-</td>
                <td>3:23pm</td>
                <td>4:23pm</td>
                <td>5:23pm</td>
                <td>6:23pm</td>
              </RoxburyCrossing>
              <RoxburyCrossing>
                <td>Parker Hill Ave @ Calumet St</td>
                <td>11:24am</td>
                <td>12:24pm</td>
                <td>1:24pm</td>
                <td>-</td>
                <td>3:24pm</td>
                <td>4:24pm</td>
                <td>5:24pm</td>
                <td>6:24pm</td>
              </RoxburyCrossing>
              <RoxburyCrossing>
                <td>Hillside St @ Wait St</td>
                <td>11:27am</td>
                <td>12:27pm</td>
                <td>1:27pm</td>
                <td>-</td>
                <td>3:27pm</td>
                <td>4:27pm</td>
                <td>5:27pm</td>
                <td>6:27pm</td>
              </RoxburyCrossing>
            </tbody>
          </Table>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Schedule;
