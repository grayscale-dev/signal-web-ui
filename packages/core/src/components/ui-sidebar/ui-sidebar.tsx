import { Component, Event, h, Prop, State, Watch } from "@stencil/core";
import type { EventEmitter } from "@stencil/core";

export type SidebarNavItem = {
  id: string;
  label: string;
  icon?: string;
  badge?: string;
  disabled?: boolean;
  children?: SidebarNavItem[];
};

@Component({
  tag: "signal-sidebar",
  styleUrl: "ui-sidebar.css",
  shadow: true,
})
export class SignalSidebar {
  @Prop() items: SidebarNavItem[] = [];
  @Prop() activeItem?: string;
  @Prop({ reflect: true }) collapsible = false;
  @Prop({ reflect: true }) defaultCollapsed = false;
  @Prop({ reflect: true }) searchable = false;
  @Prop({ attribute: "title" }) heading = "Navigation";

  @State() collapsed = false;
  @State() query = "";

  @Event({ eventName: "navigate", bubbles: true, composed: true })
  navigate!: EventEmitter<{ id: string }>;

  @Event({ eventName: "toggle", bubbles: true, composed: true })
  toggle!: EventEmitter<{ collapsed: boolean }>;

  componentWillLoad() {
    this.collapsed = this.collapsible ? this.defaultCollapsed : false;
  }

  @Watch("defaultCollapsed")
  onDefaultCollapsed(next: boolean) {
    if (this.collapsible) this.collapsed = next;
  }

  private setCollapsed(next: boolean) {
    if (!this.collapsible) return;
    this.collapsed = next;
    this.toggle.emit({ collapsed: next });
  }

  private filtered(items: SidebarNavItem[]): SidebarNavItem[] {
    if (!this.query) return items;
    const q = this.query.toLowerCase();
    const walk = (nodes: SidebarNavItem[]): SidebarNavItem[] => {
      const mapped = nodes.map((node) => {
        const children = node.children ? walk(node.children) : [];
        if (node.label.toLowerCase().includes(q) || children.length > 0) {
          const next: SidebarNavItem = { ...node };
          if (children.length) next.children = children;
          return next;
        }
        return null;
      });
      return mapped.filter((v): v is SidebarNavItem => v !== null);
    };
    return walk(items);
  }

  private renderTree(items: SidebarNavItem[], level = 0) {
    return items.map((item) => (
      <div class="item" key={item.id}>
        <button
          type="button"
          class={{
            "item-btn": true,
            active: item.id === this.activeItem,
            disabled: !!item.disabled,
          }}
          style={{ paddingLeft: this.collapsed ? undefined : `${level * 12 + 12}px` }}
          disabled={item.disabled}
          onClick={() => this.navigate.emit({ id: item.id })}
        >
          {!this.collapsed && <span class="label">{item.label}</span>}
          {!this.collapsed && item.badge && <span class="badge">{item.badge}</span>}
        </button>
        {item.children && item.children.length > 0 && !this.collapsed ? (
          <div class="children">{this.renderTree(item.children, level + 1)}</div>
        ) : null}
      </div>
    ));
  }

  render() {
    const items = this.filtered(this.items);

    return (
      <aside
        part="root"
        class={{
          root: true,
          collapsed: this.collapsed,
        }}
      >
        {this.collapsible && (
          <div part="header" class="header">
            <span class={{ title: true, hidden: this.collapsed }}>{this.heading}</span>
            <button
              part="collapse"
              class="collapse"
              onClick={() => this.setCollapsed(!this.collapsed)}
              aria-label={this.collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              {this.collapsed ? "»" : "«"}
            </button>
          </div>
        )}

        {this.searchable && !this.collapsed && (
          <div class="search">
            <input
              part="search"
              class="search-input"
              type="search"
              placeholder="Search…"
              value={this.query}
              onInput={(event) => (this.query = (event.target as HTMLInputElement).value)}
            />
          </div>
        )}

        <div class="nav">
          {items.length > 0 ? this.renderTree(items) : <slot />}
        </div>
        <div part="footer" class="footer">
          <slot name="footer" />
        </div>
      </aside>
    );
  }
}
