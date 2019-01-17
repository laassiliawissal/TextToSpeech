import React from 'react';
import PropTypes from 'prop-types';
import { Header, Jumbotron } from 'watson-react-components';

// eslint-disable-next-line
const DESCRIPTION = 'Le service Text to Speech comprend le texte et le langage naturel pour générer une sortie audio synthétisée avec une cadence et une intonation appropriées. Il est disponible en 13 voix dans 7 langues. Certaines voix offrent désormais des fonctionnalités de synthèse expressive et de transformation vocale.';

function Layout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <head>
        <title>
          Text to Speech Demo
        </title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="og:title" content="Text to Speech Demo" />
        <meta name="og:description" content={DESCRIPTION} />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-icon-180x180.png" />
        
        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header
          mainBreadcrumbs="Text to Speech"
         
        />
       
       
		<div id="root">
          {children}
        </div>
        <script type="text/javascript" src="js/bundle.js" />
        <script type="text/javascript" src="https://cdn.rawgit.com/watson-developer-cloud/watson-developer-cloud.github.io/master/analytics.js" />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};

export default Layout;
