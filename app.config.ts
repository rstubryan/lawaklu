export default defineAppConfig({
  ui: {
    strategy: 'override',
    button: {
      color: {
        white: {
          solid: 'bg-lime-400 text-green-950 hover:bg-lime-500',
          ghost: 'text-lime-400',
        }
      }
    },
    dropdown: {
      color: {
        white: {
          solid: 'bg-lime-400 text-green-950 hover:bg-lime-500',
          ghost: 'text-lime-400',
        }
      }
    },
  }
})
