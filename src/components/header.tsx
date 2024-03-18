import React, { memo } from 'react';

export const Header = memo(() => {
    console.log('heder');
    return <h1 className="header__h1">Конвертер валют</h1>;
});
