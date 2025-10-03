/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/SignUp`; params?: Router.UnknownInputParams; } | { pathname: `/SignUp/styles`; params?: Router.UnknownInputParams; } | { pathname: `/Splash`; params?: Router.UnknownInputParams; } | { pathname: `/Splash/styles`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/SignUp`; params?: Router.UnknownOutputParams; } | { pathname: `/SignUp/styles`; params?: Router.UnknownOutputParams; } | { pathname: `/Splash`; params?: Router.UnknownOutputParams; } | { pathname: `/Splash/styles`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/SignUp${`?${string}` | `#${string}` | ''}` | `/SignUp/styles${`?${string}` | `#${string}` | ''}` | `/Splash${`?${string}` | `#${string}` | ''}` | `/Splash/styles${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/SignUp`; params?: Router.UnknownInputParams; } | { pathname: `/SignUp/styles`; params?: Router.UnknownInputParams; } | { pathname: `/Splash`; params?: Router.UnknownInputParams; } | { pathname: `/Splash/styles`; params?: Router.UnknownInputParams; };
    }
  }
}
