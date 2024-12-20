/**
 * iqdb-client
 * @description iqdb.org api client for Node.js.
 * @version 1.0.4
 * @author KotoriK
 * @license MIT
 */
export * from './h.js'
import searchPic, { type IQDBSearchResultItem, type Size, makeSearchFunc, defaultConfig } from './api.js'
export { searchPic, type IQDBSearchResultItem, type Size, makeSearchFunc, defaultConfig }
