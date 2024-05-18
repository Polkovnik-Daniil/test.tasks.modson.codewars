function fatFing(str: string) {
  if (typeof str !== "string") return str;
  return str
    .replace(/A/g, "a")
    .split("a")
    .map((s, i) =>
      i % 2
        ? s.replace(/./g, (m) =>
            /[a-z]/.test(m) ? m.toUpperCase() : m.toLowerCase()
          )
        : s
    )
    .join("");
}

console.log(fatFing("The quick brown fox jumps over the lazy dog."));
