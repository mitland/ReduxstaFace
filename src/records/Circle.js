import Immutable, {List} from 'immutable';

export default Immutable.Record({
    id: undefined,
    name: undefined,
    posts: List(),
});
