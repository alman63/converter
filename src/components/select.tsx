import React, { FC } from 'react';
type Props = {
    onChange: (e: string) => void;
    valutes: string;
};

export const Select: FC<Props> = ({ onChange, valutes }) => {
    const options = Object.keys(valutes).map((el) => {
        return <option key={el}>{el}</option>;
    });

    const handleChangeSelect = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        onChange(event.target.value);
    };
    return (
        <select className="select" onChange={handleChangeSelect}>
            {options}
        </select>
    );
};
