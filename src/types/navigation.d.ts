export type RootStackParamList = {
  Welcome: undefined;
  SignUp: undefined;
  Login: undefined;
  Home: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
} 