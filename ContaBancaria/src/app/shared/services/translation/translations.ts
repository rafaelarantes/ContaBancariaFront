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

        SHARED_INPUT_NAME_PLACEHOLDER_NAME: 'Name',
        SHARED_INPUT_NAME_LABEL_NAME: 'Name',
    
        SHARED_INPUT_PASSWORD: "Password",
    
        SHARED_INPUT_SEARCH_PLACEHOLDER: "Search...",

        SHARED_LISTING_ADD_LABEL: 'New',

        SHARED_TABLE_OPTIONS: 'Options',

        SHARED_TABLE_PAGINATOR_COUNT_PER_PAGE: 'Count per page',
        SHARED_TABLE_PAGINATOR_FIRST_PAGE: 'First page',
        SHARED_TABLE_PAGINATOR_LAST_PAGE: 'Last page',
        SHARED_TABLE_PAGINATOR_NEXT_PAGE: 'Next page',
        SHARED_TABLE_PAGINATOR_PREVIOUS_PAGE: 'Previous page',
        SHARED_TABLE_PAGINATOR_OF: 'of',
    
        AUTHENTICATION_LOGIN_SIGN_IN : "Sign in",
    
        CENTRAL_BANK_TITLE: "Central Bank",
        CENTRAL_BANK_LISTING_NAME: "Name",
        CENTRAL_BANK_LISTING_BRANCH: "Branch",
        CENTRAL_BANK_NEW_TITLE: "Central Bank - New"
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

        SHARED_INPUT_NAME_PLACEHOLDER_NAME: 'Nome',
        SHARED_INPUT_NAME_LABEL_NAME: 'Nome',

        SHARED_INPUT_PASSWORD: "Senha",

        SHARED_INPUT_SEARCH_PLACEHOLDER: "Procurar...",

        SHARED_LISTING_ADD_LABEL: 'Novo',

        SHARED_TABLE_OPTIONS: 'Opções',

        SHARED_TABLE_PAGINATOR_COUNT_PER_PAGE: 'Qtd. por página:',
        SHARED_TABLE_PAGINATOR_FIRST_PAGE: 'Primeira página',
        SHARED_TABLE_PAGINATOR_LAST_PAGE: 'Última página',
        SHARED_TABLE_PAGINATOR_NEXT_PAGE: 'Próxima página',
        SHARED_TABLE_PAGINATOR_PREVIOUS_PAGE: 'Página anterior',
        SHARED_TABLE_PAGINATOR_OF: 'de',

        AUTHENTICATION_LOGIN_SIGN_IN : "Entrar",

        CENTRAL_BANK_TITLE: "Banco Central",
        CENTRAL_BANK_LISTING_NAME: "Nome",
        CENTRAL_BANK_LISTING_BRANCH: "Agência",
        CENTRAL_BANK_NEW_TITLE: "Banco Central - Novo"
    }
  };