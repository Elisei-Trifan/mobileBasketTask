export const screens = {
  signIn: 'signIn',
  signUp: 'signUp',
} as const;

export type ScreenName = keyof typeof screens;
