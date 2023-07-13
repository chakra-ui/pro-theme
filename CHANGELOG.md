# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.10.0] - 2023-07-13

## Changed

- Set the default `variant` for `Button` to `primary` from `solid`.
- Use a more subtle placeholder color for the `filled.accent` variant of the `Input` component.

## [0.9.0] - 2023-06-30

## Added

- Revise `Drawer` to have a more consistent spacing with the rest of the components.

## Fixed

- Fixed an issue with the `Button` component where the `text` variant had the wrong line height.

## [0.8.0] - 2023-06-29

## Added

- Revise `IconButton` to have a more consistent look with the rest of the components.

## Changed

- Tweak `CloseButton` to visually align with the `IconButton` component.

## [0.7.1] - 2023-06-29

## Fixed

- Set `flexShrink` to `0` for `Button` variants to prevent it from shrinking when used in a flex container.

## [0.7.0] - 2023-06-29

### Added

- Revise `CloseButton` to have a more consistent look with the rest of the components.
- Added `border.active` token to help with conveying the status of a component.
- Added `underline` variant for `Link` component.

## Changed

- Tweaked `border.default` and `border.emphasized` token to have a more subtle color in dark mode.

## [0.6.0] - 2023-06-29

### Added

- Added semantic token `success` and `error` to help with conveying the status of a component.
- Added `filled.accent` variant for `Input` component.

### Changed

- Removed `boxShadow` from `Button` variant `primary` and `secondary` to make the component more consistent with the rest of the components.
- Tone down the `boxShadow` for `Tabs` variant `inidcator`.

### Removed

- Removed `outline-on-accent` variant for `Input` component as it was barely used.
- Removed `filled` styles from the `Input` component. The default variant from the Chakra UI theme will be used.

### Fixed

- Fixed an issue with the `FormLabel`, `Progress` and `Table` component not having the correct `color`.

## [0.5.0] - 2023-06-23

### Added

- Added `selected` styles for the secondary `Button` variant.

### Changed

- Switched the `body` font family to `Open Sans Variable` from `Inter Variable` and updated the `heading` font family to `Spline Sans Variable` from `Inter Variable`. This modification was made to enhance readability and provide a more distinctive aesthetic appeal to our site.

## [0.4.0] - 2023-06-11

### Added

- Added new `Tabs` variant `indicator`.

### Changed

- Renamed and re-designed `Tabs` variant `with-line` to `underline`.
- Changed the default `colorScheme` for `Badge` from `gray` to `brand`.

### Removed

- Removed `enclosed` styles from the `Tabs` component. The default variant from the Chakra UI theme will be used.
- `Tabs` styles no longer override the default Chakra UI theme styles.

## [0.3.0] - 2023-06-09

### Changed

- Tweaked `Button` variant `text` to have a more subtle color.

### Fixed

- Fixed an issue with the `Input` component where the `outline-on-accent` variant would not have the correct colors.
- Fixed an issue with the `Link` component where the `menu` variant would not have the correct colors.
- Fixed an issue with the `Popover`, `Table` and `RadioCard` component not having the correct `background-color`.
- Fixed `Checkbox` to have the correct font size

## [0.2.2] - 2023-06-06

### Fixed

- Added missing `activeLink` styles for `Button` variants `tertiary` and `tertiary.accent`.

## [0.2.1] - 2023-06-06

### Fixed

- The default `colorScheme` property for `Button` has been changed from 'teal' to 'brand'.

## [0.2.0] - 2023-06-06

### Added

- Introduced `gray.25` with the hexadecimal value `#fcfdfe`.
- Introduced `gray.950` with the hexadecimal value `#14151e`.
- Introduced a new semantic token `border.emphasized`.
- Introduced new `Badge` variant `pill`.

### Changed

#### Button

- Renamed variant `primary-on-accent` to `primary.accent`.
- Renamed variant `secondary-on-accent` to `secondary.accent`.
- Renamed variant `outline` to `tertiary`.
- Renamed variant `ghost-on-accent` to `tertiary.accent`.
- Renamed variant `link` to `text`.
- Renamed variant `link-on-accent` to `text.accent`.

#### Tokens

- Renamed default font family to `Inter Variable` from `InterVariable`.
- Adjusted `gray.50` to better fit into lower hues. `gray.50` color hex value has been changed from #F7FAFC to #f4f8fa.
- Renamed several `SemanticTokens` to improve their intuitiveness and self-explanatory nature.

##### Background related tokens:

| Before             | After               |
| ------------------ | ------------------- |
| `bg-canvas`        | `bg.canvas`         |
| `bg-surface`       | `bg.surface`        |
| `bg-subtle`        | `bg.subtle`         |
| `bg-muted`         | `bg.muted`          |
| `bg-accent`        | `bg.accent.default` |
| `bg-accent-subtle` | `bg.accent.subtle`  |
| `bg-accent-muted`  | `bg.accent.muted`   |

#### Foreground related tokens:

| Before             | After               |
| ------------------ | ------------------- |
| `default`          | `fg.default`        |
| `emphasized`       | `fg.emphasized`     |
| `muted`            | `fg.muted`          |
| `subtle`           | `fg.subtle`         |
| `inverted`         | `fg.inverted`       |
| `on-accent-subtle` | `fg.accent.subtle`  |
| `on-accent-muted`  | `fg.accent.muted`   |
| `on-accent`        | `fg.accent.default` |

#### Border related tokens:

| Before   | After            |
| -------- | ---------------- |
| `border` | `border.default` |

### Removed

- Removed custom styles for `Button` variants `link`, `ghost` and `outline`. The default variant from the Chakra UI theme will be used.
- Removed `subtle` styles from the `Badge` component. The default variant from the Chakra UI theme will be used.

## [0.1.1] - 2023-06-01

### Fixed

- Remove `engines` from `package.json` to allow for more flexibility

## [0.1.0] - 2023-05-31

### Added

- Added new `Input` size: `xl` with 48px height.
- Added new `Button` sizes: `2xs` and `2xl` with corresponding sizes:
  - `2xs`: 24px
  - `2xl`: 60px

### Changed

- Modified existing `Input` heights for more precise control over the input dimensions.

| Size | Before | After |
| ---- | ------ | ----- |
| `sm` | 32px   | 36px  |
| `md` | 40px   | 40px  |
| `lg` | 48px   | 44px  |
| `xl` | n/A    | 48px  |

- Modified existing `Button` heights for more precise control over the button dimensions.

| Size  | Before | After |
| ----- | ------ | ----- |
| `2xs` | n/A    | 24px  |
| `xs`  | 24px   | 32px  |
| `sm`  | 32px   | 36px  |
| `md`  | 40px   | 40px  |
| `lg`  | 48px   | 44px  |
| `xl`  | 60px   | 48px  |
| `2xl` | n/A    | 60px  |

[unreleased]: https://github.com/chakra-ui/pro-theme/compare/0.10.0...HEAD
[0.1.0]: https://github.com/chakra-ui/pro-theme/releases/tag/0.1.0
[0.1.1]: https://github.com/chakra-ui/pro-theme/releases/tag/0.1.1
[0.2.0]: https://github.com/chakra-ui/pro-theme/releases/tag/0.2.0
[0.2.1]: https://github.com/chakra-ui/pro-theme/releases/tag/0.2.1
[0.2.2]: https://github.com/chakra-ui/pro-theme/releases/tag/0.2.2
[0.3.0]: https://github.com/chakra-ui/pro-theme/releases/tag/0.3.0
[0.4.0]: https://github.com/chakra-ui/pro-theme/releases/tag/0.4.0
[0.5.0]: https://github.com/chakra-ui/pro-theme/releases/tag/0.5.0
[0.6.0]: https://github.com/chakra-ui/pro-theme/releases/tag/0.6.0
[0.7.0]: https://github.com/chakra-ui/pro-theme/releases/tag/0.7.0
[0.7.1]: https://github.com/chakra-ui/pro-theme/releases/tag/0.7.1
[0.8.0]: https://github.com/chakra-ui/pro-theme/releases/tag/0.8.0
[0.9.0]: https://github.com/chakra-ui/pro-theme/releases/tag/0.9.0

[0.10.0]: https://github.com/chakra-ui/pro-theme/releases/tag/0.10.0
