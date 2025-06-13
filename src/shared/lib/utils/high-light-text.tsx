import { chakra } from '@chakra-ui/react';

interface HighlightedTextParams {
  text: string;
  highlight: string | string[];
}

export const HighlightText = ({ text, highlight }: HighlightedTextParams) => {
  if (!highlight || (Array.isArray(highlight) && highlight.length === 0))
    return text;

  const highlightArray = Array.isArray(highlight) ? highlight : [highlight];

  const escaped = highlightArray.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi');

  const parts = text.split(regex);

  return parts.map((part, index) =>
    highlightArray.some((h) => part.toLowerCase() === h.toLowerCase()) ? (
      <chakra.span key={index} color="text.secondary">
        {part}
      </chakra.span>
    ) : (
      part
    )
  );
};
