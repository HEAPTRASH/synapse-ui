import { useEffect, useRef, useState } from "react";
import * as UI from "synapse-ui";
import * as demos from "./demos";
import demoSource from "./demos.tsx?raw";
import {
  components,
  groups,
  descriptions,
  type ComponentName,
} from "./catalog";
import { Glyph } from "./icons";
import { PhaseMark } from "./PhaseMark";
import { ErrorBoundary } from "./ErrorBoundary";
import "./workbench.css";

const codeFor = (name: string) => {
  const body = demoSource
    .split(`export function ${name}Demo()`)[1]
    ?.split("\nexport function ")[0]
    ?.trim();
  return `import { useState } from 'react';\nimport * as UI from 'synapse-ui';\nimport 'synapse-ui/styles.css';\n\n// Render inside <UI.App> for shared theme and feedback APIs.\nexport function Example() ${body || "{}"}\n`;
};
function CopyButton({
  text,
  label = "Copy code",
}: {
  text: string;
  label?: string;
}) {
  const [status, setStatus] = useState("");
  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(""), 2500);
    return () => clearTimeout(timer);
  }, [status]);
  return (
    <button
      className="quiet-button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setStatus("Copied");
        } catch {
          setStatus("Select and copy manually");
        }
      }}
    >
      <Glyph name={status === "Copied" ? "check" : "copy"} size={15} />
      <span role="status">{status || label}</span>
    </button>
  );
}
function Demo({ name }: { name: ComponentName }) {
  const Preview = demos[`${name}Demo`];
  return (
    <ErrorBoundary key={name}>
      <Preview />
    </ErrorBoundary>
  );
}
function Code({ text }: { text: string }) {
  return (
    <div className="code-block">
      <div className="code-toolbar">
        <span>React · TSX</span>
        <CopyButton text={text} />
      </div>
      <pre>
        <code>{text}</code>
      </pre>
    </div>
  );
}
function routeFromHash() {
  const hash = decodeURIComponent(location.hash.slice(1));
  return components.some((c) => c.name === hash) ||
    ["tokens", "start", "components"].includes(hash)
    ? hash
    : "overview";
}
export function PlaygroundApp() {
  const [route, setRoute] = useState(routeFromHash);
  const [theme, setTheme] = useState<UI.ThemeMode>(() => {
    try {
      return localStorage.getItem("synapse-theme") === "dark"
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All components");
  const [mobileOpen, setMobileOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const change = () => {
      setRoute(routeFromHash());
      setMobileOpen(false);
      window.scrollTo(0, 0);
    };
    addEventListener("hashchange", change);
    return () => removeEventListener("hashchange", change);
  }, []);
  useEffect(() => {
    const shortcut = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        searchRef.current?.focus();
        setMobileOpen(true);
      }
      if (e.key === "Escape") {
        setMobileOpen(false);
        setQuery("");
      }
    };
    addEventListener("keydown", shortcut);
    return () => removeEventListener("keydown", shortcut);
  }, []);
  const navigate = (value: string) => {
    location.hash = value;
    setQuery("");
    setMobileOpen(false);
  };
  const current = components.find((c) => c.name === route);
  const filtered = components.filter(
    (c) =>
      (category === "All components" || c.category === category) &&
      `${c.name} ${c.category} ${descriptions[c.name]}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  return (
    <UI.App theme={theme}>
      <div className="workbench">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {mobileOpen && (
          <button
            className="sidebar-scrim"
            aria-label="Close navigation"
            onClick={() => setMobileOpen(false)}
          />
        )}
        <aside
          className={`sidebar ${mobileOpen ? "is-open" : ""}`}
          aria-label="Library navigation"
        >
          <a className="brand-lockup" href="#overview">
            <span className="brand-mark" aria-hidden="true">
              <PhaseMark size={24} />
            </span>
            <span>
              synapse<span className="brand-ui">ui</span>
            </span>
            <span className="version">0.1</span>
          </a>
          <div className="search-box">
            <Glyph name="search" size={16} />
            <input
              ref={searchRef}
              aria-label="Search components"
              placeholder="Search components…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <kbd>⌘ K</kbd>
          </div>
          <nav className="side-scroll">
            {!query && (
              <div className="top-links">
                <a
                  className={route === "overview" ? "selected" : ""}
                  href="#overview"
                >
                  <Glyph name="grid" />
                  Overview
                </a>
                <a
                  className={route === "start" ? "selected" : ""}
                  href="#start"
                >
                  <Glyph name="arrow" />
                  Getting started
                </a>
                <a
                  className={route === "tokens" ? "selected" : ""}
                  href="#tokens"
                >
                  <Glyph name="settings" />
                  Design tokens
                </a>
              </div>
            )}
            {Object.entries(groups).map(([group, names]) => {
              const visible = names.filter((name) =>
                `${name} ${group}`.toLowerCase().includes(query.toLowerCase()),
              );
              return (
                visible.length > 0 && (
                  <div className="nav-group" key={group}>
                    <div className="nav-group-title">
                      {group}
                      <span>{names.length}</span>
                    </div>
                    {visible.map((name) => (
                      <a
                        key={name}
                        href={`#${name}`}
                        aria-current={route === name ? "page" : undefined}
                        className={route === name ? "selected" : ""}
                      >
                        {name}
                      </a>
                    ))}
                  </div>
                )
              );
            })}
            {query &&
              !components.some((c) =>
                `${c.name} ${c.category}`
                  .toLowerCase()
                  .includes(query.toLowerCase()),
              ) && (
                <p className="no-results">
                  No components found.
                  <button className="text-link" onClick={() => setQuery("")}>
                    Clear search
                  </button>
                </p>
              )}
          </nav>
          <div className="sidebar-foot">
            <span className="status-dot" />
            Built with Radix primitives<small>React + TypeScript</small>
          </div>
        </aside>
        <div className="workspace">
          <header className="workspace-toolbar">
            <div className="toolbar-location">
              <button
                className="icon-button mobile-toggle"
                aria-label="Open navigation"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <Glyph name="menu" />
              </button>
              <span>Library</span>
              <Glyph name="chevron" size={12} />
              <strong>
                {current?.name ||
                  (route === "tokens"
                    ? "Design tokens"
                    : route === "start"
                      ? "Getting started"
                      : route === "components"
                        ? "Components"
                        : "Overview")}
              </strong>
            </div>
            <div className="toolbar-right">
              <span className="release-label">v0.1.0</span>
              <span className="toolbar-divider" />
              <UI.Tooltip
                content={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              >
                <button
                  className="icon-button"
                  aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                  onClick={() => {
                    const next = theme === "light" ? "dark" : "light";
                    setTheme(next);
                    try {
                      localStorage.setItem("synapse-theme", next);
                    } catch {}
                  }}
                >
                  <Glyph name={theme === "light" ? "moon" : "sun"} />
                </button>
              </UI.Tooltip>
              <a className="toolbar-start" href="#start">
                Get started
                <Glyph name="arrow" size={15} />
              </a>
            </div>
          </header>
          <main id="main-content" className="workspace-main">
            {current ? (
              <>
                <div className="detail-heading">
                  <a className="back-link" href="#components">
                    All components <Glyph name="chevron" size={12} />{" "}
                    {current.category}
                  </a>
                  <h1>{current.name}</h1>
                  <p>{descriptions[current.name]}</p>
                </div>
                <div className="section-heading">
                  <h2>Preview</h2>
                  <span>Interactive example</span>
                </div>
                <div className="detail-preview">
                  <Demo name={current.name} />
                </div>
                <div className="section-heading" id="demo-code">
                  <h2>Usage</h2>
                  <span>Uses the same code as the preview</span>
                </div>
                <Code text={codeFor(current.name)} />
                <div className="detail-note">
                  <Glyph name="code" />
                  <p>
                    Import from <code>synapse-ui</code> and include{" "}
                    <code>synapse-ui/styles.css</code> once. Wrap your
                    application with <a href="#App">App</a> to share theme and
                    feedback APIs.
                  </p>
                </div>
                <div className="component-pagination">
                  {components.indexOf(current) > 0 && (
                    <a
                      href={`#${components[components.indexOf(current) - 1].name}`}
                    >
                      Previous
                      <span>
                        {components[components.indexOf(current) - 1].name}
                      </span>
                    </a>
                  )}
                  {components.indexOf(current) < components.length - 1 && (
                    <a
                      href={`#${components[components.indexOf(current) + 1].name}`}
                    >
                      Next
                      <span>
                        {components[components.indexOf(current) + 1].name}
                        <Glyph name="arrow" size={16} />
                      </span>
                    </a>
                  )}
                </div>
              </>
            ) : route === "start" ? (
              <>
                <div className="detail-heading">
                  <h1>A familiar starting point.</h1>
                  <p>
                    Bring Synapse UI into your React application. Start with a
                    provider, add the stylesheet, and make it yours.
                  </p>
                </div>
                <div className="section-heading">
                  <h2>1. Add the library</h2>
                </div>
                <p className="body-copy">
                  This library is local. Build it, create a package, then
                  install the resulting tarball in your application.
                </p>
                <Code
                  text={
                    "# In the synapse-ui directory\nnpm run build\nnpm pack\n\n# In your React application\nnpm install /path/to/synapse-ui-0.1.0.tgz"
                  }
                />
                <div className="section-heading">
                  <h2>2. Make yourself at home</h2>
                </div>
                <Code
                  text={
                    'import { App, Button } from "synapse-ui";\nimport "synapse-ui/styles.css";\n\nexport default function MyApp() {\n  return (\n    <App theme="light">\n      <Button variant="primary">Get started</Button>\n    </App>\n  );\n}'
                  }
                />
                <a href="#components" className="text-link">
                  Explore all {components.length} components{" "}
                  <Glyph name="arrow" size={16} />
                </a>
              </>
            ) : route === "tokens" ? (
              <Tokens />
            ) : (
              <>
                <section className="intro">
                  <div>
                    <h1>
                      Every unit,
                      <br />
                      <span>accounted for.</span>
                    </h1>
                    <p>
                      SynapseWare brand components. Square corners. One action colour.
                      <br className="desktop-break" /> Built on Radix, styled with{" "}
                      <code>--su-*</code> tokens.
                    </p>
                    <div className="intro-actions">
                      <UI.Button variant="primary" asChild>
                        <a href="#Button">Explore components</a>
                      </UI.Button>
                      <UI.Button variant="ghost" asChild>
                        <a href="#start">Quick start</a>
                      </UI.Button>
                    </div>
                  </div>
                  <div className="intro-note">
                    <span className="radix-symbol" aria-hidden="true">
                      <i />
                      <b />
                    </span>
                    <span>
                      Accessible foundations.
                      <br />
                      <strong>Your design language.</strong>
                    </span>
                  </div>
                </section>
                <div className="preview-heading">
                  <h2>A feel for the details</h2>
                  <span>Real components. Go ahead, try them.</span>
                </div>
                <section
                  className="feature-grid"
                  aria-label="Interactive component examples"
                >
                  <div className="feature-panel actions-panel">
                    <div className="sample-label">
                      Actions{" "}
                      <a href="#Button" aria-label="Explore Button">
                        <Glyph name="arrow" size={16} />
                      </a>
                    </div>
                    <div className="action-buttons">
                      <UI.Button
                        variant="primary"
                        onClick={() => navigate("Button")}
                      >
                        Get started
                      </UI.Button>
                      <UI.Button onClick={() => navigate("Button")}>
                        Secondary
                      </UI.Button>
                      <UI.Button
                        variant="ghost"
                        onClick={() => navigate("Button")}
                      >
                        Learn more
                      </UI.Button>
                    </div>
                    <div className="sample-rule" />
                    <div className="mini-example-row">
                      <div>
                        <span className="sample-caption">
                          A touch of personality
                        </span>
                        <UI.Space>
                          <UI.Avatar fallback="AM" />
                          <UI.Avatar fallback="SC" />
                          <UI.Avatar fallback="JL" />
                          <span className="avatar-extra">+4</span>
                        </UI.Space>
                      </div>
                      <div>
                        <span className="sample-caption">
                          Every state, considered
                        </span>
                        <UI.Space>
                          <UI.Tag color="success">Published</UI.Tag>
                          <UI.Tag color="accent">In progress</UI.Tag>
                        </UI.Space>
                      </div>
                    </div>
                  </div>
                  <div className="feature-panel preferences-panel">
                    <div className="sample-label">
                      Make it your own
                      <a href="#Switch" aria-label="Explore Switch">
                        <Glyph name="arrow" size={16} />
                      </a>
                    </div>
                    <div className="preference-row">
                      <span>
                        <strong>Notifications</strong>
                        <small>Stay in the loop</small>
                      </span>
                      <UI.Switch
                        defaultChecked
                        aria-label="Enable notifications"
                      />
                    </div>
                    <div className="preference-row">
                      <span>
                        <strong>Focus mode</strong>
                        <small>A little less distraction</small>
                      </span>
                      <UI.Switch aria-label="Enable focus mode" />
                    </div>
                    <div className="preference-slider">
                      <Glyph name="sun" size={17} />
                      <UI.Slider defaultValue={[64]} />
                      <Glyph name="sun" size={23} />
                    </div>
                  </div>
                  <div className="feature-panel navigation-panel">
                    <div className="sample-label">
                      Find your focus
                      <a href="#Segmented" aria-label="Explore Segmented">
                        <Glyph name="arrow" size={16} />
                      </a>
                    </div>
                    <demos.SegmentedDemo />
                    <div className="navigation-caption">
                      <span className="status-dot" />
                      One view at a time. Everything in its place.
                    </div>
                  </div>
                  <div className="feature-panel input-panel">
                    <div className="sample-label">
                      Room for your next idea
                      <a href="#Input" aria-label="Explore Input">
                        <Glyph name="arrow" size={16} />
                      </a>
                    </div>
                    <UI.Input
                      aria-label="Name your project"
                      placeholder="Name your next project…"
                      prefix={<Glyph name="layers" size={17} />}
                    />
                    <span className="sample-caption">
                      Great things start with a simple input.
                    </span>
                  </div>
                </section>
                <section className="catalog-section" id="component-catalog">
                  <div className="catalog-heading">
                    <div>
                      <h2>Everything you need to build.</h2>
                      <p>
                        {components.length} components. One consistent language.
                      </p>
                    </div>
                    <span className="catalog-count">
                      {filtered.length} components
                    </span>
                  </div>
                  <div className="category-tabs" aria-label="Filter components">
                    {["All components", ...Object.keys(groups)].map((name) => (
                      <button
                        key={name}
                        aria-pressed={category === name}
                        className={category === name ? "active" : ""}
                        onClick={() => setCategory(name)}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                  <div className="component-directory">
                    {filtered.map((c) => (
                      <a key={c.name} href={`#${c.name}`}>
                        <span>
                          <strong>{c.name}</strong>
                          <small>{descriptions[c.name]}</small>
                        </span>
                        <Glyph name="chevron" size={15} />
                      </a>
                    ))}
                  </div>
                  {!filtered.length && (
                    <UI.Empty description="No matching components. Try another search." />
                  )}
                </section>
              </>
            )}
            <footer className="page-footer">
              <span>
                Synapse UI <span className="footer-dot">·</span> Made for the
                details.
              </span>
              <a href="#tokens">
                Explore the design language <Glyph name="arrow" size={14} />
              </a>
            </footer>
          </main>
        </div>
      </div>
    </UI.App>
  );
}
function Tokens() {
  return (
    <>
      <div className="detail-heading">
        <h1>SynapseWare brand tokens.</h1>
        <p>
          Paper, canvas, ink. One action colour. Square corners. Semantic{" "}
          <code>--su-*</code> tokens from the brand guide.
        </p>
      </div>
      <div className="section-heading">
        <h2>Brand ramp</h2>
        <span>Light and dark appearances</span>
      </div>
      <div className="token-swatches">
        {[
          "navy",
          "blue-deep",
          "blue",
          "cyan",
          "teal",
          "mint",
          "action",
          "accent",
          "paper",
          "canvas",
          "ink",
          "beam",
        ].map((token) => (
          <div key={token}>
            <div
              className="token-color"
              style={{ background: `var(--su-${token})` }}
            />
            <code>--su-{token}</code>
            <CopyButton text={`var(--su-${token})`} label="Copy token" />
          </div>
        ))}
      </div>
      <div className="section-heading">
        <h2>Typography</h2>
        <span>Geist + Martian Mono</span>
      </div>
      <div className="type-specimens">
        {(
          [
            "largeTitle",
            "title1",
            "title2",
            "title3",
            "headline",
            "body",
            "footnote",
            "caption1",
          ] as const
        ).map((variant) => (
          <div key={variant}>
            <code>{variant}</code>
            <UI.Typography variant={variant}>
              Every unit, accounted for.
            </UI.Typography>
          </div>
        ))}
      </div>
      <div className="section-heading">
        <h2>Customize with confidence</h2>
      </div>
      <Code
        text={
          '<App\n  theme="light"\n  tokens={{ accent: "#1D4ED8", action: "#1D4ED8" }}\n>\n  <YourApplication />\n</App>'
        }
      />
    </>
  );
}
