<script setup>
import {ref, computed} from 'vue'

const display = ref('0')

const appendToDisplay = (value) => {
    if(display.value === '0' && value !== '.'){
        display.value = value
    } else {
        display.value += value;
    }
}

</script>