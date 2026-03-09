import { Grid, GridItem } from "@/components/ui/Grid";
import { BlockShell } from "@/components/ui/BlockShell";
import { homeBlocks } from "@/data/blocks/homeBlocks";
import { SpacerBlock } from "@/blocks/SpacerBlock";
import { SocialLinksBlock } from "@/blocks/SocialLinksBlock";
import type { HomeBlock } from "@/data/blocks/types";

function renderBlock(block: HomeBlock) {
  switch (block.type) {
    case "social":
      return <SocialLinksBlock />;

    default:
      return block.label ?? block.type;
  }
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
                {renderBlock(block)}
              </BlockShell>
            )}
          </GridItem>
        ))}
      </Grid>
    </main>
  );
}