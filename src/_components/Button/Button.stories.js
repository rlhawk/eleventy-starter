import button from './Button.njk'

export default {
  title: 'Button',
}

export const Primary = () => (
  button.render({
    url: '#',
    text: 'Learn more',
  })
)
