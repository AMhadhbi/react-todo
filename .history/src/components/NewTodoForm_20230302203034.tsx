export const NewTodoForm = () => {
    
    const assigned:string = '';
    const desciption:string = '';

const handleAssignedChange= () => 

    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required  onChange={handleAssignedChange}/>
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