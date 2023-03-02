export const NewTodoForm = () => {
    
    let assigned: string;
    let desciption: string = '';

    const handleAssignedChange = (value: string) => {

        assigned = value;

    };


    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required  onChange={(e) => handleAssignedChange(e.target.value)}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required></textarea>
                </div>
                <button type="button" className="btn btn-secondary mt-3">Add To do</button>
            </form>

        </div>
    )
}