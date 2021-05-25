import React from 'react';
import { Layout } from 'antd';
import './Content.css';

const { Content } = Layout;

class HomeContent extends React.Component{

    componentWillMount(){
        this.props.setKeys(['1'])
    }

    render(){
        return(
            <div className="content-layout-background">
                <h1 className="content-header">project-react
                </h1>
            </div>
        );
    }

}

export default  HomeContent;