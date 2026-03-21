import React from 'react';
import { ReactLenis } from 'lenis/react';
import AppRoutes from './routes';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CTA from './components/home/CTA';
import ScrollToTop from './components/common/ScrollToTop';
import RouteScrollToTop from './components/common/RouteScrollToTop';
import ScrollIndicator from './components/common/ScrollIndicator';

function App() {
    return (
        <ReactLenis root>
            <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
                <RouteScrollToTop />
                <Navbar />
                <ScrollIndicator />
                <ScrollToTop />
                <main>
                    <AppRoutes />
                </main>
                <CTA />
                <Footer />
            </div>
        </ReactLenis>
    );
}

export default App;
