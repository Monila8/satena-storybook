import { CommentItem } from './CommentItem';

export default {
  title: 'Elements/CommentItem',
  component: CommentItem,
  tags: ['autodocs'],

  argTypes: {
    imageSource: { control: 'text' },
    comment: { control: 'text' },
    author: { control: 'text' },
    from: { control: 'text' },
    to: { control: 'text' },
  },
};

export const Comment1 = {
  args: {
    imageSource: 'image_file',
    comment: 'Comment',
    author: 'Nombre del autor',
    from: 'De',
    to: 'Para',
  },
};

export const Comment2 = {
    args: {
      imageSource: 'image_file',
      comment: 'Comment',
      author: 'Nombre del autor',
      from: 'De',
      to: 'Para',
    },
  };
