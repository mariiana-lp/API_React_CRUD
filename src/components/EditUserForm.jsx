import React from "react";
import { useForm } from "react-hook-form";


const EditUserForm = (props) => {

    const { register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name)
    setValue('username', props.currentUser.username)

    const onSubmit = (data, e) => {
        data.id = props.currentUser.id
        console.log(data)
        props.updateUser(props.currentUser.id, data)
        e.target.reset()
    }
        
      

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type= "text" {...register("name", { required: true, maxLength: 20 })} />
            <div>
                {errors?.name?.message}
            </div>
            <label htmlFor="">Username</label>
            <input type= "text" {...register("username", { required: true, maxLength: 20 })} />
            <div>
                {errors?.username?.message}
            </div>
            <button type="submit">Edit user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">
                Cancel
            </button>
        </form>
    );
}

export default EditUserForm;