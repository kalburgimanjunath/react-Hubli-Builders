import React from 'react';
export default function Stages() {
  const data = [
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/pory-io.appspot.com/o/605f2e4809457400179357bd%2Flandingpeople-1%2Fhero%2FB_U6Y729VxFE%2Ffeatures%2F1-playstore.png?alt=media&token=bc20553d-b13b-45b2-b8e4-0e0b9bcc255c',
      title: 'Pre-Startup',
      text: 'Company formation, structure and entity consultancy.',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/pory-io.appspot.com/o/605f2e4809457400179357bd%2Flandingpeople-1%2Fhero%2FB_U6Y729VxFE%2Ffeatures%2F1-playstore.png?alt=media&token=bc20553d-b13b-45b2-b8e4-0e0b9bcc255c',
      title: 'Startup',
      text: 'Compliance, agreements and venture financing.',
    },
    {
      url: 'https://firebasestorage.googleapis.com/v0/b/pory-io.appspot.com/o/605f2e4809457400179357bd%2Flandingpeople-1%2Fhero%2FB_U6Y729VxFE%2Ffeatures%2F1-playstore.png?alt=media&token=bc20553d-b13b-45b2-b8e4-0e0b9bcc255c',
      title: 'Growth',
      text: 'International markets, merger & acquisition, exit.',
    },
  ];
  return (
    <div>
      <h1>Legal advisors across all company stages</h1>
      <div>
        {data.map((item) => {
          return (
            <>
              <img key="{item.title}" src="{item.url}" width="50" height="50" />
              <div>
                <div>{item.title}</div>
                <div>{item.text}</div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
