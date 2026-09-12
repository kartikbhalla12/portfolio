import { isMobile } from '@utils/server/isMobile.server';

import Home from '@components/Home';
import Skills from '@components/Skills';
import Experience from '@components/Experience';
import Projects from '@components/Projects';

export default async function HomePage() {
    const mobile = await isMobile();

    return (
        <main id='main-content' tabIndex={-1}>
            <Home isMobile={mobile} />
            <Skills />
            <Experience />
            <Projects />
        </main>
    );
}
