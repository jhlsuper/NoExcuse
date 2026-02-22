import {colors} from '@theme/colors';

export const getCategoryColors = (colorKey: string) => {
  const key = colorKey as keyof typeof colors.category;
  return colors.category[key] ?? colors.category.default;
};
