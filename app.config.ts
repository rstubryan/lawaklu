export default defineAppConfig({
  ui: {
    strategy: 'override',
    button: {
      color: {
        white: {
          solid: 'bg-lime-400 text-green-950 hover:bg-lime-500',
          ghost: 'text-lime-400',
        },
        black: {
          solid: 'bg-white border border-lime-400 text-green-950 hover:bg-lime-100',
        },
      }
    },
    dropdown: {
      item: {
        active: {
          text: 'text-lime-400 dark:text-lime-400',
        }
    }
  }},
})
