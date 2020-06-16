import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            edited: false,
        }
    }
   
    
    render() {
        return (
            <div>
                <h3> Home</h3>
                
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         todos: state.todoReducer.todos,
//     }

// }

export default Home;
// export default connect(mapStateToProps, { getTodos, deleteToDO })(ToDosList)