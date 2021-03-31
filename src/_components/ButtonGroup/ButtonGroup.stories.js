import ButtonGroup from './ButtonGroup.njk';

export default {
  title: 'Button group',
};

export const Primary = () =>
  ButtonGroup.render({
    buttons: [
      { url: '#', text: 'Learn more' },
      { url: '#', text: 'Learn less' },
    ],
  });
