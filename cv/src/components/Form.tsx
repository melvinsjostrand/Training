import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm, FormState } from "react-hook-form";

interface FormData {
    name: string;
    age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger"> The name must be at least 3 characters</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          {...register("age", { required: true, maxLength: 3 })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">The age field is required</p>
        )}
        {errors.age?.type === "maxLength" && (
          <p className="text-danger"> The age cant be more than 3 characters</p>
        )}
      </div>
      <button className="btn btn-primary">submit</button>
    </form>
  );
};

export default Form;
