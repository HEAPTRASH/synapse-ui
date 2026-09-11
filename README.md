# Synapse UI

A SynapseWare brand React component library with Radix primitives, UnoCSS (migrating from CSS Modules), `border-beam`, Paper Shaders (brand-locked), and semantic `--su-*` design tokens from the brand guide.

## Develop

```sh
npm install
npm run dev
```

The workbench at http://localhost:5173 includes searchable component navigation, live examples, copyable source, theme switching, design tokens, and local installation instructions. Use Command/Ctrl+K to search. Each component has a shareable hash route, such as `/#Button`.

## Use in a React application

Build and package this checkout:

```sh
npm run build
npm pack
```

Install the resulting tarball from your application:

```sh
npm install /path/to/synapse-ui-0.1.0.tgz
```

```tsx
import { App, Button } from 'synapse-ui';
import 'synapse-ui/styles.css';

export default function MyApp() {
  return (
    <App theme="light" locale="en-US">
      <Button variant="primary">Save changes</Button>
    </App>
  );
}
```

The exported stylesheet includes both design tokens and all component styles. React and React DOM are peer dependencies. The package exports ESM, CommonJS, and TypeScript declarations.

## Catalog

| Category | Components |
| --- | --- |
| General | Button, FloatButton, Icon, Typography |
| Layout | Divider, Flex, Grid (Row / Col), Layout (Header / Sider / Content / Footer), Masonry, Space, Splitter |
| Navigation | Anchor, Breadcrumb, Dropdown, Menu, Pagination, Steps, Tabs |
| Data Entry | AutoComplete, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Mentions, Radio, Rate, Select, Slider, Switch, TimePicker, Transfer, TreeSelect, Upload |
| Data Display | Avatar, Badge, Calendar, Card, Carousel, Collapse, Descriptions, Empty, Image, List, Listy, Popover, QRCode, Segmented, Statistic, Table, Tag, Timeline, Tooltip, Tour, Tree |
| Feedback | Alert, Drawer, Message, Modal, Notification, Popconfirm, Progress, Result, Skeleton, Spin, Watermark |
| Other | Affix, App, BorderBeam, ConfigProvider |
| Shaders | PaperTexture, Dithering, DotGrid, MeshGradient, NeuroNoise, PulsingBorder, Warp (via `@paper-design/shaders-react`, Synapse palette); LightField (the brand light field, generated WebGL2 module, `variant` dither / pure / grain / halftone) |

## Useful conventions

- `App` combines theme configuration with `useApp().message`, `useApp().notification`, and `useApp().modal`.
- `ConfigProvider` supports `theme`, `locale`, `direction`, and token overrides. Nested providers inherit omitted settings and scope `data-theme` / token overrides to their wrapper. **Portaled UI** (Modal, Drawer, Popconfirm, Select menus, Dropdown, toasts) mounts under `document.body` and therefore follows the **root** `ConfigProvider` on `document.documentElement` — not a nested island theme. For differently themed overlays, set theme at the root (or pass an explicit `target` that owns `:root`-level CSS variables).
- `Form` uses native submission and validation; `FormItem` connects labels and error/help descriptions. Set `htmlType="submit"` (or `type="submit"`) on submission buttons. Read submitted values with `FormData`.
- `Button`: `variant` `primary` (scan) / `default` (frame + pixel ripple) / `ghost` / `dashed`; also `loading`, `danger`, `icon`, `iconPlacement`, `href`, `block`. `FloatButton` is a fixed-corner FAB for a persistent action while scrolling — not a restyle of an in-flow button.
- Icons: use **Tabler** (`@tabler/icons-react`) with `iconDefaults` (`stroke={1.5}`, square caps, miter joins). Avoid rounded consumer packs (Phosphor, Material, Hugeicons rounded).
- `Table` exposes composable `Head`, `Body`, `Row`, `Th`, and `Td` parts. The Table example includes sorting, filtering, paging, and an empty state; adapt that state logic to your data source.
- `Pagination.total` is the number of pages.
- `Grid` uses 24 columns. `gutter` and spacing props refer to the token scale.
- `Listy` virtualizes fixed-height rows (`itemHeight`, default 48px), with configurable `overscan`. Use `virtual={false}` for variable-height children.
- `DatePicker.RangePicker` supports controlled ranges and named presets. Date/time fields use the browser's native picker.
- `Calendar fullscreen` includes month/year views and a `dateRender` callback for event content.
- `Slider` renders a thumb for each value, supporting ranges.
- `Progress type="circle"` enables circular progress.
- `Image preview` enables an accessible preview dialog, with fallback handling for missing or failed images.
- `QRCode` uses a real encoder with a four-module quiet zone. It defaults to dark modules on a white background for scanning.
- `Upload` collects files and supports validation callbacks. Connect `onChange` to your application's upload service.
- `Splitter` supports pointer dragging and keyboard arrows, Home, and End.

## Validation

```sh
npm run typecheck
npm run build
npm run test:browser
```

The browser checks use installed Google Chrome and the running server on port 5173. They cover all 72 component routes, key interactions, theme persistence, and overflow at 390px, 820px, and 1440px.

## Design references

- [DESIGN.md](./DESIGN.md): design language and material rules.
- [PRODUCT.md](./PRODUCT.md): original product brief.
