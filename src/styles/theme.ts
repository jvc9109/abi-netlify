import styled, {css, createGlobalStyle} from 'styled-components'

export {css, styled}

export const theme = {
  colors: {
    black: '#000000',
    background: '#fffff8',
    contrast: '#111',
    contrastLightest: '#dad9d9',
    accent: 'red',
    white: '#ffffff',
  },
}

const reset = () => `
html {
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  margin: 0 !important;
  padding: 0;
}

::selection {
  background-color: ${theme.colors.contrastLightest};
  color: rgba(0, 0, 0, 0.70);
}

a.anchor, a.anchor:hover, a.anchor:link {
  background: none !important;
}

figure {
  a.gatsby-resp-image-link {
    background: none;
  }

  span.gatsby-resp-image-wrapper {
    max-width: 100% !important;
  }
}
`

// These style are based on https://edwardtufte.github.io/tufte-css/
const styles = () => `
html {
  font-size: 15px;
}

body {
  width: 87.5%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12.5%;
  font-family: Montserrat, serif;
  background-color: white;
  color: #111;
  max-width: 1400px;
}

h1 {
  font-weight: 500;
  margin-top: 4rem;
  margin-bottom: 1.5rem;
  font-size: 3.2rem;
  line-height: 1;
}

h2 {
  font-weight: 500;
  margin-top: 2.1rem;
  margin-bottom: 1.4rem;
  font-size: 2.2rem;
  line-height: 1;
}

h3 {
  font-weight: 400;
  font-size: 1.7rem;
  margin-top: 2rem;
  margin-bottom: 1.4rem;
  line-height: 1;
}

hr {
  display: block;
  height: 1px;
  width: 55%;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

article {
  position: relative;
  padding: 2rem 0rem;
}

section {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

p,
ol,
ul {
  font-size: 1.4rem;
  line-height: 2rem;
}

p {
  margin-top: 1.4rem;
  font-weight: 300;
  margin-bottom: 1.4rem;
  padding-right: 0;
  vertical-align: baseline;
  text-align: justify;
}

blockquote {
  font-size: 1.4rem;
}

blockquote p {
  width: 55%;
  margin-right: 40px;
}

blockquote footer {
  width: 55%;
  font-size: 1.1rem;
  text-align: right;
}

section > p,
section > footer,
section > table {
  width: 55%;
}

section > ol,
section > ul {
  width: 50%;
  -webkit-padding-start: 5%;
}

li:not(:first-child) {
  margin-top: 0.25rem;
}

figure {
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  max-width: 55%;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
  margin: 0 0 3em 0;
}

figcaption {
  float: right;
  clear: right;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.1rem;
  line-height: 1.6;
  vertical-align: baseline;
  position: relative;
  max-width: 40%;
}

figure.fullwidth figcaption {
  margin-right: 24%;
}

a:link,
a:visited {
  color: inherit;
}


div.fullwidth,
table.fullwidth {
  width: 100%;
}

div.table-wrapper {
  overflow-x: auto;
  font-family: 'Trebuchet MS', 'Gill Sans', 'Gill Sans MT', sans-serif;
}



@media (max-width: 760px) {
  body {
    width: 90%;
    padding-left: 5%;
    padding-right: 4%;
  }

  hr,
  section > p,
  section > footer,
  section > table {
    width: 100%;
  }
  p {
    font-size: 15px
  }

  pre.code {
    width: 97%;
  }

  section > ol {
    width: 90%;
  }

  section > ul {
    width: 90%;
  }

  figure {
    max-width: 90%;
  }

  figcaption,
  figure.fullwidth figcaption {
    margin-right: 0%;
    max-width: none;
  }

  blockquote {
    margin-left: 1.5em;
    margin-right: 0em;
  }

  blockquote p,
  blockquote footer {
    width: 100%;
  }

  label.margin-toggle:not(.sidenote-number) {
    display: inline;
  }

  label {
    cursor: pointer;
  }

  div.table-wrapper,
  table {
    width: 85%;
  }

  img {
    width: 100%;
  }
}
`
const customeStyles = () => `
.home__subtittle_projects{
  text-align: center;
  padding-top: 2em;
}
.project-cards__container {
  padding-bottom: 4em;
}

.project-cards__text_wrapper > p {
  font-size: 1.2rem;
}
.more_details___link {
  font-size: 1.2em;
}
.gallery__row{
  margin-bottom: 2em;
}
.gallery__row__column{
  padding-left: 1em;
  padding-right: 1em;
}

@media (max-width: 760px) {
  .gallery__row{
    margin-bottom: 0;
  }
  .gallery__row__column{
    margin-bottom: 1em;
  }
  .project-cards__text_wrapper > p {
    font-size: 1em;
  }
  .more_details___link {
    margin-bottom: 1em;
  }
  .more_details___wrapper {
    margin-top: -2em;
  }
}
`
export const GlobalStyle = createGlobalStyle`
${reset()}
${styles()}
${customeStyles()}
`
