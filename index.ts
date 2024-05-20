const cakes = (needs: any, has: any) =>
  Math.min(
    ...Object.keys(needs).map((key) => Math.floor(has[key] / needs[key] || 0))
  );
