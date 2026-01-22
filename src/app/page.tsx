import { getDefaultThemeCookie } from '@utils/server/theme.server';
import { isMobile } from '@utils/server/isMobile.server';

import Home from '@components/Home';
import Skills from '@components/Skills';
import Experience from '@components/Experience';
import Projects from '@components/Projects';

export default async function HomePage() {
    const theme = await getDefaultThemeCookie();
    const mobile = await isMobile();

    return (
        <main tabIndex={-1}>
            <Home isMobile={mobile} />
            <Skills isMobile={mobile} />
            <Experience isMobile={mobile} />
            <Projects isMobile={mobile} theme={theme} />
        </main>
    );
}
