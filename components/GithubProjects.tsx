"use client";
import React from "react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  language: string | null;
  fork: boolean;
  updated_at: string;
};

async function fetchRepos(username: string, perPage: number = 6): Promise<Repo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}`, {
    // Avoid caching to show recent updates when navigating
    cache: "no-store",
    headers: {
      Accept: "application/vnd.github+json",
    },
  });
  if (!res.ok) {
    return [];
  }
  const data = (await res.json()) as Repo[];
  return data.filter((r) => !r.fork);
}

export default function GithubProjects({ username, perPage = 6 }: { username: string; perPage?: number }) {
  const [repos, setRepos] = React.useState<Repo[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    let isMounted = true;
    setLoading(true);
    fetchRepos(username, perPage)
      .then((r) => {
        if (isMounted) {
          setRepos(r);
          setError(null);
        }
      })
      .catch(() => {
        if (isMounted) setError("Failed to load repositories from GitHub.");
      })
      .finally(() => {
        if (isMounted) setLoading(false);
      });
    return () => {
      isMounted = false;
    };
  }, [username, perPage]);

  if (loading) {
    return (
      <div className="w-full py-8 text-center text-sm text-neutral-400">Loading GitHub projects…</div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-8 text-center text-sm text-red-400">{error}</div>
    );
  }

  if (!repos || repos.length === 0) {
    return (
      <div className="w-full py-8 text-center text-sm text-neutral-400">No repositories found.</div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">GitHub Projects</h2>
        <a
          className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-4"
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Profile
        </a>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <li key={repo.id} className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 hover:border-neutral-700 transition-colors">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-neutral-100 group-hover:text-white">{repo.name}</h3>
                <span className="text-xs text-neutral-400">{new Date(repo.updated_at).toLocaleDateString()}</span>
              </div>
              {repo.description && (
                <p className="mt-2 text-sm text-neutral-300">{repo.description}</p>
              )}
              <div className="mt-3 flex items-center gap-3 text-xs text-neutral-400">
                {repo.language && <span>{repo.language}</span>}
                <span>★ {repo.stargazers_count}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}


