import React, {Component} from 'react';
import {Row, Col, List, Button } from 'antd';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ModifyTodoHoc} from '../layout/TodoModal';
import '../css/Component.less';


class Detail extends Component {

    componentDidMount(){
        let id = parseInt(this.props.match.params.id, 10);
        localStorage.setItem('id', id);
    }

    handleClick = () => {
        this.props.history.goBack();
    }

    render(){
        const {list} = this.props;
        let id = localStorage.id;
       
        return(
            <div className="home">
                <Row type="flex" justify="center">
                    <Col span={10}>
                        <div className="list">
                            <List
                                header={<ModifyTodoHoc updateTodo={this.props.updateTodo} id={id}/>}>
                                {
                                    list.filter(item => (item.id === parseInt(id,10))).map(item => (
                                        <div key={item.id}>
                                            <p>ID: {item.id}</p>
                                            <p>Name: {item.name}</p>
                                            <p>NickName:  {item.nickName.data.name}</p> 
                                            <p>Creation Time: {item.creationTime}</p>                                            
                                        </div>
                                    ))                                    
                                }                          
                            </List>
                            <div>
                                <Button type="primary" onClick={this.handleClick}>
                                    Go back
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

Detail.propTypes = {
    list: PropTypes.array.isRequired
}

export default withRouter(Detail);