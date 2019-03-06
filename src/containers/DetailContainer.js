import {connect} from 'react-redux';
import {fetchTodo, updateTodo} from '../actions/actions'
import Detail from '../components/page/Detail';

const mapStateToProps = (state) => {
    return {
        list: state.todoReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchTodo: (id) => {
            dispatch(fetchTodo(id));
        },
        updateTodo: (info) => {
            dispatch(updateTodo(info))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);