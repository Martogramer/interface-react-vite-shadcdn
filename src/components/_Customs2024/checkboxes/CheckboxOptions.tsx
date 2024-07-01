import React from 'react';

interface CheckboxOptionProps {
  id: string;
  name: string;
  description: string;
}

const CheckboxOption: React.FC<CheckboxOptionProps> = ({ id, name, description }) => {
  return (
    <label
      htmlFor={id}
      className="flex cursor-pointer items-start gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50"
    >
      <div className="flex items-center">
        &#8203;
        <input type="checkbox" className="size-4 rounded border-gray-300" id={id} />
      </div>
      <div>
        <strong className="font-medium text-gray-900">{name}</strong>
        <p className="mt-1 text-pretty text-sm text-gray-700">{description}</p>
      </div>
    </label>
  );
};

export default CheckboxOption;
