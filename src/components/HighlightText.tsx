const METRIC_SOURCE =
  "(\\+?-?\\d+(?:\\.\\d+)?(?:\\s*(?:→|->)\\s*\\d+(?:\\.\\d+)?)?(?:\\s*dB)?|\\d+(?:,\\d{3})*(?:\\.\\d+)?%?|n\\s*=\\s*\\d+|4×|cosine\\s+\\d+(?:\\.\\d+)?)";

export function HighlightText({ text }: { text: string }) {
  const parts = text.split(new RegExp(METRIC_SOURCE, "gi"));
  const matcher = new RegExp(`^${METRIC_SOURCE}$`, "i");

  return (
    <>
      {parts.map((part, index) =>
        matcher.test(part) ? (
          <strong key={`${index}-${part}`} className="metric">
            {part}
          </strong>
        ) : (
          <span key={`${index}-${part}`}>{part}</span>
        ),
      )}
    </>
  );
}
