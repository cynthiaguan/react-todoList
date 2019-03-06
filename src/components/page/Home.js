import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Row, Col, List} from 'antd';
import {AddTodoHoc} from '../layout/TodoModal';
import '../css/Component.less';


class Home extends Component {

    componentDidMount(){
        this.props.fetchTodoList();
    }

    render(){
        const {lists, addTodo, deleteTodo} = this.props;
        return(
            <div className="home">
                <Row type="flex" justify="center">
                    <Col span={10}>
                        <div className="list">
                            <List
                                bordered
                                size="middle"
                                header={<AddTodoHoc addTodo={addTodo}/>}
                                dataSource={lists}
                                pagination={{
                                    pageSize: 5,
                                }}
                                renderItem={item => {
                                    return (
                                        <List.Item 
                                            key={item.id}
                                            actions={[<a onClick={()=> deleteTodo(item.id)}>Delete</a>,<Link to={`/children/${item.id}`}>Detail</Link>]}>
                                            <List.Item.Meta
                                                title={<p>Task Name: {item.name}</p>}
                                                description={`Nickname: ${item.nickName.data.name}`}
                                            />
                                        </List.Item>
                                    )
                                }}                          
                            />
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

Home.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        creationTime: PropTypes.string.isRequired,
        nickName: PropTypes.object.isRequired
    })),
    fetchTodoList: PropTypes.func.isRequired,
    addTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
}

export default withRouter(Home);