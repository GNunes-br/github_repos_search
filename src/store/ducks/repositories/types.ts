import { PayloadAction } from '@reduxjs/toolkit';

/**
 * Data types
 */
export type Repository = {
  id: number;
  name: string;
  defaultBrach: string;
  technology: string;
};

/**
 * State type
 */
export type RepositoryState = Readonly<{
  data: {
    username: string;
    repositories: Array<Repository>;
  };
  loading: boolean;
  error: boolean;
}>;

/**
 * Action type
 */
export type RepositoryAction<Payload> = Payload & { type: string };

/**
 * Payload type
 */
export type GetReposPayload = PayloadAction<{ username: string }>;

export type GetReposSuccessPayload = PayloadAction<Array<Repository>>;
