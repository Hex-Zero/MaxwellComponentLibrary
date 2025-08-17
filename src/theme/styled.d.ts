import 'styled-components';
import type { Theme } from './index';

declare module 'styled-components' {
  // Add a phantom property to avoid empty-interface rule triggering while preserving structural typing.
  interface DefaultTheme extends Theme { __themeBrand?: never }
}
