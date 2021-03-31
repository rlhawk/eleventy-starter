import Button from './Button.njk';

export default {
  title: 'Button',
};

export const Primary = () =>
  Button.render({
    url: '#',
    text: 'Learn more',
  });
