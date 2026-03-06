import { Grid, GridItem } from "@/components/ui/Grid";
import { BlockShell } from "@/components/ui/BlockShell";
import { homeBlocks } from "@/data/blocks/homeBlocks";
import { SpacerBlock } from "@/blocks/SpacerBlock";

function renderBlockContent(type: string, label?: string) {
  return label ?? type;
}

export default function Home() {
  return (
    <main>
      <Grid bleed aria-label="Homepage grid">
        {homeBlocks.map((block) => (
          <GridItem key={block.id} colSpan={block.colSpan} rowSpan={block.rowSpan}>
            {block.type === "spacer" ? (
              <SpacerBlock variant={block.variant} />
            ) : (
              <BlockShell interactive={block.type === "project"} density="md">
                {renderBlockContent(block.type, block.label)}
              </BlockShell>
            )}
          </GridItem>
        ))}
      </Grid>
    </main>
  );
}