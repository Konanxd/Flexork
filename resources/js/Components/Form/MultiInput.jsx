const MultiInput = ({ label, values = [], onChange }) => {
    console.log(values);

    const handleChange = (index, value) => {
        const newValues = [...values];
        newValues[index] = value;
        onChange(newValues);
    };

    // Add a new input field
    const addInput = () => {
        onChange([...values, '']);
    };

    // Remove an input field
    const removeInput = (index) => {
        const newValues = values.filter((_, i) => i !== index);
        onChange(newValues);
    };

    return (
        <div className="flex flex-col gap-3">
            {values.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                    <input
                        type="text"
                        value={item}
                        onChange={(e) => handleChange(index, e.target.value)}
                        className="w-1/2 rounded-none border-2 border-[#C4C4C4] bg-white text-[#5B5B5B] placeholder-[#C4C4C4] placeholder:text-base"
                        placeholder={`Isi ${label}`}
                    />
                    <button
                        type="button"
                        onClick={() => removeInput(index)}
                        className="rounded-md bg-red-500 px-3 py-1 text-white"
                    >
                        X
                    </button>
                </div>
            ))}

            <button
                type="button"
                onClick={addInput}
                className="w-1/2 rounded-md bg-blue-500 p-2 text-white"
            >
                + Tambah
            </button>
        </div>
    );
};

export default MultiInput;
