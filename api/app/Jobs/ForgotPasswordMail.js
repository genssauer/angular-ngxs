'use strict'

const Mail = use('Mail')

class ForgotPasswordMail {
  static get concurrency () {
    return 1
  }

  static get key () {
    return 'ForgotPasswordMail-job'
  }

  async handle ({ email, redirectUrl, user }) {
    console.log(`Job: ${ForgotPasswordMail.key}`)
    await Mail.send(['emails.forgot_password'], {
      email,
      token: user.token,
      link: `${redirectUrl}?token=${user.token}`
    }, message => {
      message
        .to(user.email)
        .from('forgotpassword@ecommerce.com.br', 'Ecommerce')
        .subject('Recuperação de senha')
    })
  }
}

module.exports = ForgotPasswordMail
