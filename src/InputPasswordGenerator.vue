<template>
  <input @click="showPopup" class="input" type="text" v-model="password">
</template>

<script>
import swal from 'sweetalert2'
export default {
  name: 'FormPasswordGenerator',

  data(){
    return{
      password: ''
    }
  },
  props: {
    menuTitle: {
      type: String,
      default: "Generate password"
    },
    confirmText: {
      type: String,
      default: "Generate"
    },
    cancelText: {
      type: String,
      default: "Cancel"
    },
    numDigits: {
      type: Number,
      default: 2
    },
    numUppercase: {
      type: Number,
      default: 2
    },
    numLowercase: {
      type: Number,
      default: 4
    },
    numSpecial: {
      type: Number,
      default: 1
    }
  },
  methods: {
    showPopup(){
      if (!this.password) {
        swal.fire({
          title: this.menuTitle,
          showCancelButton: true,
          cancelButtonText: this.cancelText,
          confirmButtonText: this.confirmText,
          showLoaderOnConfirm: true,
          preConfirm: () => {
            this.generatePassword()
          }
        })
      }
    },
    generatePassword() {
      const digits = '0123456789'
      const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      const lowercase = 'abcdefghijklmnopqrstuvwxyz'
      const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-='
      let password = ''
      for (let i = 0; i < this.numDigits; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length)
        const randomChar = digits.charAt(randomIndex)
        password += randomChar
      }
      for (let i = 0; i < this.numUppercase; i++) {
        const randomIndex = Math.floor(Math.random() * uppercase.length)
        const randomChar = uppercase.charAt(randomIndex)
        password += randomChar
      } 
      for (let i = 0; i < this.numLowercase; i++) {
        const randomIndex = Math.floor(Math.random() * lowercase.length)
        const randomChar = lowercase.charAt(randomIndex)
        password += randomChar
      }
      for (let i = 0; i < this.numSpecialChars; i++) {
        const randomIndex = Math.floor(Math.random() * specialChars.length)
        const randomChar = specialChars.charAt(randomIndex)
        password += randomChar
      }
      password = password.split('').sort(() => Math.random() - 0.5).join('')

      this.password = password
    }
  }
}
</script>
