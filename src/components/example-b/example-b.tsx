import React from 'react';
import { classes, style } from './example-b.st.css';

export interface ExampleBProps {
    className?: string;
}

export const ExampleB: React.FC<ExampleBProps> = ({ className }) => {
    return <div>['a', 'b', 'c']</div>;
};
