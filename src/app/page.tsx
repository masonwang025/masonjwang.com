import { BlogPosts } from "@/components/global/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        hey! i'm mason wang 😁
      </h1>
      <div className="vertical space-y-2">
        <p>
          i want to share my work, my thoughts, my art - me - with you here. i
          love building and creating things, especially out of code.
        </p>

        <p className="pt-4"><b>current focus</b></p>
        <p><i>AI alignment</i></p>
        <ol className="list-decimal ml-4 space-y-1.5">
          <li>i honestly don't yet know what that concretely means, but for now it's a) exploring mech interp & W2SG research directions, b) talking to people in the space, and c) figuring out the rest.</li>
          <li>i distill my thoughts in <b><a href="https://alignment.guide" target="_blank" className="link">alignment.guide</a></b> to help others navigate the space.</li>
          <li>just submitted <i>Model Mapping: Decompiling Transformers into Python Programs</i> to ICML 2024.</li>
        </ol>
        <p>(p.s. i'm not a doomer i promise 🥺)</p>
        <p className="pt-4"><b>previously</b></p>
        <ul className="italic space-y-1.5">
          {/* <li>incoming student @ Stanford</li> */}
          <li>
            NLP research @{" "}
            <a
              href="https://oval.cs.stanford.edu/"
              target="_blank"
              className="link"
            >
              Stanford's Open Virtual Assistant Lab
            </a>
          </li>
          <li>
            ex-founder @ Hazel (backed by{" "}
            <a target="_blank" href="https://pear.vc/" className="link">
              Pear VC
            </a>{" "}
            and others)
          </li>
        </ul>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  );
}
