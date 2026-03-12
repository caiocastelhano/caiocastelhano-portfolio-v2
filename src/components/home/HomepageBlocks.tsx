"use client";

import { Grid, GridItem } from "@/components/ui/Grid";
import { BlockShell } from "@/components/ui/BlockShell";
import { homeBlocksDesktop } from "@/data/blocks/homeBlocksDesktop";
import { homeBlocksTablet } from "@/data/blocks/homeBlocksTablet";
import { homeBlocksMobile } from "@/data/blocks/homeBlocksMobile";
import { SpacerBlock } from "@/blocks/SpacerBlock";
import { SocialLinksBlock } from "@/blocks/SocialLinksBlock";
import { StackBlock } from "@/blocks/StackBlock";
import { ContactBlock } from "@/blocks/ContactBlock";
import { AboutBlock } from "@/blocks/AboutBlock";
import { LanguageToggleBlock } from "@/blocks/LanguageToggleBlock";
import { useI18n } from "@/components/i18n/I18nProvider";
import { projects } from "@/data/blocks/projects";
import { ProjectBlock } from "@/blocks/ProjectBlock";
import { useEffect, useState } from "react";

import type { HomeBlock } from "@/data/blocks/types";

export function HomepageBlocks() {
  const { locale, dict, setLocale } = useI18n();

  const [blocks, setBlocks] = useState<HomeBlock[]>(homeBlocksDesktop);

  useEffect(() => {
    function updateLayout() {
      const width = window.innerWidth;

      if (width >= 1024) {
        setBlocks(homeBlocksDesktop);
      } else if (width >= 768) {
        setBlocks(homeBlocksTablet);
      } else {
        setBlocks(homeBlocksMobile);
      }
    }

    updateLayout();

    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

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

        return <ProjectBlock project={project} locale={locale} dict={dict} />;
      }

      default:
        return null;
    }
  }

  return (
    <Grid bleed aria-label="Homepage grid">
      {blocks.map((block) => (
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