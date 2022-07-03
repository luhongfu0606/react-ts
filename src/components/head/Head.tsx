import './index.css'
import {Col, Row} from "antd";
import {Link} from "react-router-dom";
import * as React from "react";

export default class Head extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <Link to="/nftRanking">nft Ranking</Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">
                            <Link to="/ftRanking">ft Ranking</Link>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                </Row>
            </div>
        )
    }
}
