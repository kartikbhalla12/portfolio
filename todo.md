# Todo List

## Heading Hierarchy Fixes

- [ ] **Task 1**: Change "My Skills" H1 → H2 in Skills component
- [ ] **Task 2**: Change "My Experience" H1 → H2 in Experience component
- [ ] **Task 3**: Change "My Projects" H1 → H2 in Projects component
- [ ] **Task 4**: Review H3 company names in Experience component (consider changing to H2 or keeping semantic structure)
- [ ] **Task 5**: Fix duplicate H2 for project names in Projects component (lines 29 and 31)

## Component Extraction

- [ ] **Task 6**: Extract `AboutContainer` from Home component → `src/components/Home/AboutContainer`
- [ ] **Task 7**: Extract `SkillComponent` from Skills component → `src/components/Skills/SkillIcon`
- [ ] **Task 8**: Extract `ProjectCard` from Projects component → `src/components/Projects/ProjectCard`
- [ ] **Task 9**: Extract `ExperienceCard` from Experience component → `src/components/Experience/ExperienceCard`

## Optimization & Content

- [ ] **Task 10**: Review and add `React.memo` to components that need optimization
- [ ] **Task 11**: Update content: Review and improve text content across all components

## Notes

- Home component already has the only H1 (main page title) - keep as is ✅
- No separate "about" page found - `AboutContainer` is nested in Home component
- Some components already use `memo` - review for consistency
