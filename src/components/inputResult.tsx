import React, { FC } from 'react';
type Props = {
    onChange: (event: string) => void;
    value: string;
};

export const InputResult: FC<Props> = ({ onChange, value }) => {
    const handlerValueInputResult = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        onChange(event.target.value);
    };
    return (
        <>
            <input
                className="input result"
                value={value}
                onChange={handlerValueInputResult}
            />
        </>
    );
};
