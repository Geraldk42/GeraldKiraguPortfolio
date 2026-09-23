# GK42 Universal Design System Specification
**Version:** 1.1.0  
**Design Philosophy:** Quiet Luxury, Functional Velocity, Thumb Ergonomics & Dignified Recovery  
**Platform Target:** Native Mobile (iOS & Android), Mobile Web (PWA), and Responsive Desktop/Widescreen

---

## 1. Executive Vision & Core Philosophy

The GK42 Design System is an engineering-driven, cross-platform design standard inspired by Apple industrial hardware/software ergonomics and modern retail transaction velocity. It is built upon four non-negotiable pillars:

1. **Quiet Luxury (Subdued Canvas & Surgical Accents):**  
   The application canvas should never shout. Decorative neon and gratuitous rainbow gradients are banned from structural surfaces. Color is reserved as a surgical tool for interactive affordances, status confirmation, and data visualization.
2. **Functional Velocity (Zero Latency & Non-Blocking Flows):**  
   Every interaction must feel instantaneous. Artificial loading delays, sluggish multi-second animated splash screens, and unskippable transition blockers are strictly prohibited.
3. **Thumb Ergonomics (One-Handed Reachability):**  
   Primary actions, cart triggers, and high-frequency interactions live in the bottom 40% of the screen. Viewports adapt gracefully across small screens (360dp), modern phablets (6.7-inch displays), and expand seamlessly to dual-pane tablet and desktop layouts.
4. **Dignified & Actionable Recovery (Zero-Panic Architecture):**  
   Errors must de-escalate anxiety. The system never displays cryptic stack traces, accusatory error banners, or dead-end dialogs. Every state failure reassures the user regarding their data safety and provides an immediate, single-tap recovery path.

---

## 2. Pluggable Semantic Color Engine

Each application implementing GK42 defines its own Brand Hue (H). The entire palette is programmatically derived using relative lightness, saturation, and alpha offsets.

```
+------------------------------------------------------------------------+
|                        GK42 SEMANTIC COLOR TOKENS                      |
+-------------------+----------------------------+-----------------------+
| Token Name        | Formula / Value            | UX Role               |
+-------------------+----------------------------+-----------------------+
| canvasBackground  | HSL(240, 5%, 96.5%)        | Warm off-white canvas |
| surfaceCard       | #FFFFFF                    | Pure white card plane |
| surfaceCardElevated #FFFFFF                    | Modal / sheet surface |
| borderHairline    | rgba(0, 0, 0, 0.08)        | 1px structural border |
| borderHairlineSubtle rgba(0, 0, 0, 0.04)       | Inset row dividers    |
| primaryBrand      | User-defined [Brand Hex]   | Interactive accent    |
| primaryDeep       | Brand HSL: -6% L, +5% S    | Gradient anchor / tap |
| primaryLightTint  | Brand HSL: +45% L, -15% S  | Badges, focus rings   |
| primaryBlushCard  | Brand HSL: 96% L, 100% S   | Empty states & chips  |
| inkPrimary        | #1D1D1F (Charcoal Slate)   | Primary text & sums   |
| inkSecondary      | #6E6E73 (Neutral Slate)    | Subtitles & metadata  |
| inkMuted          | #8E8E93 (Light Slate)      | Placeholders, badges  |
| floatPillDark     | #1D1D1F (Deep Charcoal)    | Floating cart / CTAs  |
| floatPillText     | #FFFFFF                    | Text on floating pill |
| stateSuccess      | #10B981 (Emerald Green)    | Completed transactions|
| stateWarning      | #F59E0B (Warm Amber)       | Low stock / offline   |
| stateError        | #E11D48 (Rose Crimson)     | Destructive / recovery|
| stateErrorSurface | #FFF1F2 (Soft Rose Cream)  | Error card background |
+-------------------+----------------------------+-----------------------+
```

### Gradient Behavior Rules
- **Structural Chrome:** Prohibited. AppBars, bottom navigation bars, and main content cards must use solid surfaces or translucent blurs, never gradients.
- **Hero Focal Cards:** Allowed on at most one primary metric or hero banner per screen.
  - **Formula:** 2-stop linear gradient at 135 degrees from `primaryBrand` to `primaryDeep`.
  - **Shadow:** Ambient drop shadow matching `primaryBrand` at 15-20% opacity with 16dp blur radius (never black muddy shadows).
- **Surface Tints:** Use `primaryBlushCard` (a 4-6% soft tint of the brand color) for empty-state containers, restock alerts, and selection tags.

---

## 3. Surface, Hairlines & Elevation Geometry

GK42 abandons muddy Material elevation shadows in favor of crisp Apple-style border definition.

### The 1px Hairline Standard
- Every card, tile, sheet, and floating control must feature a 1px solid border using `borderHairline` (`#E5E5EA` in light mode, `rgba(255, 255, 255, 0.10)` in dark mode).
- Inset rows within grouped containers use `borderHairlineSubtle` indented to align with content text (leaving icon columns un-divided).

### Corner Radius Scale
- **Small Chips & Badges:** `8dp` (subtle rounded tag)
- **Buttons & Input Fields:** `10dp - 12dp` (comfortable squircle)
- **Cards & Inset Groups:** `16dp` (standard card radius)
- **Modal Sheets & Dialogs:** `20dp - 24dp` (top corners)
- **Floating Action Pills:** `999dp` (perfect capsule)

### Shadow Geometry
```css
/* Ambient Card Shadow (Subtle lift) */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.02);

/* Floating Pill / Drawer Shadow (Floating above UI) */
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18), 0 2px 6px rgba(0, 0, 0, 0.08);

/* Hero Accent Glow */
box-shadow: 0 8px 20px rgba(var(--brand-rgb), 0.22);
```

---

## 4. Interactive Button Architecture & States

Buttons in GK42 provide immediate physical feedback upon contact, communicate progress without layout shift, and prevent accidental double-execution through automatic debouncing.

```
+------------------------------------------------------------------------+
|                        BUTTON VARIANT SPECIFICATIONS                   |
+---------------+---------------------+--------------------+-------------+
| Variant       | Background          | Text / Content     | Border      |
+---------------+---------------------+--------------------+-------------+
| Primary Solid | primaryBrand        | #FFFFFF (Medium)   | None        |
| Secondary     | surfaceCard         | inkPrimary         | 1px hairline|
| Tonal Blush   | primaryBlushCard    | primaryBrand       | 1px tint    |
| Ghost         | Transparent         | primaryBrand       | None        |
| Destructive   | stateErrorSurface   | stateError         | 1px tint    |
| Floating Pill | floatPillDark       | #FFFFFF (SemiBold) | None        |
+---------------+---------------------+--------------------+-------------+
```

### The Seven Operational Button States

1. **Default (Resting):**
   - Solid, tonal, or hairline surface with standard ambient drop shadow.
   - Text is sharp, vertically centered with letter-spacing adjusted per typography guidelines.

2. **Hover (Desktop / Web / Pointer Devices):**
   - Surface brightness shifts down by 4% (light mode) or up by 6% (dark mode).
   - Cursor transitions to `pointer`.
   - Element geometry remains locked at `scale(1.0)` to eliminate jitter.
   - Transition timing: `120ms ease-out`.

3. **Pressed / Active (Mobile Tap-Down & Web Click):**
   - Instant physical compression: `transform: scale(0.97)`.
   - Overall opacity drops to `0.88`.
   - Elevation shadow compresses to 2dp blur.
   - Transition timing: `80ms cubic-bezier(0.25, 1, 0.5, 1)`. Provides immediate tactile proof that the tap was registered.

4. **Focused (Keyboard & Accessibility Navigation):**
   - High-contrast 2px focus ring with a 2px outer gap (`outline: 2px solid primaryBrand; outline-offset: 2px;`).
   - Inner card maintains its defined corner radius without clipping the focus halo.

5. **Loading / In-Flight (Progressive Async State):**
   - The button retains 100% of its exact width and height. Resizing, collapsing, or layout shifting during async calls is strictly banned.
   - Label text opacity fades smoothly to 0 in `100ms`.
   - A centered, monochrome circular indicator (18dp diameter, 2px stroke width) fades in.
   - Pointer events and tap listeners are disconnected to prevent duplicate submissions.

6. **Disabled / Inactive:**
   - Visual contrast drops to 35% opacity (`color: inkMuted; background: surfaceMuted;`).
   - Drop shadows are removed.
   - Cursor transitions to `not-allowed`.
   - Non-punitive interaction rule: Tapping a disabled button does not silently fail. If tapped, it presents a calm contextual micro-tooltip explaining why the action is locked (e.g. *"Enter an amount greater than zero to proceed"*).

7. **Success Confirmation (Micro-State):**
   - Brief 400ms state before modal dismissal or screen routing.
   - Button surface transitions to `stateSuccess` (`#10B981`) and replaces label with a clean vector checkmark glyph.

---

## 5. Graceful, Calming Error Handling Architecture

Errors are natural system states, not emergencies. The application interface must remain calm, transparent, and dignified, guiding the user toward resolution without inducing anxiety.

### Core Psychological Principles
- **No Blame Language:** Never accuse the user. Ban phrases such as *"Invalid input"*, *"You failed to enter"*, or *"Illegal operation"*.
- **No Raw Technical Leaks:** Never display raw SQL statements, stack traces, HTTP 500 dumps, or socket timeouts in production interfaces.
- **Data Protection Guarantee:** In transactional or offline-first apps, always assure the user that their uncommitted work, cart, or entered data is safe.
- **Always Actionable:** An error dialog or banner without a single-tap remedy button is an architectural defect.

### The Four-Part Anatomical Error Standard

Every error presentation must communicate four precise elements in order:

```
+------------------------------------------------------------------------+
| 1. CALM DIAGNOSIS    | State what occurred in dignified human terms.   |
|                      | "Connection paused momentarily."                |
+----------------------+-------------------------------------------------+
| 2. CONTEXTUAL CAUSE  | Explain why without technical jargon.           |
|                      | "The internet signal dropped during the sync."  |
+----------------------+-------------------------------------------------+
| 3. DATA GUARANTEE    | Confirm what is protected.                      |
|                      | "Your sales records are safely stored on this   |
|                      | device and will not be lost."                   |
+----------------------+-------------------------------------------------+
| 4. RECOVERY ACTION   | Provide a single-tap resolution button.         |
|                      | [Retry Sync]  or  [Continue Selling Offline]    |
+------------------------------------------------------------------------+
```

### The Four Error Presentation Tiers

#### Tier 1: Inline Form & Field Validation
- Used for input boundaries (PIN format, quantity limits, email validation).
- Input field border switches to `stateError` (`#E11D48`) with a 4% rose background tint (`#FFF1F2`).
- A single calm line of micro-copy appears below the input in 12sp medium:
  - Example: *"PIN must be exactly 4 digits"* (constructive, not punitive).

#### Tier 2: Non-Blocking Ambient Banner / SnackBar
- Used for background hiccups (sync timeout, printer disconnected, camera permission denied).
- Positioned floating above the bottom navigation bar or cart pill.
- Styled with dark charcoal surface (`#1D1D1F`), 1px subtle hairline, and crisp white typography.
- Layout:
  - Left: Clean vector status icon (e.g. offline cloud glyph or printer glyph).
  - Center: Calm message (*"Printer is offline - Receipts queued"*).
  - Right: High-contrast action chip (*"Retry"* or *"Review"*).
- Auto-dismisses in 4.5 seconds or persists if the condition is ongoing.

#### Tier 3: Recovery Bottom Sheet (Semi-Blocking)
- Used when user input or configuration is strictly required to proceed (e.g. session PIN lock, barcode scanner camera permission, out-of-stock threshold reached).
- Presented as an Apple Inset-Grouped bottom sheet with 24dp top corner radius.
- Structure:
  - Header: Clear vector icon inside a 48dp soft circular badge.
  - Title: Dignified status (e.g. *"Camera Access Required"*).
  - Body: Explain why the feature needs access and reassure privacy.
  - Actions: Primary solid button (*"Enable in Settings"* or *"Enter Manually"*) and a secondary outline button (*"Dismiss"*).

#### Tier 4: Global Crash Boundary (Critical Safety Fallback)
- Applied at the application root to catch unexpected rendering exceptions or unhandled runtime faults.
- Prevents the dreaded white screen of death or system crash.
- Screen layout:
  - Background: Warm canvas off-white (`#F5F5F7`).
  - Container: Centered white card (16dp radius, 1px hairline, ambient shadow).
  - Headline: *"Mautamu encountered an unexpected pause"*.
  - Body: *"Your stored database and local sales are intact. You can safely restart the app or copy the diagnostic report for support."*
  - Actions: Primary solid button (*"Restart Application"*) and secondary tonal button (*"Copy Diagnostics"*).

---

## 6. Typography & Tabular Discipline

Typography must be humanistic, clean, and legibly spaced. Recommended typefaces: SF Pro Display/Text (Apple), Inter (Universal), or Roboto Flex.

### Tabular Numerals (Non-Negotiable)
Any dynamic number—including prices, quantities, stock numbers, timers, order numbers, and KPI values—must strictly enable tabular monospace figures.
- **Flutter:** `fontFeatures: [FontFeature.tabularFigures()]`
- **Web / CSS:** `font-variant-numeric: tabular-nums;`
- **SwiftUI:** `.monospacedDigit()`
- **Jetpack Compose:** `FontFeatureSettings("tnum")`

Rationale: Prevents jitter and horizontal layout vibration when numbers increment, decrement, or stream in real time.

### Typographic Hierarchy
| Role | Size | Weight | Letter Spacing | Color |
| :--- | :--- | :--- | :--- | :--- |
| **iOS Large Title** | 28-32sp | Bold (700) | -0.8px | `inkPrimary` |
| **Section Header** | 12sp | SemiBold (600) | +0.8px (Caps) | `inkMuted` |
| **Card Title** | 15-16sp | SemiBold (600) | -0.2px | `inkPrimary` |
| **Body / Description** | 13-14sp | Regular (400) | 0.0px | `inkSecondary` |
| **Tabular Metric** | 24-36sp | Bold (700) | -0.5px (tnum) | `inkPrimary` / White |
| **Caption / Badge** | 11-12sp | Medium (500) | +0.2px | `primaryBrand` |

### Iconography Standard
- System chrome, navigation bars, headers, alert banners, button labels, and tab bars must exclusively use clean, monochrome vector glyphs.
- Emojis are strictly banned from all structural UI components.

---

## 7. Viewport Adaptability & Responsive Matrix

The UI must scale fluidly from compact mobile screens to tall 6.7-inch displays and wide desktop monitors.

```
       MOBILE (<600dp)                TABLET (600-1024dp)               DESKTOP (>1024dp)
+---------------------------+    +---------------------------+    +------------------------------+
| [AppBar / Sync / Avatar]  |    | [Nav]   [Catalog]   [Cart]|    | [SideRail]  [Main]   [Panel] |
|                           |    |                           |    |                              |
| [Full-Width Search]       |    | 2-Column Responsive Split |    | 3-Column Studio Workspace    |
| [Filter Chips Sub-Bar]    |    | Left: Grid (3 columns)    |    | Left: Navigation Rail (72dp) |
|                           |    | Right: Docked Ledger Cart |    | Mid:  Max-Width Catalog      |
| [Adaptive Product Cards]  |    |                           |    | Right: Persistent Detail     |
|                           |    |                           |    |                              |
| [Floating Cart Pill]      |    |                           |    | Max Content Width: 1280px    |
+---------------------------+    +---------------------------+    +------------------------------+
```

### Full-Width Search & Filter Sub-Bar Architecture
- **Search Bar:** Must span 100% of the horizontal viewport width (with standard 16dp outer screen padding). Never clip or wedge a search bar into a container that terminates abruptly before the screen edge.
- **Filter Sub-Bar:** Placed directly beneath the search bar.
  - Left side: Section / status label (e.g. `All Categories` or `Catalog`).
  - Right side: Quick-action filter chips (e.g. `Low Stock (3)`).
  - Use flexible wrapping layouts or edge-faded horizontal scrolling so all options remain accessible on 360dp-430dp screens without text overflow.

### Card Responsiveness
- On compact mobile (<400dp), multi-column product or record rows must adopt a two-row architecture:
  - Row 1: Thumbnail + Full-width Title + Tabular Price.
  - Row 2: Status Badge + Quantity Steppers / Secondary Actions.
- On screens >600dp, automatically expand into responsive fluid grids using `minmax(240px, 1fr)`.

---

## 8. Navigation & The Floating Pill Paradigm

### The Floating Action Pill
High-frequency conversion triggers (such as Checkout, Add to Cart, or Save Changes) utilize a floating pill docked above the viewport edge.
- **Color:** `floatPillDark` (`#1D1D1F`) with crisp white typography.
- **Geometry:** Height of 54-58dp, full capsule border radius (`999dp`), with 16dp margin from screen edges.
- **Elevation:** High ambient shadow (`blurRadius: 24dp, alpha: 0.18`).
- **Internal Layout:**
  - Left: Item count badge / status indicator.
  - Center: Clear action imperative (`Review Order` / `Checkout`).
  - Right: Tabular total amount with subtle forward chevron.

### Inset-Grouped Settings Architecture
Settings and profile screens follow Apple's grouped inset paradigm:
1. Prominent top iOS Large Title inside the scrollable content.
2. Grouped functional blocks enclosed in white rounded cards (`borderRadius: 16dp`, `border: 1px hairline`).
3. Individual rows separated by subtle 1px dividers indented past the icon column.
4. Trailing affordance: Chevron icon, pill badge, or toggle switch.

---

## 9. Motion, Animations & Launch Screen Philosophy

### The "Zero Artificial Delay" Splash Philosophy
Slow animated splash screens that display looping animations while holding the user hostage are banned.
1. **Native OS Layer:** Use Android's `launch_background.xml` (layer-list) and iOS `LaunchScreen.storyboard`. This renders the brand mark natively during OS kernel and memory allocation before the runtime engine executes frame 1 (0ms added delay).
2. **First-Frame Transition:** As soon as the app runtime renders its first frame, it matches the native splash asset in identical screen coordinates, then executes a smooth 400-600ms cross-fade into the main interface.
3. **Tap-to-Dismiss:** Any user touch immediately terminates the launch transition and enters the application.

### UI Micro-Animation Standards
- **Duration:**
  - Micro-taps / Buttons: `80ms - 150ms`
  - Card Expansions / Modals: `250ms - 320ms`
  - Sheet Transitions: `350ms - 400ms`
- **Curves:** Apple-style standard cubic easing (`Cubic(0.25, 0.1, 0.25, 1.0)`) or subtle spring physics. Bouncy, cartoony overshoot oscillations (>1.1 damping) are prohibited in professional workflows.

---

## 10. Physical Haptics & Sensory Standards

Haptic feedback is a precious physical confirmation, not a toy. Over-vibrating desensitizes users and degrades the premium feel.

```
+-------------------------------------------------------------+
|                   HAPTIC FEEDBACK MATRIX                    |
+-------------------------------+-------------+---------------+
| Event                         | Haptic Type | Execution     |
+-------------------------------+-------------+---------------+
| Barcode / QR Detected         | Medium      | Immediate (1x)|
| Biometric / PIN Unlock        | Medium      | On validation |
| Transaction / Sale Complete   | Heavy       | Success state |
| Dangerous Action / Error      | Double-Tap  | On error alert|
| Button Tap / Tab Switch       | NONE        | Silent        |
| Scroll / Stepper Increment    | NONE        | Silent        |
| Filter Chip Selection         | NONE        | Silent        |
+-------------------------------+-------------+---------------+
```

---

## 11. Empty States & Human-Centric Micro-Copy

Empty states must reassure and direct the user, rather than presenting a clinical, dead-end error.

### Structure of a GK42 Empty State
1. **Container:** Soft rounded container with `primaryBlushCard` background (5% tint) and soft hairline border (`#FBCFE8` or equivalent brand tint).
2. **Icon:** Clean monochrome vector icon enclosed in a circular frosted badge.
3. **Headline:** Humanistic, empathetic copy (e.g. *"No orders recorded in this period yet"* rather than *"No Data Available"*).
4. **Subtext:** Explanatory guidance (e.g. *"Completed transactions will automatically appear here in real time."*).
5. **Call-to-Action:** Direct remedy button (e.g. `Open Till` or `Add New Product`).

---

## 12. Cross-Platform Implementation Matrix

Quick-reference implementation syntax across modern frameworks:

```markdown
| Feature | Flutter (Dart) | React / Web (CSS) | SwiftUI (iOS) | Jetpack Compose (Android) |
| :--- | :--- | :--- | :--- | :--- |
| **Tabular Numbers** | `fontFeatures: [FontFeature.tabularFigures()]` | `font-variant-numeric: tabular-nums;` | `.monospacedDigit()` | `FontFeatureSettings("tnum")` |
| **Canvas Color** | `Color(0xFFF5F5F7)` | `background-color: #F5F5F7;` | `Color(uiColor: .systemGroupedBackground)` | `Color(0xFFF5F5F7)` |
| **Hairline Border** | `Border.all(color: Color(0x14000000), width: 1)` | `border: 1px solid rgba(0, 0, 0, 0.08);` | `.border(Color.black.opacity(0.08), width: 1)` | `border(1.dp, Color(0x14000000))` |
| **Card Shape** | `RoundedRectangleBorder(borderRadius: BorderRadius.circular(16))` | `border-radius: 16px;` | `.clipShape(RoundedRectangle(cornerRadius: 16))` | `RoundedCornerShape(16.dp)` |
| **Button Tap Compression**| `AnimatedScale(scale: isPressed ? 0.97 : 1.0)` | `transform: scale(0.97); transition: transform 80ms;` | `.scaleEffect(configuration.isPressed ? 0.97 : 1.0)` | `graphicsLayer { scaleX = if (isPressed) 0.97f else 1f }` |
| **Floating Pill** | `StadiumBorder()` / `BorderRadius.circular(999)` | `border-radius: 9999px;` | `.clipShape(Capsule())` | `CircleShape` / `RoundedCornerShape(50)` |
```

---

## 13. The "Never Do" Anti-Patterns Checklist

Before shipping any feature or screen under the GK42 standard, verify:

- [ ] **NO Emojis in Structural Chrome:** No emojis in AppBars, tab items, dropdowns, status badges, or system documentation.
- [ ] **NO Jittering Numerals:** All currencies, prices, and metrics must use tabular monospace numerals.
- [ ] **NO Artificial Splash Delay:** No arbitrary `Future.delayed` splash screens.
- [ ] **NO Over-Vibration:** No haptics on regular card clicks, scrolls, or tab switches.
- [ ] **NO Abrupt Search Cutoffs:** Search inputs must span the full available width.
- [ ] **NO Resizing Loading Buttons:** Loading buttons must maintain their exact fixed width and height.
- [ ] **NO Blaming Error Messages:** Never display cryptic stack traces, technical jargon, or accusatory copy.
- [ ] **NO Dead-End Errors:** Every error presentation must provide an immediate single-tap recovery action.
- [ ] **NO Muddy Black Shadows:** Use multi-stop ambient shadows or tinted brand glows.
- [ ] **NO Blinding Stark White Backgrounds:** The canvas must be warm off-white (`#F5F5F7`); cards provide the pure `#FFFFFF` pop.
- [ ] **NO Unreachable CTAs:** Primary conversion buttons must be anchored in the thumb-accessible bottom zone.
