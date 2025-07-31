// types/vike-vite-plugin.d.ts
import type { Plugin } from 'vite'
import type { VitePluginVikeOptions } from 'vike'

declare module 'vike/vite-plugin' {
  /**  
   * The Vike Vite‐plugin factory  
   * @see https://vike.dev/api/pluginVike  
   */
  export function pluginVike(
    options?: VitePluginVikeOptions
  ): Plugin

  export default pluginVike
}
