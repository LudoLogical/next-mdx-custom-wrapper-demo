import { type ReactElement, type ReactNode } from "react";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }: { children: ReactNode }) => {
      console.log(children);
      console.log((children as ReactElement).props.children);
      return children;
    },
    ...components,
  };
}

//https://youtu.be/xEu3t-KJVVg?si=3OCdvFbgelt0lXNZ&t=71
