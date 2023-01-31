import { createBoard } from '@wixc3/react-board';
import { ExampleD } from '../../../components/example-d/example-d';

export default createBoard({
    name: 'RootComponent',
    Board: () => <ExampleD />,
});
