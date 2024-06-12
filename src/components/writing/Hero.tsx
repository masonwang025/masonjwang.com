import { formatDate } from "@/app/writing/utils";

function Hero({ title, publishedAt, image }: { title: string, publishedAt: string, image?: string }) {
    return (
        <div className="h-screen bg-background-dark text-white flex flex-col justify-center items-center">
            <h1 className="title font-semibold text-2xl">
                {title}
            </h1>
            <div className="mt-2 mb-8 text-sm">
                <p className="text-md text-neutral-400">
                    {formatDate(publishedAt)}
                </p>
            </div>
        </div>
    );
}

export default Hero;