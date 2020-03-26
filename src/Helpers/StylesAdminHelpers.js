/**
 * This helper allow emulate CSS behavior for React Native components.
 * As as a helper, use with call prototype method.
 *
 * @class
 * @mixin
 * @module General/helpers/StylesAdminHelper
 * @author Ricardo Bermúdez Bermúdez
 * @since  Nov 22th, 2018.
 * @param  {Array<Object>} ...styleSheets Objects with styles rules.
 */
export function StylesAdminHelper(...styleSheets) {
  this.styleSheetsContainer = {};

  /**
   * Initialize the styles container from all styles rules objects passed as
   * arguments.
   *
   * @since Nov 28th, 2018.
   */
  this.chargeStylesObject = (...styleSheets) =>
    styleSheets.forEach(styleSheet =>
      Object.keys(styleSheet).forEach(
        rule =>
          (this.styleSheetsContainer[rule] = {
            ...this.styleSheetsContainer[rule],
            ...styleSheet[rule],
          }),
      ),
    );

  /**
   * Return a particular style to use in React Native component.
   */
  this.styles = (rules, inlineStyles = {}) => {
    let concreteStyle = {};

    rules.split(/\s+/).forEach(
      rule =>
        (concreteStyle = {
          ...concreteStyle,
          ...this.styleSheetsContainer[rule],
        }),
    );

    return {style: {...concreteStyle, ...inlineStyles}};
  };

  this.applyStyles = (...args) => this.styles(...args).style;

  /**
   * Constructor section.
   *
   * @constructor
   */
  {
    this.chargeStylesObject(...styleSheets);
  }
}
