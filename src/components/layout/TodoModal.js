import React, {Component} from 'react';
import { Modal, Button } from 'antd';
import AddTodoForm from '../form/AddTodoForm';
import ModifyTodoForm from '../form/ModifyTodoForm';

const TodoHoc = (Component, name) => {
    class Todo extends Component {
      state = { visible: false }
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = (e) => {
        this.setState({
          visible: false,
        });
      }
  
    handleCancel = (e) => {
      this.setState({
        visible: false,
      });
    }
  
    render() {
      const newProps = {
        handleOk: this.handleOk,
      }
      return (
        <div className="clearfix">
            <h2 className="todo-secondary-header">My Todo List</h2>
            <Button 
                type="primary" 
                className="add-button"
                onClick={this.showModal}>
                {name}
            </Button>
            <Modal
                title="Basic Modal"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                onclick = {this.handleSubmit}
                footer={null}>
                  <Component {...this.props} {...newProps}/>
            </Modal>
        </div>
      );
    }
  }
  return Todo;
}

export const AddTodoHoc = TodoHoc(AddTodoForm, 'ADD');
export const ModifyTodoHoc = TodoHoc(ModifyTodoForm, 'Modify');