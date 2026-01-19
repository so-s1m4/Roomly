// ОДНА буква = ОДНО право
export enum Perm {
  // Games
  GAME_VIEW    = 'a',
  GAME_CREATE  = 'b',
  GAME_EDIT    = 'c',
  GAME_DELETE  = 'd',

  // Clients
  CLIENT_VIEW   = 'e',
  CLIENT_CREATE = 'f',
  CLIENT_EDIT   = 'g',
  CLIENT_DELETE = 'h',

  // Sessions
  SESSION_VIEW   = 'i',
  SESSION_CREATE = 'j',
  SESSION_EDIT   = 'k',
  SESSION_DELETE = 'l',

  // Users
  USER_VIEW   = 'm',
  USER_CREATE = 'n',
  USER_EDIT   = 'o',
  USER_DELETE = 'p',

  // Roles
  ROLES_VIEW = 'q',
  ROLES_EDIT = 'r',

  // Settings
  SETTINGS_VIEW = 's',
  SETTINGS_EDIT = 't',

  // Branches
  BRANCHES_VIEW = 'u',
  BRANCHES_CREATE = 'v',
  BRANCHES_EDIT = 'w',
  BRANCHES_DELETE = 'x',


  SUPERADMIN = 'z'
}


const join = (...perms: Perm[]) => perms.join('');

export const ROLE = {
  OPERATOR: join(
    Perm.GAME_VIEW,
    Perm.CLIENT_VIEW, Perm.CLIENT_CREATE,
    Perm.SESSION_VIEW, Perm.SESSION_CREATE, Perm.SESSION_EDIT,
    Perm.USER_VIEW
  ),

  ADMIN: join(
    Perm.GAME_VIEW, Perm.GAME_CREATE, Perm.GAME_EDIT, Perm.GAME_DELETE,
    Perm.CLIENT_VIEW, Perm.CLIENT_CREATE, Perm.CLIENT_EDIT, Perm.CLIENT_DELETE,
    Perm.SESSION_VIEW, Perm.SESSION_CREATE, Perm.SESSION_EDIT, Perm.SESSION_DELETE,
    Perm.USER_VIEW, Perm.USER_CREATE, Perm.USER_EDIT,
    Perm.ROLES_VIEW, Perm.ROLES_EDIT,
    Perm.SETTINGS_VIEW, Perm.SETTINGS_EDIT,
    Perm.BRANCHES_VIEW, Perm.BRANCHES_CREATE, Perm.BRANCHES_EDIT, Perm.BRANCHES_DELETE
  ),

  // супер-админ = все права (генерим автоматически)
  SUPERADMIN: Object.values(Perm).join(''),
} as const;
