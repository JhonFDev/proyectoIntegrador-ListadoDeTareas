// import React from 'react'

import { FormControl, FormLabel, Input, Text } from "@chakra-ui/react"

function Register() {
  return (
    <FormControl>
      <Text> Registro de Usuario</Text>
      <FormLabel> Correo </FormLabel>
      <Input type="email" />
      <FormLabel> Contraseña </FormLabel>
      <Input type="password" />
      <FormLabel> Confirmar Contraseña </FormLabel>
      <Input type="password" />
    </FormControl>
  )
}

export default Register