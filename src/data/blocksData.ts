// Estrutura inicial para os blocos do grid

export type Block = {
  id: string
  type: "project" | "text" | "image"
  title?: string
  slug?: string
}

export const blocks: Block[] = []