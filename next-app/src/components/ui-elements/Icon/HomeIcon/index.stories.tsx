import { SvgIconProps, SxProps } from '@mui/material';
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
  const { sx, ...rest } = props;
  if (sx) {
    try {
      const sxObj: SxProps = JSON.parse(String(sx)) as SxProps;
      return <HomeIcon sx={sxObj} {...rest} />;
    } catch (e) {
      return <HomeIcon {...rest} />;
    }
  }
  return <HomeIcon {...rest} />;
};

export const Home = Template.bind({});
Home.storyName = 'HomeIcon';
