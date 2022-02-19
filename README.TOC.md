# Tutorial: Enable your React single-page application to sign-in users and call APIs with the Microsoft identity platform

![npm](https://img.shields.io/npm/v/@azure/msal-browser?label=msal-browser)
![npm](https://img.shields.io/npm/v/@azure/msal-react?label=msal-react)

The [Microsoft identity platform](https://docs.microsoft.com/azure/active-directory/develop/v2-overview), along with [Azure Active Directory](https://docs.microsoft.com/azure/active-directory/fundamentals/active-directory-whatis) (Azure AD) and [Azure Azure Active Directory B2C](https://docs.microsoft.com/azure/active-directory-b2c/overview) (Azure AD B2C) are central to the **Azure** cloud ecosystem. This tutorial aims to take you through the fundamentals of modern authentication with React, using the [Microsoft Authentication Library for React](https://github.com/AzureAD/microsoft-authentication-library-for-js/tree/dev/lib/msal-react) (MSAL React).

We recommend following the chapters in successive order. However, the code samples are self-contained, so feel free to pick samples by topics that you may need at the moment.


> :information_source: Samples in this tutorial use functional React components. If you want to use MSAL React with class-based React components, see: [Docs: Class Components](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/docs/class-components.md)

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Visual Studio Code](https://code.visualstudio.com/download)
- A modern web browser (to use [popup experience](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/initialization.md#choosing-an-interaction-type) during sign-in and token acquisition, your browser should allow popups.)

Please refer to each sample's README for sample-specific prerequisites.

## Recommendations

- [jwt.ms](https://jwt.ms) for inspecting your tokens
- [Fiddler](https://www.telerik.com/fiddler) for monitoring your network activity and troubleshooting
- Check [MSAL.js FAQ](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/FAQ.md) and [MSAL React FAQ](https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-react/FAQ.md) for your questions
- Follow the [Azure AD Blog](https://techcommunity.microsoft.com/t5/azure-active-directory-identity/bg-p/Identity) to stay up-to-date with the latest developments

Please refer to each sample's README for sample-specific recommendations.

## Contents

- For **Azure AD**, start the tutorial from [here](https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/1-Authentication/1-sign-in/README-incremental.md)
- For **Azure AD B2C**, start the tutorial from [here](https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/1-Authentication/2-sign-in-b2c/README-incremental.md)

Alternatively, choose below the sample you want to review.

### Chapter 1: Sign-in a user to your application

|               |               |
|---------------|---------------|
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/1-Authentication/1-sign-in/ReadmeFiles/topology.png" width="200"> | [**Sign-in with Azure AD**](https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/1-Authentication/1-sign-in/README.md) </br> Sign-in your users with the **Azure AD** and learn to work with **ID Tokens**. Learn how **single sign-on (SSO)** works. Learn to secure your apps to operate in **national clouds**.|
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/1-Authentication/2-sign-in-b2c/ReadmeFiles/topology.png" width="200"> | [**Sign-in with Azure AD B2C**](https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/1-Authentication/2-sign-in-b2c/README.md) </br> Sign-in your customers with **Azure AD B2C**. Learn to integrate with **external social identity providers**. Learn how to use **user-flows** and **custom policies**. |

### Chapter 2: Sign-in a user and get an Access Token for Microsoft Graph

|                |               |
|----------------|---------------|
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/2-Authorization-I/1-call-graph/ReadmeFiles/topology.png" width="200"> | <mark>**Updated:**</mark> [**Get an Access Token from Azure AD and call Microsoft Graph**](https://github.com/IvanFarkas/msal-react-spa) <!-- (https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/2-Authorization-I/1-call-graph/README.md) --> </br> Authenticate your users and acquire an **Access Token** for Microsoft Graph and then call the **Microsoft Graph API**. |

### Chapter 3: Protect an API and call the API from your client app

|                 |               |
|-----------------|---------------|
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/3-Authorization-II/1-call-api/ReadmeFiles/topology.png" width="200"> | <mark>**Updated:**</mark> [**Protect and call a web API on Azure AD**](https://github.com/IvanFarkas/msal-react-call-api) <!-- (https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/3-Authorization-II/1-call-api/README.md) --> </br> Protect your web API with the **Azure AD**. Use a client application to sign-in a user, acquire an **Access Token** for your web API and call your protected web API. |
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/3-Authorization-II/2-call-api-b2c/ReadmeFiles/topology.png" width="200"> | [**Protect and call a web API on Azure AD B2C**](https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/3-Authorization-II/2-call-api-b2c/README.md) </br> Protect your web API with **Azure AD B2C**. Use a client application to sign-in a user, acquire an **Access Token** for your web API and call your protected web API. |

### Chapter 4: Deploy your application to Azure

|                 |               |
|-----------------|---------------|
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/4-Deployment/1-deploy-storage/ReadmeFiles/topology.png" width="280"> | [**Deploy to Azure Storage and App Service**](https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/4-Deployment/1-deploy-storage/README.md) </br> Prepare your SPA for deployment to Azure storage and your API to App Service. Learn how to package and upload your files. Learn how to configure authentication parameters and use **Azure** services for managing your operations. |
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/4-Deployment/2-deploy-static/ReadmeFiles/topology.png" width="280"> | [**Deploy to Azure Static Web Apps**](https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/4-Deployment/2-deploy-static/README.md) </br> Prepare your app for deployment to Azure Static Web Apps. Learn how to protect and call an **Azure Function** API. Learn how to configure authentication parameters and use **Azure** services for managing your operations. |

### Chapter 5: Control access to your protected API using App Roles and Security Groups

|                 |               |
|-----------------|---------------|
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/5-AccessControl/1-call-api-roles/ReadmeFiles/topology.png" width="200"> | <mark>**Updated:**</mark> [**Use App Roles for access control**](https://github.com/IvanFarkas/msal-react-call-api-roles) <!-- (https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/5-AccessControl/1-call-api-roles/README.md) --> </br> Define App Roles and use roles claim in a token to implement Role-based Access Control (RBAC) for your SPA and protected web API. |
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/5-AccessControl/2-call-api-groups/ReadmeFiles/topology.png" width="200"> | <mark>**Updated:**</mark> [**Use Security Groups for access control**](https://github.com/IvanFarkas/msal-react-call-api-groups) <!-- (https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/5-AccessControl/2-call-api-groups/README.md) --> </br> Create Security Groups and use groups claim in a token to implement Role-based Access Control (RBAC) for your SPA and protected web API. Handle overage scenarios.  |

### Chapter 6: Dive into advanced scenarios

|                 |               |
|-----------------|---------------|
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/6-AdvancedScenarios/1-call-api-obo/ReadmeFiles/topology.png" width="200"> | <mark>**Updated:**</mark> [**Call a web API that calls Microsoft Graph on behalf of a user**](https://github.com/IvanFarkas/msal-react-call-api-obo) <!-- (https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/6-AdvancedScenarios/1-call-api-obo/README.md) --> </br> Enhance your protected web API to acquire an **Access Token** for Microsoft Graph **on-behalf-of** a user signed-in to the client app. Enable **Conditional Access** for your downstream API and handle **MFA** requirement. |
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/6-AdvancedScenarios/2-call-api-pop/ReadmeFiles/topology.png" width="200"> | <mark>**Updated:**</mark> [**Call a web API using Proof of Possession tokens**](https://github.com/IvanFarkas/msal-react-call-api-pop) <!-- (https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/6-AdvancedScenarios/2-call-api-pop/README.md) --> </br> Acquire proof of possession (PoP) tokens. Learn how to prevent token replay attacks with PoP authentication scheme. Learn how to validate PoP tokens.|
| <img src="https://raw.githubusercontent.com/Azure-Samples/ms-identity-javascript-react-tutorial/main/6-AdvancedScenarios/3-call-api-acrs/ReadmeFiles/topology.png" width="200"> | <mark>**Updated:**</mark> [**Use Conditional Access Authentication Context**](https://github.com/IvanFarkas/msal-react-call-api-acrs) <!-- (https://github.com/Azure-Samples/ms-identity-javascript-react-tutorial/blob/main/6-AdvancedScenarios/3-call-api-acrs/README.md) --> </br> Enable conditional access for your web API. Use auth context to implement granular access control to resources. Handle claims challenge in client applications. |

## More information

Learn more about the **Microsoft identity platform**:

- [Microsoft identity platform](https://docs.microsoft.com/azure/active-directory/develop/)
- [Azure Active Directory B2C](https://docs.microsoft.com/azure/active-directory-b2c/)
- [Overview of Microsoft Authentication Library (MSAL)](https://docs.microsoft.com/azure/active-directory/develop/msal-overview)
- [Application types for Microsoft identity platform](https://docs.microsoft.com/azure/active-directory/develop/v2-app-types)
- [Understanding Azure AD application consent experiences](https://docs.microsoft.com/azure/active-directory/develop/application-consent-experience)
- [Understand user and admin consent](https://docs.microsoft.com/azure/active-directory/develop/howto-convert-app-to-be-multi-tenant#understand-user-and-admin-consent)
- [Application and service principal objects in Azure Active Directory](https://docs.microsoft.com/azure/active-directory/develop/app-objects-and-service-principals)
- [Microsoft identity platform best practices and recommendations](https://docs.microsoft.com/azure/active-directory/develop/identity-platform-integration-checklist)

See more code samples:

- [MSAL code samples](https://docs.microsoft.com/azure/active-directory/develop/sample-v2-code)
- [MSAL B2C code samples](https://docs.microsoft.com/azure/active-directory-b2c/code-samples)
