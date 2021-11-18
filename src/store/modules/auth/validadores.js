import { isEmail } from 'validator';

const initFormErrors = (errors) => {
  let existeErro = false;

  // adiciona os erros existentes à formErrors
  const formErrors = errors.reduce((ac, e) => {
    existeErro = true;
    return { ...ac, ...e };
  }, {});
  return existeErro ? formErrors : undefined;
};

const validaNome = (nome) => {
  const errors = [];
  if (!nome) {
    errors.push('Nome deve ser enviado');
  } else if (nome.length < 3 || nome.length > 255) {
    errors.push('Nome deve ter entre 3 e 255 caracteres');
  }

  if (errors.length > 0) {
    return { nome: errors };
  }
  return null;
};

const validaSobrenome = (sobrenome) => {
  const errors = [];
  if (!sobrenome) {
    errors.push('Sobrenome deve ser enviado');
  } else if (sobrenome.length < 3 || sobrenome.length > 255) {
    errors.push('Sobrenome deve ter entre 3 e 255 caracteres');
  }

  if (errors.length > 0) {
    return { sobrenome: errors };
  }
  return null;
};

const validaEmail = (email) => {
  const errors = [];
  if (!email) {
    errors.push('E-mail deve ser enviado');
  } else if (!isEmail(email)) {
    errors.push('E-mail inválido');
  }

  if (errors.length > 0) {
    return { email: errors };
  }
  return null;
};

const validaPassword = (password) => {
  const errors = [];
  if (!password) {
    errors.push('Senha deve ser enviada');
  } else if (password.length < 3 || password.length > 255) {
    errors.push('Senha deve ter entre 6 e 50 caracteres');
  }

  if (errors.length > 0) {
    return { password: errors };
  }
  return null;
};

export function validaRegister(campos) {
  // gera os erros
  const formErrors = initFormErrors([
    validaNome(campos.nome),
    validaSobrenome(campos.sobrenome),
    validaEmail(campos.email),
    validaPassword(campos.password),
  ]);

  return { errors: formErrors };
}

export function validaLogin(campos) {
  const formErrors = initFormErrors([
    validaEmail(campos.email),
    validaPassword(campos.password),
  ]);

  return { errors: formErrors };
}
