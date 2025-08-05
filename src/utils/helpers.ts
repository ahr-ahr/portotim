export function initials(text: string): string {
  return text
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");
}

export function gradientFromString(input: string): string {
  const colors = [
    ["from-pink-200", "to-pink-400"],
    ["from-blue-200", "to-blue-400"],
    ["from-green-200", "to-green-400"],
    ["from-yellow-200", "to-yellow-400"],
    ["from-purple-200", "to-purple-400"],
    ["from-indigo-200", "to-indigo-400"],
    ["from-rose-200", "to-rose-400"],
  ];

  const hash = input
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  const [from, to] = colors[hash % colors.length];
  return `${from} ${to}`;
}

export function categoryClasses(category: string): string {
  switch (category.toLowerCase()) {
    case "backend":
      return "border-rose-400 text-rose-700 bg-rose-100 dark:bg-rose-900";
    case "frontend":
      return "border-sky-400 text-sky-700 bg-sky-100 dark:bg-sky-900";
    case "backend + frontend":
      return "border-violet-400 text-violet-700 bg-violet-100 dark:bg-violet-900";
    default:
      return "border-gray-300 text-gray-600 bg-gray-100 dark:bg-gray-800";
  }
}
