// re-export your Vike config
export { default as config } from './+config.js'

// any utility you need to expose
export { getTitle } from './getTitle.js'

// types for consumers
export type * from './types.d.ts'
