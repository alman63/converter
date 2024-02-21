const Select = ({ onChange, valutes }) => {
    const options = Object.keys(valutes).map((el) => {
        return <option key={el}>{el}</option>;
    });

    const handleChange = (event) => {
        onChange(event.target.value);
    };

    return (
        <select className="select" onChange={handleChange}>
            {options}
        </select>
    );
};

export default Select;
