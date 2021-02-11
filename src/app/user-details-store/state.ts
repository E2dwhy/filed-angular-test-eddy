
import { UserDetails } from 'src/app/models';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export const userDetailsAdapter: EntityAdapter<UserDetails> = createEntityAdapter<UserDetails>({
  selectId: model => model.id.toString()
});
export interface State extends EntityState<UserDetails> {
  isLoading?: boolean;
  error?: any;
  total?: number;
  selectedUserDetailsId?: string | number;
}

export const initialState: State = userDetailsAdapter.getInitialState({
  isLoading: false,
  error: null,
  selectedUserDetailsId: null,
  total: 0
});
