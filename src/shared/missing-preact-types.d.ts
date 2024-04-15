declare module 'preact' {
  namespace JSX {
    interface HTMLAttributes {
      decoding?:
        | 'sync'
        | 'async'
        | 'auto'
        | SignalLike<'sync' | 'async' | 'auto' | undefined>;
    }
  }
}

// Thing break unless this file is a module.
// Don't ask me why. I don't know.
export {};
