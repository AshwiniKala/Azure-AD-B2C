/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */         
export const b2cPolicies = {

  names: {
      signUpSignIn: "B2C_1A_SIGNUP_SIGNIN",
      editProfile: "B2C_1A_PASSWORD_CHANGE"
  },
  authorities: {
      signUpSignIn: {
          authority: "https://azuread.b2clogin.com/azuread.onmicrosoft.com/B2C_1A_SIGNUP_SIGNIN",
          navigateToLoginRequestUrl: true
      },
      accountOwner: {
          authority: "https://azuread.b2clogin.com/azuread.onmicrosoft.com/B2C_1A_SIGNUP_SIGNIN_ACCOUNT_OWNER",
          navigateToLoginRequestUrl: true
      },
      passwordChange: {
          authority: "https://azuread.b2clogin.com/azuread.onmicrosoft.com/B2C_1A_PASSWORD_CHANGE"
      },
      acceptInvitation: {            
          authority: "https://azuread.b2clogin.com/azuread.onmicrosoft.com/B2C_1A_SIGNUP_SIGNIN_INVITATION_ACCEPTANCE",
          navigateToLoginRequestUrl: true
      },        
      selectCompany: {            
          authority: "https://azuread.b2clogin.com/azuread.onmicrosoft.com/B2C_1A_SELECT_COMPANY",
          navigateToLoginRequestUrl: true
      }, 
      singleCompany: {            
          authority: "https://azuread.b2clogin.com/azuread.onmicrosoft.com/B2C_1A_SIGNIN_SPECIFIC_COMPANY",
          navigateToLoginRequestUrl: true
      }
  },
  authorityDomain: "azuread.b2clogin.com"
}
