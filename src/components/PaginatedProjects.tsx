import { useState } from "preact/hooks";
import type { Project } from "../data/projects";

type Props = {
  projects: Project[];
};

export default function PaginatedProjects({ projects }: Props) {
  const perPage = 4;
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(projects.length / perPage);
  const currentProjects = projects.slice(
    page * perPage,
    page * perPage + perPage
  );

  return (
    <div>
      {/* Projects */}
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {currentProjects.map((p, i) => (
          <article
            key={i}
            class="rounded-2xl border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 p-5 shadow-sm"
          >
            <h3 class="text-base font-semibold dark:text-gray-200">
              {p.title}
            </h3>
            <p class="mt-1 text-sm text-gray-700 dark:text-gray-400">
              {p.summary}
            </p>

            {p.tech?.length && (
              <ul class="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t, idx) => (
                  <li
                    key={idx}
                    class="rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 px-2.5 py-1 text-xs text-gray-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}

            <div class="mt-4 flex flex-wrap gap-3 text-sm">
              {p.links?.demo && (
                <a
                  href={p.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-lg border border-gray-200 bg-white px-3 py-1.5 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  Demo
                </a>
              )}
              {p.links?.caseStudy && (
                <a
                  href={p.links.caseStudy}
                  target="_blank"
                  rel="noreferrer"
                  class="rounded-lg border border-gray-200 bg-white px-3 py-1.5 transition hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  Studi Kasus
                </a>
              )}
            </div>
          </article>
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
    </div>
  );
}
