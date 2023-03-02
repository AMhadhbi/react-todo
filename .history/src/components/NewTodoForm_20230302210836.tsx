export const NewTodoForm : React.FC<{
    addTodo:Function
}>= ({addTodo}) => { 

    let assigned: string = "";
    let desciption: string = '';

    const handleAssignedChange = (value: string) => {

        assigned = value;
        console.log(value);
    };

    const handleDescriptionChange = (value: string) => {

        desciption = value;
        console.log(value);

    };

    const submitTodo = () => {}


    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required onChange={(e) => handleAssignedChange(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required onChange={(e) => handleDescriptionChange(e.target.value)}></textarea>
                </div>
                <button type="button" className="btn btn-secondary mt-3" onClick={submitTodo}>Add To do</button>
            </form>

        </div>
    )
}