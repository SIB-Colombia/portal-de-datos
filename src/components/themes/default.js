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
    '#00AAB9',
    '#008995',
    '#006972',
    '#002428',
    '#FF7847',
    '#465252',
  ],
  text: ['#465252'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  titleOne: {
    font: '28px',
    weight: 'regular',
  },
  titleTwo: {
    font: '22px',
    weight: 'regular',
  },
  subTitleOne: {
    font: '18px',
    weight: 'regular',
  },
  subTitleTwo: {
    font: '16px',
    weight: 'light',
  },
  content: {
    font: '14px',
    weight: 'light',
  },
  primary: 'Open Sans, sans-serif',
  lineHeight: '28',
}

theme.sizes = {
  xs: '(max-width:49em)',
  sm: '(min-width:49em) and (max-width:65em)',
  md: '(min-width:65em) and (max-width:74em)',
  lg: '(min-width:74em)',
}

export default theme
