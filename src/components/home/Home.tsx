import ImageGrid from "./ImageGrid";
import Current from "./Current";
import Previous from "./Previous";
import Writing from "./Writing";
import Intro from "./Intro";
import Layout from "../global/Layout";

export default function Home() {
    return (
        <Layout>
            <div className="my-8 vertical space-y-2">
                <h1 className="text-2xl font-semibold">
                    hey! i'm mason wang 😁
                </h1>
                <h2 className="text-neutral-400">mwang25@stanford.edu</h2>
            </div>
            <div className="vertical space-y-8">
                <Intro />

                <ImageGrid path="/assets/img/landing/baby" filenames={["baby", "grandma", "dance", "watermelon"]} />

                <Current />

                <Previous />

                <Writing />

                <ImageGrid path="/assets/img/landing/current" filenames={["hoop", "danta", "ground", "uzbek"]} />
            </div>
        </Layout>
    );
}
