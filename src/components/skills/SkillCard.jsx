import React from 'react';
import Card from '../common/Card';

const SkillCard = ({ name, icon: Icon, category }) => (
    <Card className="p-6 text-center">
        <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mx-auto mb-4">{Icon && <Icon size={24} />}</div>
        <h3 className="text-white font-bold">{name}</h3>
        <p className="text-brand-500 text-xs uppercase">{category}</p>
    </Card>
);

export default SkillCard;
