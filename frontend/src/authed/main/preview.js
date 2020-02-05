import React from 'react';
import { useState, useEffect } from 'react';
import userFields from './profile/handlers/fieldData';
import previewHandler from './profile/handlers/previewHandler';
import '../../styles/preview.css';
import MetaCard from './profile/cards/MetaCard';
import InfoCard from './profile/cards/InfoCard';
import GitHubCard from './profile/cards/GitHubCard';

const Preview = ({ avatar, CheckDb }) => {
  const [inputs, setInputs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CheckDb()
      .then(inputs => {
        setInputs(inputs);
      })
      .then(() => inputs && setLoading(false));
  }, []);

  if (loading) {
    return null;
  }

  const {
    name,
    email,
    about,
    website,
    phone,
    country,
    city
  } = inputs.personalFields;

  const fields = {
    ...userFields,
    gitHub: [
      { title: 'Project Name' },
      { description: 'Description' },
      { repository: 'Link' }
    ]
  };

  const preview = previewHandler(fields, inputs);
  return (
    <div id="preview">
      <MetaCard
        data={{ avatar, name, email, about, website, phone, country, city }}
      />
      {preview.map(r => {
        return r['Github'] ? <GitHubCard data={r} /> : <InfoCard data={r} />;
      })}
    </div>
  );
};

export default Preview;
