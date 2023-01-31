import { createBoard } from '@wixc3/react-board';
import { ExampleD } from '../../components/example-d/example-d';
import { ExampleC } from '../../components/example-c/example-c';
import { ExampleB } from '../../components/example-b/example-b';
import { ExampleA } from '../../components/example-a/example-a';

export default createBoard({
    name: 'AllCases',
    Board: () => (
        <div>
            <ExampleA />
            <ExampleB />
            <ExampleC />
            <ExampleD />
        </div>
    ),
});
