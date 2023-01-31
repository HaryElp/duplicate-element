import React from 'react';
import { classes, style } from './example-d.st.css';

export interface ExampleDProps {
    className?: string;
}

export const ExampleD: React.FC<ExampleDProps> = ({ className }) => {
    return <A><B/></A>;
};

const A = ({children}:{children: React.ReactNode}) => {
	return <div>{children}</div>;
}
const B = () => {
	return <span>B</span>
}