// src/index.ts
import type { PluginOption } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import pluginVike from 'vike/plugin'

// Derive the same VikeOptions type
type VikePluginOptions = Parameters<typeof pluginVike>[0]

export interface VikeSvelteOptions {
  svelte?: Parameters<typeof svelte>[0]
  vike?: VikePluginOptions
}

function vikeSvelte(
  {
    svelte: svelteOpts = {},
    vike: vikeOpts = {},
  }: VikeSvelteOptions = {}
): PluginOption[] {
  return [
    svelte(svelteOpts),
    pluginVike(vikeOpts),
  ]
}

// named export
export { vikeSvelte }

// default export
export default vikeSvelte