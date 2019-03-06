import React, {Component} from 'react';
import {Form,Input, Button, DatePicker} from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment'

class AddForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let task = {
                    name: values.name,
                    creationTime: moment(values.date).format("YYYY-MM-DD"),
                    nickName: {
                        data: {
                            name:values.nickName
                        }
                    }
                };
                this.props.addTodo(task);
                this.props.handleOk();
                this.props.form.resetFields();
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
                    label="Name"
                    {...formItemLayout}>
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input task name!' }],
                    })(
                        <Input placeholder="task name" />
                    )}
                </Form.Item>
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
                    {...formItemLayout}
                    label="Date">
                    {getFieldDecorator('date', {
                        rules: [{ required: true, message: 'Please chooose the date!' }],
                    })(
                        <DatePicker format="YYYY-MM-DD"/>
                    )}
                </Form.Item>
                <Form.Item
                    {...ButtonLayout}>
                    <Button                        
                        type="primary"
                        htmlType="submit">
                        ADD
                    </Button>
                </Form.Item>
          </Form>
        )
    }
}

AddForm.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired
}

const AddTodoForm = Form.create({ name: 'addTodo' })(AddForm);

export default AddTodoForm;