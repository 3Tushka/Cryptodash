import React from 'react';
import { Col, Row, Typography } from 'antd';

import './linechart.scss'
const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">{coinName} Price Chart </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
                    <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
                </Col>
            </Row>
        </>
    );
};

export default LineChart;