import { useState } from "react";

interface DropDownProps {
  reqType: string;
  options: string[];
  currentValue: string;
  onYearChange: (reqType: string, year: string) => void;
  // options: string[];
  // onSelect: (value: string) => void;
}

const DropDown: React.FC<DropDownProps> = ({
  reqType,
  currentValue,
  options,
  onYearChange,
}) => {
  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onYearChange(reqType, event.target.value);
  };

  if (!options.includes(currentValue)) {
    return <div>Error: Selected value isn't included in the options.</div>;
  }

  // const [selectedOption, setSelectedOption] = useState(options[0]);

  // const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   const value = event.target.value;
  //   setSelectedOption(value);
  //   onSelect(value);
  // };

  return (
    <div className='flex w-full mx-auto justify-center mt-5'>
      <select
        value={currentValue}
        onChange={handleYearChange}
        className='bg-inherit text-inherit border=2 border-stone-100 rounded-xl'
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
