import { theme, IconBtnType } from 'constants/index';

function setIconFill(btnType: IconBtnType): string {
  switch (btnType) {
    case IconBtnType.delete:
      return theme.colors.redIconColor;

    case IconBtnType.accept:
      return theme.colors.greenIconColor;

    case IconBtnType.deleteTransparent:
      return theme.colors.redIconColor;

    default:
      return theme.colors.lightgreyIconColor;
  }
}

export default setIconFill;
