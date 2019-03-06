import React, {Component} from 'react';
import {Form,Input, Button} from 'antd';
import PropTypes from 'prop-types';

class ModifyForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, value) => {
            if (!err) {
                let task = {
                    id: parseInt(this.props.id,10),
                    nickName: {
                        data: {
                            name:value.nickName
                        }
                    }
                };
                this.props.form.resetFields();
                this.props.updateTodo(task);
                this.props.handleOk();
            }else{
                console.log(err);
            }
        });
    }

    render(){
        const formItemLayout = {
            labelCol: { span: 6, offset:3 },
            wrapperCol: { span: 12 },
        };

        const ButtonLayout = {
            wrapperCol: { span: 4, offset:10 },
        };

        const {getFieldDecorator} = this.props.form;
        return(
            <Form layout="vertical" onSubmit={this.handleSubmit}>
                <Form.Item 
                    {...formItemLayout}
                    label="Nickname">
                    {getFieldDecorator('nickName', {
                        rules: [{ required: true, message: 'Please input task nickname!' }],
                    })(
                        <Input placeholder="task nickname" />
                    )}
                </Form.Item>
                <Form.Item
                    {...ButtonLayout}>
                    <Button                        
                        type="primary"
                        htmlType="submit">
                        Modify
                    </Button>
                </Form.Item>
          </Form>
        )
    }
}

ModifyForm.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired
}

const ModifyTodoForm = Form.create({ name: 'modifyTodo' })(ModifyForm);

export default ModifyTodoForm;