import React, { Component } from 'react';
import {Row, Col, Card, Icon} from 'antd';
import EchartsOne from './EchartOne';

class Home extends Component {
  constructor (props){
    super(props);

  };

  

  render() {
    return (
      <div>
          <Row gutter={10} type="flex" justify="space-between" align="bottom">
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="heart" className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">Internal Dos</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="cloud" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">Press Docs</div>
                                        <h2>30122</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="camera" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">Department Docs</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="mail" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">Private Docs</div>
                                        <h2>102</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <div className="cloud-box">
                            <Card className={'no-padding'}>
                                <EchartsOne></EchartsOne>
                                {/* <EchartsProjects /> */}
                            </Card>
                        </div>
                    </Col>
                </Row>

                <Row gutter={10} type="flex" justify="space-between" align="bottom">
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="heart" className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">Complaint&Claim</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="cloud" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">Stock Docs</div>
                                        <h2>30122</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="camera" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">Pictures</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="cloud-box">
                            <Card>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="mail" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">Address Book</div>
                                        <h2>102</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={12}>
                        <div className="cloud-box">
                            <Card className={'no-padding'}>
                                {/* <EchartsProjects2  option={this.state.echartData}/> */}
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={10} type="flex" justify="space-between" align="bottom">
                    <Col xs={24} sm={24} md={12} lg={6}>
                        <div className="cloud-box">
                            <Card className={'no-padding'}>
                                {/* <EchartsProjects3 /> */}
                            </Card>
                        </div>
                  </Col>
                </Row>
      </div>
    );
  }
}

export default Home;