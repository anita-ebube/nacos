const SelectDepartment = ({
  options,
  departmentOptions,
  onChange,
}) => {
  return (
    <select
      value={departmentOptions}
      onChange={onChange}
      className="border border-[#737373] w-full px-4 py-4 rounded-lg my-2 text-[13px] "
    >
      <option value="">Select Department</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SelectDepartment;
