import React from 'react';


const SkillBar = ({ skill }) => (
    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-bold hover:border-brand-500/30 hover:text-white transition-all cursor-default">
        {skill}
    </div>
);

export default SkillBar;
