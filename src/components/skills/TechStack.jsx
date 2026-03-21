import React from 'react';
import Container from '../layout/Container';
import SkillBar from './SkillBar';
import { TECH_STATS } from '../../data/skills';

const TechStack = () => (
    <section className="py-24 bg-slate-900/50">
        <Container>
            <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
                {TECH_STATS.map((s, i) => <SkillBar key={i} skill={s.name} />)}
            </div>
        </Container>
    </section>
);

export default TechStack;
