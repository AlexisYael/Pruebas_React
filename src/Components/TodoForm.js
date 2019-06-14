import React,{Component} from 'react';

class TodoForm extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            title:'',
            responsible:'',
            description:'',
            priority:'low'
        };
    }
    handleInput()
    {
        console.log("Escribiendo..");
    }
    render()
    {
        return(
            <div className="card">
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Title" onChange={this.handleInput()}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible" className="form-control" placeholder="Responsible"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" name="descripcion" className="form-control" placeholder="Descripcion"></input>
                    </div>
                    <div className="form-group">
                        <input type="text" name="prioriry" className="form-control" placeholder="Priority"></input>
                    </div>
                </form>
            </div>
        );
    }
}
export default TodoForm;