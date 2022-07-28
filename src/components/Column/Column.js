import React, {Component} from "react";

class Column extends Component {
    // This component is responsible for rendering our columns of task
    render() {
        return this.props.column.title;
    }
}

export default Column;
