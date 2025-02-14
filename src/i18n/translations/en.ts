import type { TbdcExceptionTranslationType } from '../@types';

const translations: TbdcExceptionTranslationType = {
  exceptions: {
    entityNotFound: '{{entityName}} not found ({{identityType}}: {{identityNumber}})',
    unsupportedMediaType: 'The type {{mediaType}} is invalid for this request',
    validation: 'Fields are not valid: [{{fields}}]',
    invalidToken: 'Invalid token',
    internalServerError: 'Internal Server Error',
    invalidCredentials: 'Invalid credentials',
    invalidRefreshToken: 'Invalid refresh token',
    noAuthorizationHeader: 'No authorization header',
  },
};

export default translations;
