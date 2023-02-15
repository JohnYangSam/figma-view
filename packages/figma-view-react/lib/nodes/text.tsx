import React from "react";
import type { TextNode } from "@design-sdk/figma-types";

export function FigmaTextNode({
  data,
  style = {},
}: {
  data: TextNode;
  style?: React.CSSProperties;
}) {
  const { x, y, characters, fills } = data;
  const color = fills?.[0]?.color ?? { r: 0, g: 0, b: 0, a: 0 };

  return (
    <div
      id={data.id}
      style={{
        position: "absolute",
        color: `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255}, ${
          color.a
        })`,
        top: y,
        left: x,
        ...style,
      }}
    >
      {characters}
    </div>
  );
}