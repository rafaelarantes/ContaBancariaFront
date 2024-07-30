export type TranslationsType = {
    [key: string]: {
      [key: string]: string
    }
  };

export const TRANSLATIONS : TranslationsType = {
    en_US: {
        TITLE_BANK_ACCOUNT: "Bank Account",

        HOME_CHOOSE_OPTIONS: "Choose",
        HOME_OPTION_CENTRAL_BANK: "Central Bank",
        HOME_OPTION_BANK: "Bank",
        HOME_OPTION_ACCOUNT: "Account",
    
        REQUIRED: "Required",
    
        SHARED_INPUT_EMAIL: "Email",
        SHARED_INPUT_EMAIL_INVALID_EMAIL: "Invalid email",
        SHARED_INPUT_EMAIL_PLACEHOLDER_EMAIL: "name@email.com",
        SHARED_INPUT_EMAIL_LABEL_EMAIL: "Email",
    
        SHARED_INPUT_PASSWORD: "Password",
    
        SHARED_INPUT_SEARCH_PLACEHOLDER: "Search...",
    
        AUTHENTICATION_LOGIN_SIGN_IN : "Sign in",
    
        CENTRAL_BANK_TITLE: "Central Bank",
        CENTRAL_BANK_LISTING_NAME: "Name",
        CENTRAL_BANK_LISTING_BRANCH: "Branch"
    },
    pt_BR: {
        TITLE_BANK_ACCOUNT: "Conta Bancária",
        
        HOME_CHOOSE_OPTIONS: "Acesse",
        HOME_OPTION_CENTRAL_BANK: "Banco Central",
        HOME_OPTION_BANK: "Banco",
        HOME_OPTION_ACCOUNT: "Conta",
    
        REQUIRED: "Obrigatório",

        SHARED_INPUT_EMAIL: "E-mail",
        SHARED_INPUT_EMAIL_INVALID_EMAIL: "E-mail inválido",
        SHARED_INPUT_EMAIL_PLACEHOLDER_EMAIL: "nome@email.com",
        SHARED_INPUT_EMAIL_LABEL_EMAIL: "E-mail",

        SHARED_INPUT_PASSWORD: "Senha",

        SHARED_INPUT_SEARCH_PLACEHOLDER: "Procurar...",

        AUTHENTICATION_LOGIN_SIGN_IN : "Entrar",

        CENTRAL_BANK_TITLE: "Banco Central",
        CENTRAL_BANK_LISTING_NAME: "Nome",
        CENTRAL_BANK_LISTING_BRANCH: "Agência"
    }
  };