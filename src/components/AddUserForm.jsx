import React from "react";
import { useForm } from "react-hook-form";


const AddUserForm = (props) => {

    const { register, errors, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

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

            <button type="submit">Add new user</button>

        </form>
    );
}

export default AddUserForm;