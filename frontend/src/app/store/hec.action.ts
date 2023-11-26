import { createAction, props } from '@ngrx/store';
import { Hechizos } from '../interfaces/schema';

export const addFavHec = createAction(
    '[Saved Spell Component] Add favorite spell',
    props<{ hec: Hechizos }>()
);

export const delFavHec = createAction(
    '[[Saved Spell Component] delete favorite spell]',
    props<{ _id: number }>()
);