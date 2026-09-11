import { useState } from "react";
import { IconPlus, IconStar } from "@tabler/icons-react";
import * as UI from "synapse-ui";

export function ButtonDemo() {
  const { message } = UI.useApp();
  const plus = (
    <IconPlus size={14} {...UI.iconDefaults} />
  );
  return (
    <UI.Space vertical block size="large">
      <UI.Space wrap>
        <UI.Button
          variant="primary"
          onClick={() => message.success("Primary action")}
        >
          Primary
        </UI.Button>
        <UI.Button onClick={() => message.info("Default action")}>
          Default
        </UI.Button>
        <UI.Button variant="dashed">Dashed</UI.Button>
        <UI.Button variant="ghost">Ghost</UI.Button>
        <UI.Button variant="text">Text</UI.Button>
        <UI.Button variant="text" arrow href="#Button">
          Text with arrow
        </UI.Button>
      </UI.Space>
      <UI.Space wrap>
        <UI.Button variant="primary" danger>
          Primary
        </UI.Button>
        <UI.Button danger>Default</UI.Button>
        <UI.Button variant="dashed" danger>
          Dashed
        </UI.Button>
        <UI.Button variant="ghost" danger>
          Ghost
        </UI.Button>
        <UI.Button variant="text" danger>
          Text
        </UI.Button>
      </UI.Space>
      <UI.Space wrap align="center">
        <UI.Button variant="primary" size="lg">
          Large
        </UI.Button>
        <UI.Button variant="primary" size="md">
          Middle
        </UI.Button>
        <UI.Button variant="primary" size="sm">
          Small
        </UI.Button>
        <UI.Button size="lg">Large</UI.Button>
        <UI.Button size="md">Middle</UI.Button>
        <UI.Button size="sm">Small</UI.Button>
      </UI.Space>
      <UI.Space wrap>
        <UI.Button variant="primary" loading>
          Loading
        </UI.Button>
        <UI.Button loading>Loading</UI.Button>
        <UI.Button variant="dashed" loading>
          Loading
        </UI.Button>
        <UI.Button variant="ghost" loading>
          Loading
        </UI.Button>
        <UI.Button variant="primary" loading aria-label="Loading" />
        <UI.Button loading aria-label="Loading" />
      </UI.Space>
      <UI.Space wrap>
        <UI.Button variant="primary" icon={plus}>
          Icon
        </UI.Button>
        <UI.Button icon={plus}>Icon</UI.Button>
        <UI.Button icon={plus} iconPlacement="end">
          Icon end
        </UI.Button>
        <UI.Button variant="primary" icon={plus} aria-label="Add" />
        <UI.Button icon={plus} aria-label="Add" />
        <UI.Button size="md" icon={plus} aria-label="Add" />
        <UI.Button size="sm" icon={plus} aria-label="Add" />
      </UI.Space>
      <UI.Space wrap>
        <UI.Button asChild variant="primary">
          <a href="#Button">asChild link</a>
        </UI.Button>
        <UI.Button asChild>
          <a href="#Button">asChild default</a>
        </UI.Button>
        <UI.Button asChild variant="text">
          <a href="#Button">asChild text</a>
        </UI.Button>
      </UI.Space>
      <UI.Space wrap>
        <UI.Button variant="primary" disabled>
          Primary
        </UI.Button>
        <UI.Button disabled>Default</UI.Button>
        <UI.Button variant="dashed" disabled>
          Dashed
        </UI.Button>
        <UI.Button variant="ghost" disabled>
          Ghost
        </UI.Button>
        <UI.Button variant="text" disabled>
          Text
        </UI.Button>
      </UI.Space>
      <UI.Space vertical block>
        <UI.Button variant="primary" block>
          Primary block
        </UI.Button>
        <UI.Button block>Default block</UI.Button>
      </UI.Space>
      <UI.Space wrap>
        <UI.Button variant="primary" href="#Button">
          Primary with href
        </UI.Button>
        <UI.Button href="#Button">Default with href</UI.Button>
        <UI.Button variant="ghost" href="#Button">
          Ghost with href
        </UI.Button>
        <UI.Button variant="text" href="#Button">
          Text link
        </UI.Button>
        <UI.Button variant="text" arrow href="#Button">
          Text link with arrow
        </UI.Button>
      </UI.Space>
    </UI.Space>
  );
}
export function FloatButtonDemo() {
  const { message } = UI.useApp();
  return (
    <div className="relative h-60 overflow-auto su-hairline p-su4 [transform:translateZ(0)]">
      <p className="text-footnote text-ink-2">
        Scroll this panel — the floating action stays pinned to its corner.
      </p>
      <p className="mt-su4 text-footnote text-ink-3">
        A FloatButton is normally fixed to the viewport; here a transformed
        ancestor scopes it to the preview.
      </p>
      <div className="h-60" />
      <UI.FloatButton
        tooltip="Create new"
        onClick={() => message.info("New item created")}
      >
        Create
      </UI.FloatButton>
    </div>
  );
}
export function IconDemo() {
  return (
    <UI.Space direction="vertical" size="large">
      <UI.Space size="large">
        {(["sm", "md", "lg"] as const).map((size) => (
          <UI.Space key={size} direction="vertical" size="small" align="center">
            <UI.Icon size={size} label={`Add (${size})`}>
              <IconPlus />
            </UI.Icon>
            <span className="su-label text-ink-3">{size}</span>
          </UI.Space>
        ))}
      </UI.Space>
      <p className="text-subhead text-ink">
        Inline in running text <UI.Icon size="inherit"><IconStar /></UI.Icon> the icon
        follows the font-size and sits on the baseline.
      </p>
      <UI.Space size="large">
        <span className="text-ink-3">
          <UI.Icon label="Favorite">
            <IconStar />
          </UI.Icon>
        </span>
        <UI.SvgIcon label="Check">
          <path d="M5 12l5 5L20 7" />
        </UI.SvgIcon>
      </UI.Space>
    </UI.Space>
  );
}
export function TypographyDemo() {
  return (
    <UI.Space direction="vertical" size="large">
      <UI.Typography variant="largeTitle">
        Every unit, accounted for.
      </UI.Typography>
      <UI.Typography variant="lede" tone="secondary" measure="lede">
        Geist for words. Martian Mono for codes, labels and specifications.
      </UI.Typography>
      <div className="w-full flex flex-col">
        {(
          [
            "title1",
            "title2",
            "title3",
            "headline",
            "body",
            "callout",
            "subhead",
            "footnote",
            "caption1",
            "caption2",
            "label",
          ] as const
        ).map((variant) => (
          <div
            key={variant}
            className="w-full grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[120px_minmax(0,1fr)] items-baseline gap-su2 sm:gap-su4 border-b border-rule border-solid py-su3"
          >
            <UI.Typography variant="label" tone="secondary">
              {variant}
            </UI.Typography>
            <UI.Typography variant={variant}>
              Every unit, accounted for.
            </UI.Typography>
          </div>
        ))}
      </div>
      <UI.Paragraph measure>
        Running text stays near 62 characters wide, so the eye finds the next
        line. Bay <UI.Typography variant="code">WH1-A-12-03</UI.Typography> holds{" "}
        <UI.Text strong>48</UI.Text> units of{" "}
        <UI.Typography variant="code">LPN 00012847</UI.Typography>, counted on the same
        line without breaking the paragraph into blocks.
      </UI.Paragraph>
      <UI.Typography variant="title2">
        WH1A1203LPN00012847LOT24118RECEIVING
      </UI.Typography>
      <UI.Typography variant="body" lines={2} measure>
        Clamped to two lines with the full string kept in the title attribute,
        the way a table cell or a drawer header needs it when a description runs
        long past the width it was given.
      </UI.Typography>
      <UI.Space wrap>
        {(["secondary", "tertiary", "quaternary", "danger", "success", "warning"] as const).map(
          (tone) => (
            <UI.Typography key={tone} variant="footnote" tone={tone}>
              {tone}
            </UI.Typography>
          ),
        )}
      </UI.Space>
    </UI.Space>
  );
}
export function DividerDemo() {
  return (
    <div className="w-full text-subhead text-ink">
      <p>Pallet PLT-4471 staged at dock 3.</p>
      <UI.Divider decorative={false} />
      <p>Next pick wave releases at 14:20.</p>
      <UI.Divider>Receiving</UI.Divider>
      <UI.Divider labelPlacement="start">Putaway</UI.Divider>
      <UI.Divider labelPlacement="end">Dispatch</UI.Divider>
      <div className="font-mono text-footnote text-ink-2">
        WH1-A-12-03 <UI.Divider orientation="vertical" /> LOT 24-118{" "}
        <UI.Divider orientation="vertical" /> 12.500 kg
      </div>
      <UI.Divider strength="strong" spacing="compact" />
      <p className="text-ink-2">Bay top rule, 22% weight.</p>
    </div>
  );
}
export function FlexDemo() {
  return (
    <UI.Flex vertical gap={4} className="w-full">
      <UI.Flex justify="space-between" align="center" gap={3} wrap className="w-full">
        <UI.Typography variant="label" tone="secondary" className="min-w-0 truncate">
          WH1-A-12-03
        </UI.Typography>
        <UI.Flex gap={2} align="center">
          <UI.Button>Cancel</UI.Button>
          <UI.Button variant="primary">Assign</UI.Button>
        </UI.Flex>
      </UI.Flex>
      <UI.Flex gap={2} wrap>
        <UI.Tag>Inbound</UI.Tag>
        <UI.Tag color="accent">Staged</UI.Tag>
        <UI.Tag>Picked</UI.Tag>
        <UI.Tag>Packed</UI.Tag>
        <UI.Tag>Shipped</UI.Tag>
      </UI.Flex>
    </UI.Flex>
  );
}
export function GridDemo() {
  return (
    <UI.Row gutter={[3, 3]} className="w-full">
      {[10, 14, 8, 8, 8].map((span, i) => (
        <UI.Col key={i} span={span} className="lt-md:(basis-full max-w-full)">
          <div className="border-t-1 border-t-solid border-t-rule-strong pt-su2 pb-su4">
            <span className="su-label text-label-secondary">
              {span} / 24
            </span>
          </div>
        </UI.Col>
      ))}
    </UI.Row>
  );
}
export function LayoutDemo() {
  return (
    <UI.Layout style={{ width: "100%", minHeight: 200 }}>
      <UI.Header>Header</UI.Header>
      <UI.Layout>
        <UI.Sider style={{ width: 110 }}>
          <div className="p-su4 font-mono text-caption-1">Navigation</div>
        </UI.Sider>
        <UI.Content role="region" aria-label="Demo content">
          Your content goes here.
        </UI.Content>
      </UI.Layout>
      <UI.Footer>Footer</UI.Footer>
    </UI.Layout>
  );
}
export function MasonryDemo() {
  return (
    <UI.Masonry columns={3} minColumnWidth={220}>
      {[
        "Received against ASN 4471 and put away the same shift.",
        "Short-picked twice this week; the cycle count is queued for Thursday and the discrepancy has not been reconciled against the receiving paperwork yet.",
        "Empty since the last move.",
        "Mixed lot. Two pallets of 24118 sit on the lower deck, one of 24122 on the upper — split during the October reslot and never merged back.",
        "Reserved for the Tuesday outbound wave.",
        "Damage hold. Carrier claim filed, awaiting disposition.",
      ].map((copy, i) => (
        <article key={i} className="border-t border-t-solid border-t-rule-strong pt-su3">
          <UI.Typography variant="label" tone="secondary">
            {`WH1-A-${String(i + 1).padStart(2, "0")}`}
          </UI.Typography>
          <p className="mt-su2 mb-0 text-subhead text-ink">{copy}</p>
        </article>
      ))}
    </UI.Masonry>
  );
}
export function SpaceDemo() {
  return (
    <UI.Space vertical block size="large">
      {(["small", "middle", "large"] as const).map((size) => (
        <UI.Space key={size} size={size}>
          <span className="text-footnote text-label-secondary font-mono w-16">
            {size}
          </span>
          <UI.Button>First</UI.Button>
          <UI.Button>Second</UI.Button>
        </UI.Space>
      ))}
      <UI.Space wrap separator={<UI.Divider orientation="vertical" />}>
        <UI.Button variant="ghost">Edit</UI.Button>
        <UI.Button variant="ghost">Duplicate</UI.Button>
        <UI.Button variant="ghost">Archive</UI.Button>
      </UI.Space>
    </UI.Space>
  );
}
export function SplitterDemo() {
  return (
    <UI.Splitter
      style={{ width: "100%", height: 180 }}
      first={<div style={{ padding: 20 }}>Resize this pane</div>}
      second={
        <div style={{ padding: 20 }}>Drag the divider, or use arrow keys.</div>
      }
    />
  );
}
export function AnchorDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-su6 w-full">
      <UI.Anchor
        className="sticky top-su4 self-start"
        items={[
          { href: "#anchor-receiving", title: "Receiving" },
          { href: "#anchor-putaway", title: "Put-away" },
          { href: "#anchor-allocation", title: "Allocation" },
        ]}
      />
      <div className="flex flex-col gap-su6 text-subhead text-ink">
        <section id="anchor-receiving" className="min-h-[320px]">
          <h3>Receiving</h3>
          <p>Inbound pallets are checked against ASN 24-118 at dock 3.</p>
        </section>
        <section id="anchor-putaway" className="min-h-[320px]">
          <h3>Put-away</h3>
          <p>LPN 00012847 is routed to bay WH1-A-12-03.</p>
        </section>
        <section id="anchor-allocation" className="min-h-[320px]">
          <h3>Allocation</h3>
          <p>The active link follows your position as you scroll.</p>
        </section>
      </div>
    </div>
  );
}
export function BreadcrumbDemo() {
  return (
    <UI.Breadcrumb
      items={[
        { label: "WH1", href: "#overview" },
        { label: "Zone B" },
        { label: "Aisle A · Rack 12", href: "#components" },
        { label: <span className="font-mono">LPN 00012847</span> },
      ]}
    />
  );
}
export function DropdownDemo() {
  const { message } = UI.useApp();
  return (
    <UI.Dropdown>
      <UI.DropdownTrigger>Actions</UI.DropdownTrigger>
      <UI.DropdownContent>
        <UI.DropdownLabel>Document</UI.DropdownLabel>
        <UI.DropdownItem
          onSelect={() => message.success("Document duplicated")}
        >
          Duplicate
        </UI.DropdownItem>
        <UI.DropdownItem
          onSelect={() => message.info("Link copied to this demo")}
        >
          Share
        </UI.DropdownItem>
        <UI.DropdownSeparator />
        <UI.DropdownItem danger onSelect={() => message.error("Document deleted")}>
          Delete
        </UI.DropdownItem>
        <UI.DropdownItem disabled>Archive</UI.DropdownItem>
      </UI.DropdownContent>
    </UI.Dropdown>
  );
}
export function MenuDemo() {
  const [selected, setSelected] = useState("overview");
  return (
    <UI.Menu
      style={{ width: 260 }}
      selectedKey={selected}
      onSelect={setSelected}
      items={[
        { key: "workspace", label: "Workspace", type: "group" },
        { key: "overview", label: "Overview" },
        { key: "docs", label: "Documentation", href: "#Menu" },
        {
          key: "projects",
          label: "Projects",
          children: [
            { key: "website", label: "Website" },
            {
              key: "mobile",
              label: "Mobile app",
              children: [{ key: "ios", label: "iOS release channel" }],
            },
          ],
        },
        { key: "div-1", type: "divider" },
        { key: "settings", label: "Settings" },
        { key: "billing", label: "Billing", disabled: true },
        { key: "delete", label: "Delete workspace", danger: true },
      ]}
    />
  );
}
export function PaginationDemo() {
  const [page, setPage] = useState(1);
  const [item, setItem] = useState(1);
  return (
    <UI.Space direction="vertical">
      <UI.Pagination current={page} total={8} onChange={setPage} />
      <UI.Pagination current={item} total={1284} pageSize={20} onChange={setItem} />
    </UI.Space>
  );
}
export function StepsDemo() {
  const [step, setStep] = useState(1);
  return (
    <UI.Space vertical block>
      <UI.Steps
        current={step}
        items={[
          { title: "Details" },
          { title: "Preferences" },
          { title: "Complete" },
        ]}
      />
      <UI.Button onClick={() => setStep((step + 1) % 3)}>Next step</UI.Button>
      <UI.Steps
        direction="vertical"
        current={step}
        items={[
          { title: "Details", description: "Who is receiving the shipment." },
          {
            title: "Preferences",
            description: "Carrier, packaging and delivery window.",
          },
          { title: "Complete", description: "Review and confirm." },
        ]}
      />
    </UI.Space>
  );
}
export function TabsDemo() {
  return (
    <UI.Tabs defaultValue="stock" className="w-full">
      <UI.TabsList>
        <UI.TabsTrigger value="stock">Stock</UI.TabsTrigger>
        <UI.TabsTrigger value="movements">Movements</UI.TabsTrigger>
        <UI.TabsTrigger value="cycle">Cycle counting</UI.TabsTrigger>
        <UI.TabsTrigger value="settings">Settings</UI.TabsTrigger>
        <UI.TabsTrigger value="counts" disabled>
          Counts
        </UI.TabsTrigger>
      </UI.TabsList>
      <UI.TabsContent value="stock">
        12.500 kg on hand across 4 bays in WH1-A.
      </UI.TabsContent>
      <UI.TabsContent value="movements">
        LPN 00012847 picked 14:02, shipped 14:26.
      </UI.TabsContent>
      <UI.TabsContent value="cycle">
        Last count 2026-09-04. 3 bays out of tolerance.
      </UI.TabsContent>
      <UI.TabsContent value="settings">
        Allocation rule: FEFO. Short-pick alerts on.
      </UI.TabsContent>
      <UI.TabsContent value="counts">No counts scheduled.</UI.TabsContent>
    </UI.Tabs>
  );
}
export function AutoCompleteDemo() {
  return (
    <UI.FormItem label="Bay code">
      <UI.AutoComplete
        placeholder="WH1-A-12-03"
        allowClear
        options={[
          { value: "wh1-a-12-03", label: "WH1-A-12-03 — Receiving aisle, rack face A" },
          { value: "wh1-a-12-04", label: "WH1-A-12-04" },
          { value: "wh1-b-01-01", label: "WH1-B-01-01" },
          { value: "wh1-b-01-02", label: "WH1-B-01-02 (blocked)", disabled: true },
          { value: "wh1-b-02-01", label: "WH1-B-02-01" },
          { value: "wh1-c-04-07", label: "WH1-C-04-07" },
          { value: "wh1-c-04-08", label: "WH1-C-04-08" },
          { value: "wh2-a-01-01", label: "WH2-A-01-01" },
          { value: "wh2-a-01-02", label: "WH2-A-01-02" },
          { value: "wh2-d-09-11", label: "WH2-D-09-11" },
          { value: "wh2-d-09-12", label: "WH2-D-09-12" },
          { value: "stage-out", label: "Staging outbound" },
        ]}
      />
    </UI.FormItem>
  );
}
export function CascaderDemo() {
  return (
    <UI.Cascader
      options={[
        {
          value: "design",
          label: "Design",
          children: [
            { value: "components", label: "Components" },
            { value: "tokens", label: "Tokens" },
          ],
        },
        {
          value: "engineering",
          label: "Engineering",
          children: [{ value: "web", label: "Web" }],
        },
      ]}
    />
  );
}
export function CheckboxDemo() {
  return (
    <UI.Space direction="vertical">
      <UI.Checkbox defaultChecked>Email notifications</UI.Checkbox>
      <UI.Checkbox>Product updates</UI.Checkbox>
      <UI.Checkbox disabled>Managed by your organization</UI.Checkbox>
      <UI.Checkbox checked="indeterminate">Select all (partial)</UI.Checkbox>
      <UI.Checkbox aria-label="Select row" />
    </UI.Space>
  );
}
export function ColorPickerDemo() {
  return (
    <UI.FormItem label="Accent color">
      <UI.ColorPicker defaultValue="#1D4ED8" />
    </UI.FormItem>
  );
}
export function DatePickerDemo() {
  return (
    <UI.Space direction="vertical">
      <UI.FormItem label="Ship date">
        <UI.DatePicker defaultValue="2026-09-09" />
      </UI.FormItem>
      <UI.FormItem label="Delivery window">
        <UI.DatePicker.RangePicker
          defaultValue={["2026-09-09", "2026-09-16"]}
          startLabel="From"
          endLabel="To"
          presets={[
            { label: "September", value: ["2026-09-01", "2026-09-30"] },
          ]}
        />
      </UI.FormItem>
      <UI.FormItem label="Archived on">
        <UI.DatePicker defaultValue="2026-01-04" disabled />
      </UI.FormItem>
    </UI.Space>
  );
}
export function FormDemo() {
  const { message } = UI.useApp();
  return (
    <UI.Space vertical block size="large">
      <UI.Form
        style={{ width: "100%", maxWidth: 360 }}
        onSubmit={(e) => {
          e.preventDefault();
          message.success("Profile saved");
        }}
      >
        <UI.FormItem label="Full name" required help="As it appears on the roster.">
          <UI.Input name="name" required placeholder="Alex Morgan" />
        </UI.FormItem>
        <UI.FormItem
          label="Email address"
          required
          error="Enter a valid work address."
        >
          <UI.Input
            name="email"
            type="email"
            required
            placeholder="alex@example.com"
          />
        </UI.FormItem>
        <UI.Button variant="primary" type="submit">
          Save profile
        </UI.Button>
      </UI.Form>
      <UI.Form
        layout="horizontal"
        size="md"
        labelWidth={140}
        style={{ width: "100%", maxWidth: 460 }}
        onSubmit={(e) => {
          e.preventDefault();
          message.success("Defaults applied");
        }}
      >
        <UI.FormItem label="Warehouse" required>
          <UI.Input name="wh" placeholder="WH1" />
        </UI.FormItem>
        <UI.FormItem
          label="Preferred contact method"
          help="Used for pick alerts."
        >
          <UI.Input name="contact" placeholder="Email" />
        </UI.FormItem>
        <UI.FormItem>
          <UI.Button variant="primary" type="submit">
            Apply
          </UI.Button>
        </UI.FormItem>
      </UI.Form>
    </UI.Space>
  );
}
export function InputDemo() {
  return (
    <UI.Space direction="vertical" style={{ width: "100%", maxWidth: 340 }}>
      <UI.Input aria-label="Your name" placeholder="Your name" />
      <UI.Input aria-label="Email" placeholder="Email address" type="email" />
      <UI.Input
        aria-label="Search"
        allowClear
        defaultValue="WH1-A-12-03"
        prefix={<span aria-hidden>⌕</span>}
      />
      <UI.Input aria-label="Weight" size="sm" placeholder="Weight" suffix="kg" />
      <UI.Input aria-label="Bin" size="sm" allowClear defaultValue="A-12" />
      <UI.FormItem label="Lot code" error="Lot code is required.">
        <UI.Input placeholder="LOT 24-118" />
      </UI.FormItem>
      <UI.Input
        aria-label="Disabled input"
        disabled
        placeholder="Unavailable"
      />
    </UI.Space>
  );
}
export function InputNumberDemo() {
  return (
    <UI.FormItem label="Quantity">
      <UI.InputNumber defaultValue={2} min={0} max={10} name="quantity" />
    </UI.FormItem>
  );
}
export function MentionsDemo() {
  return (
    <UI.Mentions
      placeholder="Type @ to mention someone"
      options={[
        { value: "alex", label: "Alex Morgan" },
        { value: "sam", label: "Sam Chen" },
        { value: "rec", label: "Receiving Bot", disabled: true },
      ]}
    />
  );
}
export function RadioDemo() {
  return (
    <UI.Space direction="vertical">
      <UI.RadioGroup
        defaultValue="comfortable"
        options={[
          { value: "compact", label: "Compact" },
          { value: "comfortable", label: "Comfortable" },
          { value: "spacious", label: "Spacious" },
        ]}
      />
      <UI.RadioGroup
        direction="horizontal"
        defaultValue="auto"
        options={[
          { value: "auto", label: "Auto" },
          { value: "manual", label: "Manual" },
          { value: "off", label: "Off", disabled: true },
        ]}
      />
      <UI.RadioGroup
        direction="horizontal"
        disabled
        defaultValue="daily"
        options={[
          { value: "daily", label: "Daily" },
          { value: "weekly", label: "Weekly" },
        ]}
      />
    </UI.Space>
  );
}
export function RateDemo() {
  return <UI.Rate defaultValue={4} />;
}
export function SelectDemo() {
  return (
    <div style={{ width: 260 }}>
      <UI.Select
        placeholder="Choose a framework"
        options={[
          { value: "react", label: "React" },
          { value: "vue", label: "Vue" },
          { value: "svelte", label: "Svelte" },
          { value: "solid", label: "Solid" },
          { value: "qwik", label: "Qwik" },
          { value: "angular", label: "Angular" },
          { value: "ember", label: "Ember" },
          { value: "preact", label: "Preact" },
          { value: "lit", label: "Lit" },
          {
            value: "long",
            label: "A very long framework name that has to truncate",
          },
        ]}
      />
    </div>
  );
}
export function SliderDemo() {
  const [value, setValue] = useState([64]);
  return (
    <div style={{ width: "100%", maxWidth: 340 }}>
      <UI.Typography variant="footnote">Volume · {value[0]}%</UI.Typography>
      <UI.Slider value={value} onValueChange={setValue} />
      <UI.Slider defaultValue={[20, 70]} />
      <UI.Slider orientation="vertical" defaultValue={[40]} />
    </div>
  );
}
export function SwitchDemo() {
  return (
    <UI.Space direction="vertical">
      <UI.Switch defaultChecked>Notifications</UI.Switch>
      <UI.Switch>Focus mode</UI.Switch>
      <UI.Switch disabled>Managed setting</UI.Switch>
      <UI.Switch loading defaultChecked>
        Saving…
      </UI.Switch>
    </UI.Space>
  );
}
export function TimePickerDemo() {
  return (
    <UI.FormItem label="Meeting time">
      <UI.TimePicker defaultValue="09:41" />
    </UI.FormItem>
  );
}
export function TransferDemo() {
  return (
    <UI.Transfer
      titles={["Available", "Selected"]}
      dataSource={[
        { value: "design", label: "Design" },
        { value: "engineering", label: "Engineering" },
        { value: "marketing", label: "Marketing" },
      ]}
    />
  );
}
export function TreeSelectDemo() {
  return (
    <UI.TreeSelect
      multiple
      treeData={[
        {
          key: "workspace",
          title: "Workspace",
          children: [
            { key: "design", title: "Design" },
            { key: "engineering", title: "Engineering — platform, tooling and infrastructure" },
          ],
        },
      ]}
    />
  );
}
export function UploadDemo() {
  return <UI.Upload multiple />;
}
export function AvatarDemo() {
  const photo =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96"><rect width="96" height="96" fill="#1D4ED8"/><circle cx="48" cy="36" r="17" fill="#E8EDF7"/><path d="M12 96c0-20 16-32 36-32s36 12 36 32z" fill="#E8EDF7"/></svg>',
    );
  return (
    <UI.Space align="center">
      <UI.Avatar size="sm" fallback="AM" />
      <UI.Avatar fallback="SC" />
      <UI.Avatar size="lg" fallback="JL" />
      <UI.Avatar size="lg" src={photo} alt="Jamie Lin" fallback="JL" />
      <UI.Avatar size="lg" src="/broken.png" alt="Ada Moss" fallback="AM" />
    </UI.Space>
  );
}
export function BadgeDemo() {
  return (
    <UI.Space size={6}>
      <UI.Badge count={3}>
        <UI.Avatar fallback="AM" />
      </UI.Badge>
      <UI.Badge dot variant="success">
        <UI.Avatar fallback="SC" />
      </UI.Badge>
      <UI.Badge count={128} variant="warning">
        <UI.Avatar fallback="JL" />
      </UI.Badge>
      <UI.Badge count={7} variant="danger">
        <UI.Avatar fallback="RE" />
      </UI.Badge>
      <UI.Badge count={12} />
    </UI.Space>
  );
}
export function CalendarDemo() {
  return (
    <UI.Calendar
      fullscreen
      defaultValue={new Date(2026, 8, 9)}
      dateRender={(date) => (date.getDate() === 15 ? "Design review" : null)}
      disabledDate={(date) => date.getDay() === 0}
    />
  );
}
export function CardDemo() {
  return (
    <UI.Space vertical block>
      <UI.Card
        code="A-01"
        state="onhand"
        title={
          <a href="#Card" className="text-inherit no-underline hover:underline">
            Receiving
          </a>
        }
        interactive
        style={{ width: "100%" }}
      >
        Stock arrives against an ASN. Quantities and lots are checked before putaway.
      </UI.Card>
      <UI.Card
        code="A-02"
        state="allocated"
        title="Allocation"
        interactive
        style={{ width: "100%" }}
      >
        Orders claim inventory by rule. Nothing ships that was not reserved.
      </UI.Card>
      <UI.Card bordered title="Dense panel" style={{ width: "100%" }}>
        Canvas ground with a hairline box when a form needs a solid surface.
      </UI.Card>
    </UI.Space>
  );
}
export function CarouselDemo() {
  return (
    <UI.Carousel style={{ width: "100%" }}>
      {[
        "Designed for clarity.",
        "Built for focus.",
        "Made to feel familiar.",
      ].map((text) => (
        <UI.CarouselItem key={text}>
          <div
            style={{
              padding: 40,
              background: "var(--su-fill-quaternary)",
              textAlign: "center",
            }}
          >
            {text}
          </div>
        </UI.CarouselItem>
      ))}
    </UI.Carousel>
  );
}
export function CollapseDemo() {
  return (
    <UI.Collapse
      items={[
        {
          key: "one",
          label: "What is Synapse UI?",
          children:
            "A React component library built with Radix primitives and semantic design tokens.",
        },
        {
          key: "two",
          label: "Can I customize the theme?",
          children:
            "Use ConfigProvider to set your theme and override individual tokens.",
          extra: "2 min read",
        },
        {
          key: "three",
          label: "Is this section available?",
          children: "Not yet.",
          disabled: true,
        },
      ]}
    />
  );
}
export function DescriptionsDemo() {
  return (
    <UI.Descriptions
      title="Package"
      extra="Edit"
      items={[
        { label: "Project", value: "Synapse UI" },
        { label: "Version", value: "0.1.0" },
        { label: "Framework", value: "React" },
        { label: "Weight", value: "12.500 kg" },
        { label: "Description", value: "Square corners, hairlines, no shadows.", span: 2 },
      ]}
    />
  );
}
export function EmptyDemo() {
  return (
    <UI.Empty description="Nothing here yet. Your saved items will appear here." />
  );
}
const imageDemoSrc =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="140"><rect width="240" height="140" fill="#0F2971"/><rect x="16" y="16" width="208" height="108" fill="none" stroke="#3B82F6" stroke-width="2"/><text x="120" y="78" fill="#fff" font-family="monospace" font-size="14" text-anchor="middle">BAY 07 / SLOT 12</text></svg>',
  );
export function ImageDemo() {
  return (
    <UI.Space direction="vertical" size="large">
      <UI.Image
        src={imageDemoSrc}
        alt="Bay 07 slot 12"
        width={240}
        height={140}
        preview
      />
      <UI.Image width={240} height={140} fallback="Your image preview" />
    </UI.Space>
  );
}
export function ListDemo() {
  return (
    <div style={{ width: "100%", display: "grid", gap: 24 }}>
      <UI.List>
        <UI.ListItem
          interactive
          onClick={() => {}}
          avatar={<UI.Avatar size="md">DS</UI.Avatar>}
          title="Design system"
          description="Tokens, materials and motion for every SynapseWare surface"
          extra="Updated today"
        />
        <UI.ListItem
          interactive
          onClick={() => {}}
          avatar={<UI.Avatar size="md">CL</UI.Avatar>}
          title="Component library"
          description="Updated yesterday"
          extra="42 items"
        />
        <UI.ListItem title="Brand guidelines" description="Updated last week" extra="Draft" />
      </UI.List>
      <UI.List bordered split={false}>
        <UI.ListItem title="Bordered, unsplit" description="Dense panel variant" />
        <UI.ListItem title="Second row" />
      </UI.List>
      <UI.Empty description="No results" />
    </div>
  );
}
export function ListyDemo() {
  return (
    <UI.Listy height={200} style={{ width: "100%" }}>
      <UI.ListyItem key="pinned" title="Pinned collection" extra="1000 items" />
      {Array.from({ length: 1000 }, (_, i) => (
        <UI.ListyItem key={i}>Collection item {i + 1}</UI.ListyItem>
      ))}
    </UI.Listy>
  );
}
export function PopoverDemo() {
  return (
    <UI.Popover
      trigger={<UI.Button>Show details</UI.Button>}
      content={
        <div>
          <strong>A little more context</strong>
          <p>This content stays close to its trigger.</p>
        </div>
      }
    />
  );
}
export function QRCodeDemo() {
  return <UI.QRCode value="https://example.com" size={160} />;
}
export function SegmentedDemo() {
  const [value, setValue] = useState("day");
  return (
    <UI.Segmented
      value={value}
      onValueChange={setValue}
      options={[
        { value: "day", label: "Day" },
        { value: "week", label: "Week" },
        { value: "month", label: "Month" },
      ]}
    />
  );
}
export function StatisticDemo() {
  return <UI.Statistic title="Available storage" value={128} suffix="GB" />;
}
export function TableDemo() {
  const [sort, setSort] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const rows = [
    "Design system",
    "Component library",
    "Brand guidelines",
    "Website",
    "Mobile app",
    "Documentation",
  ]
    .filter((x) => x.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => (sort ? b.localeCompare(a) : a.localeCompare(b)));
  return (
    <div style={{ width: "100%" }}>
      <UI.Input
        aria-label="Filter projects"
        placeholder="Filter projects…"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setPage(1);
        }}
      />
      <UI.Table>
        <UI.Table.Head>
          <UI.Table.Row>
            <UI.Table.Th aria-sort={sort ? "descending" : "ascending"}>
              <UI.Button
                variant="ghost"
                size="sm"
                onClick={() => setSort(!sort)}
              >
                Project {sort ? "↓" : "↑"}
              </UI.Button>
            </UI.Table.Th>
            <UI.Table.Th>Status</UI.Table.Th>
          </UI.Table.Row>
        </UI.Table.Head>
        <UI.Table.Body>
          {rows.slice((page - 1) * 3, page * 3).map((name) => (
            <UI.Table.Row key={name}>
              <UI.Table.Td>{name}</UI.Table.Td>
              <UI.Table.Td>
                <UI.Tag color="success">Active</UI.Tag>
              </UI.Table.Td>
            </UI.Table.Row>
          ))}
        </UI.Table.Body>
      </UI.Table>
      {!rows.length && <UI.Empty description="No matching projects" />}
      <UI.Pagination
        current={page}
        total={Math.ceil(rows.length / 3)}
        onChange={setPage}
      />
    </div>
  );
}
export function TagDemo() {
  const [tags, setTags] = useState(["Removable", "Needs review"]);
  return (
    <UI.Space wrap>
      <UI.Tag>Design</UI.Tag>
      <UI.Tag color="accent">In progress</UI.Tag>
      <UI.Tag color="success">Published</UI.Tag>
      {tags.map((tag, i) => (
        <UI.Tag
          key={tag}
          color={i === 1 ? "warning" : "default"}
          closable
          onClose={() => setTags((prev) => prev.filter((t) => t !== tag))}
        >
          {tag}
        </UI.Tag>
      ))}
    </UI.Space>
  );
}
export function TimelineDemo() {
  return (
    <UI.Timeline
      items={[
        { title: "Project created", description: "9:00 AM" },
        { title: "Design reviewed", description: "10:30 AM" },
        { title: "Ready to build", description: "Now", color: "accent" },
      ]}
    />
  );
}
export function TooltipDemo() {
  return (
    <UI.Tooltip content="Save your changes">
      <UI.Button>Hover or focus me</UI.Button>
    </UI.Tooltip>
  );
}
export function TourDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <UI.Button id="tour-start" onClick={() => setOpen(true)}>
        Start tour
      </UI.Button>
      <UI.Tour
        open={open}
        onClose={() => setOpen(false)}
        steps={[
          {
            target: "#tour-start",
            title: "Welcome to the library",
            description: "Every component includes an interactive preview.",
          },
          {
            target: "#demo-code",
            title: "Make it yours",
            description: "Copy the example and adapt it to your project.",
          },
        ]}
      />
    </>
  );
}
export function TreeDemo() {
  return (
    <UI.Tree
      defaultExpandedKeys={["workspace"]}
      treeData={[
        {
          key: "workspace",
          title: "Workspace",
          children: [
            {
              key: "design",
              title: "Design",
              children: [{ key: "tokens", title: "Tokens" }],
            },
            { key: "archive", title: "Archive", disabled: true },
            { key: "engineering", title: "Engineering" },
          ],
        },
      ]}
    />
  );
}
export function AlertDemo() {
  return (
    <UI.Space vertical block>
      <UI.Alert type="info" title="A little heads-up">
        Your changes are saved automatically.
      </UI.Alert>
      <UI.Alert type="success" showIcon title="All up to date">
        You are using the latest version.
      </UI.Alert>
      <UI.Alert type="error" showIcon closable title="Sync failed">
        https://warehouse.example.com/api/v1/shipments/LPN-0000-9182-3345-AAAA
        returned 502.
      </UI.Alert>
    </UI.Space>
  );
}
export function DrawerDemo() {
  return (
    <UI.Drawer
      title="Project details"
      trigger={<UI.Button>Open drawer</UI.Button>}
      footer={
        <>
          <UI.Button size="sm">Cancel</UI.Button>
          <UI.Button size="sm" variant="primary">
            Save
          </UI.Button>
        </>
      }
    >
      <p>A little extra space for a focused task.</p>
      <UI.Input aria-label="Project name" placeholder="Project name" />
    </UI.Drawer>
  );
}
export function MessageDemo() {
  const { message } = UI.useApp();
  return (
    <UI.Space wrap>
      <UI.Button
        onClick={() =>
          message.open({ content: "Changes saved", type: "success", icon: "✓" })
        }
      >
        Success message
      </UI.Button>
      <UI.Button onClick={() => message.error("Could not save. Try again.")}>
        Error message
      </UI.Button>
    </UI.Space>
  );
}
export function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <UI.Button onClick={() => setOpen(true)}>Open modal</UI.Button>
      <UI.Modal
        open={open}
        onOpenChange={setOpen}
        title="Save your changes?"
        description="This project was last saved 12 minutes ago."
        showDescription
        footer={
          <>
            <UI.Button onClick={() => setOpen(false)}>Cancel</UI.Button>
            <UI.Button variant="primary" onClick={() => setOpen(false)}>
              Save changes
            </UI.Button>
          </>
        }
      >
        <p>Your latest edits will be saved to this project.</p>
      </UI.Modal>
    </>
  );
}
export function NotificationDemo() {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <UI.Notification
      title="Your export is ready"
      type="success"
      onClose={() => setVisible(false)}
    >
      All your design tokens have been exported successfully.
    </UI.Notification>
  ) : (
    <UI.Button onClick={() => setVisible(true)}>Show notification</UI.Button>
  );
}
export function PopconfirmDemo() {
  const { message } = UI.useApp();
  return (
    <UI.Popconfirm
      title="Remove this item?"
      description="You can add it again later."
      okText="Remove"
      okDanger
      onConfirm={async () => {
        await new Promise((r) => setTimeout(r, 900));
        message.success("Item removed");
      }}
    >
      <UI.Button>Remove item</UI.Button>
    </UI.Popconfirm>
  );
}
export function ProgressDemo() {
  const [value, setValue] = useState(64);
  return (
    <UI.Space vertical block>
      <UI.Progress value={value} showInfo />
      <UI.Progress value={value} type="circle" showInfo />
      <UI.Progress value={null} />
      <UI.Progress value={null} type="circle" />
      <UI.Button
        onClick={() => setValue(value >= 100 ? 0 : Math.min(100, value + 12))}
      >
        Advance progress
      </UI.Button>
    </UI.Space>
  );
}
export function ResultDemo() {
  return (
    <UI.Result
      status="success"
      title="You’re all set"
      subTitle="Your project is ready for the next step."
    />
  );
}
export function SkeletonDemo() {
  return (
    <UI.Space vertical block>
      <UI.Skeleton width="65%" height={24} />
      <UI.Skeleton rows={3} height={14} />
      <UI.Skeleton circle height={40} />
      <UI.Skeleton loading={false}>Loaded content.</UI.Skeleton>
    </UI.Space>
  );
}
export function SpinDemo() {
  return (
    <UI.Space vertical block>
      <UI.Spin tip="Receiving" />
      <UI.Spin tip="Allocating" spinning>
        <div
          style={{
            padding: 24,
            borderTop: "1px solid var(--su-rule-strong)",
            minHeight: 96,
          }}
        >
          Bay A-01 inventory is updating.
        </div>
      </UI.Spin>
    </UI.Space>
  );
}
export function WatermarkDemo() {
  return (
    <UI.Watermark
      content={["CONFIDENTIAL & INTERNAL", "DO NOT DISTRIBUTE"]}
      style={{ width: "100%", minHeight: 200, padding: 24 }}
    >
      A protected document preview.
    </UI.Watermark>
  );
}
export function AffixDemo() {
  return (
    <div className="h-45 w-full overflow-auto">
      <UI.Affix className="bg-canvas border-b border-solid border-rule px-3 py-su2">
        I stay in view
      </UI.Affix>
      <div className="h-100 p-3">
        Scroll inside this preview to see the sticky header.
      </div>
    </div>
  );
}
export function AppDemo() {
  const { message, modal, notification } = UI.useApp();
  return (
    <UI.Space wrap>
      <UI.Button
        onClick={() =>
          notification.open({
            title: "Export ready",
            description: "Your tokens are ready to download.",
          })
        }
      >
        Show notification
      </UI.Button>
      <UI.Button
        onClick={() => message.success("A message from the shared App context")}
      >
        Send message
      </UI.Button>
      <UI.Button
        onClick={() =>
          modal.confirm({
            title: "Continue?",
            content: "This dialog is controlled by the App context.",
          })
        }
      >
        Confirm action
      </UI.Button>
    </UI.Space>
  );
}
export function BorderBeamDemo() {
  return (
    <UI.BorderBeam duration={2.4} style={{ width: "100%" }}>
      A scan highlight for a focused bay or instrument panel.
    </UI.BorderBeam>
  );
}
export function ConfigProviderDemo() {
  const { theme } = UI.useConfig();
  return (
    <UI.Space direction="vertical">
      <UI.Typography>Current theme: {theme}</UI.Typography>
      <UI.Typography variant="footnote" tone="secondary">
        Use the appearance control in the toolbar to change every component
        together.
      </UI.Typography>
      <UI.Typography variant="footnote" tone="secondary">
        Nested provider below scopes a token override and flips direction to
        rtl.
      </UI.Typography>
      <UI.ConfigProvider
        tokens={{ action: "#17429f" }}
        direction="rtl"
        locale="ar-EG"
      >
        <UI.Button variant="primary">Scoped action colour</UI.Button>
      </UI.ConfigProvider>
    </UI.Space>
  );
}

// Glass only reads as glass over something busy; this is the stand-in backdrop.
const glassGround =
  "grid w-full gap-su3 p-su4 bg-gradient-to-br from-action via-accent to-beam";

export function GlassDemo() {
  return (
    <UI.Space vertical block size="large">
      <div className={`${glassGround} sm:grid-cols-2`}>
        <UI.Glass className="p-su4">
          <span className="su-label">regular</span>
          <p className="m-0 mt-su2 text-subhead">Blurred backdrop, hairline base.</p>
        </UI.Glass>
        <UI.Glass elevated className="p-su4">
          <span className="su-label">regular · elevated</span>
          <p className="m-0 mt-su2 text-subhead">A denser fill, never a shadow.</p>
        </UI.Glass>
        <UI.Glass variant="clear" className="p-su4">
          <span className="su-label">clear</span>
          <p className="m-0 mt-su2 text-subhead">Lets the light field through.</p>
        </UI.Glass>
        <UI.Glass variant="clear" dim className="p-su4">
          <span className="su-label">clear · dim</span>
          <p className="m-0 mt-su2 text-subhead">Dimmed for legibility over media.</p>
        </UI.Glass>
      </div>
      <div className={`${glassGround} grid-cols-2 sm:grid-cols-4`}>
        {(["none", "subtle", "default", "strong"] as const).map((chrome) => (
          <UI.Glass key={chrome} chrome={chrome} className="p-su4">
            <span className="su-label">chrome {chrome}</span>
          </UI.Glass>
        ))}
      </div>
      <div className={glassGround}>
        <UI.Glass
          as="button"
          chrome="default"
          className="su-focus-ring h-su12 px-su4 text-callout"
        >
          Focusable glass — tab to see the ring
        </UI.Glass>
      </div>
    </UI.Space>
  );
}

export function ChromeDemo() {
  return (
    <UI.Space vertical block size="large">
      {(["bg-paper", glassGround] as const).map((ground) => (
        <div key={ground} className={`grid w-full gap-su4 p-su4 sm:grid-cols-3 ${ground}`}>
          {(["subtle", "default", "strong"] as const).map((strength) => (
            <UI.Chrome
              key={strength}
              strength={strength}
              className="p-su4 bg-[var(--su-glass-solid)]"
            >
              <span className="su-label text-label-secondary">{strength}</span>
            </UI.Chrome>
          ))}
        </div>
      ))}
    </UI.Space>
  );
}

const surfaceTones = [
  "system",
  "systemSecondary",
  "systemTertiary",
  "grouped",
  "groupedSecondary",
  "groupedTertiary",
  "fill",
  "fillSecondary",
  "fillTertiary",
  "fillQuaternary",
] as const;

export function SurfaceDemo() {
  return (
    <UI.Space vertical block size="large">
      <div className="grid w-full grid-cols-2 gap-su2 sm:grid-cols-5">
        {surfaceTones.map((tone) => (
          <UI.Surface
            key={tone}
            tone={tone}
            elevation="1"
            className="p-su3 min-h-su16"
          >
            <span className="su-label text-label-secondary">{tone}</span>
          </UI.Surface>
        ))}
      </div>
      <div className="grid w-full gap-su3 sm:grid-cols-3">
        {(["none", "1", "2"] as const).map((elevation) => (
          <UI.Surface
            key={elevation}
            tone="systemSecondary"
            elevation={elevation}
            className="p-su4"
          >
            <span className="su-label text-label-secondary">
              elevation {elevation}
            </span>
          </UI.Surface>
        ))}
      </div>
    </UI.Space>
  );
}

const shaderFrame = { width: "100%", height: 240 } as const;

export function PaperTextureDemo() {
  return <UI.PaperTexture style={shaderFrame} />;
}
export function DitheringDemo() {
  return <UI.Dithering style={shaderFrame} />;
}
export function DotGridDemo() {
  return <UI.DotGrid style={shaderFrame} />;
}
export function MeshGradientDemo() {
  return <UI.MeshGradient style={shaderFrame} />;
}
export function NeuroNoiseDemo() {
  return <UI.NeuroNoise style={shaderFrame} />;
}
export function PulsingBorderDemo() {
  return <UI.PulsingBorder style={shaderFrame} />;
}
export function WarpDemo() {
  return <UI.Warp style={shaderFrame} />;
}
export function LightFieldDemo() {
  return (
    <div className="grid grid-cols-2 gap-su3">
      {(["dither", "pure", "grain", "halftone"] as const).map((variant) => (
        <figure key={variant} className="m-0">
          <UI.LightField variant={variant} style={{ width: "100%", height: 160 }} />
          <figcaption className="mt-su2 su-label text-ink-2">
            {variant}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
