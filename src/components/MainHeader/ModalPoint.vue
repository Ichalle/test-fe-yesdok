<template>
      <div class="modal-point" v-show="value">
        <div class="container">
          <p>modal...</p>
        </div>
      </div>
</template>

<script>
    export default {
        name: 'modal-point',
        props: {
            value: {
                required: true
            }
        },
            methods: {
            close() {
                this.$emit("input", !this.value);
            }            
        }
    };
</script>


<style lang="css" scoped>
    .modal {
        background-color: rgba(0, 0, 0, 0.7);
    }
</style>