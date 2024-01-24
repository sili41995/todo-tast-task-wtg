import { IconBtnType, theme } from 'constants/index';

function setButtonColor(btnType: IconBtnType): string {
  switch (btnType) {
    case IconBtnType.delete:
      return theme.colors.redBtnColor;

    case IconBtnType.accept:
      return theme.colors.greenBtnColor;

    case IconBtnType.deleteTransparent:
      return 'transparent';

    default:
      return theme.colors.lightgreyBtnColor;
  }
}

export default setButtonColor;
