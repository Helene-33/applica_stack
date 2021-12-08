function Title({ title, subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </div>
  )
}
export default function Headline({title, subtitle}) {
	return (
    <div>
      <Title 
        title={title}
        subtitle={subtitle}
      />
    </div>
	);
}
/* Headline.js by Group 3 Inc.

In this file:

* We export a Headline component, which statically displays strings from the App state.

* Headline is made up of a nested component called Title. The title component receives two strings as arguments, which are passed along as props within the Headline component.

* The Title component returns static html containing the values it receives as arguments.

- ML, 12/8/2021

*/