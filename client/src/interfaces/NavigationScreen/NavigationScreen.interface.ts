import { RouteComponentProps } from 'react-router-dom';
import { Query } from 'react-apollo';

export interface NavigationScreenProps extends RouteComponentProps<any> {
  session?: {
    getCurrentUser: Query;
  };
}
