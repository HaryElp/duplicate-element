import React from 'react';
import { classes, style } from './example-c.st.css';

export interface ExampleCProps {
    className?: string;
}

export const ExampleC: React.FC<ExampleCProps> = ({ className }) => {
    return <Comp value="hary2" />;
};

const Comp = ({ value }: { value: string }) => {
    return (
        <span>
            {value}
            {value}
        </span>
    );
};
