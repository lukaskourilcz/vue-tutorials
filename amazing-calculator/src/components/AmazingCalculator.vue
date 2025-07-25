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

const calculate = () => {
    try {
        display.value = eval(display.value).toString()
    } catch (error){
        display.value = 'Error'
    }
}

// computed property for dynamic class binding

const displayClass = computed(() => {
    return display.value.length > 12 ? 'small-text' : ''
})

</script>