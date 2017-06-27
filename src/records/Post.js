import Immutable, {List} from 'immutable';
import {EditorState} from 'draft-js';
import Circle from 'Records/Circle';

export default class extends Immutable.Record({
    id: undefined,
    author: undefined,
    content: EditorState.createEmpty(),
    circle: undefined,
    tags: List(),
    time: 0,
}) {
    normalize() {
        return this.update('circle', (circle) => {
            return circle.id;
        }).update('author', (author) => {
            return author.id;
        });
    }
}
