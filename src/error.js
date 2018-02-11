export default class OrderError extends Error {}

export class FullTableError extends OrderError {}
export class ObjectNotFoundError extends OrderError {}
