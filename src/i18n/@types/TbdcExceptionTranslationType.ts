export type TbdcExceptionTranslationType = {
  exceptions: {
    entityNotFound: string;
    unsupportedMediaType: string;
    validation: string;
    invalidToken: string;
    internalServerError: string;
    invalidCredentials: string;
    invalidRefreshToken: string;
    noAuthorizationHeader: string;
  };
};
