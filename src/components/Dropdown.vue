<template>
    <div>
        <span>{{ label }}</span>
        <div class="select">
            <select id="standard-select" v-model="selectedOption">
                <option
                  v-for="(option, index) in options"
                  :key="index" :value="option.value"
                >
                {{ option.label }}
                </option>
            </select>
            <span class="focus"></span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'Product',
  computed: {
    selectedOption: {
      get() {
        return this.selected;
      },
      set(val) {
        this.$emit('update:selected', val);
      },
    },
  },
  props: {
    label: {
      required: false,
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: String,
      default: '',
    },
  },
};
</script>
<style scoped lang="scss">
select {
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: inherit;
    cursor: inherit;
    line-height: inherit;

    // Stack above custom arrow
    z-index: 1;

    // Remove dropdown arrow in IE10 & IE11
    // @link https://www.filamentgroup.com/lab/select-css.html
    &::-ms-expand {
        display: none;
    }

    // Remove focus outline, will add on alternate element
    outline: none;
}

.select {
  display: grid;
  grid-template-areas: "select";
  align-items: center;
  position: relative;

  select,
  &::after {
      grid-area: select;
  }

  min-width: 15ch;
  max-width: 30ch;

  border: 1px solid var(--select-border);
  border-radius: 0.25em;
  padding: 0.25em 0.5em;

  font-size: 1.25rem;
  cursor: pointer;
  line-height: 1.1;

  // Optional styles
  // remove for transparency
  background-color: #fff;
  background-image: linear-gradient(to top, #f9f9f9, #fff 33%);

  // Custom arrow
  &:not(.select--multiple)::after {
    content: "";
    justify-self: end;
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
}

// Interim solution until :focus-within has better support
select:focus + .focus {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 2px solid var(--select-focus);
  border-radius: inherit;
}
</style>
