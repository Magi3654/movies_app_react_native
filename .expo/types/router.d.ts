/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/onboarding`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/saved` | `/saved`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownInputParams; } | { pathname: `/components/MovieCard`; params?: Router.UnknownInputParams; } | { pathname: `/components/SearchBar`; params?: Router.UnknownInputParams; } | { pathname: `/interfaces/tmbdMovie`; params?: Router.UnknownInputParams; } | { pathname: `/movies/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/onboarding`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/saved` | `/saved`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownOutputParams; } | { pathname: `/components/MovieCard`; params?: Router.UnknownOutputParams; } | { pathname: `/components/SearchBar`; params?: Router.UnknownOutputParams; } | { pathname: `/interfaces/tmbdMovie`; params?: Router.UnknownOutputParams; } | { pathname: `/movies/[id]`, params: Router.UnknownOutputParams & { id: string; } };
      href: Router.RelativePathString | Router.ExternalPathString | `/onboarding${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/profile${`?${string}` | `#${string}` | ''}` | `/profile${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/saved${`?${string}` | `#${string}` | ''}` | `/saved${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/search${`?${string}` | `#${string}` | ''}` | `/search${`?${string}` | `#${string}` | ''}` | `/components/MovieCard${`?${string}` | `#${string}` | ''}` | `/components/SearchBar${`?${string}` | `#${string}` | ''}` | `/interfaces/tmbdMovie${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/onboarding`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/profile` | `/profile`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/saved` | `/saved`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/search` | `/search`; params?: Router.UnknownInputParams; } | { pathname: `/components/MovieCard`; params?: Router.UnknownInputParams; } | { pathname: `/components/SearchBar`; params?: Router.UnknownInputParams; } | { pathname: `/interfaces/tmbdMovie`; params?: Router.UnknownInputParams; } | `/movies/${Router.SingleRoutePart<T>}` | { pathname: `/movies/[id]`, params: Router.UnknownInputParams & { id: string | number; } };
    }
  }
}
