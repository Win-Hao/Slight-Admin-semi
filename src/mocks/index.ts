import { setupWorker } from "msw/browser";
import authMockApi from './handlers/auth';
import usersMockApi from './handlers/users';

const handlers = [...authMockApi,...usersMockApi];
export const worker = setupWorker(...handlers);