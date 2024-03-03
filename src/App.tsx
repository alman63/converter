import { useState } from 'react';
import { Header } from './components/header';
import { Input } from './components/input';
import { InputResult } from './components/inputResult';
import { Select } from './components/select';
import { valutes } from './const/getValutes';
import { initValue } from './const/constRUS';

export const App = () => {
    const [valueSelect, setValueSelect] = useState(
        Object.keys(initValue.Valute)[0]
    );
    const [valueInput, setValueInput] = useState('');
    const [valueInputResult, setValueInputResult] = useState('');

    const handlerValueInput = (valueInput: string) => {
        setValueInput(valueInput);
        setValueInputResult(
            (Number(valueInput) / valutes[valueSelect].Value).toString()
        );
    };
    const handlerValueInputResult = (valueInputResult: string) => {
        setValueInputResult(valueInputResult);
        setValueInput(
            (Number(valueInputResult) * valutes[valueSelect].Value).toString()
        );
    };
    const handlerChangeSelect = (valueSelect: string) => {
        setValueSelect(valueSelect);
        setValueInputResult(
            (Number(valueInput) / valutes[valueSelect].Value).toString()
        );
    };

    return (
        <>
            <Header />
            <Input onChange={handlerValueInput} value={valueInput} />
            {initValue.Valute.RUS.Name}
            <hr />
            <InputResult
                onChange={handlerValueInputResult}
                value={valueInputResult}
            />
            {valutes[valueSelect]?.Name}
            <Select onChange={handlerChangeSelect} valutes={valutes} />
        </>
    );
};
