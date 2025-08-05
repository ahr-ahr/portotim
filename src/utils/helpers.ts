export function initials(text: string): string {
  return text
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export function gradientFromString(s: string) {
  const n = Array.from(s).reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % 3;
  const variants = [
    "from-sky-100 to-sky-200 text-sky-700 ring-sky-300/60",
    "from-indigo-100 to-indigo-200 text-indigo-700 ring-indigo-300/60",
    "from-emerald-100 to-emerald-200 text-emerald-700 ring-emerald-300/60",
  ];
  return variants[n];
}

export function categoryClasses(category: string): string {
  switch (category.toLowerCase()) {
    case "backend":
      return "border-blue-200 bg-blue-50 text-blue-700";
    case "frontend":
      return "border-pink-200 bg-pink-50 text-pink-700";
    case "backend + frontend":
      return "border-amber-200 bg-amber-50 text-amber-700";
    default:
      return "border-gray-200 bg-gray-50 text-gray-700";
  }
}
