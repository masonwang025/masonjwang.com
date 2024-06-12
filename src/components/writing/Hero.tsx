import { formatDate } from "@/app/writing/utils";
import Link from "next/link";

function Hero({ title, publishedAt, image }: { title: string, publishedAt: string, image?: string }) {
    return (
        <div className="bg-background-dark text-white flex flex-col justify-center items-center">
            <div className="vertical center-h space-between h-[calc(100dvh)] py-14 md:py-24">
                <Link className="text-sm text-neutral-400" href="/writing">← back to writing</Link>
                <div>
                    <h1 className="text-balance text-center title font-semibold text-2xl">
                        {title}
                    </h1>
                    <div className="mt-2 mb-8 text-sm text-center">
                        <p className="text-md text-neutral-400">
                            {formatDate(publishedAt)}
                        </p>
                    </div>
                </div>
                <div>
                    {/* smooth scroll to writing content */}
                    <a href="#content" className="text-xl text-neutral-400">
                        ↓
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;