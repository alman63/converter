import React, { FC, memo } from 'react';
type Props = {
    onChange: (e: string) => void;
    valutes: string;
};

export const Select: FC<Props> = memo(({ onChange, valutes }) => {
    const options = Object.keys(valutes).map((el) => {
        return <option key={el}>{el}</option>;
    });
    console.log('select');
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
});
