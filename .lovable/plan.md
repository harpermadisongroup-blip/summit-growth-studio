

# Redesign: "Enterprise Tools" Section — Platform Logo Showcase

## The Problem
The "We manage" card currently lists Amazon, Walmart, Google, Meta, and Retail Media as plain text bullets with tiny dots. This is a missed opportunity — these are some of the most recognizable brands in the world, and showing their logos immediately communicates credibility and scale far more powerfully than text ever could.

## The Redesign

### Replace the text list with a visual logo grid
Instead of a bullet list inside a glass card, the "We manage" side becomes a **logo showcase grid** — large, recognizable brand wordmarks/logos displayed in a clean grid layout with subtle hover effects.

### Layout concept:

```text
+--------------------------------------------------+
|  The Solution                                     |
|  Enterprise tools.                                |
|  A performance team to run them.                  |
|                                                   |
|  [description paragraph]                          |
|                                                   |
|  +--- We manage --------+  +--- You get --------+|
|  |                       |  |                    ||
|  |  [Amazon]   [Walmart] |  |  Enterprise-level  ||
|  |                       |  |  ad technology     ||
|  |  [Google]   [Meta]    |  |                    ||
|  |                       |  |  Cross-channel     ||
|  |  [Retail Media +]     |  |  strategy          ||
|  |                       |  |  ...               ||
|  +-----------------------+  +--------------------+|
+--------------------------------------------------+
```

Each platform logo sits inside its own mini glass card tile with:
- A clean SVG wordmark (styled, not just text)
- A subtle platform description beneath (e.g., "Search and DSP")
- Hover effect: slight lift + glow + the brand's signature color tint
- Staggered fade-in animation on scroll

### Platform-specific brand colors on hover
- **Amazon**: Orange (#FF9900) glow
- **Walmart**: Blue (#0071CE) glow  
- **Google**: Multi-color or blue (#4285F4) glow
- **Meta**: Blue (#0668E1) glow
- **Retail Media**: Cyan/accent glow

### "Retail media networks" tile
This one gets a slightly different treatment — a "+" icon or multi-logo hint to suggest it covers many networks, with a subtle label like "Instacart, Target, Kroger, and more."

## Technical Details

### New component: `PlatformLogoGrid.tsx`
A reusable component rendering each platform as a styled tile with:
- SVG wordmark logos (proper brand typography, not just `<text>` elements)
- Individual hover color accents via CSS custom properties
- Staggered `framer-motion` entrance (scale + fade, 0.08s delay per tile)
- Responsive: 2-column on mobile, adapts to the card width

### Changes to `src/pages/Index.tsx`
- Replace the "We manage" `<ul>` bullet list with the new `PlatformLogoGrid` component
- Keep the "You get" dark card as-is (it works well as the contrast pair)
- The "We manage" card keeps its glass-card styling but the interior changes from text list to logo grid

### SVG Logo Approach
Create proper stylized wordmark SVGs for each platform — not the current `<text>` hack, but actual letter-path SVGs that look like the real brand wordmarks. These will be monochrome by default (muted gray) and transition to their brand color on hover.

### No other homepage changes
This is a focused redesign of just the "We manage" portion of the Solution section. Everything else stays as-is.
