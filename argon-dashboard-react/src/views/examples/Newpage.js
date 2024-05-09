import { useState } from "react";
import classnames from "classnames";
import Chart from "chart.js";
import { Line } from "react-chartjs-2";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { chartOptions, parseOptions, chartExample1 } from "../../variables/charts";
import Header from "../../components/Headers/Header";

const Newpage = () => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("pH");
  const [parameterDropdownOpen, setParameterDropdownOpen] = useState(false);
  const [stationDropdownOpen, setStationDropdownOpen] = useState(false);
  const [chartData, setChartData] = useState(generateRandomData());

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
  };

  const toggleParameterDropdown = () => {
    setParameterDropdownOpen(!parameterDropdownOpen);
  };

  const toggleStationDropdown = () => {
    setStationDropdownOpen(!stationDropdownOpen);
  };

  const handleParameterSelect = (parameter) => {
    setChartExample1Data(parameter);
    setChartData(generateRandomData());
    setParameterDropdownOpen(false);
  };

  const handleStationSelect = (station) => {
    // Implement logic for handling station selection
    console.log("Station selected:", station);
    setStationDropdownOpen(false);
  };

  // Function to generate random data for demonstration purposes
  function generateRandomData() {
    const data = [];
    for (let i = 0; i < 10; i++) {
      data.push(Math.random() * 100);
    }
    return data;
  }

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">
                      {chartExample1Data}
                    </h2>
                  </div>
                  <div className="col">
                    <Nav className="justify-content-end" pills>
                      <NavItem>
                        <Dropdown
                          isOpen={parameterDropdownOpen}
                          toggle={toggleParameterDropdown}
                          nav
                        >
                          <DropdownToggle
                            caret
                            className={classnames("py-2 px-3", {
                              active: activeNav === 1,
                            })}
                          >
                            Parameter
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem onClick={() => handleParameterSelect("pH")}>
                              pH
                            </DropdownItem>
                            <DropdownItem onClick={() => handleParameterSelect("Electrical Conductivity")}>
                              Electrical Conductivity
                            </DropdownItem>
                            <DropdownItem onClick={() => handleParameterSelect("Ammonia")}>
                              Ammonia
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </NavItem>
                      <NavItem>
                        <Dropdown
                          isOpen={stationDropdownOpen}
                          toggle={toggleStationDropdown}
                          nav
                        >
                          <DropdownToggle
                            caret
                            className={classnames("py-2 px-3", {
                              active: activeNav === 1,
                            })}
                          >
                            Station
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem onClick={() => handleStationSelect("Station 1")}>
                              Station 1
                            </DropdownItem>
                            <DropdownItem onClick={() => handleStationSelect("Station 2")}>
                              Station 2
                            </DropdownItem>
                            <DropdownItem onClick={() => handleStationSelect("Station 3")}>
                              Station 3
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </NavItem>
                    </Nav>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                <div className="chart">
                  <Line
                    data={{
                      labels: [...Array(10).keys()],
                      datasets: [
                        {
                          label: chartExample1Data,
                          data: chartData,
                          fill: false,
                          borderColor: "rgb(75, 192, 192)",
                          tension: 0.1,
                        },
                      ],
                    }}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Newpage;
