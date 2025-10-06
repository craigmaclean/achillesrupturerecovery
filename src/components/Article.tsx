import Image from "next/image";

export default function Article({ frontMatter, children }: { frontMatter: any; children: React.ReactNode }) {
  return (
    <article className="article-body mx-auto max-w-3xl px-4 sm:px-6 lg:px-0">
      {/* Featured image */}
      {frontMatter.featuredImage && (
        <figure className="mb-8">
          <Image
            src={frontMatter.featuredImage}
            alt={frontMatter.alt || ""}
            width={1280}
            height={720}
            priority
            className="w-full rounded-xl object-cover !mb-0"
          />
        </figure>
      )}

      {/* Body */}
      <div className="
        prose prose-slate dark:prose-invert max-w-none
        prose-headings:font-semibold prose-h2:mt-10 prose-h3:mt-6
        prose-p:my-4 prose-li:my-1 prose-hr:my-10
        prose-img:rounded-xl
        prose-a:underline-offset-2 hover:prose-a:underline
      ">
        {children}
      </div>
    </article>
  );
}
