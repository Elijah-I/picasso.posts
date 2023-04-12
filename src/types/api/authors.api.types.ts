import type { User } from '../entity/user.types';

export type GetUsersRequest = void;
export type GetUsersResponse = User[];

export type GetUserRequest = User['id'];
export type GetUserResponse = User;
