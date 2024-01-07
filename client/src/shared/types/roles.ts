import { RouteProps } from 'react-router-dom';

// eslint-disable-next-line egoreq-plugin/layer-imports
import { UserRoleEnum } from '@entities/User';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoleEnum[];
};
