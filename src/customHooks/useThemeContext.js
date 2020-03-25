import React, {useContext, useEffect, useState} from "react";
import {AppHooksContext} from "./useAppHooks.js";
import {useStyledThemingRules} from "./useStyledThemingRules.js";
import {DEFAULT_THEME_RULE_VALUES, THEMING_VALUES} from "./themingRules.js";
import {ThemeContext} from "styled-components";
import {useComparPrevContext} from "./useComparPrevContext.js";
import {SYNAPS_CONFIG} from "../synapsConfig.js";
import {THEME} from "../utilities/constants.js";

export const THEME_DEBUG_NAME = "Theme";

/**
 * Use Theme Context
 *
 * @description Custom hook to keep the theme context updated.
 * @category Custom Hooks
 * @returns {object}
 */
export const useThemeRules = (getLogger) => {
  const logger = getLogger(THEME_DEBUG_NAME);
  let baseConfig = DEFAULT_THEME_RULE_VALUES;
  if(localStorage.getItem(SYNAPS_CONFIG.localStorageBasePath + "/themeRules")){
    baseConfig = JSON.parse(
      localStorage.getItem(SYNAPS_CONFIG.localStorageBasePath + "/themeRules"));
  }
  const [themeRules, setThemeRules] = useState(baseConfig);
  
  const changeTheme = (value) => {
    logger.logVerbose("Changing Theme Rules");
    
    setThemeRules(value);
  };
  
  useEffect(() => {
    localStorage.setItem(SYNAPS_CONFIG.localStorageBasePath + "/themeRules",
      JSON.stringify(themeRules),
    );
  }, [themeRules]);
  
  /**
   * @typedef {object} UseThemeRulesReturn
   * @property {ThemeRuleValues} themeRules
   * @property {ThemeRuleValues} themeRules
   */
  return {themeRules, changeTheme, themeState: THEME};
  
};

export const useThemeContext = () => {
  const {changeTheme, themeState, ...themeRules} = useContext(ThemeContext);
  const {hooks} = useContext(AppHooksContext);
  const {path, appView, getLogger} = hooks;
  const {compareContext} = useComparPrevContext(
    THEME_DEBUG_NAME, {themeRules, appView, path});
  const checkAllRules = useStyledThemingRules();
  const logger = getLogger(THEME_DEBUG_NAME);
  
  const changeRules = (changes) => {
    const newRules = {...themeRules};
    logger.logVerbose(`Changing Theme Rules`);
    changes.forEach(rule => {
      logger.logVerbose(`${rule.themeVariable} --> ${rule.themeValue}`);
      newRules[rule.themeVariable] = rule.themeValue;
    });
    changeTheme(newRules);
  };
  
  useEffect(() => {
    
    compareContext({themeRules, appView, path});
    checkAllRules(themeRules, appView, path, changeRules);
  }, [appView, path]);
  
};
