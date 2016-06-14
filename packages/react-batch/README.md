# react-batch

Exports [boxart](https://github.com/boxart/boxart)'s Batch and BatchFactory. If using more of boxart use boxart-batch instead. Tools for building html games with React.

## usage

`<Batch>` and `<BatchFactory>` make optimization assumptions on passed item arrays so that element creation and re-renders are reduced. If the items passed compared with the last props are through a shallow compare unchanged the underlying react virtual element isn't recreated (saving some time, object creation and garbage collection) and the object won't be re-rendered (saving further time, object creation, and garbage collection).

Their use is to replace mapping an array of data to React elements.

```js
{items.map(item => <ItemComponent item={item} />)}
```

### Batch

Mapping an array is replaced with a Batch component, taking the properties `items`, `itemKey`, `children` and `component`.

- `items` is simply the array whose rendering it is helping to optimize.
- `itemKey` is a required handle to produce a key to represent a member of the items array.
- `children` is our handler for creating components for members of the items array.
- `component` specifies the tag wrapping the rendered items. It defaults to `'div'`.

```js
<Batch items={items} itemKey={item => item.key}>{(
  item => <ItemComponent item={item} />
)}</Batch>
```

`children` in most React uses are a set of deeper React elements. Instead Batch like react-intl uses the property to produce the representations of members of the items array. This handle is called for each member of items when Batch is first created and everytime a member changes. Batch does not rebuild the rendered elements if `children` changes, so its best to not pass a different function to the same batch.

`itemKey` is required to help make the best of `Batch`. Without `itemKey` Batch's implementation would have to recreate every element after any removed elements. With `itemKey` it can instead reuse the non-removed elements as they as stored by that key.

#### Immutability

Since items is expected to be treated immutably, `children` is only passed the item member of an array. It doesn't get the index or the containing array like `.map()` does. It is best to put all the relevant data for rendering the returned component from Batch's handler into the item in the array to start. This best avoids plenty of possible bugs and ensures the code understanbly re-renders when that item changes.

### BatchFactory

BatchFactory furthers the oppurtunity for optimization over large arrays. With a large array BatchFactory breaks it down into smaller arrays. When rendering changes the produced virtual dom lets React skip the sections of the array that did not change. If you had an array of 100 items and one changed BatchFactory has React diff 23 BatchItem elements instead of 100 BatchItem elements with Batch. (Batch and BatchFactory wrap each element in an internal BatchItem component returned by the children handler, these provide a simple shallow compare so that elements returned by children do not need a shouldComponentUpdate method.)

BatchFactory takes an extra property to Batch, 'batchMax'. All together it takes: `item`, `itemKey`, `batchMax`, `children`, and `component`.

- `items` is simply the array whose rendering it is helping to optimize.
- `itemKey` is a required handle to produce a key to represent a member of the items array.
- `batchMax` is the number of items in the batches BatchFactory produces. It defaults to 16.
- `children` is our handler for creating components for members of the items array.
- `component` specifies the tag wrapping the rendered items. It defaults to `'div'`.

```js
<BatchFactory items={arrayOfItems} itemKey={item => item.key}>{(
  batchItems => <Batch items={batchItems} itemKey={item => item.key}>{(
    item => <ItemComponent item={item} />
  )}</Batch>
)}</BatchFactory>
```

Tuning `batchMax` can further improve optimization with BatchFactory. A good batchMax is relative to the expected size of the items array it'll be given. A larger array may be best subdivided into larger arrays for less macro diffing and more micro diffing. A smaller array may be best subdivided into smaller arrays for more macro diffing and less micro diffing.
