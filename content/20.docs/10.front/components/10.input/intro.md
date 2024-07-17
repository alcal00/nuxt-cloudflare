# intro

Components to handle user input.

Here are the common behaviours/props.



## prop label

If a label is given, the input component is enclosed in a `UFormGroup` :


```html
<UFormGroup name="name" label="Name" description="Will appear on receipts, invoices, and other communication."
    required class="grid grid-cols-2 gap-2 items-center" :ui="{ container: '' }">
    <UInput v-model="state.name" autocomplete="off" icon="i-heroicons-user" size="md" />
</UFormGroup>
```


::tabs
  ::div
  ---
  label: Code
  icon: i-heroicons-code-bracket-square
  ---
  ```html
  <ppw-input label="Name" description="Your first name" />
  ```
  ::

  ::div
  ---
  label: Preview
  icon: i-heroicons-magnifying-glass-circle
  ---
  <ppw-input label="Name" description="Your first name" />
  ::
::


If `label` prop is ommited, the input is not enclosed:


::tabs
  ::div
  ---
  label: Code
  icon: i-heroicons-code-bracket-square
  ---
  ```html
  <ppw-input description="Your first name" />
  ```
  ::

  ::div
  ---
  label: Preview
  icon: i-heroicons-magnifying-glass-circle
  ---
  <ppw-input description="Your first name" />
  ::
::

# prop required


::tabs
  ::div
  ---
  label: Code
  icon: i-heroicons-code-bracket-square
  ---
  ```html
  <ppw-input label="Name" required />
  ```
  ::

  ::div
  ---
  label: Preview
  icon: i-heroicons-magnifying-glass-circle
  ---
  <ppw-input label="Name" required />
  ::
::

## TODO:

* doc prop name
* doc prop description
* doc prop placeholder
* responsive behaviour on small screen
