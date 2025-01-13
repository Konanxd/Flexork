import { useState } from 'react';

const OptionInput = ({
    className = '',
    name = '',
    optionItems = [],
    onChange,
    ...props
}) => {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e) => {
        setSelectedValue(e.target.value);

        if (onChange) {
            onChange(e);
        }
    };

    return (
        <select
            {...props}
            name={name}
            value={selectedValue}
            onChange={handleChange}
            className={`rounded-md border-transparent bg-gray-100 shadow-sm ${selectedValue === '' ? 'text-slate-400' : 'text-black'} ${className}`}
        >
            {optionItems.map((item, index) => (
                <option
                    value={item.value}
                    key={index}
                    disabled={item.disabled}
                    className={item.disabled ? 'text-slate-400' : 'text-black'}
                >
                    {item.label}
                </option>
            ))}
        </select>
    );
};

export default OptionInput;
