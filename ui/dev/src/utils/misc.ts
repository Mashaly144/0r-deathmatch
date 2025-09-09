/**
 * Will return whether the current environment is in a regular browser and not CEF.
 * @returns {boolean} True if the environment is a regular browser, false if CEF.
 */
export const isEnvBrowser = (): boolean => !window.invokeNative;

/**
 * Basic no operation function.
 */
export const noop = (): void => {};

export const getProfileSrc = (photo?: string) => {
  if (isEnvBrowser() || !photo) return "images/profiles/default.png";
  try {
    const validUrl = new URL(photo);
    return validUrl.href;
  } catch (error) {
    return "images/profiles/default.png";
  }
};
