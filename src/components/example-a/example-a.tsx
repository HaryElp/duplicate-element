import React from 'react';
import { classes, style } from './example-a.st.css';

export interface ExampleAProps {
    className?: string;
    right?: boolean;
}

export const ExampleA: React.FC<ExampleAProps> = ({ className, right }) => {
    return <div>{1 > 0 ? 'left' : 'right'}{null || right}</div>;
};