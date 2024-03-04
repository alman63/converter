import React, { FC } from 'react';
import { valutes } from '../const/getValutes';

type Props = {
    onChange: (event: string) => void;
    value: string;
    select: string;
};

export const InputResult: FC<Props> = ({ onChange, value, select }) => {
    const handlerValueInputResult = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        onChange(event.target.value);
    };
    return (
        <>
            <input
                className="input result"
                value={Number(value) / valutes[select].Value}
                onChange={handlerValueInputResult}
            />
        </>
    );
};
