// src/index.ts
import { svelte } from '@sveltejs/vite-plugin-svelte'
import vike from 'vike/plugin'

export default function vikeSveltePlugin(
  opts: {
    svelte?: Parameters<typeof svelte>[0]
    vike?: Parameters<typeof vike>[0]
  } = {}
) {
  return [
    // core Svelte compiler
    svelte(opts.svelte),

    // Vike's plugin with user options
    vike(opts.vike)
  ]
}
