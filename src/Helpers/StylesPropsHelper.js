import {StylesAdminHelper} from './StylesAdminHelpers';

export class StylesPropsHelper {
  constructor(stylesTable = {}, styleSheets = []) {
    this.stylesTable = stylesTable;
    this.stylesAdmin = new StylesAdminHelper(...styleSheets);
  }

  applyRules = (props = {}, inlineStyles = {}) =>
    this.stylesAdmin.styles(
      //Rules in object properties.
      Object.keys(props)
        .reduce((acc, key) => {
          key in this.stylesTable && acc.push(this.stylesTable[key]);
          return acc;
        }, [])
        .join(' '),
      //Particular styles.
      inlineStyles,
    );
}
