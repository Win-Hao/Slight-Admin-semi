import { setupWorker } from "msw/browser";
import userMockApi from './handlers/auth';

const handlers = [...userMockApi];
export const worker = setupWorker(...handlers);