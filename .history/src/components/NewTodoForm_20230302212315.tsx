import { useState } from "react"

export const NewTodoForm : React.FC<{
    addTodo:Function
}>= ({addTodo}) => { 

    const [assigned, setAssigned] = useState('');
    const [desciption, setDescription] = useState('');



    const submitTodo = () => {

        if(assigned) !==='';
        
    }


    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Assigned</label>
                    <input type="text" className="form-control" required 
                    onChange={(e) => setAssigned(e.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required 
                    onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="button" className="btn btn-secondary mt-3" 
                onClick={submitTodo}
                >Add To do</button>
            </form>

        </div>
    )
}