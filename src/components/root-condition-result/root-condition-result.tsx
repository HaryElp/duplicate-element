import styles from './root-condition-result.module.scss';
import classNames from 'classnames';

export interface RootConditionResultProps {
    className?: string;
    right?: boolean;
}

export const ExampleA: React.FC<RootCondistionResultProps> = ({ className, right }) => {
    return <div>{1 > 0 ? 'left' : 'right'}{null || right}</div>;
};
