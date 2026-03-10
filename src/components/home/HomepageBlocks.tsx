"use client";

import { Grid, GridItem } from "@/components/ui/Grid";
import { BlockShell } from "@/components/ui/BlockShell";
import { homeBlocks } from "@/data/blocks/homeBlocks";
import { SpacerBlock } from "@/blocks/SpacerBlock";
import { SocialLinksBlock } from "@/blocks/SocialLinksBlock";
import { StackBlock } from "@/blocks/StackBlock";
import { ContactBlock } from "@/blocks/ContactBlock";
import { AboutBlock } from "@/blocks/AboutBlock";
import { LanguageToggleBlock } from "@/blocks/LanguageToggleBlock";
import { useI18n } from "@/components/i18n/I18nProvider";

import type { HomeBlock } from "@/data/blocks/types";

export function HomepageBlocks() {
  const { locale, dict, setLocale } = useI18n();

  function renderBlock(block: HomeBlock) {
    switch (block.type) {
      case "social":
        return <SocialLinksBlock />;

      case "toggle":
        return (
        <LanguageToggleBlock
            currentLanguage={locale}
            onLanguageChange={setLocale}
        />
        );

      case "stack":
        return <StackBlock dictionary={dict.stackBlock} />;

      case "contact":
        return <ContactBlock dictionary={dict.contactBlock} />;

      case "about":
        return <AboutBlock dictionary={dict.aboutBlock} />;

      default:
        return block.label ?? block.type;
    }
  }

  return (
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
  );
}