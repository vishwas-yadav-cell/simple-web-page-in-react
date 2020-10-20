import React from 'react';
import { add, sub, div, mul } from './calc';

export default function display() {
    return (
        <>
            <ul>
                <li>Sum of two no. is <span>{add(10, 20)}</span></li>
                <li>Sub of two no. is <span>{sub(10, 20)}</span></li>
                <li>Mul of two no. is <span>{mul(10, 20)}</span></li>
                <li>Div of two no. is <span>{div(10, 20)}</span></li>
            </ul>
        </>
    );
}