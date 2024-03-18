import React, { FC } from 'react';

type Props = {
    onChange: (e: string) => void;
    value: string;
    select: string;
};

export const Input: FC<Props> = ({ onChange, value }) => {
    const handlerValueInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    const onClickInput = () => {
        const input = document.querySelector('.first') as HTMLInputElement;
        if (Number(value) === 0) input.value = '';
    };

    return (
        <>
            <input
                className="input first"
                placeholder="Введите данные"
                onChange={handlerValueInput}
                value={value}
                onClick={onClickInput}
            />
        </>
    );
};
