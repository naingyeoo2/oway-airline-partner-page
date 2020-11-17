import React, { Component } from 'react';
import { Skeleton } from 'antd';

import './loading.scss'

class Loading extends Component {
    render() {
        return (
            <div className="loading-block">
                <Skeleton active/>
            </div>
        )
    }
}
export default Loading