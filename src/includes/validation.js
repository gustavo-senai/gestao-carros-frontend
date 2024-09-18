import { Form as VeeForm, Field as VeeField, defineRule, configure } from 'vee-validate'
import {
  required,
  digits,
  length,
  min_value,
  alpha
} from '@vee-validate/rules'

export default {
  install(app) {
    app.component('VeeForm', VeeForm)
    app.component('VeeField', VeeField)

    defineRule('required', required)
    defineRule('digits', digits)
    defineRule('length', length)
    defineRule('min_value', min_value)
    defineRule('alpha', alpha)

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `O campo ${ctx.field} é obrigatório`,
          digits: `O campo ${ctx.field} deve conter exatamente 7 dígitos`,
          length: `O campo ${ctx.field} deve conter exatamente 7 digitos`,
          min_value: `Valor abaixo do esperado`,
          alpha: `O campo ${ctx.field} só permite valores alfabéticos`,
        }
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `O campo ${ctx.field} é inválido`

        return message
      },
      validateOnBlur: true,
      validateOnChange: true,
      validateOnInput: false,
      validateOnModelUpdate: true
    })
  }
}
