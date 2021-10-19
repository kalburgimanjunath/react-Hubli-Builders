import React from 'react';
export default function Features({ title, text, url, direction }) {
  const featureData = [
    {
      title: 'Online legal advice, in minutes',
      text: 'Vetted lawyers for your startups and company building needs',
      url: 'https://firebasestorage.googleapis.com/v0/b/pory-io.appspot.com/o/605f2e4809457400179357bd%2Flandingpeople-1%2Fhero%2FvuZVmb7Bjrp_%2FHnet.com-image%20(3).png?alt=media&token=e9111a21-ea37-4f6d-93ed-bccea7233210',
    },
  ];
  const FeatureItem = ({ item }) => {
    return (
      <div>
        <h1>{item.title}</h1>
        <h2>{item.text}</h2>
        <img src={item.url} width="300" height="250" direction />
      </div>
    );
  };
  return (
    <div>
      {featureData.map((item) => (
        <FeatureItem item={item} />
      ))}
    </div>
  );
}
