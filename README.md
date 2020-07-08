# React FitText TypeScript

[FitText.js](https://github.com/davatron5000/FitText.js) as a React v16+ component, and now in TypScript!

If you want to make specific text fit within a container, and then maintain that ratio across screen sizes, this component is for you.

FitText is a particularly useful approach for:

-   Predetermined content (ie. not user generated or dynamic)
-   Text that fits within a container until it hits a minimum or maximum font size, and then reflows normally from there
-   Multi-line text that fits

## Differences from the existing React FitText

This component is written specifically for React v16 and up, includes tests, and uses state to avoid DOM manipulation.

The existing [React FitText component by @gianu](https://github.com/gianu/react-fittext) should still work with current versions of React, and is stateless, but manipulates the DOM directly to change font sizes.

The approach I’m using feels more React-appropriate, at least to me. I use this component regularly enough that it made sense for me to maintain my own version regardless.

## Installation

```sh
yarn add @hoonsubin/react-fittext
```

or

```sh
npm install --save @hoonsubin/react-fittext
```

## Example

```ts
import FitText from '@hoonsubin/react-fittext';
```

```tsx
<FitText compressor={0.5}>The quick brown fox jumps over the lazy dog.</FitText>
```

With multiple children:

```tsx
<FitText compressor={0.5}>
    <>
        <h2>Pangram</h2>
        <p>The quick brown fox jumps over the lazy dog</p>
    </>
</FitText>
```

## Props

### `compressor`

From the original FitText.js documentation:

> If your text is resizing poorly, you'll want to turn tweak up/down “The Compressor.” It works a little like a guitar amp. The default is `1`.
> —[davatron5000](https://github.com/davatron5000/FitText.js)

```tsx
<FitText compressor={3}>The quick brown fox jumps over the lazy dog.</FitText>
```

```tsx
<FitText compressor={1}>The quick brown fox jumps over the lazy dog.</FitText>
```

```tsx
<FitText compressor={0.3}>The quick brown fox jumps over the lazy dog.</FitText>
```

### `minFontSize` and `maxFontSize`

```tsx
<FitText compressor={0.5} minFontSize={24} maxFontSize={96}>
    The quick brown fox jumps over the lazy dog.
</FitText>
```

### `debounce`

Change the included debounce resize timeout. How long should React FitText wait before recalculating the `fontSize`?

```tsx
<FitText debounce={3000} compressor={0.5}>
    The very slow brown fox
</FitText>
```

The default is `100` milliseconds.

### `defaultFontSize`

React FitText needs the viewport size to determine the size the type, but you might want to provide an explicit fallback when using server-side rendering with React.

```tsx
<FitText defaultFontSize={100} compressor={0.5}>
    The quick brown fox
</FitText>
```

The default is `inherit`, so typically you will already have a resonable fallback without using this prop, using CSS only. For example:

```css
.headline {
    font-size: 6.25rem;
}
```

```tsx
<div className="headline">
    <FitText compressor={0.5}>The quick brown fox</FitText>
</div>
```

## `vertical`

Add the `vertical` prop to scale vertically, rather than horizontally (the default).

```tsx
<div style={{ height: '75vh' }}>
    <FitText vertical compressor={1.25}>
        <ul>
            <li>Waterfront</li>
            <li>Vancouver City Centre</li>
            <li>Yaletown–Roundhouse</li>
            <li>Olympic Village</li>
            <li>Broadway–City Hall</li>
            <li>King Edward</li>
            <li>Oakridge–41st Avenue</li>
            <li>Langara–49th Avenue</li>
            <li>Marine Drive</li>
        </ul>
    </FitText>
</div>
```

## `parent`

Use a different parent, other than the immediate `parentNode`, to calculate the vertical height.

```tsx
<div id="js-example">
    <AnotherThing>
        <FitText vertical parent="js-example">
            {dynamicChildren}
        </FitText>
    </AnotherThing>
</div>
```

```tsx
<div>
    <div style={{ height: '1000px' }} ref={(el) => (this.parentNode = el)}>
        <h1>A contrived example!</h1>
    </div>
    <FitText vertical parent={this.parentNode}>
        {dynamicChildren}
    </FitText>
</div>
```

## Running the project

To run the Storybook [stories](http://react-fittext.kennethormandy.com) on your local machine:

```sh
git clone https://github.com/hoonsubin/react-fittext
cd react-fittext

# Install dependencies
yarn

# Run the project through Storybook
yarn storybook
```

## Credits

-   The original [FitText.js](https://github.com/davatron5000/FitText.js) by [@davatron5000](https://github.com/davatron5000/FitText.js)
-   [react-fittext](https://github.com/gianu/react-fittext) by [@gianu](https://github.com/gianu)
-   React v16+ component implementation by [@kennethormandy](https://github.com/kennethormandy/react-fittext)

## License

[Apache License v2.0 (Apache-2.0)](LICENSE.md)

Copyright © 2014 [Sergio Rafael Gianazza](https://github.com/gianu/react-fittext/blob/master/LICENSE)<br />
Copyright © 2017–2019 [Kenneth Ormandy Inc.](https://kennethormandy.com)<br />
Copyright © 2020 [Hoon Kim](https://github.com/hoonsubin/react-fittext)
