import React, { FC } from 'react';

type Props = {
    onChange: (e: string) => void;
    value: string;
};

export const Input: FC<Props> = ({ onChange, value }) => {
    const handlerValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <>
            <input
                className="input first"
                placeholder="Введите данные"
                onChange={handlerValueInput}
                value={value}
            />
        </>
    );
};
