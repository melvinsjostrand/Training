import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm, FormState } from "react-hook-form";
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  name: z.string().min(3, {message: 'need at least 3 characters'}),
  age: z.number({invalid_type_error : 'age field is required'}).min(18, {message: 'age must be at least 18'})
})
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver : zodResolver(schema ) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && (
          <p className="text-danger">{errors.name.message}</p>
        )}
       
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          {...register("age", {valueAsNumber:true})}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && (
          <p className="text-danger">{errors.age.message}</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary">submit</button>
    </form>
  );
};

export default Form;
