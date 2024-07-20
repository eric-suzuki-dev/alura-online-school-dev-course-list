import { Meta, StoryObj } from "@storybook/react";

import TextBlock, { type TextBlockProps } from "./TextBlock";

const meta: Meta<TextBlockProps> = {
  title: "Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    type: {
      type: "string",
    },
    title: {
      type: "string",
    },
    children: {
      type: "string",
    },
    className: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children: "Olá eu sou uma bloco de Texto padrão",
  },
};

export const TextBlockPrimary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children: "Olá eu sou uma bloco de Texto Primário",
    type: "primary",
    className: "p-3",
  },
};

export const TextBlockSecondary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children: "Olá eu sou uma bloco de Texto Secundário",
    type: "secondary",
    className: "p-3",
  },
};

export const TextBlockTertiary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    children: "Olá eu sou uma bloco de Texto Terciário",
    type: "dark",
    className: "p-3",
  },
};