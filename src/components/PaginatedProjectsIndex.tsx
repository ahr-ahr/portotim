import { useState } from "preact/hooks";
import type { Project } from "../data/projects";
import {
  gradientFromString,
  initials,
  categoryClasses,
} from "../utils/helpers.ts";

type Props = {
  projects: Project[];
};

export default function PaginatedProjectsIndex({ projects }: Props) {
  const perPage = 4;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / perPage);
  const currentProjects = projects.slice(
    page * perPage,
    page * perPage + perPage
  );

  return (
    <>
      <div id="project-container" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentProjects.map((p, i) => (
          <a
            href={`/portotim/projects/${p.slug}`}
            class="project-card flex bg-white rounded-xl dark:bg-slate-800 shadow-md overflow-hidden hover:shadow-lg transition focus:outline-none focus:ring-2 focus:ring-sky-300/50"
            data-category={p.category.toLowerCase()}
            key={i}
          >
            {p.hero ? (
              <img
                src={p.hero}
                alt={p.title}
                class="project-img w-40 object-cover"
              />
            ) : (
              <div
                class={`project-fallback w-40 grid place-items-center bg-gradient-to-br ${gradientFromString(p.title)} ring-1`}
              >
                <span class="text-lg font-semibold">{initials(p.title)}</span>
              </div>
            )}

            <div class="flex flex-col justify-between p-4 flex-1">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {p.summary}
              </p>

              <div class="flex flex-wrap gap-2 mt-3">
                <span
                  class={`text-[11px] px-2 py-0.5 rounded-full border ${categoryClasses(p.category)}`}
                >
                  {p.category}
                </span>
                {(p.tech ?? []).map((t) => (
                  <span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <span class="mt-4 inline-block self-start bg-black text-white px-4 py-2 rounded-lg dark:hover:bg-gray-600 dark:bg-gray-700">
                Lihat detail
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div class="mt-6 flex justify-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            class={`px-3 py-1.5 rounded border text-sm transition ${
              page === 0
                ? "cursor-not-allowed opacity-50 border-gray-300 bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
            }`}
          >
            ‹
          </button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              class={`px-3 py-1.5 rounded border text-sm transition ${
                i === page
                  ? "bg-sky-600 text-white border-sky-600"
                  : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            disabled={page === totalPages - 1}
            class={`px-3 py-1.5 rounded border text-sm transition ${
              page === totalPages - 1
                ? "cursor-not-allowed opacity-50 border-gray-300 bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500"
                : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
            }`}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}
