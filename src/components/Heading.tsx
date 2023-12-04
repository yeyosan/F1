import React, { ElementType, JSX } from "react";

type Level = 1 | 2 | 3 | 4 | 5 | 6;

enum Alignment {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}

interface Props {
  level?: Level;
  alignment?: Alignment;
  children: string;
}

const validateLevel = (level: number): number => {
  if (level < 1) {
    return 1;
  }

  if (level > 6) {
    return 6;
  }

  return level;
};

const Heading = ({
  level = 1,
  alignment = Alignment.LEFT,
  children,
}: Props): JSX.Element => {
  const HeadingTag = `h${validateLevel(level)}` as ElementType;

  return <HeadingTag style={{ textAlign: alignment }}>{children}</HeadingTag>;
};

export { Alignment as HeadingAlignment, Props as HeadingProps, Heading };
