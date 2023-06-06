# Changelog

## [Unreleased]

## [0.2.1] - 2023-06-06

### Changed

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
- Removed `subtle` styles for the `Badge` variant. The default variant from the Chakra UI theme will be used.

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
