import { LogLevel } from '@azure/msal-browser';

// https://docs.microsoft.com/en-us/azure/active-directory/develop/tutorial-v2-react
// The Application (client) ID of the application you registered. the ONLY mandatory field that need to be supplied.
const appId = process.env.REACT_APP_APP_ID; // Application (client) ID

// The Azure cloud instance in which your application is registered. Defaults to "https://login.microsoftonline.com"
// For the main (or global) Azure cloud: https://login.microsoftonline.com
const cloudInstanceId = process.env.REACT_APP_CLOUD_INSTANCE_ID; // Cloud_Instance_Id

// If your application supports accounts in any organizational directory and personal Microsoft accounts: common. Defaults to "common"
const tenantId = process.env.REACT_APP_TENANT_ID; // Tenant_Id

const authority = `${cloudInstanceId}${tenantId ? "/" : ""}${tenantId}`;

// You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
const redirectUri = process.env.REACT_APP_REDIRECT_URI; // Redirect_Uri

// APP ID URI of the web API project that you've registered e.g. api://xxxxxx/access_as_user
const webApiScope = process.env.REACT_APP_WEB_API_SCOPE; // Web_Api_Scope

// The instance of the Microsoft Graph API the application should communicate with.
// For the global Microsoft Graph API endpoint: https://graph.microsoft.com. 
const graphMeEndpoint = process.env.REACT_APP_GRAPH_ME_ENDPOINT; // Graph_Endpoint_1.0

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
  auth: {
    clientId: appId,
    authority: authority,
    redirectUri: redirectUri,
    postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;

          case LogLevel.Info:
            console.info(message);
            return;

          case LogLevel.Verbose:
            console.debug(message);
            return;

          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
  apiTodoList: {
    todoListEndpoint: 'http://localhost:5000/api/todolist',
    dashboardEndpoint: 'http://localhost:5000/api/dashboard',
    scopes: [webApiScope],
  },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: [...protectedResources.apiTodoList.scopes],
};

export const appRoles = {
  TaskUser: 'TaskUser',
  TaskAdmin: 'TaskAdmin',
};
