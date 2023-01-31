import { createBoard } from '@wixc3/react-board';
import { ExampleB } from '../../../components/example-b/example-b';

export default createBoard({
    name: 'RepeaterItems',
    Board: () => <ExampleB />,
});
