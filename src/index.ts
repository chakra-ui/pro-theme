import * as components from './components'
import * as foundations from './foundations'

export const theme: Record<string, unknown> = {
  ...foundations,
  components: { ...components },
}
