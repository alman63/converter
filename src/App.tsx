import { useCallback, useState } from 'react';
import { Header } from './components/header';
import { Input } from './components/input';
import { InputResult } from './components/inputResult';
import { Select } from './components/select';
import { valutes } from './const/getValutes';
import { initValue } from './const/constRUS';

export const App = () => {
    console.log('app');
    const [valueSelect, setValueSelect] = useState(
        Object.keys(initValue.Valute)[0]
    );
    const [valueInput, setValueInput] = useState('');

    const handlerValueInput = (valueInput: string) => {
        setValueInput(valueInput.replace(/[^\d.]/gi, ''));
    };

    const handlerValueInputResult = (valueInput: string) => {
        setValueInput(
            (
                Number(valueInput.replace(/[^\d.]/gi, '')) *
                valutes[valueSelect].Value
            ).toString()
        );
    };
    const handlerChangeSelect = useCallback((valueSelect: string) => {
        setValueSelect(valueSelect);
    }, []);

    return (
        <>
            <Header />
            <p>
                <Input
                    onChange={handlerValueInput}
                    value={valueInput}
                    select={valueSelect}
                />
                Валюта: {initValue.Valute.RUS.Name}
            </p>
            <hr />
            <p>
                <InputResult
                    onChange={handlerValueInputResult}
                    value={valueInput}
                    select={valueSelect}
                />
                Валюта: {valutes[valueSelect]?.Name}
                <Select onChange={handlerChangeSelect} valutes={valutes} />
            </p>
        </>
    );
};
