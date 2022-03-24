<template>
  <label>
    {{ label }}
    <input
        class="text-input"
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  name: 'CustomInput',

  props: ['modelValue', 'label']
}
</script>
