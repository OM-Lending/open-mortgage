"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
};

type BlogListProps = {
  posts: BlogPost[];
  locale: string;
  lang: "en" | "zh";
  publishedOnLabel: string;
  readMoreLabel: string;
  searchPlaceholder: string;
  searchEmpty: string;
};

export function BlogList({
  posts,
  locale,
  lang,
  publishedOnLabel,
  readMoreLabel,
  searchPlaceholder,
  searchEmpty,
}: BlogListProps) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = deferredQuery.trim().toLowerCase();

    return posts.filter((post) => {
      if (!normalizedQuery) {
        return true;
      }

      return post.title.toLowerCase().includes(normalizedQuery);
    });
  }, [posts, deferredQuery]);

  return (
    <>
      <div className="mb-10">
        <Input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className="mb-0 rounded-none border-[#c9d8e6] px-5 py-3 text-base"
          aria-label={searchPlaceholder}
        />
      </div>

      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <Card key={post.slug} className="flex h-full flex-col">
              <h3 className="mb-3 text-xl font-semibold text-[#0d3250]">
                {post.title}
              </h3>
              <p className="mb-4 grow text-[#666666]">{post.excerpt}</p>
              <div className="mb-4 text-sm text-[#666666]">
                {publishedOnLabel}{" "}
                {new Date(post.date).toLocaleDateString(
                  lang === "zh" ? "zh-CN" : "en-AU",
                  {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }
                )}
              </div>
              <Link href={`/${locale}/blogs/${post.slug}`}>
                <Button variant="outline" className="w-full">
                  {readMoreLabel}
                </Button>
              </Link>
            </Card>
          ))}
        </div>
      ) : (
        <div className="border border-[#d7e3ef] bg-[#f6fbff] px-6 py-10 text-center text-[#45627b]">
          {searchEmpty}
        </div>
      )}
    </>
  );
}
