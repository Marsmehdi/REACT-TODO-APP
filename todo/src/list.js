import React, { Component } from 'react'

 //const todo = {task : "sdsds" , isComplete :false , id:783478347847384738438473478384738473847384}

class List extends Component {
  state = {
      id: "",
      task: "",
      items: [],

      index: "",
     
    };
  
  onChange = e => {
    this.setState({ task: e.target.value });
  };
  onTodoAdd = e => {
    e.preventDefault();
    this.setState({
      task: "",
      items: [...this.state.items, { task: this.state.task  ,isComplete:true, id:Date.now()}]
    });
  };
  onDelete = (val) => {
    var data = [...this.state.items];
    data.filter(function(item, index) {
      if (index === val) {
        data.splice(index, 1);
      }
    });
    this.setState({ items: [...data] });
  };





  complete = (val) => {

        this.setState({ items :this.state.items.map(el=>el.id===val?{...el,isComplete:!el.isComplete}:el)});

  }
  render() {
    return (
      <div>
        <form onSubmit={this.onTodoAdd}>
          <div className="header">
            <h2>To-Do App!</h2>
            <p>add new To-Do</p>
            <input
              type="text"
              className="form"
              id="taskName"
              value={this.state.task}
              onChange={this.onChange}
            />
            <button  className="addBtn">
              {" "}
              submit
            </button>
          </div>
        </form>
        <table>
          {this.state.items.map((item, index) => (
            <tr  key={index} >
              <td className={item.isComplete?null:"textL"} >
                {item.task}
              </td>
              <td className="textR">
                <button
                  href=""
                  className="btn"
                  onClick={()=>this.onDelete(index)}
                >
                  Delete
                </button>
              </td>
              <td>
                <button  onClick={()=>this.complete(item.id)} >
                  Change
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
export default List;