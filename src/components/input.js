import { useState, useEffect } from 'react';
import Select from './select';

const Input = () => {
    const [Valutes, setValutes] = useState({});
    const [value, setValue] = useState(0);
    const [valueSelect, setValueSelect] = useState('RUS');

    const getApiData = async () => {
        const response = await fetch(
            'https://www.cbr-xml-daily.ru/daily_json.js'
        ).then((response) => response.json());
        setValutes({
            RUS: { Name: 'Российский рубль', Value: 1 },
            ...response.Valute,
        });
    };

    useEffect(() => {
        getApiData();
    }, [Valutes]);

    const handlerValue = (event) => {
        setValue(event.target.value);
    };
    const handlerChange = (valueSelect) => {
        setValueSelect(valueSelect);
    };
    return (
        <div>
            <input
                type="number"
                className="input"
                placeholder="Введите данные"
                onChange={handlerValue}
            />
            <Select onChange={handlerChange} valutes={Valutes} />
            <p>Результат:</p>
            <p>
                {Valutes[valueSelect]?.Value
                    ? `${value} Rus =  ${value * Valutes[valueSelect]?.Value}`
                    : value}{' '}
                {Valutes[valueSelect]?.Name}
            </p>
        </div>
    );
};

export default Input;
