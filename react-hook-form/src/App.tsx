import React from "react";

import {
  type Path,
  useForm,
  type UseFormRegister,
  type SubmitHandler,
} from "react-hook-form";

interface IFormValues {
  "First Name": string;
  age: number;
}

type InputProps = {
  label: Path<IFormValues>;
  register: UseFormRegister<IFormValues>;
  required: boolean;
};

const Input = ({ label, register, required }: InputProps) => {
  return (
    <>
      <input {...register(label, { required })} />
    </>
  );
};

const Select = React.forwardRef<
  HTMLSelectElement,
  { label: string } & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));
const App = () => {
  return <div>App</div>;
};

export default App;
