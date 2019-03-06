import {connect} from 'react-redux';
import {addTodo, deleteTodo, fetchTodoList} from '../actions/actions'
import Home from '../components/page/Home';

const mapStateToProps = (state) => {
    return {
        lists: state.todoReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (item) => {
            dispatch(addTodo(item));
        },
        deleteTodo: (id) => {
            dispatch(deleteTodo(id));
        },
        fetchTodoList: () => {
            dispatch(fetchTodoList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);