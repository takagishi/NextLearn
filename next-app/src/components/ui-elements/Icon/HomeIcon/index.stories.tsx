import { SvgIconProps } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomeIcon from '.';

export default {
  argTypes: {
    color: {
      control: {
        type: 'radio',
        required: false,
      },
      options: [
        'inherit',
        'action',
        'disabled',
        'primary',
        'secondary',
        'error',
        'info',
        'success',
        'warning',
      ],
      description: 'アイコン色',
      table: {
        type: { summary: 'select' },
      },
    },
    fontSize: {
      control: {
        type: 'radio',
        required: false,
      },
      options: ['inherit', 'large', 'medium', 'small'],
      description: 'アイコンのサイズ',
      table: {
        type: { summary: 'select' },
      },
    },
    sx: {
      control: {
        type: 'text',
        required: false,
        Default: null,
      },
      description:
        'sxprops ex.{"fontSize":200}\n https://mui.com/system/getting-started/the-sx-prop/',
      table: {
        type: { summary: 'string' },
      },
    },
    onClick: {
      description: 'onClickイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof HomeIcon>;

const Template: ComponentStory<typeof HomeIcon> = (props: SvgIconProps) => {
  if (props.sx === '') {
    props.sx = null;
  } else if (props.sx) {
    props.sx = JSON.parse(props.sx);
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <HomeIcon {...props} />;
};

export const Home = Template.bind({});
Home.storyName = 'HomeIcon';
