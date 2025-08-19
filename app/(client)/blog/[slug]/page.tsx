import Container from "@/components/Container";
import Title from "@/components/Title";
import { Blog, SINGLE_BLOG_QUERYResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import {
  getBlogCategories,
  getOthersBlog,
  getSingleBlog,
} from "@/sanity/queries";
import dayjs from "dayjs";
import { Calendar, ChevronLeftIcon, Pencil } from "lucide-react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";


const SingleBlogPage = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  const blogResult = await getSingleBlog(slug);

let blog: SINGLE_BLOG_QUERYResult | null = null;
if (Array.isArray(blogResult)) {
  blog = blogResult[0] ?? null;
} else {
  blog = blogResult as SINGLE_BLOG_QUERYResult | null;
}

if (!blog) {
  return notFound();
}
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main column */}
        <div className="lg:col-span-2">
          <Title>{blog.title ?? "Untitled"}</Title>

          {/* Header categories */}
          <div className="flex gap-3 mt-4">
            {blog?.blogcategories?.map((item, index) => (
              <p
                key={index}
                className="font-semibold text-shop_dark_green tracking-wider"
              >
                {item?.title ?? "Uncategorized"}
              </p>
            ))}
          </div>

          <div className="prose mt-6">
            <PortableText value={blog.body ?? []} />
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Categories list (rewritten: avoid destructuring possibly-null values) */}
          <div className="p-4 border rounded">
            <h4 className="font-semibold mb-2">Categories</h4>
            <div className="space-y-2">
              {categories?.map((cat, index) => {
                // cat.blogcategories can be null — guard access
                const title = cat.blogcategories?.[0]?.title ?? "Uncategorized";
                return (
                  <div
                    key={index}
                    className="text-lightColor flex items-center justify-between text-sm font-medium"
                  >
                    <p>{title}</p>
                    <p className="text-darkColor font-semibold">{`(1)`}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Other blogs (rewritten: let inference determine types & guard fields) */}
          <div className="p-4 border rounded">
            <h4 className="font-semibold mb-2">Recent posts</h4>
            <div className="space-y-4">
              {blogs?.map((b) => {
                // Only render when we can build a valid href
                const href = b?.slug?.current ? `/blog/${b.slug.current}` : null;
                if (!href) return null;

                return (
                  <Link href={href} key={href} className="flex items-center gap-2 group">
                    {b?.mainImage && b.mainImage.asset && (
                      <Image
                        src={urlFor(b.mainImage).url()}
                        alt={b.title ?? "blog image"}
                        width={64}
                        height={64}
                        className="w-16 h-16 rounded-full object-cover border-[1px] border-shop_dark_green/10 group-hover:border-shop_dark_green hoverEffect"
                      />
                    )}

                    <p className="line-clamp-2 text-sm text-lightColor group-hover:text-shop_dark_green hoverEffect">
                      {b?.title ?? "Untitled"}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
};


const BlogLeft = async ({ slug }: { slug: string }) => {
  const categories = await getBlogCategories();
  const blogs = await getOthersBlog(slug, 5);

  return (
    <div>
      <div className="border border-lightColor p-5 rounded-md">
        <Title className="text-base">Blog Categories</Title>
        <div className="space-y-2 mt-2">
          {categories?.map(({ blogcategories }, index) => (
            <div
              key={index}
              className="text-lightColor flex items-center justify-between text-sm font-medium"
            >
              <p>{blogcategories[0]?.title}</p>
              <p className="text-darkColor font-semibold">{`(1)`}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-lightColor p-5 rounded-md mt-10">
        <Title className="text-base">Latest Blogs</Title>
        <div className="space-y-4 mt-4">
          {blogs?.map((blog: Blog, index: number) => (
            <Link
              href={`/blog/${blog?.slug?.current}`}
              key={index}
              className="flex items-center gap-2 group"
            >
              {blog?.mainImage && (
                <Image
                  src={urlFor(blog?.mainImage).url()}
                  alt="blogImage"
                  width={100}
                  height={100}
                  className="w-16 h-16 rounded-full object-cover border-[1px] border-shop_dark_green/10 group-hover:border-shop_dark_green hoverEffect"
                />
              )}
              <p className="line-clamp-2 text-sm text-lightColor group-hover:text-shop_dark_green hoverEffect">
                {blog?.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};


export default SingleBlogPage;