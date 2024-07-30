MSAL Authentication Example

This project demonstrates how to implement authentication in a web application using the Microsoft Authentication Library (MSAL). It includes examples for sign-in, sign-up, and handling authentication through both popup and redirection methods.

Table of Contents:
1. Prerequisites
2. Installation
3. Configuration
4. Usage
   - Popup Authentication
   - Redirect Authentication
5. Running the Project
6. Contributing
7. License

1. Prerequisites
   - Node.js and npm installed
   - A Microsoft Azure account
   - A registered application in the Azure portal

2. Installation
   1. Clone the repository:
      git clone https://github.com/yourusername/msal-authentication-example.git
      cd msal-authentication-example

   2. Install the dependencies:
      npm install

3. Configuration
   1. Register your application in the Azure portal and obtain the following:
      - Application (client) ID
      - Directory (tenant) ID
      - Client secret (for server-side apps)

   2. Configure the MSAL client:
      Create a `.env` file in the root directory of the project and add the following variables:
      REACT_APP_CLIENT_ID=your-client-id
      REACT_APP_AUTHORITY=https://login.microsoftonline.com/your-tenant-id
      REACT_APP_REDIRECT_URI=http://localhost:3000
      Replace `your-client-id` and `your-tenant-id` with the values from your Azure app registration.

4. Usage
   Popup Authentication:
   - Initialize MSAL in your application:
     import { PublicClientApplication } from '@azure/msal-browser';
     const msalConfig = {
       auth: {
         clientId: process.env.REACT_APP_CLIENT_ID,
         authority: process.env.REACT_APP_AUTHORITY,
         redirectUri: process.env.REACT_APP_REDIRECT_URI,
       },
     };
     const msalInstance = new PublicClientApplication(msalConfig);

   - Implement sign-in with popup:
     const loginPopup = async () => {
       try {
         const response = await msalInstance.loginPopup({
           scopes: ['User.Read'],
         });
         console.log('Logged in!', response);
       } catch (error) {
         console.error('Login failed', error);
       }
     };

   - Call `loginPopup` when needed:
     <button onClick={loginPopup}>Sign In</button>

   Redirect Authentication:
   - Initialize MSAL as shown above.

   - Implement sign-in with redirect:
     const loginRedirect = async () => {
       try {
         await msalInstance.loginRedirect({
           scopes: ['User.Read'],
         });
       } catch (error) {
         console.error('Login failed', error);
       }
     };

   - Handle the redirect callback:
     msalInstance.handleRedirectPromise().then((response) => {
       if (response) {
         console.log('Logged in!', response);
       }
     }).catch((error) => {
       console.error('Redirect handling failed', error);
     });

   - Call `loginRedirect` when needed:
     <button onClick={loginRedirect}>Sign In with Redirect</button>

5. Running the Project
   To run the project locally:
   1. Start the development server:
      npm start

   2. Open your browser and navigate to http://localhost:3000.

6. Contributing
   If you would like to contribute to this project, please fork the repository and submit a pull request with your changes. For significant changes, please open an issue first to discuss what you would like to change.

7. License
   This project is licensed under the MIT License. See the LICENSE file for details.
