

const InputField = ({ label, name, type, register, error, placeholder }) => (
  <label className="flex flex-col text-[14px] font-semibold gap-[9px]">
    {label}
    <input
      className={`border text-[14px] border-[#DFDFDF] py-[10.5px] px-[12px] rounded-[5px] ${error ? "border-red-500" : ""
        }`}
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
    {error && <p className="text-red-500 text-[12px] mt-1">{error.message}</p>}
  </label>
);


export default InputField;