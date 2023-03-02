export const NewTodoForm = () => {
    return (
        <div className="mt-5">
            <form>
            <div className="mb-3">
                <label className="form-label">Assigned</label>
                <input type="text" className="form-control" required/>
            </div>

            <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea className="form-control" rows={3} required></textarea>
            </div>
            
            </form>

        </div>
    )
}