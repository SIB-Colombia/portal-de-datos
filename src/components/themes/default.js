import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#EF7748'],
  secondary: ['#009CB0'],
  option: ['#009CB0'],
  grayscale: [
    '#FFFFFF',
    '#F2F2F2',
    '#E6E6E6',
    '#CCCCCC',
    '#B3B3B3',
    '#999999',
    '#666666',
    '#333333',
  ],
  basescale: [
    '#F1F8F7',
    '#E0E7E7',
    '#00AAB9', // title
    '#008995',
    '#006972', // title
    '#002428',
    '#FF7847', // link
    '#465252', // title
  ],
  text: ['#465252'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  titleOne: {
    font: '28px',
    weight: 'normal',
  },
  titleTwo: {
    font: '22px',
    weight: 'normal',
  },
  subTitleOne: {
    font: '18px',
    weight: 'normal',
  },
  subTitleTwo: {
    font: '16px',
    weight: 'lighter',
  },
  content: {
    font: '14px',
    weight: 'lighter',
  },
  primary: 'Open Sans, sans-serif',
  lineHeight: '28',
}

theme.sizes = {
  sx: '(max-width:27em)',
  xs: '(min-width:27em) and (max-width:49em)',
  sm: '(min-width:49em) and (max-width:65em)',
  md: '(min-width:65em) and (max-width:74em)',
  lg: '(min-width:74em)',
}

export default theme
