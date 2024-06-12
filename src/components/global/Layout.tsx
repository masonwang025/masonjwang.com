import { Analytics } from "@vercel/analytics/react";
import Footer from "./footer";
import { Navbar } from "./nav";
import { SpeedInsights } from "@vercel/speed-insights/next";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-2xl mx-4 mt-8 lg:mx-auto">
            <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
                <Navbar />
                {children}
                <Footer />
                <Analytics />
                <SpeedInsights />
            </main>
        </div>
    );
}

export default Layout;