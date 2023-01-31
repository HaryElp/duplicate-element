import { createBoard } from '@wixc3/react-board';
import { ExampleA } from '../../../components/example-a/example-a';

export default createBoard({
    name: 'RootConditionResult',
    Board: () => <ExampleA />,
});
