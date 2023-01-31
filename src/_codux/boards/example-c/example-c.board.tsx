import { createBoard } from '@wixc3/react-board';
import { ExampleC } from '../../../components/example-c/example-c';

export default createBoard({
    name: 'Props',
    Board: () => <ExampleC />,
});
