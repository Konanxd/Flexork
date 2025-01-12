import { useState } from 'react';

const OptionInput = ({
    className = '',
    name = '',
    optionItems = [],
    ...props
}) => {
    const [selectedValue, setSelectedValue] = useState('');

    return (
        <select
            {...props}
            name={name}
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value)}
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
