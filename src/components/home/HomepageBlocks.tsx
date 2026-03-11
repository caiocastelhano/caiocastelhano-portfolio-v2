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
import { projects } from "@/data/blocks/projects";
import { ProjectBlock } from "@/blocks/ProjectBlock";

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

      case "project": {
        const project = projects.find(
          (item) => item.slug === block.projectSlug
        );

        if (!project) return null;

        return <ProjectBlock project={project} locale={locale} />;
      }

      default:
        return null;
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